import { PULSE_APP_NAME } from '../../constants'
import type { PulseMessages } from './types'

export const jaMessages: PulseMessages = {
  languageLabel: 'ページの言語',
  video: {
    ariaLabel: `${PULSE_APP_NAME} 製品ウォークスルー`,
    playLabel: 'ウォークスルーを再生',
    unsupported: 'お使いのブラウザは埋め込み動画に対応していません。',
  },
  landing: {
    metaTitle: `${PULSE_APP_NAME} — macOS 向けメニューバー Pomodoro タイマー`,
    metaDescription: `${PULSE_APP_NAME} は、刷新されたポップオーバー、完全なフォーカス履歴、セッション対応の通知、12言語対応を備えたネイティブ macOS Pomodoro タイマーです。`,
    heroImageAlt: `${PULSE_APP_NAME} のフォーカスタイマーと週間履歴の概要`,
    backToProjects: 'プロジェクトに戻る',
    availableOnAppStore: 'Mac App Store で入手可能',
    eyebrow: 'メニューバー Pomodoro タイマー',
    tagline: 'メニューバーにそっと寄り添う、やさしい Pomodoro タイマー。',
    description: `デスクトップを散らかさずに集中を保てます。フォーカスセッションを始め、休憩を取り、${PULSE_APP_NAME} が完全なフォーカス履歴で進捗を静かに記録します。`,
    downloadCta: 'Mac App Store でダウンロード',
    watchDemo: '実際の動作を見る',
    supportCta: 'サポート',
    stats: {
      platformLabel: 'プラットフォーム',
      platformValue: 'ネイティブ macOS',
      languagesLabel: '言語',
      languagesValue: '12言語',
      dataLabel: 'データ収集',
      dataValue: 'なし',
      builtWithLabel: '技術',
      builtWithValue: 'SwiftUI + AppKit',
    },
    demo: {
      eyebrow: 'より静かな集中のかたち',
      title: '必要なときはそこにあり、不要なときは姿を消します。',
      description: `メニューバーから ${PULSE_APP_NAME} を開き、セッションを選んでポップオーバーを閉じます。タイマーはあなたが作業しているあいだも動き続けます。初回起動時には短い案内で見つけ方をお伝えします — 「視覚効果を減らす」が有効な場合はそれに従います。`,
      caption:
        '刷新されたセッション操作、完全なフォーカス履歴、12言語ローカライズ、セッション対応の完了通知、そして設定。',
    },
    rhythm: {
      eyebrow: 'あなたが操るリズム',
      title: '集中、一時停止、回復、そして繰り返し。',
      description: `${PULSE_APP_NAME} は次に何をすべきかを提案しますが、あなたに代わってセッションを開始することはありません。すべての時間は一日の流れに合わせて調整できます。`,
    },
    featureShowcases: [
      {
        title: 'フォーカス',
        badge: '1–120分',
        description:
          '作業中もカウントダウンは静かに進みます。一時停止、リセット、スキップができ、メニューバーのタイマーはしっかり固定されたままです。',
        imageFile: 'focus-running.png',
        alt: `${PULSE_APP_NAME} のフォーカスセッション実行中。一時停止コントロールとメニューバーのカウントダウン`,
      },
      {
        title: 'メニューバー',
        badge: '安定したカウントダウン',
        description:
          '残り時間をすぐに表示または非表示にできます。固定幅のステータス項目はポップオーバーをずらさず、最大 120:00 までそのままです。',
        imageFile: 'menubar.png',
        alt: `${PULSE_APP_NAME} のカウントダウンが macOS メニューバーに表示されている様子`,
      },
      {
        title: 'カスタマイズ',
        badge: 'あなたのルール',
        description:
          '柔軟な時間設定、完了音とアニメーション、12のUI言語、ログイン時に起動。',
        imageFile: 'settings.png',
        alt: `${PULSE_APP_NAME} の時間、完了アラート、言語、ログイン時起動の設定`,
      },
    ],
    history: {
      eyebrow: 'プレッシャーのない進捗',
      title: '積み重なる仕事が見えます。',
      description:
        'ポップオーバーまたはステータスメニューから完全な履歴ウィンドウを開けます。合計と連続記録が進捗を示し、フォーカスを管理すべき別のダッシュボードにはしません。',
      items: ['合計フォーカス時間', '完了したセッション数', '現在の連続記録', '最高連続記録'],
      imageAlt: `${PULSE_APP_NAME} の週間フォーカス履歴。セッション数、フォーカス時間、連続記録`,
    },
    feedback: {
      eyebrow: 'やさしいフィードバック、あなたの好みで',
      title: '完了の瞬間を報われるものに。',
      description: `6つの穏やかな完了音と6つのアニマルセレブレーションから選ぶか、どちらもオフにできます。${PULSE_APP_NAME} はフォーカス、短い休憩、長い休憩の終了時に適切なメッセージを表示します。`,
      items: [
        'セッションに応じた完了タイトルとサブタイトル',
        'システム言語を既定とする12言語のUI',
        '設定での言語オーバーライド：システム、または対応する任意の言語',
      ],
      settingsImageAlt: `${PULSE_APP_NAME} の時間、言語、完了音、ログイン時起動の設定`,
      celebrationImageAlt: `${PULSE_APP_NAME} のセッション完了時のウサギのセレブレーションアニメーション`,
      soundNames: ['Forest Birds', 'Crystal Chime', 'Gentle Marimba', 'Rain Drops', 'Soft Bell', 'Zen Gong'],
      animalNames: ['サル', 'コアラ', 'ネコ', 'キツネ', 'パンダ', 'ウサギ'],
    },
    native: {
      eyebrow: '設計からネイティブ',
      title: 'あなたの Mac に馴染むように作られています。',
      description: `SwiftUI、AppKit、macOS のシステム慣習により、${PULSE_APP_NAME} は速く、馴染みやすく、信頼できます — VoiceOver ラベルと「視覚効果を減らす」のサポートを全体に備えています。`,
      features: [
        {
          title: 'メニューバーで動作',
          description: 'Dock アイコンもなく、注意を奪うメインウィンドウもありません。',
        },
        {
          title: '正確さを保つ',
          description:
            'スリープ、ウェイク、再起動をまたいでもセッションは正しく保たれ、履歴は実際の期限で記録されます。',
        },
        {
          title: 'データをローカルに保持',
          description: '設定とフォーカス履歴は Mac から外に出ません。',
        },
        {
          title: 'あなたの言語で話す',
          description:
            '12言語の完全なUI。システム言語を既定とし、設定で手動オーバーライドも可能です。',
        },
      ],
    },
    privacy: {
      eyebrow: 'デフォルトでプライベート',
      title: 'あなたの集中はデータポイントではありません。',
      description: `${PULSE_APP_NAME} はデータを収集しません。アカウント、分析、広告、ネットワークリクエストはありません。すべて Mac 上に留まります。`,
      items: [
        'サインイン不要',
        'クラウド同期なし',
        'トラッキングなし',
        '個人ファイルへのアクセスなし',
        'データは Mac から出ない',
      ],
    },
    closing: {
      title: '集中できる仕事のための余白を。',
      description: `Mac App Store から ${PULSE_APP_NAME} を入手するか、必要なときはプライバシーポリシーとサポートページをご覧ください。`,
      getSupport: 'サポートを受ける',
      privacy: 'プライバシー',
    },
  },
  support: {
    metaTitle: `${PULSE_APP_NAME} サポート`,
    metaDescription: `Mac 向けメニューバー Pomodoro タイマー ${PULSE_APP_NAME} のサポートと使い始めガイド。`,
    title: `${PULSE_APP_NAME} サポート`,
    intro: `${PULSE_APP_NAME} は、Mac 向けのシンプルなメニューバー Pomodoro タイマーです。`,
    gettingStarted: {
      title: 'はじめに',
      steps: [
        'メニューバー（画面右上）のアプリアイコンをクリックします。',
        'フォーカス、短い休憩、または長い休憩を選びます。',
        '開始を押します。タイマー動作中はポップオーバーを閉じて構いません。',
      ],
    },
    settings: {
      title: '設定',
      body: '設定タブを開き、セッションの長さ、完了音、メニューバーアニメーション、ログイン時に起動を変更できます。',
    },
    history: {
      title: '完全なフォーカス履歴',
      body: 'ポップオーバーまたはメニューバーのステータスメニューから完全な履歴を開き、合計フォーカス時間、完了セッション、現在の連続記録、最高連続記録を確認できます。',
    },
    requirements: {
      title: '動作要件',
      body: 'macOS 14.6 以降。',
    },
    contact: {
      title: 'お問い合わせ',
      body: 'ヘルプ、フィードバック、または不具合の報告は：',
    },
  },
  privacy: {
    metaTitle: `${PULSE_APP_NAME} プライバシーポリシー`,
    metaDescription: `Mac と iPhone 向け Pomodoro タイマー ${PULSE_APP_NAME} のプライバシーポリシー。`,
    title: 'プライバシーポリシー',
    subtitle: `${PULSE_APP_NAME} — Mac と iPhone 向け Pomodoro タイマー`,
    lastUpdated: '最終更新：2026年9月24日',
    summary: {
      title: '概要',
      body: `${PULSE_APP_NAME} はアカウントを必要とせず、名前、メール、個人的なコンテンツを収集しません。フォーカスの流れを改善するため、アプリは匿名でプライバシーに配慮した利用分析を送信する場合があります。タイマー設定とフォーカス履歴はデバイス上に留まります。`,
    },
    localData: {
      title: 'デバイスに保存されるデータ',
      body: 'タイマー設定、セッションの好み、フォーカス履歴は、標準のシステムストレージを使って Mac または iPhone にローカル保存されます。フォーカス履歴の内容自体は分析プロバイダーにアップロードされません。',
    },
    analytics: {
      title: '分析',
      introBeforeLink: 'アプリの利用状況を把握するため、プライバシー重視の分析サービスである',
      introAfterLink:
        'を使用しています（例：開始または完了したフォーカス／休憩セッション、日次目標の変更、設定の変更、オンボーディングの完了有無）。シグナルに自由形式のテキスト、名前、メール、フォーカス履歴の内容は含まれません。',
      identifier:
        'TelemetryDeck はハッシュ化されたデバイス範囲の識別子でインストールを識別し、個人を特定しないデバイスメタデータ（モデル、OSバージョン、ロケールなど）を付与する場合があります。このデータは分析のみに使用され、当社があなたの身元に紐づけることはなく、他社のアプリやウェブサイト間のトラッキングにも使用されません。',
      learnMore: '詳しくは：',
      faqLabel: 'TelemetryDeck Privacy FAQ',
    },
    appStoreUpdates: {
      title: 'App Store のアップデート',
      body: '設定で「アップデートを確認」を使用する場合、アプリは App Store に新しいバージョンがあるかどうかを確認するために Apple に問い合わせることがあります。',
    },
    launchAtLogin: {
      title: 'ログイン時に起動（Mac）',
      body: 'Mac の設定でログイン時に起動を有効にすると、アプリは macOS のシステム API を使ってログイン項目として登録します。この設定はあなたが管理でき、いつでも無効にできます。',
    },
    notifications: {
      title: '通知と Live Activities（iPhone）',
      body: 'iPhone では、任意のローカル通知と Live Activities により、セッション終了時に確認しやすくなります。権限はこれらの機能を有効にする場合にのみ求められます。通知の内容はデバイス上に留まります。',
    },
    whatWeDoNotDo: {
      title: '行わないこと',
      items: [
        'アカウントやサインインなし',
        '広告ネットワークなし',
        '個人情報の販売なし',
        '分析のために連絡先、写真、精密な位置情報、カメラ、マイクにアクセスしない',
      ],
    },
    children: {
      title: 'お子さまについて',
      body: `${PULSE_APP_NAME} は、お子さまから故意に個人情報を収集しません。分析シグナルは匿名であり、個人的なコンテンツを含みません。`,
    },
    changes: {
      title: '変更',
      body: '本ポリシーが変更された場合、更新版はこの URL に掲載されます。',
    },
    contact: {
      title: 'お問い合わせ',
      body: '本ポリシーに関するご質問：',
    },
  },
}
