import { Metadata } from 'next'
import Image from 'next/image'
import { LuTwitter, LuGithub, LuLinkedin, LuMail } from 'react-icons/lu'
import { IconType } from 'react-icons'
import { Tag } from '../../components/Tag'
import { TimelineItem } from '../../components/types'
import { SOCIAL_LINKS, TECH_STACK, AI_TOOLS, SITE_CONFIG, SocialPlatform } from '../../lib/constants'

export const metadata: Metadata = {
	title: `${SITE_CONFIG.name} - About`,
	description: `Frontend engineer at ${SITE_CONFIG.company}, building modern web applications with React, TypeScript, and Next.js`
}

// Map platform names to icons
const platformIcons: Record<SocialPlatform, IconType> = {
	twitter: LuTwitter,
	github: LuGithub,
	linkedin: LuLinkedin,
	email: LuMail,
}

const timeline: TimelineItem[] = [
	{
		year: '2022 - Present',
		title: 'Front-end Engineer (Remote)',
		company: 'ArenaAI',
		location: 'New York, United States',
		description: 'I work as a frontend engineer on Atlas, focusing on building scalable UI architectures and data-intensive dashboards used in production. My role involves building reliable frontend systems as complexity grows, and working closely with AI engineers and product teams to align frontend capabilities with evolving system requirements.',
		current: true,
	},
	{
		year: '2024',
		title: 'Bangkok Business Trip',
		company: 'ArenaAI',
		description: 'Collaborated in person with colleagues from the New York office, strengthening professional relationships and working on CPG analytics and geospatial mapping projects.',
		milestone: true,
	},
	{
		year: '2021 - 2022',
		title: 'Mobile Application Developer',
		company: 'OBSS',
		location: 'Istanbul, Türkiye',
		description: 'Developed mobile applications during an 8-month tenure, gaining experience in mobile development practices and cross-platform solutions.',
	},
	{
		year: '2020 - 2021',
		title: 'Front-end Developer (Part-time)',
		company: 'PurpleBox, Inc.',
		location: 'Atlanta, Georgia, United States',
		description: 'Worked part-time as a front-end developer for over a year, building web interfaces and gaining foundational experience in modern frontend technologies.',
	},
	{
		year: '2017 - 2021',
		title: 'B.Sc. Computer Engineering',
		company: 'Ege University',
		location: 'Izmir, Türkiye',
		description: 'Graduated with a GPA of 3.05/4.00. Studied core computer science fundamentals including data structures, algorithms, software engineering, and web development.',
		education: true,
	},
]

function SectionHeader({ children }: { children: React.ReactNode }) {
	return (
		<h2 className="font-mono text-sm font-medium text-text-muted uppercase tracking-wider mb-6">
			{children}
		</h2>
	)
}

export default function AboutMe() {
	return (
		<div className="container py-16 md:py-24">
			{/* Hero section with photo */}
			<header className="mb-20">
				<div className="flex flex-col md:flex-row md:items-start gap-8">
					{/* Photo */}
					<div className="flex-shrink-0">
						<div className="w-32 h-32 md:w-40 md:h-40 rounded-lg overflow-hidden border border-border-subtle">
							<Image
								src="/images/wat_arun.png"
								alt={SITE_CONFIG.name}
								width={160}
								height={160}
								className="w-full h-full object-cover"
							/>
						</div>
					</div>

					{/* Info */}
					<div className="flex-1">
						<h1 className="font-mono text-3xl md:text-4xl font-medium text-text-primary mb-2">
							{SITE_CONFIG.name}
						</h1>
						<p className="font-mono text-lg text-accent mb-4">
							{SITE_CONFIG.title} @ {SITE_CONFIG.company}
						</p>
						<p className="text-text-secondary text-lg leading-relaxed max-w-xl">
							Building interactive dashboards and AI-driven interfaces for Atlas—ArenaAI's AI-powered platform that helps engineers understand and validate complex systems through clear, actionable user experiences.
						</p>
					</div>
				</div>
			</header>

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
				{/* Main content */}
				<div className="lg:col-span-2 space-y-16">
					{/* Now section */}
					<section>
						<SectionHeader>Now</SectionHeader>
						<div className="space-y-4 text-text-secondary leading-relaxed">
							<p>
								At <span className="text-text-primary">{SITE_CONFIG.company}</span>, I work on the frontend of Atlas, an AI-powered platform used to analyze, validate, and debug complex hardware and system-level behavior. I build interactive, data-intensive dashboards that help engineers explore performance data, understand failures, and turn AI-generated insights into clear, actionable decisions.
							</p>
							<p>
								I collaborate closely with AI engineers and product teams to design interfaces that make complex systems understandable and trustworthy in real-world engineering workflows. I'm also actively exploring <span className="text-text-primary">AI-assisted development</span>, using tools like ChatGPT, Claude, and Cursor to iterate faster and experiment with new frontend patterns.
							</p>
						</div>
					</section>

					{/* Philosophy section */}
					<section>
						<SectionHeader>Philosophy</SectionHeader>
						<div className="space-y-4 text-text-secondary leading-relaxed">
							<p>
								I take pride in my meticulous approach to coding and problem-solving. Collaboration
								is a core aspect of my work philosophy—I proactively engage with teammates to ensure
								seamless development processes.
							</p>
							<blockquote className="border-l-2 border-accent pl-4 my-6 italic text-text-primary">
								"Those who don't work hard today will regret it in the future."
							</blockquote>
							<p>
								I believe the world is full of beauty—it all depends on the perspective from which
								you look. I continuously strive to learn new things and seek insights from those
								more experienced than me.
							</p>
						</div>
					</section>

					{/* Timeline section */}
					<section>
						<SectionHeader>Experience & Education</SectionHeader>
						<div className="space-y-6">
							{timeline.map((item, index) => (
								<div
									key={index}
									className="relative pl-8 pb-6 border-l border-border-subtle last:pb-0"
								>
									{/* Dot */}
									<div
										className={`
                      absolute left-0 top-0 w-3 h-3 -translate-x-1/2 rounded-full
                      ${item.current ? 'bg-accent' : item.milestone ? 'bg-success' : item.education ? 'bg-warning' : 'bg-border-default'}
                    `}
									/>

									{/* Content */}
									<div className="space-y-1">
										<div className="flex items-center gap-3 flex-wrap">
											<span className="font-mono text-sm text-text-muted">{item.year}</span>
											{item.current && (
												<Tag variant="status" status="success" size="sm">Current</Tag>
											)}
											{item.education && (
												<Tag variant="status" status="warning" size="sm">Education</Tag>
											)}
										</div>
										<h3 className="font-mono text-lg text-text-primary">{item.title}</h3>
										<p className="text-accent text-sm">{item.company}</p>
										{item.location && (
											<p className="text-text-muted text-sm">{item.location}</p>
										)}
										<p className="text-text-secondary text-sm mt-2">{item.description}</p>
									</div>
								</div>
							))}
						</div>
					</section>

					{/* Photos section */}
					<section>
						<SectionHeader>Moments</SectionHeader>
						<div className="grid grid-cols-2 gap-4">
							<div className="rounded-lg overflow-hidden border border-border-subtle">
								<Image
									src="/images/bangkok_team_2024.jpg"
									alt="Team in Bangkok 2024"
									width={400}
									height={300}
									className="w-full h-48 object-cover"
								/>
							</div>
							<div className="rounded-lg overflow-hidden border border-border-subtle">
								<Image
									src="/images/bangkok_team_2_2024.jpeg"
									alt="Bangkok Trip 2024"
									width={400}
									height={300}
									className="w-full h-48 object-cover"
								/>
							</div>
						</div>
						<p className="text-text-muted text-sm mt-4">
							Bangkok 2024 — Collaborating with teammates from the New York office.
						</p>
					</section>
				</div>

				{/* Sidebar */}
				<div className="space-y-12">
					{/* Tech Stack */}
					<section>
						<SectionHeader>Stack</SectionHeader>
						<div className="flex flex-wrap gap-2">
							{TECH_STACK.map((tech) => (
								<Tag key={tech} variant="outline" size="md">
									{tech}
								</Tag>
							))}
						</div>
					</section>

					{/* AI Tools */}
					<section>
						<SectionHeader>AI Tools</SectionHeader>
						<div className="flex flex-wrap gap-2">
							{AI_TOOLS.map((tool) => (
								<Tag key={tool} variant="default" size="md">
									{tool}
								</Tag>
							))}
						</div>
					</section>

					{/* Connect */}
					<section>
						<SectionHeader>Connect</SectionHeader>
						<div className="space-y-3">
							{SOCIAL_LINKS.map(({ href, label, platform }) => {
								const Icon = platformIcons[platform]
								return (
									<a
										key={href}
										href={href}
										target="_blank"
										rel="noopener noreferrer"
										className="
                      flex items-center gap-3 text-text-secondary 
                      hover:text-text-primary transition-colors duration-fast
                      group
                    "
									>
										<Icon size={18} className="text-text-muted group-hover:text-accent transition-colors duration-fast" />
										<span className="text-sm">{label}</span>
									</a>
								)
							})}
						</div>
					</section>

					{/* Personal */}
					<section>
						<SectionHeader>Outside Work</SectionHeader>
						<p className="text-text-secondary text-sm leading-relaxed">
							Walking, playing tennis and football. With an outgoing personality,
							I find it easy to connect with people and engage in meaningful conversations.
						</p>
					</section>
				</div>
			</div>
		</div>
	)
}
