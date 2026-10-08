import { PULSE_APP_NAME } from '../../constants'
import type { PulseMessages } from './types'

export const koMessages: PulseMessages = {
  languageLabel: '페이지 언어',
  video: {
    ariaLabel: `${PULSE_APP_NAME} 제품 둘러보기`,
    playLabel: '둘러보기 재생',
    unsupported: '브라우저가 삽입된 동영상을 지원하지 않습니다.',
  },
  landing: {
    metaTitle: `${PULSE_APP_NAME} — macOS용 메뉴 막대 Pomodoro 타이머`,
    metaDescription: `${PULSE_APP_NAME}는 새로워진 팝오버, 전체 집중 기록, 세션 인식 알림, 12개 언어 지원을 갖춘 네이티브 macOS Pomodoro 타이머입니다.`,
    heroImageAlt: `${PULSE_APP_NAME} 집중 타이머와 주간 기록 개요`,
    backToProjects: '프로젝트로 돌아가기',
    availableOnAppStore: 'Mac App Store에서 이용 가능',
    eyebrow: '메뉴 막대 Pomodoro 타이머',
    tagline: '메뉴 막대에 자리한 부드러운 Pomodoro 타이머.',
    description: `데스크톱을 어지럽히지 않고 집중하세요. 집중 세션을 시작하고 휴식을 취하면 ${PULSE_APP_NAME}가 전체 집중 기록으로 진행 상황을 조용히 추적합니다.`,
    downloadCta: 'Mac App Store에서 다운로드',
    watchDemo: '실제 동작 보기',
    supportCta: '지원',
    stats: {
      platformLabel: '플랫폼',
      platformValue: '네이티브 macOS',
      languagesLabel: '언어',
      languagesValue: '12개 언어',
      dataLabel: '데이터 수집',
      dataValue: '없음',
      builtWithLabel: '기술',
      builtWithValue: 'SwiftUI + AppKit',
    },
    demo: {
      eyebrow: '더 조용한 집중 방식',
      title: '필요할 때는 있고—필요하지 않을 때는 사라집니다.',
      description: `메뉴 막대에서 ${PULSE_APP_NAME}를 열고 세션을 선택한 뒤 팝오버를 닫으세요. 타이머는 작업하는 동안에도 계속 작동합니다. 처음 실행 시 짧은 안내가 위치를 알려 주며 — 동작 줄이기가 켜져 있으면 이를 존중합니다.`,
      caption:
        '새로워진 세션 컨트롤, 전체 집중 기록, 12개 언어 현지화, 세션 인식 완료 알림, 설정.',
    },
    rhythm: {
      eyebrow: '당신이 조절하는 리듬',
      title: '집중하고, 멈추고, 회복하고, 반복하세요.',
      description: `${PULSE_APP_NAME}는 다음에 무엇을 할지 제안하지만 대신 세션을 시작하지 않습니다. 모든 시간은 하루에 맞게 조정할 수 있습니다.`,
    },
    featureShowcases: [
      {
        title: '집중',
        badge: '1–120분',
        description:
          '작업하는 동안 카운트다운이 조용히 진행됩니다. 일시 정지, 재설정, 건너뛰기가 가능하며 메뉴 막대 타이머는 고정되어 있습니다.',
        imageFile: 'focus-running.png',
        alt: `${PULSE_APP_NAME} 집중 세션 실행 중 — 일시 정지 컨트롤과 메뉴 막대 카운트다운`,
      },
      {
        title: '메뉴 막대',
        badge: '안정적인 카운트다운',
        description:
          '남은 시간을 즉시 표시하거나 숨기세요. 고정 너비 상태 항목은 팝오버를 밀지 않고 최대 120:00까지 제자리에 유지됩니다.',
        imageFile: 'menubar.png',
        alt: `${PULSE_APP_NAME} 카운트다운이 macOS 메뉴 막대에 표시됨`,
      },
      {
        title: '맞춤 설정',
        badge: '나만의 규칙',
        description:
          '유연한 시간, 완료 사운드와 애니메이션, 12개 UI 언어, 로그인 시 실행.',
        imageFile: 'settings.png',
        alt: `${PULSE_APP_NAME} 시간, 완료 알림, 언어, 로그인 시 실행 설정`,
      },
    ],
    history: {
      eyebrow: '부담 없는 진행 상황',
      title: '쌓여 가는 일을 확인하세요.',
      description:
        '팝오버 또는 상태 메뉴에서 전체 기록 창을 여세요. 합계와 연속 기록이 집중을 또 다른 대시보드로 만들지 않고 진행 상황을 보여 줍니다.',
      items: ['총 집중 시간', '완료한 세션 수', '현재 연속 기록', '최고 연속 기록'],
      imageAlt: `${PULSE_APP_NAME} 주간 집중 기록 — 세션 수, 집중 시간, 연속 기록`,
    },
    feedback: {
      eyebrow: '부드러운 피드백, 원하는 방식으로',
      title: '마치는 순간을 보람 있게.',
      description: `여섯 가지 잔잔한 완료 사운드와 여섯 가지 동물 축하 중에서 고르거나 둘 다 끄세요. ${PULSE_APP_NAME}는 집중, 짧은 휴식, 긴 휴식이 끝날 때 알맞은 메시지를 보여 줍니다.`,
      items: [
        '세션을 인식하는 완료 제목과 부제',
        '시스템 언어를 기본으로 하는 12개 언어 UI',
        '설정에서 언어 재정의: 시스템 또는 지원되는 모든 언어',
      ],
      settingsImageAlt: `${PULSE_APP_NAME} 시간, 언어, 완료 사운드, 로그인 시 실행 설정`,
      celebrationImageAlt: `${PULSE_APP_NAME} 세션 완료 시 토끼 축하 애니메이션`,
      soundNames: ['Forest Birds', 'Crystal Chime', 'Gentle Marimba', 'Rain Drops', 'Soft Bell', 'Zen Gong'],
      animalNames: ['원숭이', '코알라', '고양이', '여우', '판다', '토끼'],
    },
    native: {
      eyebrow: '설계부터 네이티브',
      title: 'Mac에서 자연스럽게 느껴지도록 만들었습니다.',
      description: `SwiftUI, AppKit, macOS 시스템 관례로 ${PULSE_APP_NAME}는 빠르고 익숙하며 안정적입니다 — VoiceOver 레이블과 동작 줄이기 지원을 전체에 적용했습니다.`,
      features: [
        {
          title: '메뉴 막대에 자리함',
          description: 'Dock 아이콘도, 주의를 빼앗는 메인 창도 없습니다.',
        },
        {
          title: '정확함 유지',
          description:
            '수면, 깨우기, 재실행에도 세션이 올바르게 유지되며, 기록은 실제 마감 시점에 저장됩니다.',
        },
        {
          title: '데이터는 로컬에',
          description: '설정과 집중 기록은 Mac을 떠나지 않습니다.',
        },
        {
          title: '당신의 언어로',
          description:
            '12개 언어의 전체 UI. 시스템 언어 기본값과 설정에서의 수동 재정의.',
        },
      ],
    },
    privacy: {
      eyebrow: '기본은 비공개',
      title: '당신의 집중은 데이터 포인트가 아닙니다.',
      description: `${PULSE_APP_NAME}는 데이터를 수집하지 않습니다. 계정, 분석, 광고, 네트워크 요청이 없습니다. 모든 것은 Mac에 남습니다.`,
      items: [
        '로그인 없음',
        '클라우드 동기화 없음',
        '추적 없음',
        '개인 파일 접근 없음',
        '데이터가 Mac을 떠나지 않음',
      ],
    },
    closing: {
      title: '집중할 공간을 만드세요.',
      description: `Mac App Store에서 ${PULSE_APP_NAME}를 받거나, 도움이 필요하면 개인정보 처리방침과 지원 페이지를 확인하세요.`,
      getSupport: '지원 받기',
      privacy: '개인정보',
    },
  },
  support: {
    metaTitle: `${PULSE_APP_NAME} 지원`,
    metaDescription: `Mac용 메뉴 막대 Pomodoro 타이머 ${PULSE_APP_NAME}의 지원 및 시작 가이드.`,
    title: `${PULSE_APP_NAME} 지원`,
    intro: `${PULSE_APP_NAME}는 Mac용 간단한 메뉴 막대 Pomodoro 타이머입니다.`,
    gettingStarted: {
      title: '시작하기',
      steps: [
        '메뉴 막대(화면 오른쪽 위)의 앱 아이콘을 클릭하세요.',
        '집중, 짧은 휴식 또는 긴 휴식을 선택하세요.',
        '시작을 누르세요. 타이머가 실행되는 동안 팝오버를 닫아도 됩니다.',
      ],
    },
    settings: {
      title: '설정',
      body: '설정 탭에서 세션 길이, 완료 사운드, 메뉴 막대 애니메이션, 로그인 시 실행을 변경할 수 있습니다.',
    },
    history: {
      title: '전체 집중 기록',
      body: '팝오버 또는 메뉴 막대 상태 메뉴에서 전체 기록을 열어 총 집중 시간, 완료한 세션, 현재 연속 기록, 최고 연속 기록을 확인하세요.',
    },
    requirements: {
      title: '요구 사항',
      body: 'macOS 14.6 이상.',
    },
    contact: {
      title: '문의',
      body: '도움, 피드백 또는 버그 신고:',
    },
  },
  privacy: {
    metaTitle: `${PULSE_APP_NAME} 개인정보 처리방침`,
    metaDescription: `Mac 및 iPhone용 Pomodoro 타이머 ${PULSE_APP_NAME}의 개인정보 처리방침.`,
    title: '개인정보 처리방침',
    subtitle: `${PULSE_APP_NAME} — Mac 및 iPhone용 Pomodoro 타이머`,
    lastUpdated: '최종 업데이트: 2026년 9월 24일',
    summary: {
      title: '요약',
      body: `${PULSE_APP_NAME}는 계정이 필요하지 않으며 이름, 이메일 또는 개인 콘텐츠를 수집하지 않습니다. 집중 흐름을 개선하기 위해 앱이 익명이고 개인정보를 보호하는 사용 분석을 보낼 수 있습니다. 타이머 설정과 집중 기록은 기기에 남습니다.`,
    },
    localData: {
      title: '기기에 저장되는 데이터',
      body: '타이머 설정, 세션 환경설정, 집중 기록은 표준 시스템 저장소를 사용해 Mac 또는 iPhone에 로컬로 저장됩니다. 집중 기록 내용 자체는 분석 제공업체에 업로드되지 않습니다.',
    },
    analytics: {
      title: '분석',
      introBeforeLink: '앱 사용 방식을 파악하기 위해 개인정보 중심의 분석 서비스인',
      introAfterLink:
        '를 사용합니다(예: 시작하거나 완료한 집중/휴식 세션, 일일 목표 변경, 설정 변경, 온보딩 완료 여부). 신호에는 자유 형식 텍스트, 이름, 이메일 또는 집중 기록 내용이 포함되지 않습니다.',
      identifier:
        'TelemetryDeck은 해시된 기기 범위 식별자로 설치를 식별하며, 비개인 기기 메타데이터(모델, OS 버전, 로케일 등)를 첨부할 수 있습니다. 이 데이터는 분석에만 사용되며, 당사가 귀하의 신원에 연결하지 않고, 다른 회사의 앱이나 웹사이트 간 추적에도 사용되지 않습니다.',
      learnMore: '자세히 알아보기:',
      faqLabel: 'TelemetryDeck Privacy FAQ',
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
      body: 'iPhone에서 선택적 로컬 알림과 Live Activities는 세션이 끝날 때 확인하는 데 도움이 됩니다. 권한은 해당 기능을 사용하도록 선택할 때만 요청됩니다. 알림 내용은 기기에 남습니다.',
    },
    whatWeDoNotDo: {
      title: '하지 않는 일',
      items: [
        '계정 또는 로그인 없음',
        '광고 네트워크 없음',
        '개인정보 판매 없음',
        '분석을 위해 연락처, 사진, 정확한 위치, 카메라 또는 마이크에 접근하지 않음',
      ],
    },
    children: {
      title: '어린이',
      body: `${PULSE_APP_NAME}는 어린이로부터 고의로 개인정보를 수집하지 않습니다. 분석 신호는 익명이며 개인 콘텐츠를 포함하지 않습니다.`,
    },
    changes: {
      title: '변경',
      body: '본 방침이 변경되면 업데이트된 버전이 이 URL에 게시됩니다.',
    },
    contact: {
      title: '문의',
      body: '본 방침에 관한 질문:',
    },
  },
}
