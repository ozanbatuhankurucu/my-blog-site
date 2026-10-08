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
    metaTitle: `${PULSE_APP_NAME} — macOS 菜单栏 Pomodoro 计时器`,
    metaDescription: `${PULSE_APP_NAME} 是一款原生 macOS Pomodoro 计时器，提供重新设计的弹出界面、完整专注历史、会话感知提醒，并支持 12 种语言。`,
    heroImageAlt: `${PULSE_APP_NAME} 专注计时器与每周历史概览`,
    backToProjects: '返回项目',
    availableOnAppStore: '可在 Mac App Store 获取',
    eyebrow: '菜单栏 Pomodoro 计时器',
    tagline: '安静栖身于菜单栏的温和 Pomodoro 计时器。',
    description: `专注工作，无需打乱桌面。开始专注会话、休息片刻，让 ${PULSE_APP_NAME} 以完整专注历史在后台安静记录你的进度。`,
    downloadCta: '前往 Mac App Store 下载',
    watchDemo: '观看实际效果',
    supportCta: '支持',
    stats: {
      platformLabel: '平台',
      platformValue: '原生 macOS',
      languagesLabel: '语言',
      languagesValue: '12 种语言',
      dataLabel: '数据收集',
      dataValue: '无',
      builtWithLabel: '技术栈',
      builtWithValue: 'SwiftUI + AppKit',
    },
    demo: {
      eyebrow: '更安静的专注方式',
      title: '需要时计时器就在那里——不需要时便悄然隐去。',
      description: `从菜单栏打开 ${PULSE_APP_NAME}，选择一个会话，然后关闭弹出窗口。计时器会在你工作的同时继续运行。首次启动时，简短介绍会告诉你在哪里找到它——若已启用“减少动态效果”，则会予以尊重。`,
      caption:
        '重新设计的会话控件、完整专注历史、12 种语言本地化、会话感知完成提醒，以及设置。',
    },
    rhythm: {
      eyebrow: '由你掌控的节奏',
      title: '专注、暂停、恢复、重复。',
      description: `${PULSE_APP_NAME} 会建议下一步，但绝不会替你开始会话。每段时长都可按你的日程调整。`,
    },
    featureShowcases: [
      {
        title: '专注',
        badge: '1–120 分钟',
        description:
          '倒计时在你工作时安静运行。可暂停、重置或跳过，菜单栏计时器始终稳固显示。',
        imageFile: 'focus-running.png',
        alt: `${PULSE_APP_NAME} 专注会话运行中，含暂停控件与菜单栏倒计时`,
      },
      {
        title: '菜单栏',
        badge: '稳定倒计时',
        description:
          '即时显示或隐藏剩余时间。固定宽度的状态项不会移动弹出窗口，最长可达 120:00。',
        imageFile: 'menubar.png',
        alt: `${PULSE_APP_NAME} 倒计时显示在 macOS 菜单栏中`,
      },
      {
        title: '自定义',
        badge: '你的规则',
        description:
          '灵活时长、完成音效与动画、12 种界面语言，以及登录时启动。',
        imageFile: 'settings.png',
        alt: `${PULSE_APP_NAME} 时长、完成提醒、语言与登录时启动的设置`,
      },
    ],
    history: {
      eyebrow: '无压力的进度',
      title: '看见工作一点点累积。',
      description:
        '从弹出窗口或状态菜单打开完整历史窗口。总计与连续记录展示你的进度，而不会把专注变成又一块需要管理的面板。',
      items: ['总专注时长', '已完成会话数', '当前连续记录', '最佳连续记录'],
      imageAlt: `${PULSE_APP_NAME} 每周专注历史，含会话次数、专注小时数与连续记录`,
    },
    feedback: {
      eyebrow: '温和反馈，随你心意',
      title: '让完成变得更有成就感。',
      description: `从六种平静的完成音效和六种动物庆祝动画中选择，也可全部关闭。${PULSE_APP_NAME} 会在专注、短休息或长休息结束时显示相应消息。`,
      items: [
        '会话感知的完成标题与副标题',
        '12 种语言界面，默认跟随系统语言',
        '在设置中覆盖语言：系统或任意受支持语言',
      ],
      settingsImageAlt: `${PULSE_APP_NAME} 时长、语言、完成音效与登录时启动的设置`,
      celebrationImageAlt: `${PULSE_APP_NAME} 会话完成时的兔子庆祝动画`,
      soundNames: ['Forest Birds', 'Crystal Chime', 'Gentle Marimba', 'Rain Drops', 'Soft Bell', 'Zen Gong'],
      animalNames: ['猴子', '考拉', '猫', '狐狸', '熊猫', '兔子'],
    },
    native: {
      eyebrow: '天生原生',
      title: '为在你的 Mac 上自在使用而打造。',
      description: `SwiftUI、AppKit 与 macOS 系统惯例让 ${PULSE_APP_NAME} 快速、熟悉且可靠——全程支持 VoiceOver 标签与“减少动态效果”。`,
      features: [
        {
          title: '栖身于菜单栏',
          description: '没有 Dock 图标，也没有抢占注意力的主窗口。',
        },
        {
          title: '保持准确',
          description:
            '会话在睡眠、唤醒与重新启动后依然正确，历史按实际截止时间记录。',
        },
        {
          title: '数据留在本地',
          description: '你的设置与专注历史绝不会离开你的 Mac。',
        },
        {
          title: '说你的语言',
          description:
            '完整界面支持 12 种语言，默认跟随系统语言，也可在设置中手动覆盖。',
        },
      ],
    },
    privacy: {
      eyebrow: '默认私密',
      title: '你的专注不是数据点。',
      description: `${PULSE_APP_NAME} 不收集任何数据。无账户、无分析、无广告、无网络请求。一切都留在你的 Mac 上。`,
      items: [
        '无需登录',
        '无云同步',
        '无追踪',
        '不访问个人文件',
        '数据不会离开你的 Mac',
      ],
    },
    closing: {
      title: '为专注工作留出空间。',
      description: `从 Mac App Store 获取 ${PULSE_APP_NAME}，如需帮助可阅读隐私政策与支持页面。`,
      getSupport: '获取支持',
      privacy: '隐私',
    },
  },
  support: {
    metaTitle: `${PULSE_APP_NAME} 支持`,
    metaDescription: `${PULSE_APP_NAME} 的支持与入门指南——适用于 Mac 的菜单栏 Pomodoro 计时器。`,
    title: `${PULSE_APP_NAME} 支持`,
    intro: `${PULSE_APP_NAME} 是一款简洁的 Mac 菜单栏 Pomodoro 计时器。`,
    gettingStarted: {
      title: '开始使用',
      steps: [
        '点击菜单栏（屏幕右上角区域）中的应用图标。',
        '选择专注、短休息或长休息。',
        '按下开始。计时器运行时可以关闭弹出窗口。',
      ],
    },
    settings: {
      title: '设置',
      body: '打开设置选项卡可更改会话时长、完成音效、菜单栏动画以及登录时启动。',
    },
    history: {
      title: '完整专注历史',
      body: '从弹出窗口或菜单栏状态菜单打开完整历史，查看总专注时长、已完成会话、当前连续记录与最佳连续记录。',
    },
    requirements: {
      title: '系统要求',
      body: 'macOS 14.6 或更高版本。',
    },
    contact: {
      title: '联系',
      body: '如需帮助、反馈或报告错误：',
    },
  },
  privacy: {
    metaTitle: `${PULSE_APP_NAME} 隐私政策`,
    metaDescription: `${PULSE_APP_NAME} 的隐私政策——适用于 Mac 与 iPhone 的 Pomodoro 计时器。`,
    title: '隐私政策',
    subtitle: `${PULSE_APP_NAME} — 适用于 Mac 与 iPhone 的 Pomodoro 计时器`,
    lastUpdated: '最后更新：2026 年 9 月 24 日',
    summary: {
      title: '摘要',
      body: `${PULSE_APP_NAME} 不需要账户，也不收集姓名、电子邮件或个人内容。应用可能会发送匿名、注重隐私的使用分析，以便我们改进专注流程。你的计时器设置与专注历史保留在设备上。`,
    },
    localData: {
      title: '存储在设备上的数据',
      body: '你的计时器设置、会话偏好与专注历史使用标准系统存储保存在 Mac 或 iPhone 本地。专注历史内容本身不会上传到我们的分析提供商。',
    },
    analytics: {
      title: '分析',
      introBeforeLink: '我们使用',
      introAfterLink:
        '（一项注重隐私的分析服务）来了解应用的使用方式（例如：已开始或完成的专注或休息会话、每日目标更改、设置更改，以及引导是否完成）。信号不包含自由文本、姓名、电子邮件或你的专注历史内容。',
      identifier:
        'TelemetryDeck 使用经过哈希处理的设备范围标识符识别安装，并可能附加非个人设备元数据（例如型号、操作系统版本与区域设置）。这些数据仅用于分析，不会由我们将之与你的身份关联，也不会用于跨其他公司应用或网站的追踪。',
      learnMore: '了解更多：',
      faqLabel: 'TelemetryDeck Privacy FAQ',
    },
    appStoreUpdates: {
      title: 'App Store 更新',
      body: '如果你在设置中使用“检查更新”，应用可能会联系 Apple，以确认 App Store 上是否有较新版本。',
    },
    launchAtLogin: {
      title: '登录时启动（Mac）',
      body: '如果你在 Mac 的设置中启用登录时启动，应用会使用 macOS 系统 API 注册为登录项。此偏好由你控制，可随时关闭。',
    },
    notifications: {
      title: '通知与实时活动（iPhone）',
      body: '在 iPhone 上，可选的本地通知与实时活动可帮助你在会话结束时看到提醒。仅在你选择启用这些功能时才会请求权限。通知内容保留在你的设备上。',
    },
    whatWeDoNotDo: {
      title: '我们不会做的事',
      items: [
        '无账户或登录',
        '无广告网络',
        '不出售个人信息',
        '不为分析访问你的通讯录、照片、精确位置、相机或麦克风',
      ],
    },
    children: {
      title: '儿童',
      body: `${PULSE_APP_NAME} 不会故意收集儿童的个人信息。分析信号是匿名的，不包含个人内容。`,
    },
    changes: {
      title: '变更',
      body: '若本政策发生变更，更新版本将发布于本 URL。',
    },
    contact: {
      title: '联系',
      body: '有关本政策的问题：',
    },
  },
}
