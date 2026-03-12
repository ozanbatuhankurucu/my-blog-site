---
title: "Clean Code in Frontend Development: Principles, Patterns, and Practical React Examples"
date: "2026-03-12"
img: "/images/clean-code-frontend.webp"
category: "ReactJS"
description: "A deep dive into Clean Code principles applied to frontend development. Learn how to write readable, maintainable, and scalable React applications through practical examples covering component design, custom hooks, type safety, error handling, and architectural patterns that teams actually use in production."
---

Every frontend codebase starts clean. The first component is elegant, the folder structure is tidy, and the abstractions feel just right. Then the product grows. New engineers join. Deadlines compress. Six months later, you're staring at a 400-line component that fetches data, manages three pieces of local state, handles form validation, and renders a modal — all in one file.

This is not a failure of skill. It is a failure of discipline, and Clean Code is the discipline that prevents it.

This article is not a rehash of Robert C. Martin's *Clean Code* mapped onto JSX. Instead, it is a practical guide to the patterns, boundaries, and trade-offs that keep large frontend codebases healthy — written specifically for engineers building with React and TypeScript.

## Why Clean Code Matters More in the Frontend

Backend services have a natural forcing function for modularity: APIs have contracts, databases have schemas, and services have boundaries. The frontend has none of that by default. A React component can do *anything* — fetch data, manage state, handle routing side effects, render UI, and orchestrate animations — all in one function. This flexibility is React's greatest strength and greatest liability.

Clean Code in the frontend is ultimately about **managing complexity at the UI layer**, where:

- **Requirements change constantly.** A "simple card component" becomes a card with expandable sections, inline editing, drag-and-drop reordering, and skeleton loading states.
- **Many engineers touch the same surfaces.** A shared `Button` component might be imported in 200 places. A careless change ripples everywhere.
- **The user experience is the product.** Sloppy code leads to sloppy UX — inconsistent spacing, broken focus management, janky transitions.

Clean Code is not about aesthetics. It is about **reducing the cost of change**.

## Principle 1: Components Should Do One Thing Well

The Single Responsibility Principle is the most cited and most violated principle in React codebases. A component that fetches data, transforms it, manages UI state, and renders markup has four reasons to change. When any one of those concerns evolves, you risk breaking the others.

**Before — a component doing too much:**

```tsx
const UserDashboard = () => {
  const [user, setUser] = useState<User | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"posts" | "settings">("posts");

  useEffect(() => {
    const load = async () => {
      try {
        const [userData, postData] = await Promise.all([
          fetchUser(),
          fetchPosts(),
        ]);
        setUser(userData);
        setPosts(postData);
      } catch (e) {
        setError("Failed to load dashboard");
      } finally {
        setIsLoading(false);
      }
    };
    load();
  }, []);

  if (isLoading) return <Spinner />;
  if (error) return <ErrorBanner message={error} />;
  if (!user) return null;

  return (
    <div>
      <header>
        <h1>{user.name}</h1>
        <p>{user.email}</p>
      </header>
      <nav>
        <button onClick={() => setActiveTab("posts")}>Posts</button>
        <button onClick={() => setActiveTab("settings")}>Settings</button>
      </nav>
      {activeTab === "posts" ? (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body.slice(0, 120)}...</p>
              <span>{new Date(post.createdAt).toLocaleDateString()}</span>
            </li>
          ))}
        </ul>
      ) : (
        <SettingsForm user={user} />
      )}
    </div>
  );
};
```

This is readable for a single developer on day one. But consider what happens when you need to add pagination to posts, or swap the data layer from REST to GraphQL, or add a third tab. Every change touches this one file.

**After — separated concerns:**

```tsx
const UserDashboard = () => {
  const { user, posts, isLoading, error } = useDashboardData();
  const [activeTab, setActiveTab] = useState<"posts" | "settings">("posts");

  if (isLoading) return <Spinner />;
  if (error) return <ErrorBanner message={error} />;
  if (!user) return null;

  return (
    <div>
      <UserHeader user={user} />
      <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      {activeTab === "posts" ? (
        <PostList posts={posts} />
      ) : (
        <SettingsForm user={user} />
      )}
    </div>
  );
};
```

The `UserDashboard` now reads like a table of contents. Data fetching lives in `useDashboardData`. Presentation lives in `UserHeader`, `PostList`, and `SettingsForm`. Navigation logic is isolated in `TabNavigation`. Each piece can be tested, modified, and reused independently.

## Principle 2: Name Things for the Reader, Not the Writer

Naming is the most underrated aspect of clean frontend code. A well-named component, hook, or variable eliminates the need for comments and makes code reviews faster.

**Weak names that force you to read the implementation:**

```tsx
const data = useQuery("stuff");
const handleClick = () => { /* ... */ };
const flag = user.role === "admin";
const Comp = ({ items }: Props) => { /* ... */ };
```

**Strong names that convey intent:**

```tsx
const { data: analyticsReport } = useAnalyticsReport(dateRange);
const handleInvoiceDownload = () => { /* ... */ };
const canAccessAdminPanel = user.role === "admin";
const TransactionHistoryTable = ({ transactions }: Props) => { /* ... */ };
```

A few naming heuristics that hold up well in practice:

- **Boolean variables** should read as yes/no questions: `isLoading`, `hasPermission`, `canEdit`, `shouldRedirect`.
- **Event handlers** should describe the action, not the trigger: `handleInvoiceDownload` over `handleClick`, `handleFilterReset` over `handleButtonPress`.
- **Custom hooks** should describe what they provide: `useAuthStatus`, `usePaginatedProducts`, `useDebounce`.
- **Components** should describe what they render: `InvoiceLineItemRow`, `EmptySearchResults`, `CollapsibleSidebar`.

## Principle 3: Custom Hooks Are Your Primary Abstraction Tool

In React, custom hooks are the cleanest way to extract and share stateful logic. They are composable, testable, and framework-native. When you find a component accumulating logic that is not directly about rendering, a custom hook is almost always the right extraction.

**Extracting data fetching into a hook:**

```tsx
function useDashboardData() {
  const [user, setUser] = useState<User | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const load = async () => {
      try {
        const [userData, postData] = await Promise.all([
          fetchUser({ signal: controller.signal }),
          fetchPosts({ signal: controller.signal }),
        ]);
        setUser(userData);
        setPosts(postData);
      } catch (e) {
        if (!controller.signal.aborted) {
          setError("Failed to load dashboard");
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    };

    load();
    return () => controller.abort();
  }, []);

  return { user, posts, isLoading, error };
}
```

The `AbortController` serves two purposes here: it cancels in-flight network requests when the component unmounts, and it prevents state updates after cleanup. This is the modern replacement for the `let cancelled = false` boolean pattern you may have seen in older codebases — `AbortController` works with the `fetch` API natively and gives you actual request cancellation, not just ignored responses.

In practice, if your application uses a server-state library like **React Query** or **SWR**, you rarely need to write this kind of hook by hand. These libraries handle request cancellation, caching, deduplication, and stale-while-revalidate strategies out of the box. The manual approach above is still worth understanding — it teaches the underlying mechanics — but reach for a dedicated library when your data-fetching needs grow beyond a single endpoint.

**Extracting reusable behavior:**

```tsx
function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}
```

```tsx
const [theme, setTheme] = useLocalStorage("theme", "dark");
const [sidebarOpen, setSidebarOpen] = useLocalStorage("sidebar", true);
```

### Behavior Hooks vs. Feature Hooks

Not all custom hooks are the same, and recognizing the distinction helps you decide where they should live in your codebase.

**Behavior hooks** encapsulate a generic, reusable pattern that is independent of any specific business domain. `useDebounce`, `useLocalStorage`, `useMediaQuery`, and `useOnClickOutside` are behavior hooks. They belong in a shared `hooks/` directory or a dedicated utility library — any team or feature can import them.

**Feature hooks** encapsulate logic that is specific to a particular feature or domain. `useDashboardData`, `useInvoiceFilters`, and `useCheckoutFlow` are feature hooks. They combine behavior hooks, API calls, and domain-specific transformations into a cohesive unit. These hooks should be co-located with the feature they serve — inside the feature's folder, not in a shared `hooks/` directory.

The rule of thumb: **if you can describe the hook without mentioning a business concept, it is a behavior hook and belongs in shared code. If the hook's name references a domain entity, it is a feature hook and belongs with that feature.**

## Principle 4: Type Your Boundaries, Not Your Internals

TypeScript is most valuable at the boundaries of your system — component props, API responses, shared utility signatures, and context values. Over-typing local implementation details adds noise without meaningfully improving safety.

**Over-typed — every local variable annotated:**

```tsx
const UserCard = ({ user }: UserCardProps) => {
  const fullName: string = `${user.firstName} ${user.lastName}`;
  const initials: string = fullName
    .split(" ")
    .map((n: string) => n[0])
    .join("");
  const isActive: boolean = user.status === "active";

  return (
    <div>
      <Avatar initials={initials} />
      <span>{fullName}</span>
      {isActive && <Badge label="Active" />}
    </div>
  );
};
```

**Right-typed — boundaries are strict, internals are inferred:**

```tsx
interface UserCardProps {
  user: User;
}

const UserCard = ({ user }: UserCardProps) => {
  const fullName = `${user.firstName} ${user.lastName}`;
  const initials = fullName.split(" ").map((n) => n[0]).join("");
  const isActive = user.status === "active";

  return (
    <div>
      <Avatar initials={initials} />
      <span>{fullName}</span>
      {isActive && <Badge label="Active" />}
    </div>
  );
};
```

TypeScript's inference handles local variables perfectly. Your energy is better spent on prop interfaces, API response types, and the contracts between modules — the places where a type mismatch causes real bugs.

**Type your API layer strictly:**

```tsx
interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
}

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  inStock: boolean;
}

async function fetchProducts(
  page: number,
  pageSize: number
): Promise<PaginatedResponse<Product>> {
  const res = await fetch(`/api/products?page=${page}&pageSize=${pageSize}`);
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}
```

When the API contract changes, TypeScript will surface every affected call site. That is worth far more than annotating `const count: number = 0`.

## Principle 5: Flatten Conditional Rendering

Deeply nested ternaries are one of the most common readability killers in JSX. When a component needs to render different states (loading, error, empty, success), flatten the logic with early returns.

**Hard to follow — nested ternaries:**

```tsx
return (
  <div>
    {isLoading ? (
      <Spinner />
    ) : error ? (
      <ErrorBanner message={error} />
    ) : data.length === 0 ? (
      <EmptyState />
    ) : (
      <DataTable rows={data} />
    )}
  </div>
);
```

**Clear — early returns:**

```tsx
if (isLoading) return <Spinner />;
if (error) return <ErrorBanner message={error} />;
if (data.length === 0) return <EmptyState />;

return <DataTable rows={data} />;
```

Early returns make the component's behavior scannable from top to bottom. Each state is handled explicitly, and you never have to mentally parse nested branches.

## Principle 6: Co-locate What Changes Together

A common instinct is to organize code by technical role: all hooks in a `hooks/` folder, all types in a `types/` folder, all utilities in a `utils/` folder. This works at small scale but creates friction as the codebase grows, because a single feature change requires edits across many directories.

**Organized by technical role (fragile at scale):**

```
src/
  components/
    InvoiceTable.tsx
    InvoiceRow.tsx
    InvoiceFilters.tsx
  hooks/
    useInvoices.ts
  types/
    invoice.ts
  utils/
    formatCurrency.ts
```

**Co-located by feature (scales better):**

```
src/
  features/
    invoices/
      InvoiceTable.tsx
      InvoiceRow.tsx
      InvoiceFilters.tsx
      useInvoices.ts
      invoice.types.ts
      formatCurrency.ts
      index.ts
```

The `index.ts` barrel file exports only the public API of the feature. Internal details stay private. When someone needs to modify invoice behavior, everything is in one place. When the feature is deleted, one folder goes away cleanly.

This does not mean you should never have shared `hooks/` or `utils/` directories. Truly cross-cutting concerns — `useDebounce`, `formatDate`, `cn` (classname merge utility) — belong in shared modules. The test is simple: **if it only serves one feature, co-locate it with that feature**.

## Principle 7: Treat Error Handling as a First-Class Concern

Error handling in frontend code is often an afterthought — a single `catch` block that logs to the console or shows a generic toast. Clean frontend code handles errors deliberately at every layer.

**Component-level error boundaries:**

```tsx
import { Component, type ReactNode, type ErrorInfo } from "react";

interface Props {
  children: ReactNode;
  fallback: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    reportErrorToService(error, info);
  }

  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}
```

```tsx
<ErrorBoundary fallback={<p>Something went wrong in the chart.</p>}>
  <RevenueChart data={revenueData} />
</ErrorBoundary>
```

Wrap error boundaries around **sections** of your UI, not the entire app. If the revenue chart crashes, the rest of the dashboard should keep working.

**Typed error handling in data layers:**

```tsx
type Result<T> =
  | { status: "success"; data: T }
  | { status: "error"; error: string };

async function fetchUser(id: string): Promise<Result<User>> {
  try {
    const res = await fetch(`/api/users/${id}`);
    if (!res.ok) return { status: "error", error: `HTTP ${res.status}` };
    const data = await res.json();
    return { status: "success", data };
  } catch {
    return { status: "error", error: "Network request failed" };
  }
}
```

This pattern forces the consumer to handle both cases. You cannot accidentally ignore an error because the type system requires you to check `status` before accessing `data`.

Worth noting: in most React applications, **server-state libraries like React Query or SWR** already manage loading, error, and success states through their return values (`isLoading`, `isError`, `data`, `error`). The `Result<T>` pattern is most useful in lower-level utility functions, SDK wrappers, or scenarios where you are not using a data-fetching library — for example, form submissions, file uploads, or non-HTTP async operations. The principle remains the same regardless of the tool: make error states impossible to ignore.

## Principle 8: Keep Side Effects at the Edges

Side effects — API calls, analytics events, localStorage reads, DOM mutations — should live at the edges of your component tree, not scattered throughout. Components deep in the tree should be pure: given the same props, they render the same output.

**Scattered side effects (hard to trace):**

```tsx
const ProductCard = ({ product }: Props) => {
  useEffect(() => {
    trackImpression(product.id); // analytics buried in a leaf node
  }, [product.id]);

  const handleAddToCart = () => {
    addToCart(product);
    trackEvent("add_to_cart", { productId: product.id });
    toast.success("Added to cart");
  };

  return (
    <div>
      <h3>{product.name}</h3>
      <p>{formatCurrency(product.price)}</p>
      <button onClick={handleAddToCart}>Add to cart</button>
    </div>
  );
};
```

**Elevated side effects (easier to reason about):**

```tsx
const ProductCard = ({ product, onAddToCart }: Props) => (
  <div>
    <h3>{product.name}</h3>
    <p>{formatCurrency(product.price)}</p>
    <button onClick={() => onAddToCart(product)}>Add to cart</button>
  </div>
);
```

```tsx
const ProductGrid = ({ products }: Props) => {
  const handleAddToCart = (product: Product) => {
    addToCart(product);
    trackEvent("add_to_cart", { productId: product.id });
    toast.success("Added to cart");
  };

  return (
    <div>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onAddToCart={handleAddToCart} />
      ))}
    </div>
  );
};
```

The `ProductCard` is now a pure presentation component. It is trivially testable, reusable in different contexts (e.g., a "recently viewed" section where adding to cart is not available), and does not produce unexpected side effects.

## Principle 9: State Management Boundaries

One of the most consequential architectural decisions in a React application is where state lives. Clean Code requires clear boundaries between different categories of state — and the discipline to keep each category in its appropriate scope.

**Local state** belongs to a single component. A modal's open/closed status, a form field's current value, a dropdown's expanded state — these should remain in `useState` inside the component that owns them. Lifting them higher "just in case" pollutes parent components with concerns they should not manage.

**Shared UI state** is state that coordinates across a few related components: the active tab in a dashboard, the selected row in a table-detail layout. This state should live in the nearest common ancestor or in a tightly scoped context.

**Server state** — data fetched from APIs — has its own lifecycle: loading, caching, revalidation, background refresh. Libraries like React Query and SWR exist specifically because server state does not behave like UI state and should not be managed with the same tools.

**Global application state** (current user, theme, feature flags, locale) is the narrowest category and should be treated that way. Context or a lightweight store is appropriate here, but the bar for putting something in global state should be high.

The most common mistake is **reaching for global state too early**. When a piece of state could live in a component, a custom hook, or a feature-scoped context, putting it in a global store adds indirection and coupling for no benefit. A useful heuristic:

```
Component state → Shared parent state → Feature context → Global store
```

Start at the left. Move right only when the current scope is genuinely insufficient.

**A practical example — feature-scoped context:**

```tsx
interface InvoiceFilterState {
  status: "all" | "paid" | "pending" | "overdue";
  dateRange: [Date, Date] | null;
  searchQuery: string;
}

const InvoiceFilterContext = createContext<{
  filters: InvoiceFilterState;
  setFilters: Dispatch<SetStateAction<InvoiceFilterState>>;
} | null>(null);

const InvoiceFilterProvider = ({ children }: { children: ReactNode }) => {
  const [filters, setFilters] = useState<InvoiceFilterState>({
    status: "all",
    dateRange: null,
    searchQuery: "",
  });

  return (
    <InvoiceFilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </InvoiceFilterContext.Provider>
  );
};
```

This context wraps only the invoices feature. The rest of the application has no access to it and no reason to re-render when it changes. That boundary is the point.

## Principle 10: Performance and Rendering Discipline

Performance optimization in React is often approached as an afterthought — sprinkle `React.memo` and `useMemo` everywhere once the app feels slow. Clean Code takes a more disciplined approach: understand the rendering model, avoid common pitfalls by default, and optimize surgically when measurements justify it.

**Understand what triggers a re-render.** A component re-renders when its state changes, when its parent re-renders, or when a context it consumes changes. This is not inherently expensive — React's reconciliation is fast. The problems arise when re-renders cascade needlessly through large subtrees or when expensive computations run on every render.

**Avoid creating new references on every render when they are passed as props:**

```tsx
const ProductGrid = ({ products }: Props) => {
  return (
    <div>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={() => addToCart(product.id)}
          style={{ marginBottom: 16 }}
        />
      ))}
    </div>
  );
};
```

If `ProductCard` is wrapped in `React.memo`, these inline references defeat the memoization entirely. The fix is straightforward:

```tsx
const cardStyle = { marginBottom: 16 };

const ProductGrid = ({ products }: Props) => {
  const handleAddToCart = useCallback((productId: string) => {
    addToCart(productId);
  }, []);

  return (
    <div>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={handleAddToCart}
          style={cardStyle}
        />
      ))}
    </div>
  );
};
```

**But do not memoize blindly.** `React.memo`, `useMemo`, and `useCallback` are not free — they consume memory, add cognitive overhead, and can mask deeper structural issues. Apply them when:

- A component renders frequently and its subtree is expensive.
- Profiling (with React DevTools) confirms the re-render is a bottleneck.
- The memoized value is passed as a dependency to other hooks or memoized children.

If a component is cheap to render, wrapping it in `React.memo` adds complexity without meaningful benefit. **Measure first, then optimize.**

**Lazy loading for route-level code splitting** is one optimization that should be applied by default, not reactively:

```tsx
import { lazy, Suspense } from "react";

const InvoiceDashboard = lazy(() => import("./features/invoices/InvoiceDashboard"));
const SettingsPage = lazy(() => import("./features/settings/SettingsPage"));

const App = () => (
  <Suspense fallback={<PageSkeleton />}>
    <Routes>
      <Route path="/invoices" element={<InvoiceDashboard />} />
      <Route path="/settings" element={<SettingsPage />} />
    </Routes>
  </Suspense>
);
```

This ensures that users only download the code they need for the page they are visiting. Unlike memoization, lazy loading has virtually no downside and should be a standard practice for any application with multiple routes.

## Principle 11: Avoid Premature Abstraction

The DRY principle is often misapplied in frontend code. Two components that look similar today may diverge tomorrow. Prematurely merging them into one "flexible" component with a growing set of props and conditionals creates what is sometimes called the **wrong abstraction** — a component that is harder to work with than the duplication it aimed to prevent.

This risk is amplified in UI code specifically. Product requirements change frequently — a stakeholder asks for a different layout on one page, a new interaction pattern on another, a redesigned flow for mobile. When two components share an abstraction and one of them needs to diverge, you face an unpleasant choice: add yet another prop to the shared component, or rip the abstraction apart. Both are more expensive than the duplication would have been.

**A cautionary example:**

```tsx
interface CardProps {
  variant: "user" | "product" | "order";
  title: string;
  subtitle?: string;
  image?: string;
  badge?: string;
  actions?: ReactNode;
  onClick?: () => void;
  isCompact?: boolean;
  showBorder?: boolean;
  headerSlot?: ReactNode;
  footerSlot?: ReactNode;
}
```

This component tries to serve three different domains through a single interface. Every time one variant needs a new behavior, you add another prop and another conditional branch. The component becomes a maintenance burden that nobody wants to touch.

**A better approach — favor composition:**

```tsx
const Card = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div className={cn("rounded-lg border bg-white p-4 shadow-sm", className)}>
    {children}
  </div>
);

const UserCard = ({ user }: { user: User }) => (
  <Card>
    <Avatar src={user.avatar} />
    <h3>{user.name}</h3>
    <p>{user.role}</p>
  </Card>
);

const ProductCard = ({ product }: { product: Product }) => (
  <Card>
    <img src={product.image} alt={product.name} />
    <h3>{product.name}</h3>
    <span>{formatCurrency(product.price)}</span>
  </Card>
);
```

The `Card` provides shared styling. `UserCard` and `ProductCard` own their domain-specific rendering. If `ProductCard` needs a "sale" badge tomorrow, you add it without affecting `UserCard`. The abstraction boundary is in the right place.

**The rule of thumb:** duplicate until you find the true shared pattern. Two is a coincidence. Three is a pattern.

## Principle 12: Write Tests That Describe Behavior, Not Implementation

Clean tests are as important as clean production code. Tests that assert implementation details — which hooks were called, how many times a component re-rendered, the internal state shape — break with every refactor and provide little confidence.

**Implementation-coupled test (fragile):**

```tsx
it("calls setCount when button is clicked", () => {
  const setState = jest.fn();
  jest.spyOn(React, "useState").mockReturnValue([0, setState]);
  render(<Counter />);
  fireEvent.click(screen.getByText("Increment"));
  expect(setState).toHaveBeenCalledWith(1);
});
```

**Behavior-driven test (resilient):**

```tsx
import userEvent from "@testing-library/user-event";

it("increments the displayed count when the user clicks the button", async () => {
  const user = userEvent.setup();
  render(<Counter />);
  expect(screen.getByText("Count: 0")).toBeInTheDocument();

  await user.click(screen.getByRole("button", { name: "Increment" }));
  expect(screen.getByText("Count: 1")).toBeInTheDocument();
});
```

The second test uses `userEvent` rather than `fireEvent`. This is a deliberate choice: `userEvent` simulates real browser interactions (including focus, pointer, and keyboard events in the correct order), while `fireEvent` dispatches synthetic events directly. The result is tests that more accurately reflect how users interact with your application. Beyond the API choice, the test describes what the user sees and does. It survives a refactor from `useState` to `useReducer`, from a local counter to a context-provided counter, or from a button to a keyboard shortcut. It tests the contract, not the wiring.

## Frontend Code Smells

Code smells are not bugs — they are structural patterns that signal deeper problems. Learning to recognize them quickly makes code reviews more productive and prevents small issues from compounding into architectural debt.

**The God Component.** A component that exceeds 200–300 lines is almost certainly doing too much. If you find yourself scrolling to understand what a component does, it needs to be decomposed.

**Boolean prop explosions.** When a component accumulates props like `isCompact`, `showBorder`, `hideHeader`, `isInline`, and `withShadow`, it is trying to serve too many contexts through conditional branches. This is a sign that you need separate components or a composition-based approach.

**Prop drilling beyond two levels.** When the same prop is passed from a grandparent through a parent to a child unchanged, it is a signal that the state lives too far from where it is consumed. Context or component composition (passing children) is a cleaner solution.

**`useEffect` as a state synchronization tool.** An effect that watches one piece of state and sets another piece of state is usually a derived value that should be computed inline or with `useMemo`, not synchronized through an effect cycle.

```tsx
// Smell: effect-based state sync
const [items, setItems] = useState<Item[]>([]);
const [total, setTotal] = useState(0);

useEffect(() => {
  setTotal(items.reduce((sum, item) => sum + item.price, 0));
}, [items]);

// Clean: derived value
const [items, setItems] = useState<Item[]>([]);
const total = items.reduce((sum, item) => sum + item.price, 0);
```

**Catch-all utility files.** A `utils.ts` that grows past 200 lines and contains unrelated functions — `formatDate`, `debounce`, `parseQueryString`, `calculateTax` — is a dumping ground. Break it into focused modules: `date.utils.ts`, `url.utils.ts`, `pricing.utils.ts`.

**Copy-pasted components with slight variations.** If two components share 80% of their structure with small differences, they are candidates for extraction — but only if the shared pattern is stable. If the components are still evolving independently, tolerate the duplication until a clear abstraction emerges.

**Inconsistent naming conventions.** When some components use `handleX` and others use `onX` for event handlers, when some hooks return arrays and others return objects for no clear reason, when some files use `camelCase` and others use `PascalCase` for non-components — these inconsistencies erode trust in the codebase. Establish conventions early and enforce them with linting rules.

## Putting It All Together: A Feature Checklist

When building or reviewing a feature, these questions can serve as a practical checklist:

- **Responsibility:** Does each component have a single, clear purpose?
- **Naming:** Can a new team member understand what this does from the name alone?
- **Hooks:** Is stateful logic extracted into custom hooks? Are behavior hooks separated from feature hooks?
- **Types:** Are the boundaries (props, API responses, context) strictly typed?
- **Conditionals:** Are rendering branches flat and scannable?
- **Co-location:** Is everything related to this feature in one place?
- **Errors:** Are failure states handled explicitly at every layer?
- **Side effects:** Are side effects pushed to the edges?
- **State boundaries:** Is each piece of state at the narrowest scope that works?
- **Rendering:** Are unnecessary re-renders avoided without over-memoizing?
- **Abstraction:** Is this abstraction earned, or premature?
- **Tests:** Do the tests describe user-facing behavior using realistic interactions?
- **Code smells:** Are there any God Components, boolean prop explosions, or effect-based state sync?

## Conclusion

Clean Code in frontend development is not about following a set of rules mechanically. It is about making intentional choices that reduce the cost of understanding and changing code over time. In a React codebase, this means keeping components focused, naming things with precision, extracting behavior into hooks, typing your boundaries, and resisting the urge to abstract too early.

The best frontend codebases are not the ones with the cleverest abstractions. They are the ones where any engineer on the team can open a file, understand what it does in 30 seconds, make a change confidently, and move on. That is what Clean Code buys you — not perfection, but **sustainable velocity**.
