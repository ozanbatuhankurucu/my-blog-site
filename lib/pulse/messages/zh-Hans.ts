import { PULSE_APP_NAME } from '../../constants'
import type { PulseMessages } from './types'

export const zhHansMessages: PulseMessages = {
  languageLabel: '页面语言',
  video: {
    ariaLabel: `${PULSE_APP_NAME} 产品演示`,
    playLabel: '播放演示',
    unsupported: '您的浏览器不支持嵌入式视频。',
  },
  landing: {
    metaTitle: `${PULSE_APP_NAME} — 适用于 iPhone 和 Mac 的专注计时器`,
    metaDescription: `${PULSE_APP_NAME} 是一款面向 iPhone 和 Mac 的平静番茄钟计时器，提供 Focus History、Daily Focus Goals、Apple 与 Google 登录，以及跨设备的离线优先同步。`,
    heroImageAlt: `${PULSE_APP_NAME} 专注计时器与每周历史概览`,
    backToProjects: '返回项目',
    availableOnAppStore: '可在 App Store 获取',
    availabilityLine: 'iOS 17+ · macOS 14.6+',
    eyebrow: '适用于 iPhone 和 Mac 的专注计时器',
    tagline: '一款帮助你专注的温和番茄钟计时器 — 可用于 iPhone 和 Mac 菜单栏。',
    description: `开始一次专注会话，休息一下，并把历史记录随身携带。使用 Apple 或 Google 登录后，Daily Focus Goals、Focus History 以及已同步的偏好设置会随你的账户保留在 iPhone 和 Mac 上 — 同时计时器在离线时仍可运行。`,
    downloadCta: '在 App Store 下载',
    watchDemo: '观看实际演示',
    supportCta: '支持',
    stats: {
      platformLabel: '平台',
      platformValue: 'iPhone 与 Mac',
      languagesLabel: '语言',
      languagesValue: '7 种语言',
      dataLabel: '同步',
      dataValue: '离线优先',
      builtWithLabel: '技术栈',
      builtWithValue: 'SwiftUI + AppKit',
    },
    demo: {
      eyebrow: '更安静的专注方式',
      title: '需要时在身旁，不需要时就退场。',
      description: `在 Mac 上从菜单栏打开 ${PULSE_APP_NAME}，选择一次会话，然后关闭弹出窗口。在 iPhone 上从主屏幕开始专注，并在支持的设备上通过 Live Activities 继续。你工作的同时，计时器也在运行。`,
      caption:
        '专注与休息计时器、Daily Focus Goals、Focus History、连续记录、7 种语言本地化，以及可选的完成提醒。',
    },
    rhythm: {
      eyebrow: '由你掌控的节奏',
      title: '专注、暂停、恢复、重复。',
      description: `${PULSE_APP_NAME} 会建议接下来做什么，但绝不会替你开始会话。每项时长都可按当天安排调整。`,
    },
    featureShowcases: [
      {
        title: '专注',
        badge: '1–120 分钟',
        description:
          '倒计时在你工作时安静运行。暂停、重置或跳过 — 在 iPhone 和 Mac 上，控制权始终在你手中。',
        imageFile: 'focus-running.png',
        alt: `${PULSE_APP_NAME} 正在运行的专注会话，含暂停控件与倒计时`,
      },
      {
        title: '菜单栏',
        badge: 'Mac',
        description:
          '在 Mac 上可在菜单栏显示或隐藏剩余时间。固定宽度的状态项保持位置稳定，不会推移弹出窗口，最长显示至 120:00。',
        imageFile: 'menubar.png',
        alt: `${PULSE_APP_NAME} 倒计时显示在 macOS 菜单栏`,
      },
      {
        title: '自定义',
        badge: '你的规则',
        description:
          '灵活时长、Daily Focus Goals、完成音效与动画、7 种界面语言，以及外观偏好。',
        imageFile: 'settings.png',
        alt: `${PULSE_APP_NAME} 关于时长、完成提醒、语言和目标的设置`,
      },
    ],
    history: {
      eyebrow: '没有压力的进度',
      title: '看见工作的积累。',
      description:
        '打开 Focus History 查看总计与连续记录。登录后，历史可在 iPhone 与 Mac 之间同步，进度会跟随你。',
      items: ['总专注时间', '已完成会话数', '当前连续记录', '最佳连续记录', 'Daily Focus Goals'],
      imageAlt: `${PULSE_APP_NAME} 每周专注历史，含会话数、专注小时数与连续记录`,
    },
    feedback: {
      eyebrow: '温和反馈，按你的方式',
      title: '让完成更有成就感。',
      description: `可从六种平静完成音效和六种动物庆祝动画中选择，也可全部关闭。当专注、短休息或长休息会话结束时，${PULSE_APP_NAME} 会显示相应消息。`,
      items: [
        '针对会话的完成标题与副标题',
        '支持 7 种语言的界面，默认跟随系统语言',
        '每台设备上的语言与外观偏好',
        'iPhone 上可选的通知与 Live Activities',
      ],
      settingsImageAlt: `${PULSE_APP_NAME} 关于时长、语言、完成音效和目标的设置`,
      celebrationImageAlt: `${PULSE_APP_NAME} 会话完成时的兔子庆祝动画`,
      soundNames: ['Forest Birds', 'Crystal Chime', 'Gentle Marimba', 'Rain Drops', 'Soft Bell', 'Zen Gong'],
      animalNames: ['猴子', '考拉', '猫', '狐狸', '熊猫', '兔子'],
    },
    native: {
      eyebrow: '原生设计',
      title: '为在 Apple 设备上自然好用而生。',
      description: `SwiftUI、AppKit 与系统惯例让 ${PULSE_APP_NAME} 快速而熟悉 — 全程提供 VoiceOver 标签与 Reduce Motion 支持。`,
      features: [
        {
          title: 'Mac 菜单栏与 iPhone 主屏幕',
          description: 'Mac 上安静的菜单栏伴侣，以及 iPhone 上专注的主屏幕体验。',
        },
        {
          title: '保持准确',
          description:
            '会话在睡眠、唤醒与重新启动后仍保持正确，历史在实际截止时刻记录。',
        },
        {
          title: '离线优先同步',
          description:
            '没有网络也能继续专注。重新上线后，已登录的更改会同步到你的账户。',
        },
        {
          title: '说你的语言',
          description:
            '完整界面支持英语、土耳其语、德语、日语、韩语、简体中文与繁体中文，默认跟随系统语言，也可在设置中手动覆盖。',
        },
      ],
    },
    privacy: {
      eyebrow: '隐私优先设计',
      title: '你的专注只属于你。',
      description: `${PULSE_APP_NAME} 使用账户以便历史在设备间同步。我们只存储同步所需内容，从不出售你的数据，并将分析与专注历史分开。`,
      items: [
        '使用 Apple 或 Google 登录',
        '每台设备上的离线优先专注',
        '历史与已同步偏好的云同步',
        '无广告网络',
        '可随时在设置中删除账户',
      ],
    },
    closing: {
      title: '为专注工作留出空间。',
      description: `在 App Store 获取适用于 iPhone 和 Mac 的 ${PULSE_APP_NAME}；如需帮助，可阅读隐私政策与支持页面。`,
      getSupport: '获取支持',
      privacy: '隐私',
    },
  },
  support: {
    metaTitle: `${PULSE_APP_NAME} 支持`,
    metaDescription: `${PULSE_APP_NAME} 在 iPhone 和 Mac 上的支持、常见问题与账户帮助 — 包括 Pomodoro Pro、免费试用、Limited Annual 优惠、Focus Protection、登录、同步与账户删除。`,
    title: `${PULSE_APP_NAME} 支持`,
    intro: `${PULSE_APP_NAME} 是一款面向 iPhone 和 Mac 的平静番茄钟计时器。使用 Apple 或 Google 登录，即可在设备间同步 Focus History。在 iPhone 上，可选的 Pomodoro Pro 可解锁 Focus Protection、自定义标签、Tag Insights、Stopwatch Mode、Session Notes 与 Custom Breaks。`,
    gettingStarted: {
      title: '入门',
      items: [
        {
          question: '如何开始、暂停、继续或完成专注会话？',
          answer:
            '在 Mac 上，点击菜单栏中的应用图标，选择专注、短休息或长休息，然后按开始。在 iPhone 上，打开应用，选择一次会话并按开始。可从运行中的会话控件暂停与继续。倒计时结束时会话会自动完成；也可从控件停止或跳过。计时器运行时你可以离开应用。',
        },
        {
          question: '专注与休息计时器如何工作？',
          answer:
            '专注用于深度工作。短休息与长休息是休息会话。应用可在你结束后建议下一步，但绝不会替你自动开始下一次会话。打开设置可调整专注、短休息与长休息时长，或选择预设节奏并微调分钟数。',
        },
        {
          question: '标签与自定义标签如何工作？',
          answer:
            '你可以用内置标签免费标记会话。iPhone 上的 Pomodoro Pro 可解锁带有自定义名称与颜色的自定义标签。所选标签会与会话一起保存，并可与账户同步。',
        },
        {
          question: 'Daily Focus Goals 与连续记录如何工作？',
          answer:
            '在设置中设定每天想要完成的专注会话数量。进度会显示在主屏幕和 Focus History 中。登录后，连续记录会追踪连续完成专注会话的天数。',
        },
        {
          question: '如何查看效率统计与会话历史？',
          answer:
            '打开 Focus History / 摘要，查看总计、连续记录、每周进度与过往会话。Pomodoro Pro 可在 iPhone 上解锁更丰富的 Tag Insights 与额外历史筛选。',
        },
        {
          question: '如何更改语言与外观？',
          answer:
            '在设置中选择语言（系统或受支持语言）与外观（系统、浅色或深色）。这些偏好保留在各设备上，不会同步。支持的语言为英语、土耳其语、德语、日语、韩语、简体中文与繁体中文。',
        },
      ],
    },
    accounts: {
      title: '账户',
      items: [
        {
          question: '为什么需要登录？',
          answer:
            '账户可让 Focus History、Daily Focus Goals 与已同步偏好在 iPhone 和 Mac 上随你保留。新安装会在使用计时器前要求登录。从旧版本升级的设备可在你登录前继续使用本地历史。Pomodoro Pro 购买也会保留在你已登录的账户中。',
        },
        {
          question: '如何使用 Apple 或 Google 登录？',
          answer:
            '在登录屏幕选择通过 Apple 继续或通过 Google 继续，并完成提供商流程。Apple 可能会提供隐藏我的邮箱。',
        },
        {
          question: '如何退出登录？',
          answer:
            '打开设置 → 账户 → 退出登录。若部分更改尚未同步，应用可能会要求你先同步或仍退出。退出登录不会删除账户。',
        },
        {
          question: '如何重新登录？',
          answer:
            '在登录屏幕使用相同的 Apple 或 Google 方式。该账户的云历史会恢复到该设备。',
        },
        {
          question: '如果使用其他账户会怎样？',
          answer:
            '每个账户都有自己的历史。登录其他账户不会合并无关历史。在已有本地会话的设备上确认历史归属前，请仔细选择。',
        },
        {
          question: '能否将 Apple 与 Google 关联到同一账户？',
          answer:
            '可以。在设置 → 账户中，当另一种登录方式尚未被其他账户使用时，可以关联。',
        },
      ],
    },
    cloudSync: {
      title: '云同步',
      items: [
        {
          question: '设备之间同步哪些内容？',
          answer:
            '专注与休息会话历史（包括所选标签与任何会话备注）、你创建的标签、Daily Focus Goal 记录、与连续记录相关的账户数据，以及已同步偏好，例如会话时长、每日目标、音效、动画、完成音效与庆祝动物。',
        },
        {
          question: '没有网络时会怎样？',
          answer:
            '登录后，你可以继续离线使用计时器。新会话与更改会保留在设备上，直到有网络连接。',
        },
        {
          question: '重新联网后会怎样？',
          answer:
            '应用会将待处理更改同步到你的账户。同步采用离线优先并最终一致 — 并非即时实时协作。',
        },
        {
          question: '如何在 iPhone 和 Mac 上使用同一账户？',
          answer:
            '在两台设备上安装应用，并用同一 Apple 或 Google 账户登录。恢复完成后，Focus History 可在两边显示。',
        },
        {
          question: '如果历史缺失该怎么办？',
          answer:
            '确认已登录同一账户，等待恢复/同步完成，然后再次查看 Focus History。若登录了其他账户，该账户会显示其自身历史。',
        },
      ],
    },
    migration: {
      title: '从旧版本升级',
      items: [
        {
          question: '现有本地历史会怎样？',
          answer:
            '现有本地历史不会被悄悄删除。登录后，应用会在将该历史添加到账户前征求确认。',
        },
        {
          question: '应如何认领我的历史？',
          answer:
            '登录应拥有该历史的账户，查看“添加你的历史”屏幕，然后选择添加到此账户。若显示的账户不对，请使用其他账户。会话之后无法移到其他账户。',
        },
        {
          question: '如果设备与账户设置不同会怎样？',
          answer:
            '应用可能会询问是保留此设备设置还是使用账户设置。语言、外观、通知偏好与 Focus Protection 选择保留在设备本地。',
        },
      ],
    },
    notifications: {
      title: '通知与 Live Activities',
      items: [
        {
          question: '如何在 iPhone 上启用通知？',
          answer:
            '打开设置 → 通知并选择启用；若权限此前被拒绝，请打开系统设置。会话结束提醒需要通知权限。',
        },
        {
          question: 'Live Activities 如何工作？',
          answer:
            '在支持的 iPhone 上，可选的 Live Activity 可在锁定屏幕与灵动岛显示进行中的会话。可在设置中打开或关闭 Live Activities。Live Activities 不使用我们服务器的推送通知。',
        },
        {
          question: '如果通知已关闭会怎样？',
          answer:
            '没有通知权限时，会话结束提醒无法显示。请使用设置 → 通知 → 打开设置，在 iOS 设置中开启。',
        },
      ],
    },
    pomodoroPro: {
      title: 'Pomodoro Pro',
      items: [
        {
          question: '免费版与 Pomodoro Pro 有何区别？',
          answer:
            '免费版包含专注与休息计时器、内置标签、Focus History 基础功能、Daily Focus Goals、连续记录、登录与云同步。iPhone 上的 Pomodoro Pro 可解锁 Focus Protection、自定义标签、Tag Insights、Stopwatch Mode、Session Notes、Custom Breaks、编辑或删除过往会话，以及更丰富的统计筛选。',
        },
        {
          question: '有哪些购买选项？',
          answer:
            'Pomodoro Pro 提供月度订阅、年度订阅、在可用时的 Limited Annual 优惠，或 Lifetime 一次性购买。除非在当前周期结束前至少 24 小时取消，否则订阅会自动续订。Lifetime 只收费一次，不是订阅。',
        },
        {
          question: '什么是 Limited Annual 优惠？',
          answer:
            'Limited Annual 是面向此前未购买过 Pro 的符合条件用户、可能在有限时间内显示的折扣年度 Pomodoro Pro 订阅。它解锁与常规年度计划相同的 Pro 权益。可用性有时间限制，且并非保证适用于每个账户。',
        },
        {
          question: '订阅是否包含免费试用？',
          answer:
            '符合条件的月度或年度订阅可能包含免费试用。只有在确认你的 Apple 账户符合条件时，付费墙才会显示免费试用；试用时长会在你确认前显示在付费墙与 App Store 购买页上。Lifetime 不包含试用。若不符合条件，将显示标准价格。',
        },
        {
          question: '在哪里购买或查看 Pomodoro Pro？',
          answer:
            '在 iPhone 上打开设置 → Pomodoro Pro。你必须已登录。Pro 会随你的账户保留在你登录的每台设备上。',
        },
        {
          question: '如何恢复购买？',
          answer:
            '在付费墙或设置 → Pomodoro Pro 中使用恢复购买。使用同一 Apple 账户完成的购买会转移到你当前登录的账户。若未找到任何内容，请确认使用的是购买 Pro 的 Apple 账户，并在联网时重试。',
        },
      ],
    },
    purchases: {
      title: '订阅与购买',
      items: [
        {
          question: '如何管理或取消订阅？',
          answer:
            '订阅由 Apple 计费。在 iPhone 上打开设置 → Pomodoro Pro → 管理订阅，或前往设置 → [你的姓名] → 订阅并选择该应用。至少在续订前 24 小时取消，以免产生下一笔费用。删除应用或 Pomodoro 账户不会取消订阅。',
        },
        {
          question: '如何申请退款？',
          answer:
            '退款由 Apple 处理。请访问 reportaproblem.apple.com，使用购买所用的 Apple 账户登录，找到交易并提交退款请求。我们无法自行处理 App Store 退款。',
        },
        {
          question: '如果购买失败或 Pro 未解锁怎么办？',
          answer:
            '保持登录，检查网络连接并重试。若付款待处理（例如“询问购买”），Pro 会在批准后解锁。若已付款，请使用恢复购买。对于有效订阅的付款问题，请在 App Store 设置中更新付款方式。',
        },
        {
          question: '若在订阅仍有效时购买 Lifetime 会怎样？',
          answer:
            'Lifetime 会永久解锁 Pro，但现有订阅不会自动取消。请在 App Store 订阅设置中关闭自动续订，以免再次被扣费。',
        },
      ],
    },
    focusProtection: {
      title: 'Focus Protection',
      items: [
        {
          question: '什么是 Focus Protection？',
          answer:
            'Focus Protection 是 iPhone 上的 Pomodoro Pro 功能。它使用 Apple 的 Screen Time API，在专注会话进行时屏蔽你选择的 App、类别或网站。休息从不被屏蔽。会话结束后，被屏蔽的 App 会自动解锁。你的屏蔽选择保留在该 iPhone 上，不会上传或同步。',
        },
        {
          question: '如何设置？',
          answer:
            '在 Pro 已激活时，打开设置 → Focus Protection。按提示允许 Screen Time 访问，选择要屏蔽的内容，然后开启 Focus Protection。开始一次专注会话即可应用屏蔽。',
        },
        {
          question: '如何关闭或解锁 App？',
          answer:
            '在设置中打开 Focus Protection 并关闭该功能，或在会话后的屏蔽屏幕上使用解锁选项。要完全移除应用的 Screen Time 访问，请前往 iOS 设置 → 屏幕使用时间 → 具有屏幕使用时间访问权限的 App。',
        },
        {
          question: '如果 Focus Protection 不工作怎么办？',
          answer:
            '确认 Pro 已激活、已允许 Screen Time 访问，并且已选择要屏蔽的 App 或类别。Focus Protection 仅在专注会话期间生效，休息期间不适用。若系统设置中已撤销访问，请打开应用并再次允许。权限变更后重启 iPhone 可能有帮助。',
        },
      ],
    },
    accountPrivacy: {
      title: '账户与隐私',
      items: [
        {
          question: '如何删除账户？',
          answer:
            '登录后，打开设置 → 账户 → 删除账户，然后确认。你的账户与已同步的专注历史会从我们的线上数据库永久删除。此操作无法撤销。删除需要网络连接。删除账户不会取消 App Store 订阅 — 请在 App Store 设置中管理。',
        },
        {
          question: '删除账户会影响什么？',
          answer:
            '该账户的已同步云数据会被移除；若已存储，Sign in with Apple 授权会被撤销；会请求购买提供商删除与你账户关联的购买记录；并会从你执行删除的设备上移除该账户数据。其他设备上的本地副本将无法再同步；如有需要，请在那些设备上移除应用或清除数据。提供商备份可能在有限恢复窗口内保留已删除数据。Apple 会保留其自己的 App Store 交易记录。',
        },
        {
          question: '如何导出我的数据？',
          answer:
            '设置 → 账户 → 导出我的数据会保存包含会话、每日目标、已同步设置与账户资料的 JSON 文件。尚未认领的本地数据也可从登录屏幕导出。',
        },
        {
          question: '隐私政策在哪里？',
          answer:
            '可从产品网站打开隐私政策，或使用本站产品页面上的隐私链接。',
        },
      ],
    },
    requirements: {
      title: '系统要求',
      body: 'iPhone：iOS 17 或更高版本。Mac：macOS 14.6 或更高版本。Pomodoro Pro 购买、免费试用、Limited Annual 优惠与 Focus Protection 可在 iPhone 上使用。',
    },
    contact: {
      title: '联系',
      body: '如需帮助、反馈或错误报告：',
    },
    privacyPolicyLink: '隐私政策',
  },
  privacy: {
    metaTitle: `${PULSE_APP_NAME} 隐私政策`,
    metaDescription: `${PULSE_APP_NAME} 的隐私政策，涵盖 Apple 与 Google 登录、云同步、通过 RevenueCat 进行的 Pomodoro Pro 购买、Focus Protection、分析、账户删除，以及 Mac 与 iPhone 上的隐私权利。`,
    title: '隐私政策',
    subtitle: `${PULSE_APP_NAME} — 适用于 Mac 与 iPhone 的番茄钟计时器`,
    lastUpdated: '最后更新：2026年11月9日',
    summary: {
      title: '摘要',
      body: `当你使用 Apple 或 Google 登录时，你的账户会在 Mac 与 iPhone 之间同步专注历史、每日目标与计时器设置。我们只存储应用所需内容：你的电子邮件地址、账户标识符，以及你创建的专注数据。我们从不出售这些数据，不将其用于广告，也不与我们的分析提供商共享。若你在 iPhone 上购买 Pomodoro Pro — 包括月度、年度、Limited Annual、Lifetime 或符合条件的免费试用 — 我们的购买提供商 RevenueCat 会将你的购买与权益历史关联到账户，使 Pro 在你登录的每台设备上可用。Focus Protection 的 App 选择绝不会离开你的 iPhone。你可以随时在设置中导出数据或删除账户。另外，应用可能会发送匿名、注重隐私的使用分析，以便我们改进专注流程。`,
    },
    localData: {
      title: '存储在设备上的数据',
      body: '你的计时器设置、会话偏好与专注历史使用标准系统存储保存在 Mac 或 iPhone 本地，以便计时器在离线时继续工作。设备上登录的每个账户都有各自独立的本地存储。登录会话保存在系统钥匙串中。语言、外观、登录时打开、通知偏好、Live Activity 偏好与 Focus Protection 选择保留在各设备上，不会同步。专注历史内容本身不会上传到我们的分析提供商。',
      migrationSafety:
        '当你首次在已有专注历史的设备上登录时，应用会在将该历史移入账户前征求确认。在服务器确认迁移完成之前，外加 90 天，应用会将先前的本地副本与设备上的本地备份文件作为安全网保留，然后自动移除。',
    },
    accountAndSync: {
      title: '你的账户与已同步数据',
      intro: '若你登录，我们会处理：',
      items: [
        '联系信息：Sign in with Apple（可能是通过隐藏我的邮箱获得的私人中继地址）或 Google 共享的电子邮件地址。我们不请求你的姓名。',
        '标识符：登录时创建的账户 ID，以及每次安装的随机 ID，仅用于同步并识别哪台设备进行了更改。',
        '专注数据：已完成与已删除的专注和休息会话（时间、时长、本地日期与时区、所选标签及任何会话备注）、你创建的标签（名称与颜色）、每日目标、最佳连续记录，以及已同步设置（会话时长、每日目标、音效、动画、完成音效、庆祝动物）。',
      ],
      closing:
        '这些数据仅用于提供同步、历史与账户功能。它们关联到你的账户，不用于跟踪，也不会与下列处理者以外的第三方共享。',
    },
    processors: {
      title: '处理者与存储位置',
      bodyBeforeSupabase: '账户与同步数据存储在',
      bodyAfterSupabase:
        '（数据库与身份验证）中，位于欧盟。登录由',
      orWord: '或',
      bodyAfterProviders:
        '根据你选择的选项处理。Pomodoro Pro 购买与权益由',
      bodyAfterRevenueCat:
        '管理（见下方购买）。数据在传输中加密，访问受限，使每个账户只能读取自己的数据。',
    },
    purchases: {
      title: '购买（iPhone）',
      bodyBeforeRevenueCat:
        'Pomodoro Pro 通过 App Store 以月度、年度、Limited Annual（在提供时）与 Lifetime 产品销售；符合条件的订阅可能包含购买前显示的免费试用。Apple 处理付款，我们绝不会看到你的支付卡详情。为在你登录的每台设备上解锁 Pro，应用会将你的账户 ID 与',
      bodyAfterRevenueCat:
        '共享，后者会将你的购买与权益历史（已购产品、购买与续订日期、试用或订阅状态，以及 lifetime 解锁）关联到该 ID。这些数据仅用于授予与恢复 Pro 访问，不用于跟踪，也不与我们的分析提供商共享。Pro 需要已登录账户；登录前不会向 RevenueCat 发送任何内容。',
    },
    focusProtection: {
      title: 'Focus Protection（iPhone）',
      body: 'Focus Protection 使用 Apple 的 Screen Time 框架（包括 Family Controls、Managed Settings 与 Device Activity），在专注会话进行时屏蔽你选择的 App、类别与网站。Apple 仅向应用提供关于你选择的不透明令牌：我们无法看到你选择了哪些 App 或网站、你如何使用它们，或任何其他 Screen Time 使用信息。你的选择保留在该 iPhone 上，绝不会上传或同步到我们的服务器，也不会发送给我们的分析提供商。我们不收集或出售 Screen Time 数据。你可以随时在应用中关闭 Focus Protection，或在设置 → 屏幕使用时间 → 具有屏幕使用时间访问权限的 App 中移除应用的访问权限。',
    },
    retention: {
      title: '保留、备份与删除',
      items: [
        '只要你的账户存在，已同步数据就会被保留。',
        '删除账户（设置 → 账户 → 删除账户）会从我们的线上数据库永久删除你的账户与所有已同步数据；若已存储，会撤销应用的 Sign in with Apple 授权；请求 RevenueCat 删除与你账户关联的购买记录；并从你执行删除的设备上移除该账户数据。其他设备上的本地副本将无法再同步，并保留在那里，直到你在那些设备上删除应用，或在登录屏幕提供选项时将其移除。',
        '我们的数据库提供商保留 7 天的每日备份。已删除数据可能在这些备份到期前仍存在；备份仅用于灾难恢复。我们也可能为同一目的将加密的每周备份保留最多 90 天。',
        '删除账户不会取消 App Store 订阅；请在 Apple 账户设置中管理或取消。Apple 会保留其自己的 App Store 交易记录。',
        '退出登录不会删除任何内容。尚未同步的更改会保留在设备上，直到同一账户再次登录。',
        '分析记录由 TelemetryDeck 按其保留惯例处理，不会用于恢复你的专注历史。',
      ],
    },
    export: {
      title: '导出',
      body: '设置 → 账户 → 导出我的数据会保存包含你的会话、每日目标、已同步设置与账户资料的 JSON 文件。尚未移入账户的数据也可从登录屏幕导出。',
    },
    analytics: {
      title: '分析',
      introBeforeLink: '我们使用',
      introAfterLink:
        '这一注重隐私的分析服务，了解应用的使用方式（例如：已开始或完成的专注/休息会话、打开历史、设置更改、通知权限结果、引导完成，以及选定的审查或迁移诊断）。信号不包含自由文本、姓名、电子邮件、会话备注或专注历史内容。',
      identifier:
        'TelemetryDeck 使用经过哈希的设备范围标识符识别安装，并可附加非个人设备元数据（例如机型、操作系统版本与区域设置）。这些数据仅用于分析，不会由我们关联到你的身份，也不会用于跨其他公司应用或网站的跟踪。',
      learnMore: '了解更多：',
      faqLabel: 'TelemetryDeck 隐私常见问题',
    },
    appStoreUpdates: {
      title: 'App Store 更新',
      body: '若你在设置中使用“检查更新”，应用可能会联系 Apple，以查看 App Store 是否有更新版本。',
    },
    launchAtLogin: {
      title: '登录时打开（Mac）',
      body: '若你在 Mac 的设置中启用登录时打开，应用会使用 macOS 系统 API 注册为登录项。此偏好由你控制，可随时关闭。',
    },
    notifications: {
      title: '通知与 Live Activities（iPhone）',
      body: '在 iPhone 上，可选的本地通知与 Live Activities 可帮助你了解会话何时结束，或在锁定屏幕与灵动岛保持进行中会话可见。当你选择启用相关功能时会请求权限。通知与 Live Activity 内容保留在你的设备上，不会发送到我们的服务器。',
    },
    whatWeDoNotDo: {
      title: '我们不会做的事',
      items: [
        '无广告网络',
        '不出售个人信息',
        '不为分析访问你的通讯录、照片、精确位置、相机或麦克风',
        '不收集或上传超出 Apple 为设备上 Focus Protection 提供的不透明令牌之外的 Screen Time 使用详情',
      ],
    },
    children: {
      title: '儿童',
      body: `${PULSE_APP_NAME} 不会在明知情况下，收集超出账户同步所需（如上所述）之外的儿童个人信息。分析信号是匿名的，不包含个人内容。`,
    },
    privacyRights: {
      title: '你的隐私权利（包括 GDPR 与 KVKK）',
      intro:
        '根据你的居住地，你可能享有欧盟/英国《通用数据保护条例》（GDPR）、土耳其《个人数据保护法》（KVKK）以及类似法律下的权利。在适用法律允许的范围内，这些权利可能包括：',
      items: [
        '请求查阅我们持有的与你账户相关的个人数据',
        '请求更正不准确的个人数据',
        '从应用导出你的数据（设置 → 账户 → 导出我的数据）',
        '删除你的账户与已同步数据（设置 → 账户 → 删除账户），或请求我们协助删除',
        '在法律提供该权利的情况下，反对或限制特定处理',
        '向当地数据保护机构提出投诉',
      ],
      closing:
        '账户与同步数据与我们的处理者 Supabase 一起存储在欧盟。要行使这些权利，请在可用时使用应用内控件，或通过下方电子邮件联系我们。我们会按适用法律要求回应经验证的请求。我们不出售个人数据。',
    },
    changes: {
      title: '变更',
      body: '若本政策发生变更，更新版本将发布于此 URL，并附上新的“最后更新”日期。',
    },
    contact: {
      title: '联系',
      body: '关于本政策或隐私权利的问题：',
    },
  },
}
