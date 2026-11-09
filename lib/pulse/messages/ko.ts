import { PULSE_APP_NAME } from '../../constants'
import type { PulseMessages } from './types'

export const koMessages: PulseMessages = {
  languageLabel: '페이지 언어',
  video: {
    ariaLabel: `${PULSE_APP_NAME} 제품 소개`,
    playLabel: '소개 재생',
    unsupported: '브라우저가 삽입 동영상을 지원하지 않습니다.',
  },
  landing: {
    metaTitle: `${PULSE_APP_NAME} — iPhone과 Mac용 포커스 타이머`,
    metaDescription: `${PULSE_APP_NAME}는 Focus History, Daily Focus Goals, Apple 및 Google 로그인, 기기 간 오프라인 우선 동기화를 제공하는 iPhone과 Mac용 차분한 포모도로 타이머입니다.`,
    heroImageAlt: `${PULSE_APP_NAME} 포커스 타이머와 주간 기록 개요`,
    backToProjects: '프로젝트로 돌아가기',
    availableOnAppStore: 'App Store에서 이용 가능',
    availabilityLine: 'iOS 17+ · macOS 14.6+',
    eyebrow: 'iPhone과 Mac용 포커스 타이머',
    tagline: '집중을 돕는 부드러운 포모도로 타이머 — iPhone과 Mac 메뉴 바에서.',
    description: `포커스 세션을 시작하고 휴식을 취하며 기록을 곁에 두세요. Apple 또는 Google로 로그인하면 Daily Focus Goals, Focus History, 동기화된 환경설정이 iPhone과 Mac의 계정에 유지됩니다 — 타이머는 오프라인에서도 작동합니다.`,
    downloadCta: 'App Store에서 다운로드',
    watchDemo: '실제 동작 보기',
    supportCta: '지원',
    stats: {
      platformLabel: '플랫폼',
      platformValue: 'iPhone & Mac',
      languagesLabel: '언어',
      languagesValue: '7개 언어',
      dataLabel: '동기화',
      dataValue: '오프라인 우선',
      builtWithLabel: '기술',
      builtWithValue: 'SwiftUI + AppKit',
    },
    demo: {
      eyebrow: '더 고요한 집중 방식',
      title: '필요할 때는 있고, 필요하지 않을 때는 사라지는 타이머.',
      description: `Mac에서는 메뉴 바에서 ${PULSE_APP_NAME}를 열고 세션을 선택한 뒤 팝오버를 닫으세요. iPhone에서는 홈에서 포커스를 시작하고, 지원 기기에서는 Live Activities로 이어갈 수 있습니다. 작업하는 동안 타이머도 계속 작동합니다.`,
      caption:
        '포커스 및 휴식 타이머, Daily Focus Goals, Focus History, 연속 기록, 7개 언어 현지화, 선택적 완료 알림.',
    },
    rhythm: {
      eyebrow: '내가 조절하는 리듬',
      title: '집중하고, 일시 정지하고, 회복하고, 반복하세요.',
      description: `${PULSE_APP_NAME}는 다음에 무엇을 할지 제안하지만, 세션을 대신 시작하지는 않습니다. 각 시간은 하루에 맞게 조정할 수 있습니다.`,
    },
    featureShowcases: [
      {
        title: '포커스',
        badge: '1–120분',
        description:
          '작업하는 동안 카운트다운이 조용히 진행됩니다. 일시 정지, 재설정, 건너뛰기 — 제어권은 iPhone과 Mac에서 여러분에게 있습니다.',
        imageFile: 'focus-running.png',
        alt: `${PULSE_APP_NAME} 실행 중인 포커스 세션(일시 정지 컨트롤과 카운트다운)`,
      },
      {
        title: '메뉴 바',
        badge: 'Mac',
        description:
          'Mac에서는 남은 시간을 메뉴 바에 표시하거나 숨길 수 있습니다. 고정 너비 상태 항목은 팝오버를 밀지 않고 최대 120:00까지 자리를 유지합니다.',
        imageFile: 'menubar.png',
        alt: `macOS 메뉴 바에 표시된 ${PULSE_APP_NAME} 카운트다운`,
      },
      {
        title: '맞춤 설정',
        badge: '나의 규칙',
        description:
          '유연한 시간, Daily Focus Goals, 완료 사운드와 애니메이션, 7개 UI 언어, 모양 환경설정.',
        imageFile: 'settings.png',
        alt: `${PULSE_APP_NAME} 시간, 완료 알림, 언어, 목표 설정`,
      },
    ],
    history: {
      eyebrow: '부담 없는 진행 상황',
      title: '쌓여 가는 작업을 확인하세요.',
      description:
        'Focus History를 열어 합계와 연속 기록을 검토하세요. 로그인하면 기록이 iPhone과 Mac 간에 동기화되어 진행 상황이 함께 따라올 수 있습니다.',
      items: ['총 포커스 시간', '완료한 세션 수', '현재 연속 기록', '최고 연속 기록', 'Daily Focus Goals'],
      imageAlt: `${PULSE_APP_NAME} 주간 포커스 기록(세션 수, 집중 시간, 연속 기록)`,
    },
    feedback: {
      eyebrow: '부드러운 피드백, 내 방식대로',
      title: '완료를 더 보람 있게.',
      description: `여섯 가지 차분한 완료 사운드와 여섯 가지 동물 축하 애니메이션 중에서 고르거나 둘 다 끌 수 있습니다. ${PULSE_APP_NAME}는 포커스, 짧은 휴식, 긴 휴식 세션이 끝날 때 알맞은 메시지를 표시합니다.`,
      items: [
        '세션별 완료 제목과 부제',
        '시스템 언어 기본값의 7개 언어 UI',
        '각 기기의 언어 및 모양 환경설정',
        'iPhone의 선택적 알림과 Live Activities',
      ],
      settingsImageAlt: `${PULSE_APP_NAME} 시간, 언어, 완료 사운드, 목표 설정`,
      celebrationImageAlt: `${PULSE_APP_NAME} 세션 완료 시 토끼 축하 애니메이션`,
      soundNames: ['Forest Birds', 'Crystal Chime', 'Gentle Marimba', 'Rain Drops', 'Soft Bell', 'Zen Gong'],
      animalNames: ['원숭이', '코알라', '고양이', '여우', '판다', '토끼'],
    },
    native: {
      eyebrow: '네이티브로 설계',
      title: 'Apple 기기에서 자연스럽게 느껴지도록 만들었습니다.',
      description: `SwiftUI, AppKit, 시스템 관례로 ${PULSE_APP_NAME}는 빠르고 익숙합니다 — VoiceOver 레이블과 Reduce Motion 지원이 전반에 적용됩니다.`,
      features: [
        {
          title: 'Mac 메뉴 바 & iPhone 홈',
          description: 'Mac에서는 조용한 메뉴 바 동반자, iPhone에서는 집중된 홈 경험을 제공합니다.',
        },
        {
          title: '정확성 유지',
          description:
            '절전, 깨우기, 재실행을 거쳐도 세션이 올바르게 유지되며, 기록은 실제 마감 시점에 저장됩니다.',
        },
        {
          title: '오프라인 우선 동기화',
          description:
            '연결 없이도 집중을 이어가세요. 다시 온라인 상태가 되면 로그인된 변경 사항이 계정에 동기화됩니다.',
        },
        {
          title: '내 언어로 대화',
          description:
            '영어, 터키어, 독일어, 일본어, 한국어, 중국어 간체, 중국어 번체 전체 UI. 시스템 언어 기본값과 설정에서의 수동 변경을 지원합니다.',
        },
      ],
    },
    privacy: {
      eyebrow: '프라이버시 중심 설계',
      title: '집중은 여러분의 것입니다.',
      description: `${PULSE_APP_NAME}는 기기 간 기록 동기화를 위해 계정을 사용합니다. 동기화에 필요한 것만 저장하고, 데이터를 판매하지 않으며, 분석은 포커스 기록과 분리합니다.`,
      items: [
        'Apple 또는 Google로 로그인',
        '각 기기의 오프라인 우선 포커스',
        '기록 및 동기화 환경설정의 클라우드 동기화',
        '광고 네트워크 없음',
        '설정에서 언제든지 계정 삭제',
      ],
    },
    closing: {
      title: '집중할 공간을 만드세요.',
      description: `iPhone과 Mac용 App Store에서 ${PULSE_APP_NAME}를 받거나, 도움이 필요하면 개인정보 처리방침과 지원 페이지를 확인하세요.`,
      getSupport: '지원 받기',
      privacy: '개인정보',
    },
  },
  support: {
    metaTitle: `${PULSE_APP_NAME} 지원`,
    metaDescription: `iPhone과 Mac용 ${PULSE_APP_NAME} 지원, FAQ, 계정 도움말 — Pomodoro Pro, 무료 체험, Limited Annual 혜택, Focus Protection, 로그인, 동기화, 계정 삭제 포함.`,
    title: `${PULSE_APP_NAME} 지원`,
    intro: `${PULSE_APP_NAME}는 iPhone과 Mac용 차분한 포모도로 타이머입니다. Apple 또는 Google로 로그인하여 Focus History를 기기 간에 동기화하세요. iPhone에서 선택적 Pomodoro Pro는 Focus Protection, 사용자 지정 태그, Tag Insights, Stopwatch Mode, Session Notes, Custom Breaks를 잠금 해제합니다.`,
    gettingStarted: {
      title: '시작하기',
      items: [
        {
          question: '포커스 세션을 시작, 일시 정지, 재개, 완료하려면 어떻게 하나요?',
          answer:
            'Mac에서는 메뉴 바의 앱 아이콘을 클릭하고 포커스, 짧은 휴식 또는 긴 휴식을 선택한 뒤 시작을 누르세요. iPhone에서는 앱을 열고 세션을 선택한 뒤 시작을 누르세요. 실행 중인 세션 컨트롤에서 일시 정지와 재개를 할 수 있습니다. 카운트다운이 끝나면 세션이 자동으로 완료되며, 컨트롤에서 중지하거나 건너뛸 수도 있습니다. 타이머가 실행 중일 때 앱을 떠나도 됩니다.',
        },
        {
          question: '포커스와 휴식 타이머는 어떻게 작동하나요?',
          answer:
            '포커스는 깊은 작업을 위한 것입니다. 짧은 휴식과 긴 휴식은 휴식 세션입니다. 앱은 종료 후 다음을 제안할 수 있지만, 다음 세션을 대신 자동 시작하지는 않습니다. 설정에서 포커스, 짧은 휴식, 긴 휴식 길이를 조정하거나 프리셋 리듬을 선택한 뒤 분을 미세 조정하세요.',
        },
        {
          question: '태그와 사용자 지정 태그는 어떻게 작동하나요?',
          answer:
            '내장 태그로 세션에 라벨을 붙일 수 있습니다(무료). iPhone의 Pomodoro Pro는 나만의 이름과 색상의 사용자 지정 태그를 잠금 해제합니다. 선택한 태그는 세션과 함께 저장되며 계정과 동기화될 수 있습니다.',
        },
        {
          question: 'Daily Focus Goals와 연속 기록은 어떻게 작동하나요?',
          answer:
            '설정에서 하루에 원하는 포커스 세션 수를 정하세요. 진행 상황은 홈과 Focus History에 표시됩니다. 연속 기록은 로그인 시 포커스 세션을 완료한 연속 일수를 추적합니다.',
        },
        {
          question: '생산성 통계와 세션 기록은 어떻게 보나요?',
          answer:
            'Focus History / 요약을 열어 합계, 연속 기록, 주간 진행 상황, 지난 세션을 검토하세요. Pomodoro Pro는 iPhone에서 더 풍부한 Tag Insights와 추가 기록 필터를 잠금 해제합니다.',
        },
        {
          question: '언어와 모양은 어떻게 바꾸나요?',
          answer:
            '설정에서 언어(시스템 또는 지원 언어)와 모양(시스템, 라이트, 다크)을 선택하세요. 이 환경설정은 각 기기에 남고 동기화되지 않습니다. 지원 언어는 영어, 터키어, 독일어, 일본어, 한국어, 중국어 간체, 중국어 번체입니다.',
        },
      ],
    },
    accounts: {
      title: '계정',
      items: [
        {
          question: '로그인이 필요한 이유는 무엇인가요?',
          answer:
            '계정을 사용하면 Focus History, Daily Focus Goals, 동기화된 환경설정이 iPhone과 Mac에서 함께 유지됩니다. 새 설치는 타이머를 사용하기 전에 로그인을 요청합니다. 이전 버전에서 업그레이드하는 기기는 로그인할 때까지 로컬 기록을 사용할 수 있게 유지할 수 있습니다. Pomodoro Pro 구매도 로그인한 계정에 유지됩니다.',
        },
        {
          question: 'Apple 또는 Google로 어떻게 로그인하나요?',
          answer:
            '로그인 화면에서 Apple로 계속 또는 Google로 계속을 선택하고 제공자 흐름을 완료하세요. Apple은 이메일 가리기를 제공할 수 있습니다.',
        },
        {
          question: '어떻게 로그아웃하나요?',
          answer:
            '설정 → 계정 → 로그아웃을 여세요. 아직 동기화되지 않은 변경이 있으면 앱이 먼저 동기화하거나 그래도 로그아웃하도록 요청할 수 있습니다. 로그아웃해도 계정은 삭제되지 않습니다.',
        },
        {
          question: '다시 로그인하려면 어떻게 하나요?',
          answer:
            '로그인 화면에서 같은 Apple 또는 Google 방법을 사용하세요. 클라우드 기록이 해당 계정으로 그 기기에 복원됩니다.',
        },
        {
          question: '다른 계정을 사용하면 어떻게 되나요?',
          answer:
            '각 계정에는 자체 기록이 있습니다. 다른 계정으로 로그인해도 관련 없는 기록이 병합되지 않습니다. 이미 로컬 세션이 있는 기기에서 기록 연결을 확인하기 전에 신중히 선택하세요.',
        },
        {
          question: 'Apple과 Google을 같은 계정에 연결할 수 있나요?',
          answer:
            '네. 설정 → 계정에서 다른 로그인 방법이 다른 계정에 이미 사용되지 않은 경우 연결할 수 있습니다.',
        },
      ],
    },
    cloudSync: {
      title: '클라우드 동기화',
      items: [
        {
          question: '기기 간에 무엇이 동기화되나요?',
          answer:
            '포커스 및 휴식 세션 기록(선택한 태그와 세션 메모 포함), 생성한 태그, Daily Focus Goal 기록, 연속 기록 관련 계정 데이터, 그리고 세션 길이, 일일 목표, 사운드, 애니메이션, 완료 사운드, 축하 동물 같은 동기화 환경설정.',
        },
        {
          question: '인터넷이 없으면 어떻게 되나요?',
          answer:
            '로그인 후에는 오프라인에서도 타이머를 계속 사용할 수 있습니다. 새 세션과 변경 사항은 연결이 될 때까지 기기에 남습니다.',
        },
        {
          question: '다시 온라인이 되면 어떻게 되나요?',
          answer:
            '앱이 대기 중인 변경 사항을 계정과 동기화합니다. 동기화는 오프라인 우선이며 최종적으로 일관됩니다 — 즉각적인 실시간 협업이 아닙니다.',
        },
        {
          question: 'iPhone과 Mac에서 같은 계정을 어떻게 사용하나요?',
          answer:
            '두 기기에 앱을 설치하고 같은 Apple 또는 Google 계정으로 로그인하세요. 복원이 끝나면 Focus History가 두 기기에 나타날 수 있습니다.',
        },
        {
          question: '기록이 없으면 어떻게 하나요?',
          answer:
            '같은 계정으로 로그인했는지 확인하고, 복원/동기화가 끝날 때까지 기다린 뒤 Focus History를 다시 확인하세요. 다른 계정으로 로그인했다면 그 계정 자체의 기록이 표시됩니다.',
        },
      ],
    },
    migration: {
      title: '이전 버전에서 업그레이드',
      items: [
        {
          question: '기존 로컬 기록은 어떻게 되나요?',
          answer:
            '기존 로컬 기록은 조용히 삭제되지 않습니다. 로그인 후 앱이 그 기록을 계정에 추가하기 전에 묻습니다.',
        },
        {
          question: '기록을 어떻게 가져가야 하나요?',
          answer:
            '기록을 소유해야 하는 계정으로 로그인하고, 기록 추가 화면을 검토한 뒤 이 계정에 추가를 선택하세요. 표시된 계정이 잘못되었으면 다른 계정을 사용하세요. 세션은 나중에 다른 계정으로 옮길 수 없습니다.',
        },
        {
          question: '기기와 계정 설정이 다르면 어떻게 되나요?',
          answer:
            '앱이 이 기기의 설정을 유지할지 계정 설정을 사용할지 물을 수 있습니다. 언어, 모양, 알림 환경설정, Focus Protection 선택은 기기 로컬로 유지됩니다.',
        },
      ],
    },
    notifications: {
      title: '알림 및 Live Activities',
      items: [
        {
          question: 'iPhone에서 알림을 어떻게 켜나요?',
          answer:
            '설정 → 알림을 열고 사용을 선택하거나, 이전에 권한이 거부되었다면 시스템 설정을 여세요. 세션 종료 알림에는 알림 권한이 필요합니다.',
        },
        {
          question: 'Live Activities는 어떻게 작동하나요?',
          answer:
            '지원되는 iPhone에서는 선택적 Live Activity가 잠금 화면과 Dynamic Island에 활성 세션을 표시할 수 있습니다. 설정에서 Live Activities를 켜거나 끌 수 있습니다. Live Activities는 당사 서버의 푸시 알림을 사용하지 않습니다.',
        },
        {
          question: '알림이 꺼져 있으면 어떻게 되나요?',
          answer:
            '알림 권한이 없으면 세션 종료 알림이 표시될 수 없습니다. 설정 → 알림 → 설정 열기를 사용해 iOS 설정에서 켜세요.',
        },
      ],
    },
    pomodoroPro: {
      title: 'Pomodoro Pro',
      items: [
        {
          question: '무료와 Pomodoro Pro의 차이는 무엇인가요?',
          answer:
            '무료에는 포커스 및 휴식 타이머, 내장 태그, Focus History 기본 기능, Daily Focus Goals, 연속 기록, 로그인, 클라우드 동기화가 포함됩니다. iPhone의 Pomodoro Pro는 Focus Protection, 사용자 지정 태그, Tag Insights, Stopwatch Mode, Session Notes, Custom Breaks, 지난 세션 편집/삭제, 더 풍부한 통계 필터를 잠금 해제합니다.',
        },
        {
          question: '어떤 구매 옵션이 있나요?',
          answer:
            'Pomodoro Pro는 월간 구독, 연간 구독, 이용 가능한 경우 Limited Annual 혜택, 또는 Lifetime 일회성 구매로 제공됩니다. 구독은 현재 기간이 끝나기 최소 24시간 전에 취소하지 않으면 자동 갱신됩니다. Lifetime은 한 번만 청구되며 구독이 아닙니다.',
        },
        {
          question: 'Limited Annual 혜택이란 무엇인가요?',
          answer:
            'Limited Annual은 Pro를 구매한 적이 없는 자격 있는 사용자에게 제한된 기간 동안 표시될 수 있는 할인된 연간 Pomodoro Pro 구독입니다. 일반 연간 플랜과 동일한 Pro 권한을 잠금 해제합니다. 제공은 기간 제한이 있으며 모든 계정에 보장되지 않습니다.',
        },
        {
          question: '구독에 무료 체험이 포함되나요?',
          answer:
            '자격 있는 월간 또는 연간 구독에는 무료 체험이 포함될 수 있습니다. 페이월은 Apple Account에 대한 자격이 확인된 경우에만 무료 체험을 표시하며, 체험 기간은 확인 전에 페이월과 App Store 구매 시트에 표시됩니다. Lifetime에는 체험이 포함되지 않습니다. 자격이 없으면 표준 가격이 표시됩니다.',
        },
        {
          question: 'Pomodoro Pro는 어디에서 구매하거나 확인하나요?',
          answer:
            'iPhone에서 설정 → Pomodoro Pro를 여세요. 로그인되어 있어야 합니다. Pro는 로그인하는 모든 기기에서 계정에 유지됩니다.',
        },
        {
          question: '구매는 어떻게 복원하나요?',
          answer:
            '페이월 또는 설정 → Pomodoro Pro에서 구매 복원을 사용하세요. 같은 Apple Account로 구매한 항목은 로그인한 계정으로 이전됩니다. 아무것도 찾지 못하면 Pro를 구매한 Apple Account를 사용 중인지 확인하고 온라인 상태에서 다시 시도하세요.',
        },
      ],
    },
    purchases: {
      title: '구독 및 구매',
      items: [
        {
          question: '구독은 어떻게 관리하거나 취소하나요?',
          answer:
            '구독은 Apple이 청구합니다. iPhone에서 설정 → Pomodoro Pro → 구독 관리를 열거나, 설정 → [내 이름] → 구독으로 이동해 앱을 선택하세요. 다음 청구를 피하려면 갱신 최소 24시간 전에 취소하세요. 앱이나 Pomodoro 계정을 삭제해도 구독은 취소되지 않습니다.',
        },
        {
          question: '환불은 어떻게 요청하나요?',
          answer:
            '환불은 Apple이 처리합니다. reportaproblem.apple.com을 방문해 구매에 사용한 Apple Account로 로그인하고, 거래를 찾은 뒤 환불 요청을 제출하세요. 당사는 App Store 환불을 직접 처리할 수 없습니다.',
        },
        {
          question: '구매가 실패하거나 Pro가 잠금 해제되지 않으면 어떻게 하나요?',
          answer:
            '로그인한 상태를 유지하고 네트워크 연결을 확인한 뒤 다시 시도하세요. 결제가 보류 중이면(예: 승인 후 구매) 승인 후 Pro가 잠금 해제됩니다. 이미 결제했다면 구매 복원을 사용하세요. 활성 구독의 결제 문제는 App Store 설정에서 결제 수단을 업데이트하세요.',
        },
        {
          question: '구독이 활성인 상태에서 Lifetime을 구매하면 어떻게 되나요?',
          answer:
            'Lifetime는 Pro를 영구적으로 잠금 해제하지만, 기존 구독은 자동으로 취소되지 않습니다. 다시 청구되지 않도록 App Store 구독 설정에서 자동 갱신을 끄세요.',
        },
      ],
    },
    focusProtection: {
      title: 'Focus Protection',
      items: [
        {
          question: 'Focus Protection이란 무엇인가요?',
          answer:
            'Focus Protection은 iPhone의 Pomodoro Pro 기능입니다. Apple의 Screen Time API를 사용해 포커스 세션 중에 선택한 앱, 카테고리 또는 웹사이트를 차단합니다. 휴식은 절대 차단되지 않습니다. 세션이 끝나면 차단된 앱이 자동으로 잠금 해제됩니다. 차단 선택은 해당 iPhone에 남으며 업로드되거나 동기화되지 않습니다.',
        },
        {
          question: '어떻게 설정하나요?',
          answer:
            'Pro가 활성화된 상태에서 설정 → Focus Protection을 여세요. 요청 시 Screen Time 접근을 허용하고, 차단할 항목을 선택한 뒤 Focus Protection을 켜세요. 포커스 세션을 시작하면 차단이 적용됩니다.',
        },
        {
          question: '끄거나 앱을 잠금 해제하려면 어떻게 하나요?',
          answer:
            '설정의 Focus Protection을 열어 기능을 끄거나, 세션 후 차단 화면의 잠금 해제 옵션을 사용하세요. 앱의 Screen Time 접근을 완전히 제거하려면 iOS 설정 → 스크린 타임 → 스크린 타임 접근이 있는 앱으로 이동하세요.',
        },
        {
          question: 'Focus Protection이 작동하지 않으면 어떻게 하나요?',
          answer:
            'Pro가 활성인지, Screen Time 접근이 허용되었는지, 차단할 앱이나 카테고리를 선택했는지 확인하세요. Focus Protection은 포커스 세션 중에만 적용되며 휴식에는 적용되지 않습니다. 시스템 설정에서 접근이 철회되었다면 앱을 열고 다시 허용하세요. 권한 변경 후 iPhone을 재시작하면 도움이 될 수 있습니다.',
        },
      ],
    },
    accountPrivacy: {
      title: '계정 및 개인정보',
      items: [
        {
          question: '계정을 어떻게 삭제하나요?',
          answer:
            '로그인한 뒤 설정 → 계정 → 계정 삭제를 열고 확인하세요. 계정과 동기화된 포커스 기록은 라이브 데이터베이스에서 영구적으로 삭제됩니다. 이 작업은 되돌릴 수 없습니다. 삭제에는 네트워크 연결이 필요합니다. 계정 삭제는 App Store 구독을 취소하지 않습니다 — App Store 설정에서 관리하세요.',
        },
        {
          question: '계정 삭제는 무엇에 영향을 주나요?',
          answer:
            '해당 계정의 동기화된 클라우드 데이터가 제거되고, 저장된 경우 Sign in with Apple 승인이 철회되며, 계정에 연결된 구매 기록 삭제가 구매 제공자에게 요청되고, 삭제를 수행한 기기에서 해당 계정 데이터가 제거됩니다. 다른 기기의 로컬 복사본은 더 이상 동기화할 수 없으며, 필요하면 해당 기기에서 앱을 제거하거나 지우세요. 제공자 백업은 제한된 복구 기간 동안 삭제된 데이터를 유지할 수 있습니다. Apple은 자체 App Store 거래 기록을 보관합니다.',
        },
        {
          question: '데이터를 어떻게 내보내나요?',
          answer:
            '설정 → 계정 → 내 데이터 내보내기는 세션, 일일 목표, 동기화된 설정, 계정 프로필이 포함된 JSON 파일을 저장합니다. 아직 연결되지 않은 로컬 데이터는 로그인 화면에서도 내보낼 수 있습니다.',
        },
        {
          question: '개인정보 처리방침은 어디에 있나요?',
          answer:
            '제품 웹사이트에서 개인정보 처리방침을 열거나, 이 사이트의 제품 페이지에 있는 개인정보 링크를 사용하세요.',
        },
      ],
    },
    requirements: {
      title: '요구 사항',
      body: 'iPhone: iOS 17 이상. Mac: macOS 14.6 이상. Pomodoro Pro 구매, 무료 체험, Limited Annual 혜택, Focus Protection은 iPhone에서 이용할 수 있습니다.',
    },
    contact: {
      title: '문의',
      body: '도움, 피드백 또는 버그 제보:',
    },
    privacyPolicyLink: '개인정보 처리방침',
  },
  privacy: {
    metaTitle: `${PULSE_APP_NAME} 개인정보 처리방침`,
    metaDescription: `${PULSE_APP_NAME} 개인정보 처리방침. Apple 및 Google 로그인, 클라우드 동기화, RevenueCat을 통한 Pomodoro Pro 구매, Focus Protection, 분석, 계정 삭제, Mac과 iPhone의 개인정보 권리를 다룹니다.`,
    title: '개인정보 처리방침',
    subtitle: `${PULSE_APP_NAME} — Mac과 iPhone용 포모도로 타이머`,
    lastUpdated: '최종 업데이트: 2026년 11월 9일',
    summary: {
      title: '요약',
      body: `Apple 또는 Google로 로그인하면 계정이 포커스 기록, 일일 목표, 타이머 설정을 Mac과 iPhone 간에 동기화합니다. 그에 필요한 것만 저장합니다. 이메일 주소, 계정 식별자, 여러분이 만든 포커스 데이터입니다. 판매하지 않고, 광고에 사용하지 않으며, 분석 제공자와도 공유하지 않습니다. iPhone에서 Pomodoro Pro를 구매하면 — 월간, 연간, Limited Annual, Lifetime 또는 자격 있는 무료 체험 포함 — 구매 제공자 RevenueCat이 구매 및 권한 기록을 계정에 연결하여 로그인한 모든 기기에서 Pro가 작동하게 합니다. Focus Protection의 앱 선택은 iPhone을 떠나지 않습니다. 설정에서 언제든지 데이터를 내보내거나 계정을 삭제할 수 있습니다. 별도로 앱은 집중 흐름 개선을 위해 익명이고 프라이버시를 보호하는 사용 분석을 보낼 수 있습니다.`,
    },
    localData: {
      title: '기기에 저장되는 데이터',
      body: '타이머 설정, 세션 환경설정, 포커스 기록은 표준 시스템 저장소를 사용해 Mac 또는 iPhone에 로컬로 저장되므로 오프라인에서도 타이머가 계속 작동합니다. 기기에 로그인한 각 계정은 별도의 로컬 저장소를 가집니다. 로그인 세션은 시스템 키체인에 보관됩니다. 언어, 모양, 로그인 시 실행, 알림 환경설정, Live Activity 환경설정, Focus Protection 선택은 각 기기에 남고 동기화되지 않습니다. 포커스 기록 내용 자체는 분석 제공자에 업로드되지 않습니다.',
      migrationSafety:
        '이미 포커스 기록이 있는 기기에서 처음 로그인하면 앱이 그 기록을 계정으로 옮기기 전에 묻습니다. 서버에서 이동이 확인될 때까지, 추가로 90일 동안 앱은 이전 로컬 복사본과 기기의 로컬 백업 파일을 안전망으로 유지한 뒤 자동으로 제거합니다.',
    },
    accountAndSync: {
      title: '계정과 동기화된 데이터',
      intro: '로그인하면 다음을 처리합니다:',
      items: [
        '연락처 정보: Sign in with Apple(Hide My Email을 통한 비공개 릴레이 주소일 수 있음) 또는 Google이 공유하는 이메일 주소. 이름은 요청하지 않습니다.',
        '식별자: 로그인 시 생성되는 계정 ID와 각 설치용 임의 ID. 동기화와 어떤 기기가 변경했는지 식별하는 데만 사용됩니다.',
        '포커스 데이터: 완료 및 삭제된 포커스·휴식 세션(시간, 기간, 로컬 날짜와 시간대, 선택한 태그, 세션 메모), 생성한 태그(이름과 색상), 일일 목표, 최고 연속 기록, 동기화된 설정(세션 길이, 일일 목표, 사운드, 애니메이션, 완료 사운드, 축하 동물).',
      ],
      closing:
        '이 데이터는 동기화, 기록, 계정 기능을 제공하는 데만 사용됩니다. 계정에 연결되며 추적에 사용되지 않고, 아래 처리자 외의 제3자와 공유되지 않습니다.',
    },
    processors: {
      title: '처리자 및 저장 위치',
      bodyBeforeSupabase: '계정 및 동기화 데이터는',
      bodyAfterSupabase:
        '(데이터베이스 및 인증)에 유럽연합에 저장됩니다. 로그인은',
      orWord: '또는',
      bodyAfterProviders:
        '가 선택한 옵션에 따라 처리합니다. Pomodoro Pro 구매와 권한은',
      bodyAfterRevenueCat:
        '로 관리됩니다(아래 구매 참조). 데이터는 전송 중 암호화되며, 각 계정이 자신의 데이터만 읽을 수 있도록 접근이 제한됩니다.',
    },
    purchases: {
      title: '구매(iPhone)',
      bodyBeforeRevenueCat:
        'Pomodoro Pro는 App Store에서 월간, 연간, Limited Annual(제공 시), Lifetime 제품으로 판매됩니다. 자격 있는 구독에는 구매 전에 표시되는 무료 체험이 포함될 수 있습니다. 결제는 Apple이 처리하며, 결제 카드 정보는 절대 보지 않습니다. 로그인한 모든 기기에서 Pro를 잠금 해제하기 위해 앱은 계정 ID를',
      bodyAfterRevenueCat:
        '와 공유하며, 구매 및 권한 기록(구매한 제품, 구매·갱신 날짜, 체험 또는 구독 상태, Lifetime 잠금 해제)을 해당 ID에 연결합니다. 이 데이터는 Pro 접근 부여와 복원에만 사용되고, 추적에 사용되지 않으며, 분석 제공자와 공유되지 않습니다. Pro에는 로그인된 계정이 필요하며, 로그인 전에는 RevenueCat에 아무것도 전송되지 않습니다.',
    },
    focusProtection: {
      title: 'Focus Protection(iPhone)',
      body: 'Focus Protection은 Apple의 Screen Time 프레임워크(Family Controls, Managed Settings, Device Activity 포함)를 사용해 포커스 세션 중에 선택한 앱, 카테고리, 웹사이트를 차단합니다. Apple은 선택 내용에 대해 불투명 토큰만 앱에 제공합니다. 어떤 앱이나 웹사이트를 선택했는지, 사용 방식, 기타 Screen Time 사용 정보는 볼 수 없습니다. 선택은 해당 iPhone에 남고, 당사 서버에 업로드되거나 동기화되지 않으며, 분석 제공자에게도 전송되지 않습니다. Screen Time 데이터를 수집하거나 판매하지 않습니다. 앱에서 언제든지 Focus Protection을 끄거나, 설정 → 스크린 타임 → 스크린 타임 접근이 있는 앱에서 앱의 접근을 제거할 수 있습니다.',
    },
    retention: {
      title: '보관, 백업 및 삭제',
      items: [
        '동기화된 데이터는 계정이 존재하는 동안 보관됩니다.',
        '계정 삭제(설정 → 계정 → 계정 삭제)는 계정과 모든 동기화 데이터를 라이브 데이터베이스에서 영구적으로 삭제하고, 저장된 경우 앱의 Sign in with Apple 승인을 철회하며, RevenueCat에 계정에 연결된 구매 기록 삭제를 요청하고, 삭제를 수행한 기기에서 해당 계정 데이터를 제거합니다. 다른 기기의 로컬 복사본은 더 이상 동기화할 수 없으며, 해당 기기에서 앱을 삭제하거나 로그인 화면에서 제공될 때 제거할 때까지 남습니다.',
        '데이터베이스 제공자는 일일 백업을 7일간 보관합니다. 삭제된 데이터는 만료될 때까지 해당 백업에 남을 수 있으며, 백업은 재해 복구에만 사용됩니다. 같은 목적으로 암호화된 주간 백업을 최대 90일간 보관할 수 있습니다.',
        '계정 삭제는 App Store 구독을 취소하지 않습니다. Apple Account 설정에서 관리하거나 취소하세요. Apple은 자체 App Store 거래 기록을 보관합니다.',
        '로그아웃해도 아무것도 삭제되지 않습니다. 아직 동기화되지 않은 변경은 같은 계정이 다시 로그인할 때까지 기기에 남습니다.',
        '분석 기록은 TelemetryDeck의 보관 관행에 따라 처리되며 포커스 기록을 복원하는 데 사용되지 않습니다.',
      ],
    },
    export: {
      title: '내보내기',
      body: '설정 → 계정 → 내 데이터 내보내기는 세션, 일일 목표, 동기화된 설정, 계정 프로필이 포함된 JSON 파일을 저장합니다. 아직 계정으로 옮기지 않은 데이터는 로그인 화면에서도 내보낼 수 있습니다.',
    },
    analytics: {
      title: '분석',
      introBeforeLink: '앱 사용 방식을 이해하기 위해 프라이버시 중심 분석 서비스',
      introAfterLink:
        '를 사용합니다(예: 시작 또는 완료된 포커스/휴식 세션, 기록 열기, 설정 변경, 알림 권한 결과, 온보딩 완료, 선택된 검토 또는 마이그레이션 진단). 신호에는 자유 형식 텍스트, 이름, 이메일, 세션 메모, 포커스 기록 내용이 포함되지 않습니다.',
      identifier:
        'TelemetryDeck은 해시된 기기 범위 식별자로 설치를 식별하며, 비개인 기기 메타데이터(모델, OS 버전, 로케일 등)를 첨부할 수 있습니다. 이 데이터는 분석에만 사용되고, 당사가 신원과 연결하지 않으며, 다른 회사의 앱이나 웹사이트 간 추적에도 사용되지 않습니다.',
      learnMore: '자세히 알아보기:',
      faqLabel: 'TelemetryDeck 개인정보 FAQ',
    },
    appStoreUpdates: {
      title: 'App Store 업데이트',
      body: '설정에서 “업데이트 확인”을 사용하면 앱이 App Store에 새 버전이 있는지 확인하기 위해 Apple에 연락할 수 있습니다.',
    },
    launchAtLogin: {
      title: '로그인 시 실행(Mac)',
      body: 'Mac 설정에서 로그인 시 실행을 켜면 앱이 macOS 시스템 API를 사용해 로그인 항목으로 등록합니다. 이 환경설정은 사용자가 제어하며 언제든지 끌 수 있습니다.',
    },
    notifications: {
      title: '알림 및 Live Activities(iPhone)',
      body: 'iPhone에서 선택적 로컬 알림과 Live Activities는 세션 종료를 확인하거나 잠금 화면과 Dynamic Island에 활성 세션을 표시하는 데 도움이 됩니다. 관련 기능을 켤 때 권한이 요청됩니다. 알림과 Live Activity 내용은 기기에 남고 당사 서버로 전송되지 않습니다.',
    },
    whatWeDoNotDo: {
      title: '하지 않는 것',
      items: [
        '광고 네트워크 없음',
        '개인정보 판매 없음',
        '분석을 위한 연락처, 사진, 정밀 위치, 카메라, 마이크 접근 없음',
        '기기의 Focus Protection을 위해 Apple이 제공하는 불투명 토큰을 넘는 Screen Time 사용 세부 정보의 수집 또는 업로드 없음',
      ],
    },
    children: {
      title: '아동',
      body: `${PULSE_APP_NAME}는 위에 설명된 대로 계정 동기화에 필요한 범위를 넘어 아동으로부터 고의로 개인정보를 수집하지 않습니다. 분석 신호는 익명이며 개인 내용을 포함하지 않습니다.`,
    },
    privacyRights: {
      title: '개인정보 권리(GDPR 및 KVKK 포함)',
      intro:
        '거주 지역에 따라 EU/영국 일반 데이터 보호 규정(GDPR), 터키 개인정보 보호법(KVKK) 및 유사 법률에 따른 권리가 있을 수 있습니다. 적용 법률에 따라 다음이 포함될 수 있습니다:',
      items: [
        '계정에 대해 보유한 개인정보에 대한 접근 요청',
        '부정확한 개인정보의 정정 요청',
        '앱에서 데이터 내보내기(설정 → 계정 → 내 데이터 내보내기)',
        '계정과 동기화된 데이터 삭제(설정 → 계정 → 계정 삭제) 또는 삭제 도움 요청',
        '법률이 그 권리를 제공하는 경우 특정 처리에 대한 이의 제기 또는 제한',
        '지역 데이터 보호 당국에 불만 제기',
      ],
      closing:
        '계정 및 동기화 데이터는 처리자 Supabase와 함께 유럽연합에 저장됩니다. 이러한 권리를 행사하려면 가능한 경우 앱 내 컨트롤을 사용하거나 아래 이메일로 문의하세요. 확인된 요청에는 적용 법률에 따라 응답합니다. 개인정보를 판매하지 않습니다.',
    },
    changes: {
      title: '변경',
      body: '이 방침이 변경되면 새로운 “최종 업데이트” 날짜와 함께 업데이트된 버전이 이 URL에 게시됩니다.',
    },
    contact: {
      title: '문의',
      body: '이 방침 또는 개인정보 권리에 관한 질문:',
    },
  },
}
