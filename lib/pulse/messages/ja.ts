import { PULSE_APP_NAME } from '../../constants'
import type { PulseMessages } from './types'

export const jaMessages: PulseMessages = {
  languageLabel: 'ページの言語',
  video: {
    ariaLabel: `${PULSE_APP_NAME}の製品紹介`,
    playLabel: '紹介を再生',
    unsupported: 'お使いのブラウザは埋め込み動画に対応していません。',
  },
  landing: {
    metaTitle: `${PULSE_APP_NAME} — iPhoneとMac向けフォーカスタイマー`,
    metaDescription: `${PULSE_APP_NAME}は、Focus History、Daily Focus Goals、AppleおよびGoogleでのサインイン、デバイス間のオフライン優先同期に対応した、iPhoneとMac向けの落ち着いたPomodoroタイマーです。`,
    heroImageAlt: `${PULSE_APP_NAME}のフォーカスタイマーと週間履歴の概要`,
    backToProjects: 'プロジェクトに戻る',
    availableOnAppStore: 'App Storeで入手可能',
    availabilityLine: 'iOS 17+ · macOS 14.6+',
    eyebrow: 'iPhoneとMac向けフォーカスタイマー',
    tagline: '集中を助ける穏やかなPomodoroタイマー — iPhoneでも、Macのメニューバーでも。',
    description: `フォーカスセッションを開始し、休憩を取り、履歴を手元に保てます。AppleまたはGoogleでサインインすると、Daily Focus Goals、Focus History、同期された設定がiPhoneとMacのアカウントに保持されます — タイマーはオフラインでも動作します。`,
    downloadCta: 'App Storeからダウンロード',
    watchDemo: '実際の動作を見る',
    supportCta: 'サポート',
    stats: {
      platformLabel: 'プラットフォーム',
      platformValue: 'iPhone & Mac',
      languagesLabel: '言語',
      languagesValue: '7言語',
      dataLabel: '同期',
      dataValue: 'オフライン優先',
      builtWithLabel: '技術',
      builtWithValue: 'SwiftUI + AppKit',
    },
    demo: {
      eyebrow: 'より静かな集中の仕方',
      title: '必要なときにそこにあり、不要なときは姿を消すタイマー。',
      description: `Macではメニューバーから${PULSE_APP_NAME}を開き、セッションを選んでポップオーバーを閉じます。iPhoneではホームからフォーカスを開始し、対応デバイスではLive Activitiesで続けられます。作業中もタイマーは動き続けます。`,
      caption:
        'フォーカスと休憩タイマー、Daily Focus Goals、Focus History、連続記録、7言語対応、任意の完了アラート。',
    },
    rhythm: {
      eyebrow: '自分でコントロールするリズム',
      title: '集中、一時停止、回復、繰り返し。',
      description: `${PULSE_APP_NAME}は次の提案をしますが、セッションを勝手に開始することはありません。各時間は、その日に合わせて調整できます。`,
    },
    featureShowcases: [
      {
        title: 'フォーカス',
        badge: '1〜120分',
        description:
          '作業中もカウントダウンは静かに進みます。一時停止、リセット、スキップ — 操作はiPhoneでもMacでもあなた次第です。',
        imageFile: 'focus-running.png',
        alt: `${PULSE_APP_NAME}の実行中フォーカスセッション（一時停止コントロールとカウントダウン）`,
      },
      {
        title: 'メニューバー',
        badge: 'Mac',
        description:
          'Macでは、残り時間をメニューバーに表示または非表示にできます。固定幅のステータス項目はポップオーバーをずらさず、最大120:00まで表示します。',
        imageFile: 'menubar.png',
        alt: `macOSメニューバーに表示された${PULSE_APP_NAME}のカウントダウン`,
      },
      {
        title: 'カスタマイズ',
        badge: '自分のルール',
        description:
          '柔軟な時間設定、Daily Focus Goals、完了サウンドとアニメーション、7つのUI言語、外観の設定。',
        imageFile: 'settings.png',
        alt: `${PULSE_APP_NAME}の時間、完了アラート、言語、目標の設定`,
      },
    ],
    history: {
      eyebrow: 'プレッシャーのない進捗',
      title: '積み重なる成果を確認。',
      description:
        'Focus Historyを開いて合計と連続記録を確認できます。サインインしている場合、履歴はiPhoneとMac間で同期でき、進捗があなたに追従します。',
      items: ['合計フォーカス時間', '完了セッション数', '現在の連続記録', '最高連続記録', 'Daily Focus Goals'],
      imageAlt: `${PULSE_APP_NAME}の週間フォーカス履歴（セッション数、フォーカス時間、連続記録）`,
    },
    feedback: {
      eyebrow: 'やさしいフィードバック、自分の流儀で',
      title: '完了をもっとうれしく。',
      description: `6種類の穏やかな完了サウンドと6種類のアニマルセレブレーションから選べます。どちらもオフにもできます。${PULSE_APP_NAME}はフォーカス、短い休憩、長い休憩の終了時に適切なメッセージを表示します。`,
      items: [
        'セッションに応じた完了タイトルとサブタイトル',
        'システム言語を既定とする7言語のUI',
        '各デバイスの言語と外観の設定',
        'iPhoneの任意の通知とLive Activities',
      ],
      settingsImageAlt: `${PULSE_APP_NAME}の時間、言語、完了サウンド、目標の設定`,
      celebrationImageAlt: `${PULSE_APP_NAME}のセッション完了時のウサギのセレブレーションアニメーション`,
      soundNames: ['Forest Birds', 'Crystal Chime', 'Gentle Marimba', 'Rain Drops', 'Soft Bell', 'Zen Gong'],
      animalNames: ['サル', 'コアラ', 'ネコ', 'キツネ', 'パンダ', 'ウサギ'],
    },
    native: {
      eyebrow: 'ネイティブ設計',
      title: 'Appleデバイスで自然に使えるように作られています。',
      description: `SwiftUI、AppKit、システムの慣習により、${PULSE_APP_NAME}は高速で親しみやすいままです — VoiceOverラベルとReduce Motionのサポートも全体に行き渡っています。`,
      features: [
        {
          title: 'MacメニューバーとiPhoneホーム',
          description: 'Macでは静かなメニューバーコンパニオン、iPhoneでは集中できるホーム体験を提供します。',
        },
        {
          title: '正確さを維持',
          description:
            'スリープ、ウェイク、再起動をまたいでもセッションは正しく保たれ、履歴は実際の終了時刻に記録されます。',
        },
        {
          title: 'オフライン優先の同期',
          description:
            '接続がなくても集中を続けられます。オンラインに戻ると、サインイン済みの変更がアカウントに同期されます。',
        },
        {
          title: 'あなたの言語で',
          description:
            '英語、トルコ語、ドイツ語、日本語、韓国語、簡体字中国語、繁体字中国語の完全UI。システム言語を既定とし、設定で手動変更も可能です。',
        },
      ],
    },
    privacy: {
      eyebrow: 'プライバシー重視の設計',
      title: 'あなたの集中はあなたのもの。',
      description: `${PULSE_APP_NAME}は、履歴をデバイス間で同期するためにアカウントを使用します。同期に必要なものだけを保存し、データを販売せず、分析はフォーカス履歴と分離しています。`,
      items: [
        'AppleまたはGoogleでサインイン',
        '各デバイスでのオフライン優先フォーカス',
        '履歴と同期設定のクラウド同期',
        '広告ネットワークなし',
        '設定からいつでもアカウントを削除',
      ],
    },
    closing: {
      title: '集中して働くための余白を。',
      description: `iPhoneとMac向けにApp Storeで${PULSE_APP_NAME}を入手するか、サポートが必要ならプライバシーポリシーとサポートページをご覧ください。`,
      getSupport: 'サポートを受ける',
      privacy: 'プライバシー',
    },
  },
  support: {
    metaTitle: `${PULSE_APP_NAME} サポート`,
    metaDescription: `iPhoneとMac向け${PULSE_APP_NAME}のサポート、FAQ、アカウントヘルプ — Pomodoro Pro、無料トライアル、Limited Annualオファー、Focus Protection、サインイン、同期、アカウント削除を含む。`,
    title: `${PULSE_APP_NAME} サポート`,
    intro: `${PULSE_APP_NAME}は、iPhoneとMac向けの落ち着いたPomodoroタイマーです。AppleまたはGoogleでサインインすると、Focus Historyをデバイス間で同期できます。iPhoneでは任意のPomodoro Proで、Focus Protection、カスタムタグ、Tag Insights、Stopwatch Mode、Session Notes、Custom Breaksが利用できます。`,
    gettingStarted: {
      title: 'はじめに',
      items: [
        {
          question: 'フォーカスセッションを開始・一時停止・再開・完了するには？',
          answer:
            'Macではメニューバーのアプリアイコンをクリックし、フォーカス、短い休憩、または長い休憩を選んで開始を押します。iPhoneではアプリを開き、セッションを選んで開始を押します。実行中のセッションコントロールから一時停止と再開ができます。カウントダウンが終わるとセッションは自動完了し、コントロールから停止やスキップもできます。タイマー動作中にアプリを離れても構いません。',
        },
        {
          question: 'フォーカスと休憩タイマーの仕組みは？',
          answer:
            'フォーカスは深い作業用です。短い休憩と長い休憩は休息セッションです。アプリは終了後に次を提案できますが、次のセッションを自動開始することはありません。設定でフォーカス、短い休憩、長い休憩の長さを調整するか、プリセットのリズムを選んで分単位で微調整できます。',
        },
        {
          question: 'タグとカスタムタグの仕組みは？',
          answer:
            '組み込みタグでセッションにラベルを付けられます（無料）。iPhoneのPomodoro Proでは、独自の名前と色のカスタムタグが使えます。選んだタグはセッションと一緒に保存され、アカウントと同期できます。',
        },
        {
          question: 'Daily Focus Goalsと連続記録の仕組みは？',
          answer:
            '設定で1日あたりのフォーカスセッション数を設定します。進捗はホームとFocus Historyに表示されます。連続記録は、サインイン時にフォーカスセッションを完了した連続日数を追跡します。',
        },
        {
          question: '生産性統計とセッション履歴の見方は？',
          answer:
            'Focus History / 概要を開き、合計、連続記録、週間進捗、過去のセッションを確認できます。Pomodoro Proでは、iPhoneでより詳しいTag Insightsと追加の履歴フィルタが利用できます。',
        },
        {
          question: '言語と外観の変更方法は？',
          answer:
            '設定で言語（システムまたは対応言語）と外観（システム、ライト、ダーク）を選びます。これらの設定は各デバイスに残り、同期されません。対応言語は英語、トルコ語、ドイツ語、日本語、韓国語、簡体字中国語、繁体字中国語です。',
        },
      ],
    },
    accounts: {
      title: 'アカウント',
      items: [
        {
          question: 'サインインが必要な理由は？',
          answer:
            'アカウントにより、Focus History、Daily Focus Goals、同期設定がiPhoneとMacで保持されます。新規インストールでは、タイマー利用前にサインインが求められます。旧バージョンからアップグレードしたデバイスは、サインインまでローカル履歴を使える場合があります。Pomodoro Proの購入も、サインイン中のアカウントに紐づきます。',
        },
        {
          question: 'AppleまたはGoogleでのサインイン方法は？',
          answer:
            'サインイン画面で「Appleで続ける」または「Googleで続ける」を選び、提供者のフローを完了します。Appleは「メールを非公開」を提示する場合があります。',
        },
        {
          question: 'サインアウトの方法は？',
          answer:
            '設定 → アカウント → サインアウトを開きます。未同期の変更がある場合、先に同期するか、そのままサインアウトするか確認されることがあります。サインアウトしてもアカウントは削除されません。',
        },
        {
          question: '再サインインの方法は？',
          answer:
            'サインイン画面で同じAppleまたはGoogleの方法を使います。クラウド履歴がそのアカウントでそのデバイスに復元されます。',
        },
        {
          question: '別のアカウントを使うとどうなりますか？',
          answer:
            'アカウントごとに履歴は別です。別アカウントへのサインインで、無関係な履歴は統合されません。すでにローカルセッションがあるデバイスで履歴の紐づけを確認する前に、慎重に選んでください。',
        },
        {
          question: 'AppleとGoogleを同じアカウントにリンクできますか？',
          answer:
            'はい。設定 → アカウントで、他のサインイン方法が別アカウントで使われていなければリンクできます。',
        },
      ],
    },
    cloudSync: {
      title: 'クラウド同期',
      items: [
        {
          question: 'デバイス間で同期されるものは？',
          answer:
            'フォーカスと休憩のセッション履歴（選んだタグとセッションメモを含む）、作成したタグ、Daily Focus Goalの記録、連続記録関連のアカウントデータ、およびセッション時間、日次目標、サウンド、アニメーション、完了サウンド、セレブレーション動物などの同期設定。',
        },
        {
          question: 'インターネットがない場合は？',
          answer:
            'サインイン後はオフラインでもタイマーを使い続けられます。新しいセッションと変更は、接続が使えるまでデバイスに残ります。',
        },
        {
          question: 'オンラインに戻るとどうなりますか？',
          answer:
            'アプリは保留中の変更をアカウントと同期します。同期はオフライン優先で最終的に一貫します — 即時のリアルタイム共同作業ではありません。',
        },
        {
          question: 'iPhoneとMacで同じアカウントを使うには？',
          answer:
            '両方のデバイスにアプリをインストールし、同じAppleまたはGoogleアカウントでサインインします。復元が終わると、Focus Historyが両方に表示されることがあります。',
        },
        {
          question: '履歴が見つからない場合は？',
          answer:
            '同じアカウントにサインインしていることを確認し、復元/同期の完了を待ってからFocus Historyを再確認してください。別アカウントにサインインした場合は、そのアカウント自身の履歴が表示されます。',
        },
      ],
    },
    migration: {
      title: '旧バージョンからのアップグレード',
      items: [
        {
          question: '既存のローカル履歴はどうなりますか？',
          answer:
            '既存のローカル履歴は無断で削除されません。サインイン後、その履歴をアカウントに追加する前にアプリが確認します。',
        },
        {
          question: '履歴の引き継ぎ方法は？',
          answer:
            '履歴を所有すべきアカウントにサインインし、「履歴を追加」画面を確認してから「このアカウントに追加」を選びます。表示されたアカウントが違う場合は別のアカウントを使ってください。セッションを後から別アカウントへ移すことはできません。',
        },
        {
          question: 'デバイスとアカウントの設定が異なる場合は？',
          answer:
            'このデバイスの設定を残すか、アカウント設定を使うか尋ねられることがあります。言語、外観、通知設定、Focus Protectionの選択はデバイスローカルのままです。',
        },
      ],
    },
    notifications: {
      title: '通知とLive Activities',
      items: [
        {
          question: 'iPhoneで通知を有効にするには？',
          answer:
            '設定 → 通知を開き、有効にするを選ぶか、以前に拒否した場合はシステムの設定を開きます。セッション終了アラートには通知の許可が必要です。',
        },
        {
          question: 'Live Activitiesの仕組みは？',
          answer:
            '対応するiPhoneでは、任意のLive Activityがロック画面とDynamic Islandにアクティブなセッションを表示できます。設定でLive Activitiesのオン/オフを切り替えられます。Live Activitiesは当社サーバーからのプッシュ通知を使いません。',
        },
        {
          question: '通知が無効な場合は？',
          answer:
            '通知の許可がないと、セッション終了アラートは表示できません。設定 → 通知 → 設定を開くから、iOSの設定で有効にしてください。',
        },
      ],
    },
    pomodoroPro: {
      title: 'Pomodoro Pro',
      items: [
        {
          question: '無料とPomodoro Proの違いは？',
          answer:
            '無料版にはフォーカスと休憩タイマー、組み込みタグ、Focus Historyの基本、Daily Focus Goals、連続記録、サインイン、クラウド同期が含まれます。iPhoneのPomodoro Proでは、Focus Protection、カスタムタグ、Tag Insights、Stopwatch Mode、Session Notes、Custom Breaks、過去セッションの編集や削除、より詳しい統計フィルタが利用できます。',
        },
        {
          question: '購入オプションは何がありますか？',
          answer:
            'Pomodoro Proは、月額サブスクリプション、年額サブスクリプション、利用可能な場合のLimited Annualオファー、またはLifetimeの買い切りとして提供されます。サブスクリプションは、現在の期間終了の少なくとも24時間前にキャンセルしない限り自動更新されます。Lifetimeは一度だけ課金され、サブスクリプションではありません。',
        },
        {
          question: 'Limited Annualオファーとは？',
          answer:
            'Limited Annualは、Proを購入したことがない対象ユーザーに、期間限定で表示される場合がある割引年額のPomodoro Proサブスクリプションです。通常の年額プランと同じPro権利を付与します。提供は期間限定で、すべてのアカウントに保証されるものではありません。',
        },
        {
          question: 'サブスクリプションに無料トライアルは含まれますか？',
          answer:
            '対象の月額または年額サブスクリプションには無料トライアルが含まれる場合があります。ペイウォールは、Apple Accountでの対象確認ができた場合のみ無料トライアルを表示し、トライアル期間は確認前にペイウォールとApp Storeの購入シートに表示されます。Lifetimeにはトライアルは含まれません。対象外の場合は通常価格が表示されます。',
        },
        {
          question: 'Pomodoro Proの購入や確認はどこで？',
          answer:
            'iPhoneで設定 → Pomodoro Proを開きます。サインインが必要です。Proはサインインしたすべてのデバイスでアカウントに紐づきます。',
        },
        {
          question: '購入の復元方法は？',
          answer:
            'ペイウォールまたは設定 → Pomodoro Proで「購入を復元」を使います。同じApple Accountでの購入は、サインイン中のアカウントに移ります。見つからない場合は、Proを購入したApple Accountを使っていることを確認し、オンラインで再試行してください。',
        },
      ],
    },
    purchases: {
      title: 'サブスクリプションと購入',
      items: [
        {
          question: 'サブスクリプションの管理やキャンセル方法は？',
          answer:
            'サブスクリプションはAppleが課金します。iPhoneで設定 → Pomodoro Pro → サブスクリプションを管理を開くか、設定 → [自分の名前] → サブスクリプションでアプリを選びます。次回課金を避けるには、更新の少なくとも24時間前にキャンセルしてください。アプリやPomodoroアカウントの削除ではサブスクリプションはキャンセルされません。',
        },
        {
          question: '返金の申請方法は？',
          answer:
            '返金はAppleが対応します。reportaproblem.apple.comにアクセスし、購入に使ったApple Accountでサインインして取引を見つけ、返金リクエストを送信してください。当社ではApp Storeの返金を処理できません。',
        },
        {
          question: '購入に失敗したりProが解放されない場合は？',
          answer:
            'サインインしたままネットワーク接続を確認し、再試行してください。支払いが保留中（例: 承認して購入）の場合、承認後にProが解放されます。すでに支払済みなら「購入を復元」を使ってください。有効なサブスクリプションでの支払い問題は、App Store設定で支払い方法を更新してください。',
        },
        {
          question: 'サブスクリプション有効中にLifetimeを買うとどうなりますか？',
          answer:
            'LifetimeはProを恒久的に解放しますが、既存のサブスクリプションは自動キャンセルされません。再課金されないよう、App Storeのサブスクリプション設定で自動更新をオフにしてください。',
        },
      ],
    },
    focusProtection: {
      title: 'Focus Protection',
      items: [
        {
          question: 'Focus Protectionとは？',
          answer:
            'Focus ProtectionはiPhone向けのPomodoro Pro機能です。AppleのScreen Time APIを使い、フォーカスセッション中に選んだアプリ、カテゴリ、ウェブサイトをブロックします。休憩はブロックされません。セッション終了時にブロックされたアプリは自動で解除されます。ブロックの選択はそのiPhoneに留まり、アップロードや同期はされません。',
        },
        {
          question: '設定方法は？',
          answer:
            'Proが有効な状態で設定 → Focus Protectionを開きます。求められたらScreen Timeアクセスを許可し、ブロック対象を選んでからFocus Protectionをオンにします。フォーカスセッションを開始するとシールドが適用されます。',
        },
        {
          question: 'オフにする方法やアプリのロック解除は？',
          answer:
            '設定のFocus Protectionを開いて機能をオフにするか、セッション後のシールド画面の解除オプションを使います。アプリのScreen Timeアクセスを完全に削除するには、iOS設定 → スクリーンタイム → スクリーンタイムにアクセスできるAppへ進みます。',
        },
        {
          question: 'Focus Protectionが動作しない場合は？',
          answer:
            'Proが有効であること、Screen Timeアクセスが許可されていること、ブロックするアプリやカテゴリを選んでいることを確認してください。Focus Protectionはフォーカスセッション中のみ適用され、休憩中には適用されません。システム設定でアクセスが取り消された場合は、アプリを開いて再度許可してください。権限変更後はiPhoneの再起動が役立つことがあります。',
        },
      ],
    },
    accountPrivacy: {
      title: 'アカウントとプライバシー',
      items: [
        {
          question: 'アカウントの削除方法は？',
          answer:
            'サインインし、設定 → アカウント → アカウントを削除を開き、確認します。アカウントと同期されたフォーカス履歴は、稼働中のデータベースから完全に削除されます。これは元に戻せません。削除にはネットワーク接続が必要です。アカウント削除ではApp Storeサブスクリプションはキャンセルされません — App Store設定で管理してください。',
        },
        {
          question: 'アカウント削除の影響は？',
          answer:
            'そのアカウントの同期クラウドデータが削除され、保存されている場合はSign in with Appleの認可が取り消され、アカウントに紐づく購入記録の削除が購入プロバイダに依頼され、削除を実行したデバイスからそのアカウントのデータが削除されます。他のデバイス上のローカルコピーは同期できなくなります。必要に応じてアプリを削除するか、そこで消去してください。プロバイダのバックアップは削除データを限定的な復旧期間保持する場合があります。Appleは独自のApp Store取引記録を保持します。',
        },
        {
          question: 'データの書き出し方法は？',
          answer:
            '設定 → アカウント → データを書き出すで、セッション、日次目標、同期設定、アカウントプロフィールを含むJSONファイルが保存されます。未紐づけのローカルデータはサインイン画面からも書き出せます。',
        },
        {
          question: 'プライバシーポリシーはどこにありますか？',
          answer:
            '製品サイトからプライバシーポリシーを開くか、本サイトの製品ページのプライバシーリンクを使ってください。',
        },
      ],
    },
    requirements: {
      title: '動作環境',
      body: 'iPhone: iOS 17以降。Mac: macOS 14.6以降。Pomodoro Proの購入、無料トライアル、Limited Annualオファー、Focus ProtectionはiPhoneで利用できます。',
    },
    contact: {
      title: 'お問い合わせ',
      body: 'ヘルプ、フィードバック、不具合報告はこちら:',
    },
    privacyPolicyLink: 'プライバシーポリシー',
  },
  privacy: {
    metaTitle: `${PULSE_APP_NAME} プライバシーポリシー`,
    metaDescription: `${PULSE_APP_NAME}のプライバシーポリシー。AppleおよびGoogleでのサインイン、クラウド同期、RevenueCat経由のPomodoro Pro購入、Focus Protection、分析、アカウント削除、MacとiPhoneでのプライバシー権を扱います。`,
    title: 'プライバシーポリシー',
    subtitle: `${PULSE_APP_NAME} — MacとiPhone向けPomodoroタイマー`,
    lastUpdated: '最終更新日: 2026年11月9日',
    summary: {
      title: '概要',
      body: `AppleまたはGoogleでサインインすると、アカウントがフォーカス履歴、日次目標、タイマー設定をMacとiPhone間で同期します。そのために必要なものだけを保存します。メールアドレス、アカウント識別子、作成したフォーカスデータです。販売せず、広告にも使わず、分析プロバイダとも共有しません。iPhoneでPomodoro Proを購入した場合 — 月額、年額、Limited Annual、Lifetime、または対象の無料トライアルを含む — 購入プロバイダのRevenueCatが購入と権利の履歴をアカウントに紐づけ、サインインしたすべてのデバイスでProが使えるようにします。Focus Protectionのアプリ選択はiPhoneから外に出ません。設定からいつでもデータを書き出したりアカウントを削除したりできます。別途、アプリは集中フロー改善のため、匿名でプライバシーに配慮した利用分析を送信する場合があります。`,
    },
    localData: {
      title: 'デバイスに保存されるデータ',
      body: 'タイマー設定、セッション設定、フォーカス履歴は、標準のシステムストレージでMacまたはiPhoneにローカル保存され、オフラインでもタイマーが動作します。デバイスにサインインした各アカウントは、それぞれ別のローカルストアを持ちます。サインインセッションはシステムのキーチェーンに保持されます。言語、外観、ログイン時に起動、通知設定、Live Activity設定、Focus Protectionの選択は各デバイスに留まり、同期されません。フォーカス履歴の内容自体は分析プロバイダにアップロードされません。',
      migrationSafety:
        'すでにフォーカス履歴があるデバイスで初めてサインインすると、アプリはその履歴をアカウントに移す前に確認します。サーバー上で移動が確認されるまで、さらに90日間、アプリは以前のローカルコピーとデバイス上のローカルバックアップファイルを安全策として保持し、その後自動で削除します。',
    },
    accountAndSync: {
      title: 'アカウントと同期データ',
      intro: 'サインインすると、次を処理します:',
      items: [
        '連絡先情報: Sign in with Apple（Hide My Emailによるプライベートリレーアドレスの場合あり）またはGoogleが共有するメールアドレス。氏名は求めません。',
        '識別子: サインイン時に作成されるアカウントID、および各インストール用のランダムID。同期と、どのデバイスが変更したかの識別のみに使用します。',
        'フォーカスデータ: 完了・削除されたフォーカスと休憩セッション（時刻、時間、ローカルの日付とタイムゾーン、選んだタグ、セッションメモ）、作成したタグ（名前と色）、日次目標、最高連続記録、同期設定（セッション時間、日次目標、サウンド、アニメーション、完了サウンド、セレブレーション動物）。',
      ],
      closing:
        'これらのデータは同期、履歴、アカウント機能の提供のみに使われます。アカウントに紐づき、トラッキングには使われず、下記の処理者以外の第三者とは共有されません。',
    },
    processors: {
      title: '処理者と保存場所',
      bodyBeforeSupabase: 'アカウントと同期データは',
      bodyAfterSupabase:
        '（データベースと認証）で欧州連合内に保存されます。サインインは',
      orWord: 'または',
      bodyAfterProviders:
        'が、選択した方法に応じて処理します。Pomodoro Proの購入と権利は',
      bodyAfterRevenueCat:
        'で管理されます（下記の購入を参照）。データは転送時に暗号化され、各アカウントが自分のデータだけを読めるようアクセスが制限されています。',
    },
    purchases: {
      title: '購入（iPhone）',
      bodyBeforeRevenueCat:
        'Pomodoro ProはApp Storeで月額、年額、Limited Annual（提供時）、Lifetimeの製品として販売されます。対象サブスクリプションには、購入前に表示される無料トライアルが含まれる場合があります。支払いはAppleが処理し、支払いカード情報は当社では見えません。サインインしたすべてのデバイスでProを解放するため、アプリはアカウントIDを',
      bodyAfterRevenueCat:
        'と共有し、購入と権利の履歴（購入した製品、購入・更新日、トライアルまたはサブスクリプションの状態、Lifetimeの解放）をそのIDに紐づけます。このデータはProアクセスの付与と復元のみに使われ、トラッキングには使われず、分析プロバイダとも共有されません。Proにはサインイン済みアカウントが必要で、サインイン前にRevenueCatへは何も送信されません。',
    },
    focusProtection: {
      title: 'Focus Protection（iPhone）',
      body: 'Focus Protectionは、AppleのScreen Timeフレームワーク（Family Controls、Managed Settings、Device Activityを含む）を使い、フォーカスセッション中に選んだアプリ、カテゴリ、ウェブサイトをブロックします。Appleは選択内容について不透明なトークンのみをアプリに渡します。どのアプリやウェブサイトを選んだか、使用状況、その他のScreen Time利用情報は当社では見えません。選択内容はそのiPhoneに留まり、当社サーバーへアップロードや同期されることはなく、分析プロバイダにも送信されません。Screen Timeデータを収集・販売しません。アプリ内でいつでもFocus Protectionをオフにでき、設定 → スクリーンタイム → スクリーンタイムにアクセスできるAppからアプリのアクセスを削除できます。',
    },
    retention: {
      title: '保持、バックアップ、削除',
      items: [
        '同期データはアカウントが存在する限り保持されます。',
        'アカウントを削除（設定 → アカウント → アカウントを削除）すると、アカウントとすべての同期データが稼働中のデータベースから完全に削除され、保存されている場合はアプリのSign in with Apple認可が取り消され、RevenueCatにアカウントに紐づく購入記録の削除を依頼し、削除を実行したデバイスからそのアカウントのデータが削除されます。他のデバイス上のローカルコピーは同期できなくなり、それらのデバイスでアプリを削除するか、サインイン画面で提示されたときに削除するまで残ります。',
        'データベースプロバイダは日次バックアップを7日間保持します。削除データは期限切れまでそれらのバックアップに残る場合があります。バックアップは災害復旧のみに使われます。同じ目的で、暗号化された週次バックアップを最大90日間保持する場合があります。',
        'アカウント削除ではApp Storeサブスクリプションはキャンセルされません。Apple Account設定で管理またはキャンセルしてください。Appleは独自のApp Store取引記録を保持します。',
        'サインアウトでは何も削除されません。未同期の変更は、同じアカウントが再度サインインするまでデバイスに残ります。',
        '分析記録はTelemetryDeckの保持方針に従って処理され、フォーカス履歴の復元には使われません。',
      ],
    },
    export: {
      title: '書き出し',
      body: '設定 → アカウント → データを書き出すで、セッション、日次目標、同期設定、アカウントプロフィールを含むJSONファイルが保存されます。まだアカウントに移されていないデータは、サインイン画面からも書き出せます。',
    },
    analytics: {
      title: '分析',
      introBeforeLink: 'アプリの利用状況を把握するため、プライバシー重視の分析サービス',
      introAfterLink:
        'を使用します（例: 開始または完了したフォーカス/休憩セッション、履歴の表示、設定変更、通知許可の結果、オンボーディング完了、選択したレビューや移行の診断）。信号には自由記述テキスト、氏名、メール、セッションメモ、フォーカス履歴の内容は含まれません。',
      identifier:
        'TelemetryDeckはハッシュ化されたデバイススコープの識別子でインストールを識別し、個人を特定しないデバイスメタデータ（モデル、OSバージョン、ロケールなど）を付与する場合があります。このデータは分析のみに使われ、当社が本人と紐づけることはなく、他社のアプリやウェブサイト横断のトラッキングにも使いません。',
      learnMore: '詳細:',
      faqLabel: 'TelemetryDeck プライバシーFAQ',
    },
    appStoreUpdates: {
      title: 'App Storeのアップデート',
      body: '設定で「アップデートを確認」を使うと、App Storeに新しいバージョンがあるか確認するため、アプリがAppleに問い合わせることがあります。',
    },
    launchAtLogin: {
      title: 'ログイン時に起動（Mac）',
      body: 'Macの設定で「ログイン時に起動」を有効にすると、アプリはmacOSのシステムAPIを使ってログイン項目として登録します。この設定はユーザーが管理し、いつでも無効にできます。',
    },
    notifications: {
      title: '通知とLive Activities（iPhone）',
      body: 'iPhoneでは、任意のローカル通知とLive Activitiesにより、セッション終了の把握や、ロック画面とDynamic Islandでのアクティブセッション表示ができます。関連機能を有効にする際に許可が求められます。通知とLive Activityの内容はデバイスに留まり、当社サーバーには送信されません。',
    },
    whatWeDoNotDo: {
      title: '行わないこと',
      items: [
        '広告ネットワークなし',
        '個人情報の販売なし',
        '分析のための連絡先、写真、精密な位置情報、カメラ、マイクへのアクセスなし',
        'デバイス上のFocus Protection向けにAppleが提供する不透明トークンを超えるScreen Time利用詳細の収集やアップロードなし',
      ],
    },
    children: {
      title: '子ども',
      body: `${PULSE_APP_NAME}は、上記のとおりアカウントの同期に必要な範囲を超えて、子どもから故意に個人情報を収集しません。分析信号は匿名で、個人的な内容を含みません。`,
    },
    privacyRights: {
      title: 'プライバシーに関する権利（GDPRおよびKVKKを含む）',
      intro:
        'お住まいの地域によっては、EU/英国の一般データ保護規則（GDPR）、トルコの個人データの保護に関する法律（KVKK）、および類似の法令に基づく権利がある場合があります。適用法の範囲内で、次の権利を含むことがあります:',
      items: [
        'アカウントについて当社が保有する個人データへのアクセスを求める',
        '不正確な個人データの訂正を求める',
        'アプリからデータを書き出す（設定 → アカウント → データを書き出す）',
        'アカウントと同期データを削除する（設定 → アカウント → アカウントを削除）、または削除の支援を求める',
        '法令がその権利を認める場合、特定の処理への異議申立てや制限',
        '地域のデータ保護当局への苦情申立て',
      ],
      closing:
        'アカウントと同期データは、処理者Supabaseにより欧州連合内に保存されます。これらの権利を行使するには、利用可能なアプリ内コントロールを使うか、下記のメールでご連絡ください。検証済みのリクエストには、適用法に従って対応します。個人データは販売しません。',
    },
    changes: {
      title: '変更',
      body: '本ポリシーが変更される場合、新しい「最終更新日」とともに更新版がこのURLに掲載されます。',
    },
    contact: {
      title: 'お問い合わせ',
      body: '本ポリシーまたはプライバシー権に関するご質問:',
    },
  },
}
