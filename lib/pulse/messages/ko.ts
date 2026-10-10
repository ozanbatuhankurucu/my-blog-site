import { PULSE_APP_NAME } from '../../constants'
import type { PulseMessages } from './types'

export const koMessages: PulseMessages = {
  languageLabel: '페이지 언어',
  video: {
    ariaLabel: `${PULSE_APP_NAME} 제품 둘러보기`,
    playLabel: '둘러보기 재생',
    unsupported: '브라우저가 임베디드 동영상을 지원하지 않습니다.',
  },
  landing: {
    metaTitle: `${PULSE_APP_NAME} — iPhone 및 Mac용 포커스 타이머`,
    metaDescription: `${PULSE_APP_NAME}는 iPhone과 Mac용 차분한 Pomodoro 타이머로, 포커스 기록, 일일 포커스 목표, Apple 및 Google 로그인, 오프라인 우선 기기 간 동기화를 제공합니다.`,
    heroImageAlt: `${PULSE_APP_NAME} 포커스 타이머 및 주간 기록 개요`,
    backToProjects: '프로젝트로 돌아가기',
    availableOnAppStore: 'App Store에서 이용 가능',
    availabilityLine: 'iOS 17+ · macOS 14.6+',
    eyebrow: 'iPhone 및 Mac용 포커스 타이머',
    tagline: 'iPhone과 Mac 메뉴 막대에서 집중을 돕는 부드러운 Pomodoro 타이머.',
    description: `포커스 세션을 시작하고 휴식을 취하며 기록을 항상 가까이에 두세요. Apple 또는 Google로 로그인하면 일일 포커스 목표, 포커스 기록, 동기화된 설정이 iPhone과 Mac에서 계정과 함께 유지됩니다 — 타이머는 오프라인에서도 계속 작동합니다.`,
    downloadCta: 'App Store에서 다운로드',
    watchDemo: '실제 사용 보기',
    supportCta: '지원',
    stats: {
      platformLabel: '플랫폼',
      platformValue: 'iPhone 및 Mac',
      languagesLabel: '언어',
      languagesValue: '12개 언어',
      dataLabel: '동기화',
      dataValue: '오프라인 우선',
      builtWithLabel: '기술',
      builtWithValue: 'SwiftUI + AppKit',
    },
    demo: {
      eyebrow: '더 조용한 집중 방식',
      title: '필요할 때는 있고, 필요 없을 때는 사라집니다.',
      description: `Mac에서는 메뉴 막대에서 ${PULSE_APP_NAME}을 열고 세션을 선택한 뒤 팝오버를 닫습니다. iPhone에서는 홈에서 포커스를 시작하고 지원 기기에서는 Live Activities로 이어갈 수 있습니다. 작업하는 동안에도 타이머는 계속됩니다.`,
      caption:
        '포커스 및 휴식 타이머, 일일 포커스 목표, 포커스 기록, 연속 기록, 12개 언어 현지화, 선택적 완료 알림.',
    },
    rhythm: {
      eyebrow: '내가 조절하는 리듬',
      title: '집중, 멈춤, 회복, 반복.',
      description: `${PULSE_APP_NAME}는 다음에 무엇을 할지 제안하지만, 대신 세션을 시작하지는 않습니다. 모든 시간은 하루에 맞게 조절할 수 있습니다.`,
    },
    featureShowcases: [
      {
        title: '포커스',
        badge: '1–120분',
        description:
          '작업하는 동안 카운트다운은 조용히 진행됩니다. 일시 정지, 재설정, 건너뛰기 — iPhone과 Mac 모두에서 제어권은 사용자에게 있습니다.',
        imageFile: 'focus-running.png',
        alt: `${PULSE_APP_NAME} 포커스 세션 실행 중, 일시 정지 컨트롤 및 카운트다운`,
      },
      {
        title: '메뉴 막대',
        badge: 'Mac',
        description:
          'Mac에서 메뉴 막대에 남은 시간을 표시하거나 숨길 수 있습니다. 고정 너비 상태 항목은 팝오버를 밀지 않으며 최대 120:00까지 유지됩니다.',
        imageFile: 'menubar.png',
        alt: `${PULSE_APP_NAME} 카운트다운이 macOS 메뉴 막대에 표시됨`,
      },
      {
        title: '맞춤 설정',
        badge: '내 규칙',
        description:
          '유연한 시간, 일일 포커스 목표, 완료 사운드 및 애니메이션, 12개 UI 언어, 외관 설정.',
        imageFile: 'settings.png',
        alt: `${PULSE_APP_NAME} 시간, 완료 알림, 언어 및 목표 설정`,
      },
    ],
    history: {
      eyebrow: '부담 없는 진행',
      title: '쌓이는 작업이 보입니다.',
      description:
        '포커스 기록을 열어 합계와 연속 기록을 확인하세요. 로그인하면 기록이 iPhone과 Mac 간에 동기화되어 진행 상황이 따라옵니다.',
      items: ['총 포커스 시간', '완료한 세션 수', '현재 연속 기록', '최고 연속 기록', '일일 포커스 목표'],
      imageAlt: `${PULSE_APP_NAME} 주간 포커스 기록, 세션 수, 집중 시간, 연속 기록`,
    },
    feedback: {
      eyebrow: '부드러운 피드백, 내 방식대로',
      title: '완료가 보람 있게 느껴지도록.',
      description: `여섯 가지 차분한 완료 사운드와 여섯 가지 동물 축하 중에서 고르거나 각각 끌 수 있습니다. ${PULSE_APP_NAME}는 포커스, 짧은 휴식, 긴 휴식 세션이 끝날 때 적절한 메시지를 표시합니다.`,
      items: [
        '세션 유형에 맞는 완료 제목 및 부제',
        '시스템 언어 기본값의 12개 언어 UI',
        '각 기기의 언어 및 외관 설정',
        'iPhone에서 선택적 동기 부여 알림',
      ],
      settingsImageAlt: `${PULSE_APP_NAME} 시간, 언어, 완료 사운드 및 목표 설정`,
      celebrationImageAlt: `${PULSE_APP_NAME} 세션 완료 시 토끼 축하 애니메이션`,
      soundNames: ['숲의 새', '수정 차임', '부드러운 마림바', '빗방울', '은은한 종', '선 종'],
      animalNames: ['원숭이', '코라라', '고양이', '여우', '판다', '토끼'],
    },
    native: {
      eyebrow: '처음부터 네이티브',
      title: 'Apple 기기에 자연스럽게.',
      description: `SwiftUI, AppKit, 시스템 관례로 ${PULSE_APP_NAME}는 빠르고 익숙합니다 — VoiceOver 레이블과 동작 줄이기 지원이 전반에 있습니다.`,
      features: [
        {
          title: 'Mac 메뉴 막대 및 iPhone 홈',
          description: 'Mac에서는 조용한 메뉴 막대 동반, iPhone에서는 집중된 홈 경험.',
        },
        {
          title: '정확함 유지',
          description:
            '절전, 깨우기, 재실행 후에도 세션은 정확하며, 기록은 실제 마감 시각에 남습니다.',
        },
        {
          title: '오프라인 우선 동기화',
          description:
            '연결 없이도 집중을 이어갈 수 있습니다. 다시 온라인이 되면 로그인한 변경 사항이 계정에 동기화됩니다.',
        },
        {
          title: '내 언어로',
          description:
            '12개 언어 전체 UI, 시스템 언어 기본값, 설정에서 수동 변경 가능.',
        },
      ],
    },
    privacy: {
      eyebrow: '설계상 프라이버시',
      title: '집중은 사용자의 것.',
      description: `${PULSE_APP_NAME}는 기록을 기기 간 동기화하기 위해 계정을 사용합니다. 동기화에 필요한 데이터만 저장하며, 데이터를 판매하지 않고 분석은 포커스 기록과 분리합니다.`,
      items: [
        'Apple 또는 Google로 로그인',
        '각 기기에서 오프라인 우선 포커스',
        '기록 및 동기화 설정 클라우드 동기화',
        '광고 네트워크 없음',
        '설정에서 언제든 계정 삭제',
      ],
    },
    closing: {
      title: '집중할 수 있는 작업을 위한 공간.',
      description: `App Store에서 iPhone과 Mac용 ${PULSE_APP_NAME}을 받거나, 도움이 필요하면 개인정보 처리방침과 지원 페이지를 읽어 보세요.`,
      getSupport: '지원 받기',
      privacy: '개인정보',
    },
  },
  support: {
    metaTitle: `${PULSE_APP_NAME} 지원`,
    metaDescription: `iPhone 및 Mac용 ${PULSE_APP_NAME} 지원, FAQ, 계정 도움말 — 로그인, 동기화, 마이그레이션, 계정 삭제 포함.`,
    title: `${PULSE_APP_NAME} 지원`,
    intro: `${PULSE_APP_NAME}는 iPhone과 Mac용 차분한 Pomodoro 타이머입니다. Apple 또는 Google로 로그인하면 포커스 기록을 기기 간에 동기화할 수 있습니다.`,
    gettingStarted: {
      title: '시작하기',
      items: [
        {
          question: '포커스 세션을 어떻게 시작하나요?',
          answer:
            'Mac에서는 메뉴 막대의 앱 아이콘을 클릭하고 포커스, 짧은 휴식 또는 긴 휴식을 선택한 뒤 시작을 누릅니다. iPhone에서는 앱을 열고 홈에서 세션을 선택한 뒤 시작을 누릅니다. 타이머가 돌아가는 동안 앱을 나가도 됩니다.',
        },
        {
          question: '포커스 및 휴식 시간을 어떻게 변경하나요?',
          answer:
            '설정을 열고 포커스, 짧은 휴식, 긴 휴식 길이를 조절합니다. 프리셋 리듬을 고른 뒤 분 단위로 미세 조정할 수도 있습니다.',
        },
        {
          question: '일일 포커스 목표를 어떻게 설정하나요?',
          answer:
            '설정에서 매일 원하는 포커스 세션 수를 설정합니다. 진행은 홈과 포커스 기록에 표시됩니다.',
        },
        {
          question: '포커스 기록을 어떻게 보나요?',
          answer:
            '앱에서 포커스 기록을 엽니다(Mac에서는 팝오버 또는 상태 메뉴). 합계, 연속 기록, 주간 진행을 볼 수 있습니다.',
        },
        {
          question: '언어와 외관을 어떻게 변경하나요?',
          answer:
            '설정에서 언어(시스템 또는 지원 언어)와 외관(시스템, 라이트, 다크)을 선택합니다. 이 설정은 각 기기에 남으며 동기화되지 않습니다.',
        },
      ],
    },
    accounts: {
      title: '계정',
      items: [
        {
          question: '로그인이 왜 필요한가요?',
          answer:
            '계정을 통해 포커스 기록, 일일 포커스 목표, 동기화된 설정이 iPhone과 Mac에서 사용자와 함께 유지됩니다. 새 설치는 타이머 사용 전 로그인을 요청합니다. 이전 버전에서 업그레이드한 기기는 로그인할 때까지 로컬 기록을 계속 사용할 수 있습니다.',
        },
        {
          question: 'Apple 또는 Google로 어떻게 로그인하나요?',
          answer:
            '로그인 화면에서 Apple로 계속 또는 Google로 계속을 선택하고 제공자 흐름을 완료합니다. Apple은 이메일 가리기를 제공할 수 있습니다.',
        },
        {
          question: '로그아웃은 어떻게 하나요?',
          answer:
            '설정 → 계정 → 로그아웃을 엽니다. 아직 동기화되지 않은 변경이 있으면 먼저 동기화할지, 그래도 로그아웃할지 묻습니다. 로그아웃해도 계정은 삭제되지 않습니다.',
        },
        {
          question: '다시 로그인하려면?',
          answer:
            '로그인 화면에서 같은 Apple 또는 Google 방식을 사용합니다. 해당 기기에서 클라우드 기록이 그 계정으로 복원됩니다.',
        },
        {
          question: '다른 계정을 쓰면 어떻게 되나요?',
          answer:
            '각 계정에는 고유한 기록이 있습니다. 다른 계정으로 로그인해도 관련 없는 기록은 합쳐지지 않습니다. 로컬 세션이 있는 기기에서 기록 인수 확인 전에 신중히 선택하세요.',
        },
        {
          question: 'Apple과 Google을 같은 계정에 연결할 수 있나요?',
          answer:
            '예. 설정 → 계정에서 다른 로그인 방식이 다른 계정에서 사용 중이 아니면 연결할 수 있습니다.',
        },
      ],
    },
    cloudSync: {
      title: '클라우드 동기화',
      items: [
        {
          question: '기기 간에 무엇이 동기화되나요?',
          answer:
            '포커스 및 휴식 세션 기록, 일일 포커스 목표 기록, 연속 기록 관련 계정 데이터, 세션 길이, 일일 목표, 사운드, 애니메이션, 완료 사운드, 축하 동물 등 동기화 설정.',
        },
        {
          question: '인터넷이 없으면 어떻게 되나요?',
          answer:
            '로그인 후에는 오프라인에서도 타이머를 계속 사용할 수 있습니다. 새 세션과 변경은 연결이 가능해질 때까지 기기에 남습니다.',
        },
        {
          question: '다시 온라인이 되면?',
          answer:
            '앱이 보류 중인 변경을 계정과 동기화합니다. 동기화는 오프라인 우선이며 최종적으로 일치합니다 — 즉각적인 실시간 협업은 아닙니다.',
        },
        {
          question: 'iPhone과 Mac에서 같은 계정을 쓰려면?',
          answer:
            '두 기기에 앱을 설치하고 같은 Apple 또는 Google 계정으로 로그인합니다. 복원이 끝나면 포커스 기록이 양쪽에 나타날 수 있습니다.',
        },
        {
          question: '기록이 없으면?',
          answer:
            '같은 계정으로 로그인했는지 확인하고, 복원/동기화가 끝날 때까지 기다린 뒤 포커스 기록을 다시 확인하세요. 다른 계정으로 로그인했다면 그 계정의 기록이 표시됩니다.',
        },
      ],
    },
    migration: {
      title: '이전 버전에서 업그레이드',
      items: [
        {
          question: '기존 로컬 기록은 어떻게 되나요?',
          answer:
            '기존 로컬 기록이 조용히 삭제되지는 않습니다. 로그인 후 해당 기록을 계정에 추가하기 전에 확인을 요청합니다.',
        },
        {
          question: '기록을 어떻게 가져오나요?',
          answer:
            '기록을 소유할 계정으로 로그인하고 기록 추가 화면을 검토한 뒤 이 계정에 추가를 선택합니다. 표시된 계정이 틀리면 다른 계정을 사용하세요. 세션은 나중에 다른 계정으로 옮길 수 없습니다.',
        },
        {
          question: '기기와 계정 설정이 다르면?',
          answer:
            '이 기기 설정을 유지할지 계정 설정을 사용할지 묻습니다. 언어, 외관, 알림, 동기 부여 알림은 기기별로 유지됩니다.',
        },
      ],
    },
    notifications: {
      title: '알림',
      items: [
        {
          question: 'iPhone에서 알림을 어떻게 켜나요?',
          answer:
            '설정 → 알림에서 사용으로 선택하거나, 이전에 거부했다면 시스템 설정을 엽니다.',
        },
        {
          question: '동기 부여 알림은 어떻게 작동하나요?',
          answer:
            'iPhone에서 설정 → 동기 부여 알림으로, 알림이 허용된 후 켤 수 있습니다. 일시 중지하거나 조용한 시간을 설정할 수 있습니다. 선택 사항이며 기본값은 꺼짐입니다.',
        },
        {
          question: '알림이 꺼져 있으면?',
          answer:
            '세션 종료 알림과 동기 부여 알림에는 알림 권한이 필요합니다. 설정 → 알림 → 설정 열기에서 iOS 설정을 켜세요.',
        },
        {
          question: 'Live Activities는 어떻게 작동하나요?',
          answer:
            '지원 iPhone에서는 선택적 Live Activity로 잠금 화면과 Dynamic Island에 진행 중인 세션을 표시할 수 있습니다. 관련 기능을 켤 때 권한을 요청합니다.',
        },
      ],
    },
    accountPrivacy: {
      title: '계정 및 개인정보',
      items: [
        {
          question: '계정을 어떻게 삭제하나요?',
          answer:
            '로그인한 뒤 설정 → 계정 → 계정 삭제를 열고 확인합니다. 계정과 동기화된 포커스 기록이 운영 데이터베이스에서 영구 삭제됩니다. 되돌릴 수 없습니다. 삭제에는 네트워크 연결이 필요합니다.',
        },
        {
          question: '계정 삭제의 영향은?',
          answer:
            '해당 계정의 동기화 클라우드 데이터가 제거되고, 저장된 경우 Apple로 로그인 권한이 취소되며, 삭제한 기기에서 계정 데이터가 제거됩니다. 다른 기기의 로컬 사본은 더 이상 동기화되지 않습니다. 필요하면 해당 기기에서 앱을 제거하거나 로그인 화면에서 지우세요. 제공자 백업은 제한된 복구 기간 동안 삭제된 데이터를 보관할 수 있습니다.',
        },
        {
          question: '데이터를 어떻게 내보내나요?',
          answer:
            '설정 → 계정 → 내 데이터 내보내기로 세션, 일일 목표, 동기화 설정, 계정 프로필이 담긴 JSON 파일을 저장합니다. 아직 계정으로 옮기지 않은 로컬 데이터는 로그인 화면에서도 내보낼 수 있습니다.',
        },
        {
          question: '개인정보 처리방침은 어디에 있나요?',
          answer:
            '제품 웹사이트에서 개인정보 처리방침을 열거나, 이 사이트 제품 페이지의 개인정보 링크를 사용하세요.',
        },
      ],
    },
    requirements: {
      title: '요구 사항',
      body: 'iPhone: iOS 17 이상. Mac: macOS 14.6 이상.',
    },
    contact: {
      title: '문의',
      body: '도움, 피드백 또는 버그 신고:',
    },
    privacyPolicyLink: '개인정보 처리방침',
  },
  privacy: {
    metaTitle: `${PULSE_APP_NAME} 개인정보 처리방침`,
    metaDescription: `${PULSE_APP_NAME} 개인정보 처리방침 — Apple 및 Google 로그인, 클라우드 동기화, 로컬 저장, 분석, Mac 및 iPhone 계정 삭제.`,
    title: '개인정보 처리방침',
    subtitle: `${PULSE_APP_NAME} — Mac 및 iPhone용 Pomodoro 타이머`,
    lastUpdated: '최종 업데이트: 2026년 10월 11일',
    summary: {
      title: '요약',
      body: `Apple 또는 Google로 로그인하면 계정이 Mac과 iPhone 간 포커스 기록, 일일 목표, 타이머 설정을 동기화합니다. 이메일 주소, 계정 식별자, 사용자가 만든 포커스 데이터 등 앱에 필요한 것만 저장합니다. 판매·광고·분석 제공업체와의 공유는 하지 않습니다. 설정에서 언제든 데이터를 내보내거나 계정을 삭제할 수 있습니다. 별도로 앱은 익명의 프라이버시 보호 사용 분석을 보내 포커스 흐름을 개선할 수 있습니다.`,
    },
    localData: {
      title: '기기에 저장되는 데이터',
      body: '타이머 설정, 세션 기본 설정, 포커스 기록은 표준 시스템 저장소로 Mac 또는 iPhone에 로컬 저장되어 오프라인에서도 타이머가 작동합니다. 기기에 로그인한 각 계정은 별도 로컬 저장소를 갖습니다. 로그인 세션은 시스템 키체인에 보관됩니다. 언어, 외관, 로그인 시 실행, 알림, 동기 부여 알림 설정은 각 기기에 남으며 동기화되지 않습니다. 포커스 기록 내용 자체는 분석 제공업체에 업로드되지 않습니다.',
      migrationSafety:
        '이미 포커스 기록이 있는 기기에서 처음 로그인하면, 해당 기록을 계정으로 옮기기 전에 확인을 요청합니다. 서버에서 이동이 확인될 때까지 추가로 90일 동안 앱은 이전 로컬 사본과 기기의 로컬 백업 파일을 안전망으로 유지한 뒤 자동으로 제거합니다.',
    },
    accountAndSync: {
      title: '계정 및 동기화 데이터',
      intro: '로그인하면 다음을 처리합니다:',
      items: [
        '연락처 정보: Apple로 로그인(이메일 가리기를 통한 비공개 릴레이 주소일 수 있음) 또는 Google이 공유하는 이메일 주소. 이름은 요청하지 않습니다.',
        '식별자: 로그인 시 생성되는 계정 ID와 설치마다의 임의 ID — 동기화 및 어떤 기기가 변경했는지 식별에만 사용.',
        '포커스 데이터: 완료 및 삭제된 포커스·휴식 세션(시각, 길이, 로컬 날짜 및 시간대), 일일 목표, 최고 연속 기록, 동기화 설정(세션 길이, 일일 목표, 사운드, 애니메이션, 완료 사운드, 축하 동물).',
      ],
      closing:
        '이 데이터는 동기화, 기록, 계정 기능 제공에만 사용됩니다. 계정에 연결되며 추적에 사용되지 않고, 아래 처리자 외 제3자와 공유하지 않습니다.',
    },
    processors: {
      title: '처리자 및 저장 위치',
      bodyBeforeSupabase: '계정 및 동기화 데이터는',
      bodyAfterSupabase:
        '(데이터베이스 및 인증)을 유럽 연합에 두고 있습니다. 로그인은',
      orWord: '또는',
      bodyAfterProviders:
        '가 처리합니다(선택한 옵션에 따라). 전송 중 암호화되며, 각 계정이 자신의 데이터만 읽을 수 있도록 접근이 제한됩니다.',
    },
    retention: {
      title: '보관, 백업 및 삭제',
      items: [
        '동기화 데이터는 계정이 존재하는 동안 보관됩니다.',
        '계정 삭제(설정 → 계정 → 계정 삭제)는 계정과 모든 동기화 데이터를 운영 데이터베이스에서 영구 삭제하고, 저장된 경우 Apple로 로그인 권한을 취소하며, 삭제한 기기에서 해당 계정 데이터를 제거합니다. 다른 기기의 로컬 사본은 더 이상 동기화되지 않으며, 해당 기기에서 앱을 삭제하거나 로그인 화면에서 제거할 때까지 남습니다.',
        '데이터베이스 제공업체는 7일간 일일 백업을 보관합니다. 삭제된 데이터는 백업 만료까지 남을 수 있으며, 백업은 재해 복구에만 사용됩니다. 같은 목적으로 최대 90일 암호화 주간 백업을 보관할 수도 있습니다.',
        '로그아웃은 아무 것도 삭제하지 않습니다. 아직 동기화되지 않은 변경은 같은 계정이 다시 로그인할 때까지 기기에 남습니다.',
        '분석 기록은 TelemetryDeck의 보관 관행에 따르며 포커스 기록 복원에 사용되지 않습니다.',
      ],
    },
    export: {
      title: '내보내기',
      body: '설정 → 계정 → 내 데이터 내보내기로 세션, 일일 목표, 동기화 설정, 계정 프로필이 담긴 JSON 파일을 저장합니다. 아직 계정으로 옮기지 않은 데이터는 로그인 화면에서도 내보낼 수 있습니다.',
    },
    analytics: {
      title: '분석',
      introBeforeLink: '앱 사용 방식을 이해하기 위해 프라이버시 중심 분석 서비스인',
      introAfterLink:
        '를 사용합니다(예: 시작 또는 완료한 포커스/휴식 세션, 일일 목표 변경, 설정 변경, 알림 권한 결과, 동기 부여 알림 이벤트, 온보딩 완료 여부). 신호에는 자유 텍스트, 이름, 이메일, 포커스 기록 내용이 포함되지 않습니다.',
      identifier:
        'TelemetryDeck은 해시된 기기 범위 식별자로 설치를 식별하고 비개인 기기 메타데이터(모델, OS 버전, 로케일 등)를 붙일 수 있습니다. 이 데이터는 분석에만 사용되며, 당사가 신원과 연결하지 않으며 다른 회사 앱·웹사이트 간 추적에 사용되지 않습니다.',
      learnMore: '자세히:',
      faqLabel: 'TelemetryDeck Privacy FAQ',
    },
    appStoreUpdates: {
      title: 'App Store 업데이트',
      body: '설정에서 "업데이트 확인"을 사용하면 App Store에 새 버전이 있는지 Apple에 문의할 수 있습니다.',
    },
    launchAtLogin: {
      title: '로그인 시 실행(Mac)',
      body: 'Mac 설정에서 로그인 시 실행을 켜면 앱이 macOS 시스템 API로 로그인 항목으로 등록됩니다. 이 설정은 사용자가 제어하며 언제든 끌 수 있습니다.',
    },
    notifications: {
      title: '알림 및 Live Activities(iPhone)',
      body: 'iPhone에서 선택적 로컬 알림, 동기 부여 알림, Live Activities로 세션 종료를 알리거나 부드럽게 포커스로 돌아갈 수 있습니다. 해당 기능을 켤 때만 권한을 요청합니다. 알림 내용은 기기에 남습니다.',
    },
    whatWeDoNotDo: {
      title: '하지 않는 일',
      items: [
        '광고 네트워크 없음',
        '개인정보 판매 없음',
        '분석을 위해 연락처, 사진, 정확한 위치, 카메라, 마이크에 접근하지 않음',
      ],
    },
    children: {
      title: '아동',
      body: `${PULSE_APP_NAME}는 위에서 설명한 동기화에 필요한 계정 범위를 넘어 아동의 개인정보를 고의로 수집하지 않습니다. 분석 신호는 익명이며 개인 콘텐츠를 포함하지 않습니다.`,
    },
    changes: {
      title: '변경',
      body: '본 방침이 변경되면 업데이트된 버전이 이 URL에 게시됩니다.',
    },
    contact: {
      title: '문의',
      body: '본 방침에 대한 질문:',
    },
  },
}
