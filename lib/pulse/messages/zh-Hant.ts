import { PULSE_APP_NAME } from '../../constants'
import type { PulseMessages } from './types'

export const zhHantMessages: PulseMessages = {
  languageLabel: '頁面語言',
  video: {
    ariaLabel: `${PULSE_APP_NAME} 產品導覽`,
    playLabel: '播放導覽',
    unsupported: '您的瀏覽器不支援嵌入式影片。',
  },
  landing: {
    metaTitle: `${PULSE_APP_NAME} — 適用於 iPhone 與 Mac 的專注計時器`,
    metaDescription: `${PULSE_APP_NAME} 是一款面向 iPhone 與 Mac 的平靜番茄鐘計時器，提供 Focus History、Daily Focus Goals、Apple 與 Google 登入，以及跨裝置的離線優先同步。`,
    heroImageAlt: `${PULSE_APP_NAME} 專注計時器與每週歷史概覽`,
    backToProjects: '返回專案',
    availableOnAppStore: '可在 App Store 取得',
    availabilityLine: 'iOS 17+ · macOS 14.6+',
    eyebrow: '適用於 iPhone 與 Mac 的專注計時器',
    tagline: '一款協助你專注的溫和番茄鐘計時器 — 可用於 iPhone 與 Mac 選單列。',
    description: `開始一次專注工作階段，休息一下，並把歷史記錄隨身攜帶。使用 Apple 或 Google 登入後，Daily Focus Goals、Focus History 以及已同步的偏好設定會隨你的帳號保留在 iPhone 與 Mac 上 — 同時計時器在離線時仍可運作。`,
    downloadCta: '在 App Store 下載',
    watchDemo: '觀看實際示範',
    supportCta: '支援',
    stats: {
      platformLabel: '平台',
      platformValue: 'iPhone 與 Mac',
      languagesLabel: '語言',
      languagesValue: '7 種語言',
      dataLabel: '同步',
      dataValue: '離線優先',
      builtWithLabel: '技術',
      builtWithValue: 'SwiftUI + AppKit',
    },
    demo: {
      eyebrow: '更安靜的專注方式',
      title: '需要時在身旁，不需要時就退場。',
      description: `在 Mac 上從選單列開啟 ${PULSE_APP_NAME}，選擇一次工作階段，然後關閉彈出視窗。在 iPhone 上從主畫面開始專注，並在支援的裝置上透過 Live Activities 繼續。你工作的同時，計時器也在運行。`,
      caption:
        '專注與休息計時器、Daily Focus Goals、Focus History、連續紀錄、7 種語言在地化，以及可選的完成提醒。',
    },
    rhythm: {
      eyebrow: '由你掌控的節奏',
      title: '專注、暫停、恢復、重複。',
      description: `${PULSE_APP_NAME} 會建議接下來做什麼，但絕不會替你開始工作階段。每項時長都可依當天安排調整。`,
    },
    featureShowcases: [
      {
        title: '專注',
        badge: '1–120 分鐘',
        description:
          '倒數計時在你工作時安靜運行。暫停、重設或略過 — 在 iPhone 與 Mac 上，控制權始終在你手中。',
        imageFile: 'focus-running.png',
        alt: `${PULSE_APP_NAME} 正在運行的專注工作階段，含暫停控制與倒數計時`,
      },
      {
        title: '選單列',
        badge: 'Mac',
        description:
          '在 Mac 上可在選單列顯示或隱藏剩餘時間。固定寬度的狀態項目保持位置穩定，不會推移彈出視窗，最長顯示至 120:00。',
        imageFile: 'menubar.png',
        alt: `${PULSE_APP_NAME} 倒數計時顯示在 macOS 選單列`,
      },
      {
        title: '自訂',
        badge: '你的規則',
        description:
          '彈性時長、Daily Focus Goals、完成音效與動畫、7 種介面語言，以及外觀偏好。',
        imageFile: 'settings.png',
        alt: `${PULSE_APP_NAME} 關於時長、完成提醒、語言與目標的設定`,
      },
    ],
    history: {
      eyebrow: '沒有壓力的進度',
      title: '看見工作的累積。',
      description:
        '開啟 Focus History 查看總計與連續紀錄。登入後，歷史可在 iPhone 與 Mac 之間同步，進度會跟隨你。',
      items: ['總專注時間', '已完成工作階段數', '目前連續紀錄', '最佳連續紀錄', 'Daily Focus Goals'],
      imageAlt: `${PULSE_APP_NAME} 每週專注歷史，含工作階段數、專注小時數與連續紀錄`,
    },
    feedback: {
      eyebrow: '溫和回饋，照你的方式',
      title: '讓完成更有成就感。',
      description: `可從六種平靜完成音效與六種動物慶祝動畫中選擇，也可全部關閉。當專注、短休息或長休息工作階段結束時，${PULSE_APP_NAME} 會顯示相應訊息。`,
      items: [
        '針對工作階段的完成標題與副標題',
        '支援 7 種語言的介面，預設跟隨系統語言',
        '每台裝置上的語言與外觀偏好',
        'iPhone 上可選的通知與 Live Activities',
      ],
      settingsImageAlt: `${PULSE_APP_NAME} 關於時長、語言、完成音效與目標的設定`,
      celebrationImageAlt: `${PULSE_APP_NAME} 工作階段完成時的兔子慶祝動畫`,
      soundNames: ['Forest Birds', 'Crystal Chime', 'Gentle Marimba', 'Rain Drops', 'Soft Bell', 'Zen Gong'],
      animalNames: ['猴子', '無尾熊', '貓', '狐狸', '熊貓', '兔子'],
    },
    native: {
      eyebrow: '原生設計',
      title: '為在 Apple 裝置上自然好用而生。',
      description: `SwiftUI、AppKit 與系統慣例讓 ${PULSE_APP_NAME} 快速而熟悉 — 全程提供 VoiceOver 標籤與 Reduce Motion 支援。`,
      features: [
        {
          title: 'Mac 選單列與 iPhone 主畫面',
          description: 'Mac 上安靜的選單列夥伴，以及 iPhone 上專注的主畫面體驗。',
        },
        {
          title: '保持準確',
          description:
            '工作階段在睡眠、喚醒與重新啟動後仍保持正確，歷史在實際截止時刻記錄。',
        },
        {
          title: '離線優先同步',
          description:
            '沒有網路也能繼續專注。重新上線後，已登入的變更會同步到你的帳號。',
        },
        {
          title: '說你的語言',
          description:
            '完整介面支援英語、土耳其語、德語、日語、韓語、簡體中文與繁體中文，預設跟隨系統語言，也可在設定中手動覆寫。',
        },
      ],
    },
    privacy: {
      eyebrow: '隱私優先設計',
      title: '你的專注只屬於你。',
      description: `${PULSE_APP_NAME} 使用帳號以便歷史在裝置間同步。我們只儲存同步所需內容，從不出售你的資料，並將分析與專注歷史分開。`,
      items: [
        '使用 Apple 或 Google 登入',
        '每台裝置上的離線優先專注',
        '歷史與已同步偏好的雲端同步',
        '無廣告網路',
        '可隨時在設定中刪除帳號',
      ],
    },
    closing: {
      title: '為專注工作留出空間。',
      description: `在 App Store 取得適用於 iPhone 與 Mac 的 ${PULSE_APP_NAME}；如需協助，可閱讀隱私權政策與支援頁面。`,
      getSupport: '取得支援',
      privacy: '隱私',
    },
  },
  support: {
    metaTitle: `${PULSE_APP_NAME} 支援`,
    metaDescription: `${PULSE_APP_NAME} 在 iPhone 與 Mac 上的支援、常見問題與帳號協助 — 包括 Pomodoro Pro、免費試用、Limited Annual 優惠、Focus Protection、登入、同步與帳號刪除。`,
    title: `${PULSE_APP_NAME} 支援`,
    intro: `${PULSE_APP_NAME} 是一款面向 iPhone 與 Mac 的平靜番茄鐘計時器。使用 Apple 或 Google 登入，即可在裝置間同步 Focus History。在 iPhone 上，可選的 Pomodoro Pro 可解鎖 Focus Protection、自訂標籤、Tag Insights、Stopwatch Mode、Session Notes 與 Custom Breaks。`,
    gettingStarted: {
      title: '入門',
      items: [
        {
          question: '如何開始、暫停、繼續或完成專注工作階段？',
          answer:
            '在 Mac 上，點一下選單列中的 App 圖示，選擇專注、短休息或長休息，然後按開始。在 iPhone 上，開啟 App，選擇一次工作階段並按開始。可從執行中的工作階段控制暫停與繼續。倒數結束時工作階段會自動完成；也可從控制停止或略過。計時器運行時你可以離開 App。',
        },
        {
          question: '專注與休息計時器如何運作？',
          answer:
            '專注用於深度工作。短休息與長休息是休息工作階段。App 可在你結束後建議下一步，但絕不會替你自動開始下一次工作階段。開啟設定可調整專注、短休息與長休息時長，或選擇預設節奏並微調分鐘數。',
        },
        {
          question: '標籤與自訂標籤如何運作？',
          answer:
            '你可以用內建標籤免費標記工作階段。iPhone 上的 Pomodoro Pro 可解鎖具有自訂名稱與顏色的自訂標籤。所選標籤會與工作階段一起儲存，並可與帳號同步。',
        },
        {
          question: 'Daily Focus Goals 與連續紀錄如何運作？',
          answer:
            '在設定中設定每天想要完成的專注工作階段數量。進度會顯示在主畫面與 Focus History 中。登入後，連續紀錄會追蹤連續完成專注工作階段的天數。',
        },
        {
          question: '如何查看效率統計與工作階段歷史？',
          answer:
            '開啟 Focus History / 摘要，查看總計、連續紀錄、每週進度與過去工作階段。Pomodoro Pro 可在 iPhone 上解鎖更豐富的 Tag Insights 與額外歷史篩選。',
        },
        {
          question: '如何更改語言與外觀？',
          answer:
            '在設定中選擇語言（系統或支援的語言）與外觀（系統、淺色或深色）。這些偏好保留在各裝置上，不會同步。支援的語言為英語、土耳其語、德語、日語、韓語、簡體中文與繁體中文。',
        },
      ],
    },
    accounts: {
      title: '帳號',
      items: [
        {
          question: '為什麼需要登入？',
          answer:
            '帳號可讓 Focus History、Daily Focus Goals 與已同步偏好在 iPhone 與 Mac 上隨你保留。新安裝會在使用計時器前要求登入。從舊版本升級的裝置可在你登入前繼續使用本機歷史。Pomodoro Pro 購買也會保留在你已登入的帳號中。',
        },
        {
          question: '如何使用 Apple 或 Google 登入？',
          answer:
            '在登入畫面選擇透過 Apple 繼續或透過 Google 繼續，並完成提供者之流程。Apple 可能會提供隱藏我的電子郵件。',
        },
        {
          question: '如何登出？',
          answer:
            '開啟設定 → 帳號 → 登出。若部分變更尚未同步，App 可能會要求你先同步或仍登出。登出不會刪除帳號。',
        },
        {
          question: '如何重新登入？',
          answer:
            '在登入畫面使用相同的 Apple 或 Google 方式。該帳號的雲端歷史會還原到該裝置。',
        },
        {
          question: '如果使用其他帳號會怎樣？',
          answer:
            '每個帳號都有自己的歷史。登入其他帳號不會合併無關歷史。在已有本機工作階段的裝置上確認歷史歸屬前，請仔細選擇。',
        },
        {
          question: '能否將 Apple 與 Google 連結到同一帳號？',
          answer:
            '可以。在設定 → 帳號中，當另一種登入方式尚未被其他帳號使用時，可以連結。',
        },
      ],
    },
    cloudSync: {
      title: '雲端同步',
      items: [
        {
          question: '裝置之間同步哪些內容？',
          answer:
            '專注與休息工作階段歷史（包括所選標籤與任何工作階段備註）、你建立的標籤、Daily Focus Goal 紀錄、與連續紀錄相關的帳號資料，以及已同步偏好，例如工作階段時長、每日目標、音效、動畫、完成音效與慶祝動物。',
        },
        {
          question: '沒有網路時會怎樣？',
          answer:
            '登入後，你可以繼續離線使用計時器。新工作階段與變更會保留在裝置上，直到有網路連線。',
        },
        {
          question: '重新連線後會怎樣？',
          answer:
            'App 會將待處理變更同步到你的帳號。同步採用離線優先並最終一致 — 並非即時即時協作。',
        },
        {
          question: '如何在 iPhone 與 Mac 上使用同一帳號？',
          answer:
            '在兩台裝置上安裝 App，並用同一 Apple 或 Google 帳號登入。還原完成後，Focus History 可在兩邊顯示。',
        },
        {
          question: '如果歷史缺失該怎麼辦？',
          answer:
            '確認已登入同一帳號，等待還原/同步完成，然後再次查看 Focus History。若登入了其他帳號，該帳號會顯示其自身歷史。',
        },
      ],
    },
    migration: {
      title: '從舊版本升級',
      items: [
        {
          question: '現有本機歷史會怎樣？',
          answer:
            '現有本機歷史不會被悄悄刪除。登入後，App 會在將該歷史加入帳號前徵求確認。',
        },
        {
          question: '應如何認領我的歷史？',
          answer:
            '登入應擁有該歷史的帳號，查看「新增你的歷史」畫面，然後選擇加入此帳號。若顯示的帳號不對，請使用其他帳號。工作階段之後無法移到其他帳號。',
        },
        {
          question: '如果裝置與帳號設定不同會怎樣？',
          answer:
            'App 可能會詢問是保留此裝置設定還是使用帳號設定。語言、外觀、通知偏好與 Focus Protection 選擇保留在裝置本機。',
        },
      ],
    },
    notifications: {
      title: '通知與 Live Activities',
      items: [
        {
          question: '如何在 iPhone 上啟用通知？',
          answer:
            '開啟設定 → 通知並選擇啟用；若權限此前被拒絕，請開啟系統設定。工作階段結束提醒需要通知權限。',
        },
        {
          question: 'Live Activities 如何運作？',
          answer:
            '在支援的 iPhone 上，可選的 Live Activity 可在鎖定畫面與動態島顯示進行中的工作階段。可在設定中開啟或關閉 Live Activities。Live Activities 不使用我們伺服器的推播通知。',
        },
        {
          question: '如果通知已關閉會怎樣？',
          answer:
            '沒有通知權限時，工作階段結束提醒無法顯示。請使用設定 → 通知 → 開啟設定，在 iOS 設定中開啟。',
        },
      ],
    },
    pomodoroPro: {
      title: 'Pomodoro Pro',
      items: [
        {
          question: '免費版與 Pomodoro Pro 有何差別？',
          answer:
            '免費版包含專注與休息計時器、內建標籤、Focus History 基本功能、Daily Focus Goals、連續紀錄、登入與雲端同步。iPhone 上的 Pomodoro Pro 可解鎖 Focus Protection、自訂標籤、Tag Insights、Stopwatch Mode、Session Notes、Custom Breaks、編輯或刪除過去工作階段，以及更豐富的統計篩選。',
        },
        {
          question: '有哪些購買選項？',
          answer:
            'Pomodoro Pro 提供月訂閱、年訂閱、在可用時的 Limited Annual 優惠，或 Lifetime 一次性購買。除非在目前週期結束前至少 24 小時取消，否則訂閱會自動續訂。Lifetime 只收費一次，不是訂閱。',
        },
        {
          question: '什麼是 Limited Annual 優惠？',
          answer:
            'Limited Annual 是面向此前未購買過 Pro 的符合條件使用者、可能在有限時間內顯示的折扣年度 Pomodoro Pro 訂閱。它解鎖與一般年度方案相同的 Pro 權益。可用性有時間限制，且並非保證適用於每個帳號。',
        },
        {
          question: '訂閱是否包含免費試用？',
          answer:
            '符合條件的月訂閱或年訂閱可能包含免費試用。只有在確認你的 Apple 帳號符合條件時，付費牆才會顯示免費試用；試用時長會在你確認前顯示在付費牆與 App Store 購買頁上。Lifetime 不包含試用。若不符合條件，將顯示標準價格。',
        },
        {
          question: '在哪裡購買或查看 Pomodoro Pro？',
          answer:
            '在 iPhone 上開啟設定 → Pomodoro Pro。你必須已登入。Pro 會隨你的帳號保留在你登入的每台裝置上。',
        },
        {
          question: '如何還原購買？',
          answer:
            '在付費牆或設定 → Pomodoro Pro 中使用還原購買。使用同一 Apple 帳號完成的購買會轉移到你目前登入的帳號。若未找到任何內容，請確認使用的是購買 Pro 的 Apple 帳號，並在連線時重試。',
        },
      ],
    },
    purchases: {
      title: '訂閱與購買',
      items: [
        {
          question: '如何管理或取消訂閱？',
          answer:
            '訂閱由 Apple 計費。在 iPhone 上開啟設定 → Pomodoro Pro → 管理訂閱，或前往設定 → [你的名稱] → 訂閱並選擇該 App。至少在續訂前 24 小時取消，以免產生下一筆費用。刪除 App 或 Pomodoro 帳號不會取消訂閱。',
        },
        {
          question: '如何申請退款？',
          answer:
            '退款由 Apple 處理。請造訪 reportaproblem.apple.com，使用購買所用的 Apple 帳號登入，找到交易並提交退款請求。我們無法自行處理 App Store 退款。',
        },
        {
          question: '如果購買失敗或 Pro 未解鎖怎麼辦？',
          answer:
            '保持登入，檢查網路連線並重試。若付款待處理（例如「詢問購買」），Pro 會在核准後解鎖。若已付款，請使用還原購買。對於有效訂閱的付款問題，請在 App Store 設定中更新付款方式。',
        },
        {
          question: '若在訂閱仍有效時購買 Lifetime 會怎樣？',
          answer:
            'Lifetime 會永久解鎖 Pro，但現有訂閱不會自動取消。請在 App Store 訂閱設定中關閉自動續訂，以免再次被扣款。',
        },
      ],
    },
    focusProtection: {
      title: 'Focus Protection',
      items: [
        {
          question: '什麼是 Focus Protection？',
          answer:
            'Focus Protection 是 iPhone 上的 Pomodoro Pro 功能。它使用 Apple 的 Screen Time API，在專注工作階段進行時封鎖你選擇的 App、類別或網站。休息從不被封鎖。工作階段結束後，被封鎖的 App 會自動解鎖。你的封鎖選擇保留在該 iPhone 上，不會上傳或同步。',
        },
        {
          question: '如何設定？',
          answer:
            '在 Pro 已啟用時，開啟設定 → Focus Protection。依提示允許 Screen Time 取用，選擇要封鎖的內容，然後開啟 Focus Protection。開始一次專注工作階段即可套用封鎖。',
        },
        {
          question: '如何關閉或解鎖 App？',
          answer:
            '在設定中開啟 Focus Protection 並關閉該功能，或在工作階段後的封鎖畫面上使用解鎖選項。要完全移除 App 的 Screen Time 取用，請前往 iOS 設定 → 螢幕使用時間 → 具有螢幕使用時間取用權限的 App。',
        },
        {
          question: '如果 Focus Protection 無法運作怎麼辦？',
          answer:
            '確認 Pro 已啟用、已允許 Screen Time 取用，並且已選擇要封鎖的 App 或類別。Focus Protection 僅在專注工作階段期間生效，休息期間不適用。若系統設定中已撤銷取用，請開啟 App 並再次允許。權限變更後重新啟動 iPhone 可能有幫助。',
        },
      ],
    },
    accountPrivacy: {
      title: '帳號與隱私',
      items: [
        {
          question: '如何刪除帳號？',
          answer:
            '登入後，開啟設定 → 帳號 → 刪除帳號，然後確認。你的帳號與已同步的專注歷史會從我們的線上資料庫永久刪除。此操作無法復原。刪除需要網路連線。刪除帳號不會取消 App Store 訂閱 — 請在 App Store 設定中管理。',
        },
        {
          question: '刪除帳號會影響什麼？',
          answer:
            '該帳號的已同步雲端資料會被移除；若已儲存，Sign in with Apple 授權會被撤銷；會請求購買提供者刪除與你帳號關聯的購買紀錄；並會從你執行刪除的裝置上移除該帳號資料。其他裝置上的本機複本將無法再同步；如有需要，請在那些裝置上移除 App 或清除資料。提供者備份可能在有限還原窗口內保留已刪除資料。Apple 會保留其自己的 App Store 交易紀錄。',
        },
        {
          question: '如何匯出我的資料？',
          answer:
            '設定 → 帳號 → 匯出我的資料會儲存包含工作階段、每日目標、已同步設定與帳號檔案的 JSON 檔案。尚未認領的本機資料也可從登入畫面匯出。',
        },
        {
          question: '隱私權政策在哪裡？',
          answer:
            '可從產品網站開啟隱私權政策，或使用本站產品頁面上的隱私連結。',
        },
      ],
    },
    requirements: {
      title: '系統需求',
      body: 'iPhone：iOS 17 或更高版本。Mac：macOS 14.6 或更高版本。Pomodoro Pro 購買、免費試用、Limited Annual 優惠與 Focus Protection 可在 iPhone 上使用。',
    },
    contact: {
      title: '聯絡',
      body: '如需協助、回饋或錯誤回報：',
    },
    privacyPolicyLink: '隱私權政策',
  },
  privacy: {
    metaTitle: `${PULSE_APP_NAME} 隱私權政策`,
    metaDescription: `${PULSE_APP_NAME} 的隱私權政策，涵蓋 Apple 與 Google 登入、雲端同步、透過 RevenueCat 進行的 Pomodoro Pro 購買、Focus Protection、分析、帳號刪除，以及 Mac 與 iPhone 上的隱私權利。`,
    title: '隱私權政策',
    subtitle: `${PULSE_APP_NAME} — 適用於 Mac 與 iPhone 的番茄鐘計時器`,
    lastUpdated: '最後更新：2026年11月9日',
    summary: {
      title: '摘要',
      body: `當你使用 Apple 或 Google 登入時，你的帳號會在 Mac 與 iPhone 之間同步專注歷史、每日目標與計時器設定。我們只儲存 App 所需內容：你的電子郵件地址、帳號識別碼，以及你建立的專注資料。我們從不出售這些資料，不將其用於廣告，也不與我們的分析提供者共享。若你在 iPhone 上購買 Pomodoro Pro — 包括月訂閱、年訂閱、Limited Annual、Lifetime 或符合條件的免費試用 — 我們的購買提供者 RevenueCat 會將你的購買與權益歷史關聯到帳號，使 Pro 在你登入的每台裝置上可用。Focus Protection 的 App 選擇絕不會離開你的 iPhone。你可以隨時在設定中匯出資料或刪除帳號。另外，App 可能會傳送匿名、注重隱私的使用分析，以便我們改進專注流程。`,
    },
    localData: {
      title: '儲存在裝置上的資料',
      body: '你的計時器設定、工作階段偏好與專注歷史使用標準系統儲存保存在 Mac 或 iPhone 本機，以便計時器在離線時繼續運作。裝置上登入的每個帳號都有各自獨立的本機儲存。登入工作階段保存在系統鑰匙圈中。語言、外觀、登入時開啟、通知偏好、Live Activity 偏好與 Focus Protection 選擇保留在各裝置上，不會同步。專注歷史內容本身不會上傳到我們的分析提供者。',
      migrationSafety:
        '當你首次在已有專注歷史的裝置上登入時，App 會在將該歷史移入帳號前徵求確認。在伺服器確認遷移完成之前，外加 90 天，App 會將先前的本機複本與裝置上的本機備份檔案作為安全網保留，然後自動移除。',
    },
    accountAndSync: {
      title: '你的帳號與已同步資料',
      intro: '若你登入，我們會處理：',
      items: [
        '聯絡資訊：Sign in with Apple（可能是透過隱藏我的電子郵件取得的私人轉送地址）或 Google 共享的電子郵件地址。我們不請求你的姓名。',
        '識別碼：登入時建立的帳號 ID，以及每次安裝的隨機 ID，僅用於同步並識別哪台裝置進行了變更。',
        '專注資料：已完成與已刪除的專注和休息工作階段（時間、時長、本機日期與時區、所選標籤及任何工作階段備註）、你建立的標籤（名稱與顏色）、每日目標、最佳連續紀錄，以及已同步設定（工作階段時長、每日目標、音效、動畫、完成音效、慶祝動物）。',
      ],
      closing:
        '這些資料僅用於提供同步、歷史與帳號功能。它們關聯到你的帳號，不用於追蹤，也不會與下列處理者以外的第三方共享。',
    },
    processors: {
      title: '處理者與儲存位置',
      bodyBeforeSupabase: '帳號與同步資料儲存在',
      bodyAfterSupabase:
        '（資料庫與身分驗證）中，位於歐盟。登入由',
      orWord: '或',
      bodyAfterProviders:
        '依你選擇的選項處理。Pomodoro Pro 購買與權益由',
      bodyAfterRevenueCat:
        '管理（見下方購買）。資料在傳輸中加密，取用受限，使每個帳號只能讀取自己的資料。',
    },
    purchases: {
      title: '購買（iPhone）',
      bodyBeforeRevenueCat:
        'Pomodoro Pro 透過 App Store 以月訂閱、年訂閱、Limited Annual（在提供時）與 Lifetime 產品銷售；符合條件的訂閱可能包含購買前顯示的免費試用。Apple 處理付款，我們絕不會看到你的付款卡詳情。為在你登入的每台裝置上解鎖 Pro，App 會將你的帳號 ID 與',
      bodyAfterRevenueCat:
        '共享，後者會將你的購買與權益歷史（已購產品、購買與續訂日期、試用或訂閱狀態，以及 lifetime 解鎖）關聯到該 ID。這些資料僅用於授予與還原 Pro 取用，不用於追蹤，也不與我們的分析提供者共享。Pro 需要已登入帳號；登入前不會向 RevenueCat 傳送任何內容。',
    },
    focusProtection: {
      title: 'Focus Protection（iPhone）',
      body: 'Focus Protection 使用 Apple 的 Screen Time 框架（包括 Family Controls、Managed Settings 與 Device Activity），在專注工作階段進行時封鎖你選擇的 App、類別與網站。Apple 僅向 App 提供關於你選擇的不透明權杖：我們無法看到你選擇了哪些 App 或網站、你如何使用它們，或任何其他 Screen Time 使用資訊。你的選擇保留在該 iPhone 上，絕不會上傳或同步到我們的伺服器，也不會傳送給我們的分析提供者。我們不收集或出售 Screen Time 資料。你可以隨時在 App 中關閉 Focus Protection，或在設定 → 螢幕使用時間 → 具有螢幕使用時間取用權限的 App 中移除 App 的取用權限。',
    },
    retention: {
      title: '保留、備份與刪除',
      items: [
        '只要你的帳號存在，已同步資料就會被保留。',
        '刪除帳號（設定 → 帳號 → 刪除帳號）會從我們的線上資料庫永久刪除你的帳號與所有已同步資料；若已儲存，會撤銷 App 的 Sign in with Apple 授權；請求 RevenueCat 刪除與你帳號關聯的購買紀錄；並從你執行刪除的裝置上移除該帳號資料。其他裝置上的本機複本將無法再同步，並保留在那裡，直到你在那些裝置上刪除 App，或在登入畫面提供選項時將其移除。',
        '我們的資料庫提供者保留 7 天的每日備份。已刪除資料可能在這些備份到期前仍存在；備份僅用於災難復原。我們也可能為同一目的將加密的每週備份保留最多 90 天。',
        '刪除帳號不會取消 App Store 訂閱；請在 Apple 帳號設定中管理或取消。Apple 會保留其自己的 App Store 交易紀錄。',
        '登出不會刪除任何內容。尚未同步的變更會保留在裝置上，直到同一帳號再次登入。',
        '分析紀錄由 TelemetryDeck 按其保留慣例處理，不會用於還原你的專注歷史。',
      ],
    },
    export: {
      title: '匯出',
      body: '設定 → 帳號 → 匯出我的資料會儲存包含你的工作階段、每日目標、已同步設定與帳號檔案的 JSON 檔案。尚未移入帳號的資料也可從登入畫面匯出。',
    },
    analytics: {
      title: '分析',
      introBeforeLink: '我們使用',
      introAfterLink:
        '這一注重隱私的分析服務，了解 App 的使用方式（例如：已開始或完成的專注/休息工作階段、開啟歷史、設定變更、通知權限結果、引導完成，以及選定的審查或遷移診斷）。訊號不包含自由文字、姓名、電子郵件、工作階段備註或專注歷史內容。',
      identifier:
        'TelemetryDeck 使用經過雜湊的裝置範圍識別碼識別安裝，並可附加非個人裝置中繼資料（例如機型、作業系統版本與地區設定）。這些資料僅用於分析，不會由我們關聯到你的身分，也不會用於跨其他公司 App 或網站的追蹤。',
      learnMore: '深入了解：',
      faqLabel: 'TelemetryDeck 隱私常見問題',
    },
    appStoreUpdates: {
      title: 'App Store 更新',
      body: '若你在設定中使用「檢查更新」，App 可能會聯絡 Apple，以查看 App Store 是否有更新版本。',
    },
    launchAtLogin: {
      title: '登入時開啟（Mac）',
      body: '若你在 Mac 的設定中啟用登入時開啟，App 會使用 macOS 系統 API 註冊為登入項目。此偏好由你控制，可隨時關閉。',
    },
    notifications: {
      title: '通知與 Live Activities（iPhone）',
      body: '在 iPhone 上，可選的本機通知與 Live Activities 可協助你了解工作階段何時結束，或在鎖定畫面與動態島保持進行中工作階段可見。當你選擇啟用相關功能時會請求權限。通知與 Live Activity 內容保留在你的裝置上，不會傳送到我們的伺服器。',
    },
    whatWeDoNotDo: {
      title: '我們不會做的事',
      items: [
        '無廣告網路',
        '不出售個人資訊',
        '不為分析取用你的聯絡人、照片、精確位置、相機或麥克風',
        '不收集或上傳超出 Apple 為裝置上 Focus Protection 提供的不透明權杖之外的 Screen Time 使用詳情',
      ],
    },
    children: {
      title: '兒童',
      body: `${PULSE_APP_NAME} 不會在知情情況下，收集超出帳號同步所需（如上所述）之外的兒童個人資訊。分析訊號是匿名的，不包含個人內容。`,
    },
    privacyRights: {
      title: '你的隱私權利（包括 GDPR 與 KVKK）',
      intro:
        '依你的居住地，你可能享有歐盟/英國《一般資料保護規則》（GDPR）、土耳其《個人資料保護法》（KVKK）以及類似法律下的權利。在適用法律允許的範圍內，這些權利可能包括：',
      items: [
        '請求查閱我們持有的與你帳號相關的個人資料',
        '請求更正不準確的個人資料',
        '從 App 匯出你的資料（設定 → 帳號 → 匯出我的資料）',
        '刪除你的帳號與已同步資料（設定 → 帳號 → 刪除帳號），或請求我們協助刪除',
        '在法律提供該權利的情況下，反對或限制特定處理',
        '向當地資料保護機關提出申訴',
      ],
      closing:
        '帳號與同步資料與我們的處理者 Supabase 一起儲存在歐盟。要行使這些權利，請在可用時使用 App 內控制項，或透過下方電子郵件聯絡我們。我們會依適用法律要求回應經驗證的請求。我們不出售個人資料。',
    },
    changes: {
      title: '變更',
      body: '若本政策發生變更，更新版本將發佈於此 URL，並附上新的「最後更新」日期。',
    },
    contact: {
      title: '聯絡',
      body: '關於本政策或隱私權利的問題：',
    },
  },
}
