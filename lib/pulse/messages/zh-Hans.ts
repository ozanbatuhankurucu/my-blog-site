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
    metaDescription: `${PULSE_APP_NAME} 是一款平静的 Pomodoro 计时器，适用于 iPhone 和 Mac，提供专注历史、每日专注目标、Apple 与 Google 登录，以及离线优先的多设备同步。`,
    heroImageAlt: `${PULSE_APP_NAME} 专注计时器与每周历史概览`,
    backToProjects: '返回项目',
    availableOnAppStore: 'App Store 上提供',
    availabilityLine: 'iOS 17+ · macOS 14.6+',
    eyebrow: '适用于 iPhone 和 Mac 的专注计时器',
    tagline: '一款温和的 Pomodoro 计时器，帮助你在 iPhone 和 Mac 菜单栏中专注。',
    description: `开始专注会话、休息，并让历史记录随身而行。使用 Apple 或 Google 登录，每日专注目标、专注历史与同步偏好会随账户在 iPhone 与 Mac 间保持一致 — 计时器离线仍可工作。`,
    downloadCta: '在 App Store 下载',
    watchDemo: '观看演示',
    supportCta: '支持',
    stats: {
      platformLabel: '平台',
      platformValue: 'iPhone 与 Mac',
      languagesLabel: '语言',
      languagesValue: '12 种语言',
      dataLabel: '同步',
      dataValue: '离线优先',
      builtWithLabel: '技术栈',
      builtWithValue: 'SwiftUI + AppKit',
    },
    demo: {
      eyebrow: '更安静的专注方式',
      title: '需要时它在，不需要时它不在。',
      description: `在 Mac 上，从菜单栏打开 ${PULSE_APP_NAME}，选择会话并关闭弹出窗口。在 iPhone 上，从首页开始专注，在支持的设备上可通过 Live Activities 继续。计时器在你工作时持续运行。`,
      caption:
        '专注与休息计时、每日专注目标、专注历史、连续记录、12 种语言本地化，以及可选的完成提醒。',
    },
    rhythm: {
      eyebrow: '由你掌控的节奏',
      title: '专注、暂停、恢复、重复。',
      description: `${PULSE_APP_NAME} 会建议下一步，但绝不会替你开始会话。每项时长都可按你的日程调整。`,
    },
    featureShowcases: [
      {
        title: '专注',
        badge: '1–120 分钟',
        description:
          '工作时倒计时安静运行。暂停、重置或跳过 — 在 iPhone 和 Mac 上你始终掌控一切。',
        imageFile: 'focus-running.png',
        alt: `${PULSE_APP_NAME} 专注会话运行中，含暂停控件与倒计时`,
      },
      {
        title: '菜单栏',
        badge: 'Mac',
        description:
          '在 Mac 上，可在菜单栏显示或隐藏剩余时间。固定宽度的状态项不会挤动弹出窗口，最长可显示 120:00。',
        imageFile: 'menubar.png',
        alt: `${PULSE_APP_NAME} 倒计时显示在 macOS 菜单栏中`,
      },
      {
        title: '个性化',
        badge: '你的规则',
        description:
          '灵活时长、每日专注目标、完成音效与动画、12 种界面语言，以及外观偏好。',
        imageFile: 'settings.png',
        alt: `${PULSE_APP_NAME} 时长、完成提醒、语言与目标设置`,
      },
    ],
    history: {
      eyebrow: '无压力的进度',
      title: '看见努力在累积。',
      description:
        '打开专注历史查看总计与连续记录。登录后，历史可在 iPhone 与 Mac 间同步，进度随你而行。',
      items: ['总专注时长', '完成的会话数', '当前连续记录', '最佳连续记录', '每日专注目标'],
      imageAlt: `${PULSE_APP_NAME} 每周专注历史，含会话数、专注小时与连续记录`,
    },
    feedback: {
      eyebrow: '温和反馈，按你的方式',
      title: '让完成更有成就感。',
      description: `可从六种平静的完成音效与六种动物庆祝动画中选择，或分别关闭。${PULSE_APP_NAME} 在专注、短休息或长休息结束时显示合适的信息。`,
      items: [
        '按会话类型显示的完成标题与副标题',
        '12 种界面语言，默认跟随系统语言',
        '各设备上的语言与外观偏好',
        'iPhone 上可选的激励提醒',
      ],
      settingsImageAlt: `${PULSE_APP_NAME} 时长、语言、完成音效与目标设置`,
      celebrationImageAlt: `${PULSE_APP_NAME} 会话完成时的兔子庆祝动画`,
      soundNames: ['森林鸟鸣', '水晶风铃', '轻柔马林巴', '雨滴', '柔和铃铛', '禅意锣声'],
      animalNames: ['猴子', '考拉', '猫', '狐狸', '熊猫', '兔子'],
    },
    native: {
      eyebrow: '原生设计',
      title: '为 Apple 设备而生。',
      description: `SwiftUI、AppKit 与系统规范让 ${PULSE_APP_NAME} 快速且熟悉 — 全程支持 VoiceOver 标签与「减少动态效果」。`,
      features: [
        {
          title: 'Mac 菜单栏与 iPhone 首页',
          description: 'Mac 上安静的菜单栏伴侣，iPhone 上专注的首页体验。',
        },
        {
          title: '保持准确',
          description:
            '睡眠、唤醒与重新启动后会话仍正确，历史在实际截止时刻记录。',
        },
        {
          title: '离线优先同步',
          description:
            '无网络也能继续专注。恢复在线后，已登录的更改会同步到你的账户。',
        },
        {
          title: '用你的语言',
          description:
            '完整 12 种界面语言，默认系统语言，可在设置中手动覆盖。',
        },
      ],
    },
    privacy: {
      eyebrow: '隐私优先',
      title: '你的专注属于你自己。',
      description: `${PULSE_APP_NAME} 使用账户以便历史在设备间同步。我们仅存储同步所需数据，不出售你的数据，并将分析与专注历史分离。`,
      items: [
        '使用 Apple 或 Google 登录',
        '各设备离线优先的专注体验',
        '历史与同步偏好的云同步',
        '无广告网络',
        '随时可在设置中删除账户',
      ],
    },
    closing: {
      title: '为专注工作留出空间。',
      description: `在 App Store 获取适用于 iPhone 和 Mac 的 ${PULSE_APP_NAME}，或阅读隐私政策与支持页面获取帮助。`,
      getSupport: '获取支持',
      privacy: '隐私',
    },
  },
  support: {
    metaTitle: `${PULSE_APP_NAME} 支持`,
    metaDescription: `${PULSE_APP_NAME} 在 iPhone 和 Mac 上的支持、常见问题与账户帮助 — 包括登录、同步、迁移与账户删除。`,
    title: `${PULSE_APP_NAME} 支持`,
    intro: `${PULSE_APP_NAME} 是适用于 iPhone 和 Mac 的平静 Pomodoro 计时器。使用 Apple 或 Google 登录可在设备间同步专注历史。`,
    gettingStarted: {
      title: '开始使用',
      items: [
        {
          question: '如何开始专注会话？',
          answer:
            '在 Mac 上，点击菜单栏中的应用图标，选择专注、短休息或长休息，然后按开始。在 iPhone 上，打开应用，在首页选择会话并按开始。计时器运行时可以离开应用。',
        },
        {
          question: '如何更改专注与休息时长？',
          answer:
            '打开设置并调整专注、短休息与长休息的长度。也可选择预设节奏，再微调分钟数。',
        },
        {
          question: '如何配置每日专注目标？',
          answer:
            '在设置中设定每天想要的专注会话数。进度会显示在首页与专注历史中。',
        },
        {
          question: '如何查看专注历史？',
          answer:
            '从应用中打开专注历史（Mac 上可从弹出窗口或状态菜单）。你会看到总计、连续记录与每周进度。',
        },
        {
          question: '如何更改语言与外观？',
          answer:
            '在设置中选择语言（系统或支持的语言）与外观（系统、浅色或深色）。这些偏好保留在各设备上，不会同步。',
        },
      ],
    },
    accounts: {
      title: '账户',
      items: [
        {
          question: '为什么需要登录？',
          answer:
            '账户让专注历史、每日专注目标与同步偏好随你在 iPhone 与 Mac 间保持一致。新安装会要求在使用计时器前登录。从旧版本升级的设备在登录前可能仍可使用本地历史。',
        },
        {
          question: '如何使用 Apple 或 Google 登录？',
          answer:
            '在登录界面选择「通过 Apple 继续」或「通过 Google 继续」并完成提供商流程。Apple 可能提供「隐藏我的电子邮件」。',
        },
        {
          question: '如何退出登录？',
          answer:
            '打开 设置 → 账户 → 退出登录。若有尚未同步的更改，应用可能要求先同步或仍要退出。退出登录不会删除你的账户。',
        },
        {
          question: '如何重新登录？',
          answer:
            '在登录界面使用相同的 Apple 或 Google 方式。该设备上云端的历史会恢复到该账户。',
        },
        {
          question: '使用不同账户会怎样？',
          answer:
            '每个账户有独立历史。登录另一账户不会合并无关历史。在已有本地会话的设备上确认历史归属前请谨慎选择。',
        },
        {
          question: '能否将 Apple 与 Google 关联到同一账户？',
          answer:
            '可以。在 设置 → 账户 中，当另一种登录方式未被其他账户使用时，可关联该方式。',
        },
      ],
    },
    cloudSync: {
      title: '云同步',
      items: [
        {
          question: '设备间同步什么？',
          answer:
            '专注与休息会话历史、每日专注目标记录、与连续记录相关的账户数据，以及同步偏好（会话长度、每日目标、声音、动画、完成音效、庆祝动物等）。',
        },
        {
          question: '没有互联网时会怎样？',
          answer:
            '登录后，可离线继续使用计时器。新会话与更改会保留在设备上，直到有可用连接。',
        },
        {
          question: '恢复在线后会怎样？',
          answer:
            '应用会将待处理的更改与账户同步。同步为离线优先、最终一致 — 并非即时实时协作。',
        },
        {
          question: '如何在 iPhone 与 Mac 上使用同一账户？',
          answer:
            '在两台设备上安装应用并使用相同的 Apple 或 Google 账户登录。恢复完成后，专注历史可能出现在两台设备上。',
        },
        {
          question: '如果历史缺失怎么办？',
          answer:
            '确认已登录同一账户，等待恢复/同步完成后再查看专注历史。若登录了不同账户，将显示该账户自己的历史。',
        },
      ],
    },
    migration: {
      title: '从旧版本升级',
      items: [
        {
          question: '现有本地历史会怎样？',
          answer:
            '现有本地历史不会被静默删除。登录后，应用会在将该历史加入账户前询问你。',
        },
        {
          question: '应如何认领历史？',
          answer:
            '登录应拥有历史的账户，查看「添加你的历史」界面，然后选择「添加到此账户」。若显示的账户不对，请换用其他账户。会话之后无法移到其他账户。',
        },
        {
          question: '若设备与账户设置不同怎么办？',
          answer:
            '应用可能询问保留本设备设置还是使用账户设置。语言、外观、通知与激励提醒保留在设备本地。',
        },
      ],
    },
    notifications: {
      title: '通知',
      items: [
        {
          question: '如何在 iPhone 上启用通知？',
          answer:
            '打开 设置 → 通知 并选择启用，或若此前已拒绝权限则打开系统设置。',
        },
        {
          question: '激励提醒如何工作？',
          answer:
            '在 iPhone 上，打开 设置 → 激励提醒，在允许通知后开启。可暂停或设置安静时段。可选，默认关闭。',
        },
        {
          question: '若通知已禁用怎么办？',
          answer:
            '会话结束提醒与激励提醒需要通知权限。通过 设置 → 通知 → 打开设置 在 iOS 设置中开启。',
        },
        {
          question: 'Live Activities 如何工作？',
          answer:
            '在支持的 iPhone 上，可选的 Live Activity 可在锁定屏幕与灵动岛上显示进行中的会话。启用相关功能时会请求权限。',
        },
      ],
    },
    accountPrivacy: {
      title: '账户与隐私',
      items: [
        {
          question: '如何删除账户？',
          answer:
            '登录后打开 设置 → 账户 → 删除账户 并确认。你的账户与已同步的专注历史会从我们的在线数据库永久删除。无法撤销。删除需要网络连接。',
        },
        {
          question: '删除账户会影响什么？',
          answer:
            '该账户的同步云数据会被移除，若已存储则撤销「通过 Apple 登录」授权，并在你删除账户的设备上移除该账户数据。其他设备上的本地副本无法再同步；如需可删除应用或在登录界面清除。提供商备份可能在有限恢复窗口内保留已删除数据。',
        },
        {
          question: '如何导出数据？',
          answer:
            '设置 → 账户 → 导出我的数据 会保存包含会话、每日目标、同步设置与账户资料的 JSON 文件。未认领的本地数据也可从登录界面导出。',
        },
        {
          question: '隐私政策在哪里？',
          answer:
            '从产品网站打开隐私政策，或使用本网站产品页面上的隐私链接。',
        },
      ],
    },
    requirements: {
      title: '系统要求',
      body: 'iPhone：iOS 17 或更高版本。Mac：macOS 14.6 或更高版本。',
    },
    contact: {
      title: '联系',
      body: '如需帮助、反馈或错误报告：',
    },
    privacyPolicyLink: '隐私政策',
  },
  privacy: {
    metaTitle: `${PULSE_APP_NAME} 隐私政策`,
    metaDescription: `${PULSE_APP_NAME} 隐私政策，涵盖 Apple 与 Google 登录、云同步、本地存储、分析与 Mac 和 iPhone 上的账户删除。`,
    title: '隐私政策',
    subtitle: `${PULSE_APP_NAME} — 适用于 Mac 和 iPhone 的 Pomodoro 计时器`,
    lastUpdated: '最后更新：2026年10月11日',
    summary: {
      title: '摘要',
      body: `使用 Apple 或 Google 登录后，你的账户会在 Mac 与 iPhone 间同步专注历史、每日目标与计时器设置。我们仅存储应用所需内容：你的电子邮件地址、账户标识符以及你创建的专注数据。我们从不出售、从不用于广告，也从不与我们的分析提供商共享。你可随时在设置中导出数据或删除账户。此外，应用可能发送匿名、保护隐私的使用分析，以改进专注流程。`,
    },
    localData: {
      title: '存储在你设备上的数据',
      body: '计时器设置、会话偏好与专注历史通过标准系统存储保存在 Mac 或 iPhone 本地，以便离线时计时器仍可工作。每台设备上登录的每个账户都有独立的本地存储。登录会话保存在系统钥匙串中。语言、外观、登录时启动、通知与激励提醒设置保留在各设备上，不会同步。专注历史内容本身不会上传给我们的分析提供商。',
      migrationSafety:
        '若你在已有专注历史的设备上首次登录，应用会在将该历史移入账户前询问你。在我们服务器确认迁移之前，另加 90 天，应用会保留先前的本地副本及设备上的本地备份文件作为安全网，然后自动删除。',
    },
    accountAndSync: {
      title: '你的账户与同步数据',
      intro: '若你登录，我们会处理：',
      items: [
        '联系信息：通过 Apple 登录（可能为通过「隐藏我的电子邮件」的私人中继地址）或 Google 共享的电子邮件地址。我们不会请求你的姓名。',
        '标识符：登录时创建的账户 ID，以及每次安装的随机 ID，仅用于同步及识别哪台设备进行了更改。',
        '专注数据：已完成与已删除的专注及休息会话（时间、时长、本地日期与时区）、每日目标、最佳连续记录，以及同步设置（会话长度、每日目标、声音、动画、完成音效、庆祝动物）。',
      ],
      closing:
        '这些数据仅用于提供同步、历史与账户功能。与账户关联，不用于跟踪，除下列处理方外不与第三方共享。',
    },
    processors: {
      title: '处理方与存储位置',
      bodyBeforeSupabase: '账户与同步数据存储于',
      bodyAfterSupabase:
        '（数据库与身份验证），位于欧盟。登录由',
      orWord: '或',
      bodyAfterProviders:
        '处理，取决于你所选方式。传输中数据加密，访问受限，使每个账户只能读取自己的数据。',
    },
    retention: {
      title: '保留、备份与删除',
      items: [
        '你的同步数据在账户存在期间一直保留。',
        '删除账户（设置 → 账户 → 删除账户）会从我们的在线数据库永久删除你的账户及所有同步数据，若已存储则撤销应用的「通过 Apple 登录」授权，并在你执行删除的设备上移除该账户数据。其他设备上的本地副本无法再同步，直至你在那些设备上删除应用或在登录界面清除。',
        '我们的数据库提供商保留 7 天的每日备份。已删除数据可能在备份过期前仍存在于备份中；备份仅用于灾难恢复。我们也可能为同样目的保留最长 90 天的加密每周备份。',
        '退出登录不会删除任何内容。尚未同步的更改会保留在设备上，直到同一账户再次登录。',
        '分析记录由 TelemetryDeck 按其保留做法处理，不用于恢复你的专注历史。',
      ],
    },
    export: {
      title: '导出',
      body: '设置 → 账户 → 导出我的数据 会保存包含会话、每日目标、同步设置与账户资料的 JSON 文件。尚未移入账户的数据也可从登录界面导出。',
    },
    analytics: {
      title: '分析',
      introBeforeLink: '我们使用',
      introAfterLink:
        '这一注重隐私的分析服务，以了解应用使用情况（例如：开始或完成的专注或休息会话、每日目标更改、设置更改、通知权限结果、激励提醒事件，以及是否完成引导）。信号不包含自由文本、姓名、电子邮件或专注历史内容。',
      identifier:
        'TelemetryDeck 使用哈希化的设备范围标识符识别安装，并可能附加非个人设备元数据（如型号、系统版本与区域）。这些数据仅用于分析，我们不会将其与你的身份关联，也不用于跨其他公司应用或网站的跟踪。',
      learnMore: '了解更多：',
      faqLabel: 'TelemetryDeck Privacy FAQ',
    },
    appStoreUpdates: {
      title: 'App Store 更新',
      body: '若在设置中使用「检查更新」，应用可能联系 Apple 以查看 App Store 是否有新版本。',
    },
    launchAtLogin: {
      title: '登录时启动（Mac）',
      body: '若在 Mac 设置中启用登录时启动，应用会使用 macOS 系统 API 注册为登录项。此偏好由你控制，可随时禁用。',
    },
    notifications: {
      title: '通知与 Live Activities（iPhone）',
      body: '在 iPhone 上，可选的本地通知、激励提醒与 Live Activities 帮助你在会话结束时获知信息或温和地回到专注。仅在你选择启用这些功能时请求权限。通知内容保留在你的设备上。',
    },
    whatWeDoNotDo: {
      title: '我们不会做的事',
      items: [
        '无广告网络',
        '不出售个人信息',
        '不为分析而访问你的通讯录、照片、精确位置、相机或麦克风',
      ],
    },
    children: {
      title: '儿童',
      body: `${PULSE_APP_NAME} 不会故意收集超出上述同步所需账户范围的儿童个人信息。分析信号为匿名，不包含个人内容。`,
    },
    changes: {
      title: '变更',
      body: '若本政策变更，更新版本将发布于此 URL。',
    },
    contact: {
      title: '联系',
      body: '有关本政策的问题：',
    },
  },
}
