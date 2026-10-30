import { PULSE_APP_NAME } from '../../constants'
import type { PulseMessages } from './types'

export const zhHantMessages: PulseMessages = {
  languageLabel: '頁面語言',
  video: {
    ariaLabel: `${PULSE_APP_NAME} 產品演示`,
    playLabel: '播放演示',
    unsupported: '您的瀏覽器不支援嵌入式影片。',
  },
  landing: {
    metaTitle: `${PULSE_APP_NAME} — 適用於 iPhone 和 Mac 的專注計時器`,
    metaDescription: `${PULSE_APP_NAME} 是一款平靜的 Pomodoro 計時器，適用於 iPhone 和 Mac，提供專注歷史、每日專注目標、Apple 與 Google 登錄，以及離線優先的多設備同步。`,
    heroImageAlt: `${PULSE_APP_NAME} 專注計時器與每周歷史概覽`,
    backToProjects: '返回項目',
    availableOnAppStore: 'App Store 上提供',
    availabilityLine: 'iOS 17+ · macOS 14.6+',
    eyebrow: '適用於 iPhone 和 Mac 的專注計時器',
    tagline: '一款溫和的 Pomodoro 計時器，幫助你在 iPhone 和 Mac 菜單欄中專注。',
    description: `開始專注會話、休息，並讓歷史記錄隨身而行。使用 Apple 或 Google 登錄，每日專注目標、專注歷史與同步偏好會隨帳戶在 iPhone 與 Mac 間保持一致 — 計時器離線仍可工作。`,
    downloadCta: '在 App Store 下載',
    watchDemo: '觀看演示',
    supportCta: '支援',
    stats: {
      platformLabel: '平臺',
      platformValue: 'iPhone 與 Mac',
      languagesLabel: '語言',
      languagesValue: '48 種語言',
      dataLabel: '同步',
      dataValue: '離線優先',
      builtWithLabel: '技術棧',
      builtWithValue: 'SwiftUI + AppKit',
    },
    demo: {
      eyebrow: '更安靜的專注方式',
      title: '需要時它在，不需要時它不在。',
      description: `在 Mac 上，從菜單欄打開 ${PULSE_APP_NAME}，選擇會話並關閉彈出窗口。在 iPhone 上，從首頁開始專注，在支援的設備上可通過 Live Activities 繼續。計時器在你工作時持續運行。`,
      caption:
        '專注與休息計時、每日專注目標、專注歷史、連續記錄、48 種語言本地化，以及可選的完成提醒。',
    },
    rhythm: {
      eyebrow: '由你掌控的節奏',
      title: '專注、暫停、恢復、重複。',
      description: `${PULSE_APP_NAME} 會建議下一步，但絕不會替你開始會話。每項時長都可按你的日程調整。`,
    },
    featureShowcases: [
      {
        title: '專注',
        badge: '1–120 分鐘',
        description:
          '工作時倒計時安靜運行。暫停、重置或跳過 — 在 iPhone 和 Mac 上你始終掌控一切。',
        imageFile: 'focus-running.png',
        alt: `${PULSE_APP_NAME} 專注會話運行中，含暫停控制項與倒計時`,
      },
      {
        title: '菜單欄',
        badge: 'Mac',
        description:
          '在 Mac 上，可在菜單欄顯示或隱藏剩餘時間。固定寬度的狀態項不會擠動彈出窗口，最長可顯示 120:00。',
        imageFile: 'menubar.png',
        alt: `${PULSE_APP_NAME} 倒計時顯示在 macOS 菜單欄中`,
      },
      {
        title: '個性化',
        badge: '你的規則',
        description:
          '靈活時長、每日專注目標、完成音效與動畫、48 種界面語言，以及外觀偏好。',
        imageFile: 'settings.png',
        alt: `${PULSE_APP_NAME} 時長、完成提醒、語言與目標設定`,
      },
    ],
    history: {
      eyebrow: '無壓力的進度',
      title: '看見努力在累積。',
      description:
        '打開專注歷史查看總計與連續記錄。登錄後，歷史可在 iPhone 與 Mac 間同步，進度隨你而行。',
      items: ['總專注時長', '完成的會話數', '當前連續記錄', '最佳連續記錄', '每日專注目標'],
      imageAlt: `${PULSE_APP_NAME} 每周專注歷史，含會話數、專注小時與連續記錄`,
    },
    feedback: {
      eyebrow: '溫和反饋，按你的方式',
      title: '讓完成更有成就感。',
      description: `可從六種平靜的完成音效與六種動物慶祝動畫中選擇，或分別關閉。${PULSE_APP_NAME} 在專注、短休息或長休息結束時顯示合適的信息。`,
      items: [
        '按會話類型顯示的完成標題與副標題',
        '48 種界面語言，預設跟隨系統語言',
        '各設備上的語言與外觀偏好',
        'iPhone 上可選的激勵提醒',
      ],
      settingsImageAlt: `${PULSE_APP_NAME} 時長、語言、完成音效與目標設定`,
      celebrationImageAlt: `${PULSE_APP_NAME} 會話完成時的兔子慶祝動畫`,
      soundNames: ['森林鳥鳴', '水晶風鈴', '輕柔馬林巴', '雨滴', '柔和鈴鐺', '禪意鑼聲'],
      animalNames: ['猴子', '考拉', '貓', '狐狸', '熊貓', '兔子'],
    },
    native: {
      eyebrow: '原生設計',
      title: '為 Apple 設備而生。',
      description: `SwiftUI、AppKit 與系統規範讓 ${PULSE_APP_NAME} 快速且熟悉 — 全程支援 VoiceOver 標籤與「減少動態效果」。`,
      features: [
        {
          title: 'Mac 菜單欄與 iPhone 首頁',
          description: 'Mac 上安靜的菜單欄伴侶，iPhone 上專注的首頁體驗。',
        },
        {
          title: '保持準確',
          description:
            '睡眠、喚醒與重新啟動後會話仍正確，歷史在實際截止時刻記錄。',
        },
        {
          title: '離線優先同步',
          description:
            '無網絡也能繼續專注。恢復在線後，已登錄的更改會同步到你的帳戶。',
        },
        {
          title: '用你的語言',
          description:
            '完整 48 種界面語言，預設系統語言，可在設定中手動覆蓋。',
        },
      ],
    },
    privacy: {
      eyebrow: '隱私優先',
      title: '你的專注屬於你自己。',
      description: `${PULSE_APP_NAME} 使用帳戶以便歷史在設備間同步。我們僅存儲同步所需資料，不出售你的資料，並將分析與專注歷史分離。`,
      items: [
        '使用 Apple 或 Google 登錄',
        '各設備離線優先的專注體驗',
        '歷史與同步偏好的雲同步',
        '無廣告網絡',
        '隨時可在設定中刪除帳戶',
      ],
    },
    closing: {
      title: '為專注工作留出空間。',
      description: `在 App Store 獲取適用於 iPhone 和 Mac 的 ${PULSE_APP_NAME}，或閱讀隱私政策與支援頁面獲取幫助。`,
      getSupport: '獲取支援',
      privacy: '隱私',
    },
  },
  support: {
    metaTitle: `${PULSE_APP_NAME} 支援`,
    metaDescription: `${PULSE_APP_NAME} 在 iPhone 和 Mac 上的支援、常見問題與帳戶幫助 — 包括 Pomodoro Pro、購買、Focus Protection、登錄、同步與帳戶刪除。`,
    title: `${PULSE_APP_NAME} 支援`,
    intro: `${PULSE_APP_NAME} 是適用於 iPhone 和 Mac 的平靜 Pomodoro 計時器。使用 Apple 或 Google 登錄可在設備間同步專注歷史。在 iPhone 上，可選的 Pomodoro Pro 可解鎖 Focus Protection、自定義標籤與 Tag Insights。`,
    gettingStarted: {
      title: '開始使用',
      items: [
        {
          question: '如何開始專注會話？',
          answer:
            '在 Mac 上，點擊菜單欄中的應用圖標，選擇專注、短休息或長休息，然後按開始。在 iPhone 上，打開應用，在首頁選擇會話並按開始。計時器運行時可以離開應用。',
        },
        {
          question: '如何更改專注與休息時長？',
          answer:
            '打開設定並調整專注、短休息與長休息的長度。也可選擇預設節奏，再微調分鐘數。',
        },
        {
          question: '如何配置每日專注目標？',
          answer:
            '在設定中設定每天想要的專注會話數。進度會顯示在首頁與專注歷史中。',
        },
        {
          question: '如何查看專注歷史？',
          answer:
            '從應用中打開專注歷史（Mac 上可從彈出窗口或狀態菜單）。你會看到總計、連續記錄與每周進度。',
        },
        {
          question: '如何更改語言與外觀？',
          answer:
            '在設定中選擇語言（系統或支援的語言）與外觀（系統、淺色或深色）。這些偏好保留在各設備上，不會同步。',
        },
      ],
    },
    accounts: {
      title: '帳戶',
      items: [
        {
          question: '為什麼需要登錄？',
          answer:
            '帳戶讓專注歷史、每日專注目標與同步偏好隨你在 iPhone 與 Mac 間保持一致。新安裝會要求在使用計時器前登錄。從舊版本升級的設備在登錄前可能仍可使用本地歷史。Pomodoro Pro 購買也會保留在你已登錄的帳戶中。',
        },
        {
          question: '如何使用 Apple 或 Google 登錄？',
          answer:
            '在登錄界面選擇「通過 Apple 繼續」或「通過 Google 繼續」並完成提供商流程。Apple 可能提供「隱藏我的電子郵件」。',
        },
        {
          question: '如何退出登錄？',
          answer:
            '打開 設定 → 帳戶 → 退出登錄。若有尚未同步的更改，應用可能要求先同步或仍要退出。退出登錄不會刪除你的帳戶。',
        },
        {
          question: '如何重新登錄？',
          answer:
            '在登錄界面使用相同的 Apple 或 Google 方式。該設備上雲端的歷史會恢復到該帳戶。',
        },
        {
          question: '使用不同帳戶會怎樣？',
          answer:
            '每個帳戶有獨立歷史。登錄另一帳戶不會合併無關歷史。在已有本地會話的設備上確認歷史歸屬前請謹慎選擇。',
        },
        {
          question: '能否將 Apple 與 Google 關聯到同一帳戶？',
          answer:
            '可以。在 設定 → 帳戶 中，當另一種登錄方式未被其他帳戶使用時，可關聯該方式。',
        },
      ],
    },
    cloudSync: {
      title: '雲同步',
      items: [
        {
          question: '設備間同步什麼？',
          answer:
            '專注與休息會話歷史（含所選標籤）、你創建的標籤、每日專注目標記錄、與連續記錄相關的帳戶資料，以及同步偏好（會話長度、每日目標、聲音、動畫、完成音效、慶祝動物等）。',
        },
        {
          question: '沒有網際網路時會怎樣？',
          answer:
            '登錄後，可離線繼續使用計時器。新會話與更改會保留在設備上，直到有可用連接。',
        },
        {
          question: '恢復在線後會怎樣？',
          answer:
            '應用會將待處理的更改與帳戶同步。同步為離線優先、最終一致 — 並非即時實時協作。',
        },
        {
          question: '如何在 iPhone 與 Mac 上使用同一帳戶？',
          answer:
            '在兩臺設備上安裝應用並使用相同的 Apple 或 Google 帳戶登錄。恢復完成後，專注歷史可能出現在兩臺設備上。',
        },
        {
          question: '如果歷史缺失怎麼辦？',
          answer:
            '確認已登錄同一帳戶，等待恢復/同步完成後再查看專注歷史。若登錄了不同帳戶，將顯示該帳戶自己的歷史。',
        },
      ],
    },
    migration: {
      title: '從舊版本升級',
      items: [
        {
          question: '現有本地歷史會怎樣？',
          answer:
            '現有本地歷史不會被靜默刪除。登錄後，應用會在將該歷史加入帳戶前詢問你。',
        },
        {
          question: '應如何認領歷史？',
          answer:
            '登錄應擁有歷史的帳戶，查看「添加你的歷史」界面，然後選擇「添加到此帳戶」。若顯示的帳戶不對，請換用其他帳戶。會話之後無法移到其他帳戶。',
        },
        {
          question: '若設備與帳戶設定不同怎麼辦？',
          answer:
            '應用可能詢問保留本設備設定還是使用帳戶設定。語言、外觀、通知與激勵提醒保留在設備本地。',
        },
      ],
    },
    notifications: {
      title: '通知',
      items: [
        {
          question: '如何在 iPhone 上啟用通知？',
          answer:
            '打開 設定 → 通知 並選擇啟用，或若此前已拒絕權限則打開系統設定。',
        },
        {
          question: '激勵提醒如何工作？',
          answer:
            '在 iPhone 上，打開 設定 → 激勵提醒，在允許通知後開啟。可暫停或設定安靜時段。可選，預設關閉。',
        },
        {
          question: '若通知已禁用怎麼辦？',
          answer:
            '會話結束提醒與激勵提醒需要通知權限。通過 設定 → 通知 → 打開設定 在 iOS 設定中開啟。',
        },
        {
          question: 'Live Activities 如何工作？',
          answer:
            '在支援的 iPhone 上，可選的 Live Activity 可在鎖定螢幕與動態島上顯示進行中的會話。啟用相關功能時會請求權限。',
        },
      ],
    },
    pomodoroPro: {
      title: 'Pomodoro Pro',
      items: [
        {
          question: '什麼是 Pomodoro Pro？',
          answer:
            'Pomodoro Pro 是 iPhone 上可選的應用內購買。它可解鎖 Focus Protection、自定義標籤（你自己的名稱與顏色）以及 Tag Insights（按標籤查看每周與每月專注時長）。計時器、內置標籤、專注歷史與同步無需 Pro 也可使用。',
        },
        {
          question: '有哪些購買選項？',
          answer:
            'Pomodoro Pro 提供月度訂閱、年度（Annual）訂閱或 Lifetime 一次性購買。除非在當前周期結束前至少 24 小時取消，否則訂閱會自動續期。Lifetime 僅收費一次，不是訂閱。',
        },
        {
          question: '在哪裡購買或查看 Pomodoro Pro？',
          answer:
            '在 iPhone 上打開 設定 → Pomodoro Pro，或點擊首頁上的保護晶片。你必須已登錄。Pro 會隨你在每臺登錄設備上的帳戶保留。',
        },
        {
          question: '如何恢復購買？',
          answer:
            '在付費牆或 設定 → Pomodoro Pro 中使用「恢復購買」。使用同一 Apple 帳戶進行的購買會關聯到你當前登錄的帳戶。若未找到，請確認使用的是購買 Pro 時的 Apple 帳戶，並在聯網時重試。',
        },
      ],
    },
    purchases: {
      title: '訂閱與購買',
      items: [
        {
          question: '如何管理或取消訂閱？',
          answer:
            '訂閱由 Apple 計費。在 iPhone 上打開 設定 → Pomodoro Pro → 管理訂閱，或前往 設定 → [你的姓名] → 訂閱 並選擇本應用。請在續訂前至少 24 小時取消，以免產生下一筆費用。刪除應用或 Pomodoro 帳戶不會取消訂閱。',
        },
        {
          question: '如何申請退款？',
          answer:
            '退款由 Apple 處理。存取 reportaproblem.apple.com，使用購買時的 Apple 帳戶登錄，找到交易並提交退款請求。我們無法自行處理 App Store 退款。',
        },
        {
          question: '若購買失敗或 Pro 未解鎖怎麼辦？',
          answer:
            '保持登錄，檢查網絡連接並重試。若付款待處理（例如「請求購買」），批准後會解鎖 Pro。若已付款，請使用「恢復購買」。若有效訂閱存在付款問題，請在 App Store 設定中更新付款方式。',
        },
        {
          question: '在訂閱仍有效時購買 Lifetime 會怎樣？',
          answer:
            'Lifetime 會永久解鎖 Pro，但現有訂閱不會自動取消。請在 App Store 訂閱設定中關閉自動續訂，以免再次扣費。',
        },
      ],
    },
    focusProtection: {
      title: 'Focus Protection',
      items: [
        {
          question: '什麼是 Focus Protection？',
          answer:
            'Focus Protection 是 iPhone 上的 Pomodoro Pro 功能。它使用 Apple 的 Screen Time API，在專注會話進行時屏蔽你選擇的應用、類別或網站。休息期間從不屏蔽。會話結束後，被屏蔽的應用會自動解鎖。',
        },
        {
          question: '如何設定？',
          answer:
            'Pro 生效後，點擊首頁上的 Focus Protection 晶片（或從設定中打開）。在提示時允許 Screen Time 存取，選擇要屏蔽的內容，然後開啟 Focus Protection。開始專注會話以應用屏蔽。',
        },
        {
          question: '如何關閉或解鎖應用？',
          answer:
            '打開 Focus Protection 面板並選擇「立即關閉」，或關閉該功能。會話結束後也可在屏蔽界面使用「解鎖應用」。要完全移除應用的 Screen Time 存取權限，請前往 iOS 設定 → 螢幕使用時間 → 具有螢幕使用時間存取權限的應用。',
        },
        {
          question: '若 Focus Protection 無法正常工作怎麼辦？',
          answer:
            '請確認 Pro 已生效、已允許 Screen Time 存取，且已選擇要屏蔽的應用或類別。Focus Protection 僅在專注會話期間生效，休息期間不生效。若在系統設定中撤銷了存取權限，請打開應用並重新允許。更改權限後重啟 iPhone 可能有幫助。',
        },
      ],
    },
    accountPrivacy: {
      title: '帳戶與隱私',
      items: [
        {
          question: '如何刪除帳戶？',
          answer:
            '登錄後打開 設定 → 帳戶 → 刪除帳戶 並確認。你的帳戶與已同步的專注歷史會從我們的在線資料庫永久刪除。無法撤銷。刪除需要網絡連接。刪除帳戶不會取消 App Store 訂閱 — 請在 App Store 設定中管理。',
        },
        {
          question: '刪除帳戶會影響什麼？',
          answer:
            '該帳戶的同步雲資料會被移除，若已存儲則撤銷「通過 Apple 登錄」授權，會請求購買提供商刪除與你帳戶關聯的購買記錄，並在你刪除帳戶的設備上移除該帳戶資料。其他設備上的本地副本無法再同步；如需可刪除應用或在登錄界面清除。提供商備份可能在有限恢復窗口內保留已刪除資料。Apple 會保留其自己的 App Store 交易記錄。',
        },
        {
          question: '如何導出資料？',
          answer:
            '設定 → 帳戶 → 導出我的資料 會保存包含會話、每日目標、同步設定與帳戶資料的 JSON 文件。未認領的本地資料也可從登錄界面導出。',
        },
        {
          question: '隱私政策在哪裡？',
          answer:
            '從產品網站打開隱私政策，或使用本網站產品頁面上的隱私連結。',
        },
      ],
    },
    requirements: {
      title: '系統要求',
      body: 'iPhone：iOS 17 或更高版本。Mac：macOS 14.6 或更高版本。Pomodoro Pro 購買與 Focus Protection 可在 iPhone 上使用。',
    },
    contact: {
      title: '聯繫',
      body: '如需幫助、反饋或錯誤報告：',
    },
    privacyPolicyLink: '隱私政策',
  },
  privacy: {
    metaTitle: `${PULSE_APP_NAME} 隱私政策`,
    metaDescription: `${PULSE_APP_NAME} 隱私政策，涵蓋 Apple 與 Google 登錄、雲同步、通過 RevenueCat 的 Pomodoro Pro 購買、Focus Protection、分析與 Mac 和 iPhone 上的帳戶刪除。`,
    title: '隱私政策',
    subtitle: `${PULSE_APP_NAME} — 適用於 Mac 和 iPhone 的 Pomodoro 計時器`,
    lastUpdated: '最後更新：2026年10月26日',
    summary: {
      title: '摘要',
      body: `使用 Apple 或 Google 登錄後，你的帳戶會在 Mac 與 iPhone 間同步專注歷史、每日目標與計時器設定。我們僅存儲應用所需內容：你的電子郵件地址、帳戶標識符以及你創建的專注資料。我們從不出售、從不用於廣告，也從不與我們的分析提供商共享。若在 iPhone 上購買 Pomodoro Pro，我們的購買提供商 RevenueCat 會將你的購買歷史與你的帳戶關聯，以便在你登錄的每臺設備上啟用 Pro。Focus Protection 的應用選擇永遠不會離開你的 iPhone。你可隨時在設定中導出資料或刪除帳戶。此外，應用可能發送匿名、保護隱私的使用分析，以改進專注流程。`,
    },
    localData: {
      title: '存儲在你設備上的資料',
      body: '計時器設定、會話偏好與專注歷史通過標準系統存儲保存在 Mac 或 iPhone 本地，以便離線時計時器仍可工作。每臺設備上登錄的每個帳戶都有獨立的本地存儲。登錄會話保存在系統鑰匙串中。語言、外觀、登錄時啟動、通知與激勵提醒設定保留在各設備上，不會同步。專注歷史內容本身不會上傳給我們的分析提供商。',
      migrationSafety:
        '若你在已有專注歷史的設備上首次登錄，應用會在將該歷史移入帳戶前詢問你。在我們伺服器確認遷移之前，另加 90 天，應用會保留先前的本地副本及設備上的本地備份文件作為安全網，然後自動刪除。',
    },
    accountAndSync: {
      title: '你的帳戶與同步資料',
      intro: '若你登錄，我們會處理：',
      items: [
        '聯繫信息：通過 Apple 登錄（可能為通過「隱藏我的電子郵件」的私人中繼地址）或 Google 共享的電子郵件地址。我們不會請求你的姓名。',
        '標識符：登錄時創建的帳戶 ID，以及每次安裝的隨機 ID，僅用於同步及識別哪臺設備進行了更改。',
        '專注資料：已完成與已刪除的專注及休息會話（時間、時長、本地日期與時區，以及所選標籤）、你創建的標籤（名稱與顏色）、每日目標、最佳連續記錄，以及同步設定（會話長度、每日目標、聲音、動畫、完成音效、慶祝動物）。',
      ],
      closing:
        '這些資料僅用於提供同步、歷史與帳戶功能。與帳戶關聯，不用於跟蹤，除下列處理方外不與第三方共享。',
    },
    processors: {
      title: '處理方與存儲位置',
      bodyBeforeSupabase: '帳戶與同步資料存儲於',
      bodyAfterSupabase:
        '（資料庫與身份驗證），位於歐盟。登錄由',
      orWord: '或',
      bodyAfterProviders:
        '處理，取決於你所選方式。Pomodoro Pro 購買由',
      bodyAfterRevenueCat:
        '管理（見下方「購買」）。傳輸中資料加密，存取受限，使每個帳戶只能讀取自己的資料。',
    },
    purchases: {
      title: '購買（iPhone）',
      bodyBeforeRevenueCat:
        'Pomodoro Pro 通過 App Store 銷售；Apple 處理付款，我們永遠不會看到你的付款詳情。為在你登錄的每臺設備上解鎖 Pro，應用會將你的帳戶 ID 分享給',
      bodyAfterRevenueCat:
        '，由其將你的購買歷史（所購產品、購買與續訂日期、訂閱狀態）與該 ID 關聯。這些資料僅用於授予和恢復 Pro 存取權限，不用於跟蹤，也不與我們的分析提供商共享。Pro 需要已登錄帳戶；在你登錄之前不會向 RevenueCat 發送任何內容。',
    },
    focusProtection: {
      title: 'Focus Protection（iPhone）',
      body: 'Focus Protection 使用 Apple 的 Screen Time 框架（Family Controls），在專注會話進行時屏蔽你選擇的應用、類別與網站。Apple 僅向應用提供與你選擇對應的不透明令牌：我們無法看到你選擇了哪些應用或網站、你如何使用它們，或任何其他 Screen Time 資料。你的選擇保留在該 iPhone 上，從不上傳或同步，也不會發送給我們的分析提供商。你可隨時在應用中關閉 Focus Protection，或在 設定 → 螢幕使用時間 → 具有螢幕使用時間存取權限的應用 中移除應用存取權限。',
    },
    retention: {
      title: '保留、備份與刪除',
      items: [
        '你的同步資料在帳戶存在期間一直保留。',
        '刪除帳戶（設定 → 帳戶 → 刪除帳戶）會從我們的在線資料庫永久刪除你的帳戶及所有同步資料，若已存儲則撤銷應用的「通過 Apple 登錄」授權，會請求 RevenueCat 刪除與你帳戶關聯的購買記錄，並在你執行刪除的設備上移除該帳戶資料。其他設備上的本地副本無法再同步，直至你在那些設備上刪除應用或在登錄界面清除。',
        '我們的資料庫提供商保留 7 天的每日備份。已刪除資料可能在備份過期前仍存在於備份中；備份僅用於災難恢復。我們也可能為同樣目的保留最長 90 天的加密每周備份。',
        '刪除帳戶不會取消 App Store 訂閱；請在 Apple 帳戶設定中管理或取消。Apple 會保留其自己的 App Store 交易記錄。',
        '退出登錄不會刪除任何內容。尚未同步的更改會保留在設備上，直到同一帳戶再次登錄。',
        '分析記錄由 TelemetryDeck 按其保留做法處理，不用於恢復你的專注歷史。',
      ],
    },
    export: {
      title: '導出',
      body: '設定 → 帳戶 → 導出我的資料 會保存包含會話、每日目標、同步設定與帳戶資料的 JSON 文件。尚未移入帳戶的資料也可從登錄界面導出。',
    },
    analytics: {
      title: '分析',
      introBeforeLink: '我們使用',
      introAfterLink:
        '這一注重隱私的分析服務，以了解應用使用情況（例如：開始或完成的專注或休息會話、每日目標更改、設定更改、通知權限結果、激勵提醒事件，以及是否完成引導）。信號不包含自由文本、姓名、電子郵件或專注歷史內容。',
      identifier:
        'TelemetryDeck 使用哈希化的設備範圍標識符識別安裝，並可能附加非個人設備元資料（如型號、系統版本與區域）。這些資料僅用於分析，我們不會將其與你的身份關聯，也不用於跨其他公司應用或網站的跟蹤。',
      learnMore: '了解更多：',
      faqLabel: 'TelemetryDeck Privacy FAQ',
    },
    appStoreUpdates: {
      title: 'App Store 更新',
      body: '若在設定中使用「檢查更新」，應用可能聯繫 Apple 以查看 App Store 是否有新版本。',
    },
    launchAtLogin: {
      title: '登錄時啟動（Mac）',
      body: '若在 Mac 設定中啟用登錄時啟動，應用會使用 macOS 系統 API 註冊為登錄項。此偏好由你控制，可隨時禁用。',
    },
    notifications: {
      title: '通知與 Live Activities（iPhone）',
      body: '在 iPhone 上，可選的本地通知、激勵提醒與 Live Activities 幫助你在會話結束時獲知信息或溫和地回到專注。僅在你選擇啟用這些功能時請求權限。通知內容保留在你的設備上。',
    },
    whatWeDoNotDo: {
      title: '我們不會做的事',
      items: [
        '無廣告網絡',
        '不出售個人信息',
        '不為分析而存取你的通訊錄、照片、精確位置、相機或麥克風',
      ],
    },
    children: {
      title: '兒童',
      body: `${PULSE_APP_NAME} 不會故意收集超出上述同步所需帳戶範圍的兒童個人信息。分析信號為匿名，不包含個人內容。`,
    },
    changes: {
      title: '變更',
      body: '若本政策變更，更新版本將發布於此 URL。',
    },
    contact: {
      title: '聯繫',
      body: '有關本政策的問題：',
    },
  },
}