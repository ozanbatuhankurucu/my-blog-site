import { PULSE_APP_NAME } from '../../constants'
import type { PulseMessages } from './types'

export const viMessages: PulseMessages = {
  languageLabel: 'Ngôn ngữ trang',
  video: {
    ariaLabel: `Video giới thiệu sản phẩm ${PULSE_APP_NAME}`,
    playLabel: 'Phát video giới thiệu',
    unsupported: 'Trình duyệt của bạn không hỗ trợ video nhúng.',
  },
  landing: {
    metaTitle: `${PULSE_APP_NAME} — Bộ đếm thời gian Pomodoro trên thanh menu cho macOS`,
    metaDescription: `${PULSE_APP_NAME} là bộ đếm thời gian Pomodoro gốc trên macOS với popover thiết kế lại, lịch sử tập trung đầy đủ, cảnh báo theo phiên và hỗ trợ 12 ngôn ngữ.`,
    heroImageAlt: `${PULSE_APP_NAME} — bộ đếm tập trung và tổng quan lịch sử tuần`,
    backToProjects: 'Quay lại dự án',
    availableOnAppStore: 'Có trên Mac App Store',
    eyebrow: 'Bộ đếm Pomodoro trên thanh menu',
    tagline: 'Một bộ đếm Pomodoro dịu dàng sống trên thanh menu của bạn.',
    description: `Tập trung mà không làm lộn xộn máy tính. Bắt đầu phiên tập trung, nghỉ giải lao, và để ${PULSE_APP_NAME} theo dõi tiến độ với lịch sử tập trung đầy đủ — lặng lẽ ở chế độ nền.`,
    downloadCta: 'Tải trên Mac App Store',
    watchDemo: 'Xem hoạt động thực tế',
    supportCta: 'Hỗ trợ',
    stats: {
      platformLabel: 'Nền tảng',
      platformValue: 'macOS gốc',
      languagesLabel: 'Ngôn ngữ',
      languagesValue: '12 ngôn ngữ',
      dataLabel: 'Thu thập dữ liệu',
      dataValue: 'Không',
      builtWithLabel: 'Xây dựng bằng',
      builtWithValue: 'SwiftUI + AppKit',
    },
    demo: {
      eyebrow: 'Cách tập trung yên tĩnh hơn',
      title: 'Bộ đếm có mặt khi bạn cần—và biến mất khi bạn không cần.',
      description: `Mở ${PULSE_APP_NAME} từ thanh menu, chọn một phiên và đóng popover. Bộ đếm vẫn chạy trong khi bạn làm việc. Lần đầu mở, phần giới thiệu ngắn cho bạn biết nơi tìm nó — tôn trọng Reduce Motion khi được bật.`,
      caption:
        'Điều khiển phiên thiết kế lại, lịch sử tập trung đầy đủ, bản địa hóa 12 ngôn ngữ, cảnh báo hoàn thành theo phiên và cài đặt.',
    },
    rhythm: {
      eyebrow: 'Nhịp điệu do bạn kiểm soát',
      title: 'Tập trung, tạm dừng, phục hồi, lặp lại.',
      description: `${PULSE_APP_NAME} gợi ý bước tiếp theo nhưng không bao giờ tự bắt đầu phiên giúp bạn. Mọi khoảng thời gian đều có thể chỉnh theo ngày của bạn.`,
    },
    featureShowcases: [
      {
        title: 'Tập trung',
        badge: '1–120 phút',
        description:
          'Đồng hồ đếm ngược chạy lặng lẽ khi bạn làm việc. Tạm dừng, đặt lại hoặc bỏ qua trong khi bộ đếm trên thanh menu vẫn cố định.',
        imageFile: 'focus-running.png',
        alt: `${PULSE_APP_NAME} phiên tập trung đang chạy với điều khiển tạm dừng và đếm ngược trên thanh menu`,
      },
      {
        title: 'Thanh menu',
        badge: 'Đếm ngược ổn định',
        description:
          'Hiện hoặc ẩn thời gian còn lại ngay lập tức. Mục trạng thái độ rộng cố định giữ nguyên vị trí mà không làm lệch popover, tối đa 120:00.',
        imageFile: 'menubar.png',
        alt: `${PULSE_APP_NAME} đồng hồ đếm ngược trên thanh menu macOS`,
      },
      {
        title: 'Tùy chỉnh',
        badge: 'Theo cách của bạn',
        description:
          'Thời lượng linh hoạt, âm thanh và hoạt ảnh hoàn thành, 12 ngôn ngữ giao diện, và khởi chạy khi đăng nhập.',
        imageFile: 'settings.png',
        alt: `${PULSE_APP_NAME} cài đặt thời lượng, cảnh báo hoàn thành, ngôn ngữ và khởi chạy khi đăng nhập`,
      },
    ],
    history: {
      eyebrow: 'Tiến độ không áp lực',
      title: 'Nhìn thấy công việc tích lũy.',
      description:
        'Mở cửa sổ lịch sử đầy đủ từ popover hoặc menu trạng thái. Tổng số và chuỗi ngày cho thấy tiến độ mà không biến việc tập trung thành một bảng điều khiển khác phải quản lý.',
      items: ['Tổng thời gian tập trung', 'Số phiên đã hoàn thành', 'Chuỗi hiện tại', 'Chuỗi tốt nhất'],
      imageAlt: `${PULSE_APP_NAME} lịch sử tập trung tuần với số phiên, giờ tập trung và chuỗi`,
    },
    feedback: {
      eyebrow: 'Phản hồi dịu dàng, theo cách của bạn',
      title: 'Khiến việc hoàn thành trở nên đáng thưởng.',
      description: `Chọn trong sáu âm thanh hoàn thành nhẹ nhàng và sáu hoạt ảnh động vật, hoặc tắt cả hai. ${PULSE_APP_NAME} hiện thông báo phù hợp khi phiên Tập trung, Nghỉ ngắn hoặc Nghỉ dài kết thúc.`,
      items: [
        'Tiêu đề và phụ đề hoàn thành theo từng loại phiên',
        'Giao diện 12 ngôn ngữ với mặc định theo ngôn ngữ hệ thống',
        'Ghi đè ngôn ngữ trong Cài đặt: Hệ thống hoặc bất kỳ ngôn ngữ được hỗ trợ',
      ],
      settingsImageAlt: `${PULSE_APP_NAME} cài đặt thời lượng, ngôn ngữ, âm thanh hoàn thành và khởi chạy khi đăng nhập`,
      celebrationImageAlt: `${PULSE_APP_NAME} hoạt ảnh thỏ chúc mừng khi phiên hoàn thành`,
      soundNames: ['Forest Birds', 'Crystal Chime', 'Gentle Marimba', 'Rain Drops', 'Soft Bell', 'Zen Gong'],
      animalNames: ['Khỉ', 'Koala', 'Mèo', 'Cáo', 'Gấu trúc', 'Thỏ'],
    },
    native: {
      eyebrow: 'Gốc theo thiết kế',
      title: 'Được tạo để cảm thấy quen thuộc trên Mac của bạn.',
      description: `SwiftUI, AppKit và quy ước hệ thống macOS giúp ${PULSE_APP_NAME} nhanh, quen thuộc và đáng tin cậy — với nhãn VoiceOver và hỗ trợ Reduce Motion xuyên suốt.`,
      features: [
        {
          title: 'Sống trên thanh menu',
          description: 'Không biểu tượng Dock và không cửa sổ chính tranh sự chú ý của bạn.',
        },
        {
          title: 'Luôn chính xác',
          description:
            'Các phiên vẫn đúng qua ngủ, thức và khởi động lại, với lịch sử ghi nhận theo thời điểm kết thúc thực tế.',
        },
        {
          title: 'Giữ dữ liệu tại chỗ',
          description: 'Cài đặt và lịch sử tập trung của bạn không bao giờ rời khỏi Mac.',
        },
        {
          title: 'Nói ngôn ngữ của bạn',
          description:
            'Giao diện đầy đủ bằng 12 ngôn ngữ với mặc định theo hệ thống và tùy chọn ghi đè trong Cài đặt.',
        },
      ],
    },
    privacy: {
      eyebrow: 'Riêng tư theo mặc định',
      title: 'Sự tập trung của bạn không phải là một điểm dữ liệu.',
      description: `${PULSE_APP_NAME} không thu thập dữ liệu. Không tài khoản, phân tích, quảng cáo hay yêu cầu mạng. Mọi thứ ở lại trên Mac của bạn.`,
      items: [
        'Không đăng nhập',
        'Không đồng bộ đám mây',
        'Không theo dõi',
        'Không truy cập tệp cá nhân',
        'Không dữ liệu nào rời khỏi Mac của bạn',
      ],
    },
    closing: {
      title: 'Dành chỗ cho công việc tập trung.',
      description: `Tải ${PULSE_APP_NAME} từ Mac App Store, hoặc đọc chính sách quyền riêng tư và trang hỗ trợ nếu bạn cần giúp.`,
      getSupport: 'Nhận hỗ trợ',
      privacy: 'Quyền riêng tư',
    },
  },
  support: {
    metaTitle: `${PULSE_APP_NAME} Hỗ trợ`,
    metaDescription: `Hướng dẫn hỗ trợ và bắt đầu cho ${PULSE_APP_NAME}, bộ đếm Pomodoro trên thanh menu cho Mac.`,
    title: `${PULSE_APP_NAME} Hỗ trợ`,
    intro: `${PULSE_APP_NAME} là bộ đếm Pomodoro đơn giản trên thanh menu cho Mac.`,
    gettingStarted: {
      title: 'Bắt đầu',
      steps: [
        'Nhấp biểu tượng ứng dụng trên thanh menu (góc trên bên phải màn hình).',
        'Chọn Tập trung, Nghỉ ngắn hoặc Nghỉ dài.',
        'Nhấn Bắt đầu. Bạn có thể đóng popover trong khi bộ đếm đang chạy.',
      ],
    },
    settings: {
      title: 'Cài đặt',
      body: 'Mở tab Cài đặt để đổi độ dài phiên, âm thanh hoàn thành, hoạt ảnh thanh menu và Khởi chạy khi đăng nhập.',
    },
    history: {
      title: 'Lịch sử tập trung đầy đủ',
      body: 'Mở Lịch sử đầy đủ từ popover hoặc menu trạng thái thanh menu để xem tổng thời gian tập trung, phiên đã hoàn thành, chuỗi hiện tại và chuỗi tốt nhất.',
    },
    requirements: {
      title: 'Yêu cầu',
      body: 'macOS 14.6 trở lên.',
    },
    contact: {
      title: 'Liên hệ',
      body: 'Để được giúp đỡ, góp ý hoặc báo lỗi:',
    },
  },
  privacy: {
    metaTitle: `${PULSE_APP_NAME} Chính sách quyền riêng tư`,
    metaDescription: `Chính sách quyền riêng tư cho ${PULSE_APP_NAME}, bộ đếm Pomodoro cho Mac và iPhone.`,
    title: 'Chính sách quyền riêng tư',
    subtitle: `${PULSE_APP_NAME} — Bộ đếm Pomodoro cho Mac và iPhone`,
    lastUpdated: 'Cập nhật lần cuối: 24 tháng 9, 2026',
    summary: {
      title: 'Tóm tắt',
      body: `${PULSE_APP_NAME} không yêu cầu tài khoản và không thu thập tên, email hay nội dung cá nhân. Ứng dụng có thể gửi phân tích sử dụng ẩn danh, bảo vệ quyền riêng tư để chúng tôi cải thiện luồng tập trung. Cài đặt bộ đếm và lịch sử tập trung của bạn ở lại trên thiết bị.`,
    },
    localData: {
      title: 'Dữ liệu lưu trên thiết bị của bạn',
      body: 'Cài đặt bộ đếm, tùy chọn phiên và lịch sử tập trung được lưu cục bộ trên Mac hoặc iPhone bằng bộ nhớ hệ thống tiêu chuẩn. Bản thân nội dung lịch sử tập trung không được tải lên nhà cung cấp phân tích của chúng tôi.',
    },
    analytics: {
      title: 'Phân tích',
      introBeforeLink: 'Chúng tôi dùng',
      introAfterLink:
        ', một dịch vụ phân tích tập trung vào quyền riêng tư, để hiểu cách ứng dụng được dùng (ví dụ: phiên tập trung hoặc nghỉ được bắt đầu hay hoàn thành, thay đổi mục tiêu hàng ngày, thay đổi cài đặt, và liệu phần hướng dẫn đã hoàn tất hay chưa). Tín hiệu không gồm văn bản tự do, tên, email hay nội dung lịch sử tập trung của bạn.',
      identifier:
        'TelemetryDeck nhận dạng các lần cài đặt bằng định danh băm theo phạm vi thiết bị và có thể gắn siêu dữ liệu thiết bị không mang tính cá nhân (như mẫu máy, phiên bản hệ điều hành và ngôn ngữ/vùng). Dữ liệu này chỉ dùng cho phân tích, không được chúng tôi liên kết với danh tính của bạn, và không dùng để theo dõi trên ứng dụng hay trang web của công ty khác.',
      learnMore: 'Tìm hiểu thêm:',
      faqLabel: 'TelemetryDeck Privacy FAQ',
    },
    appStoreUpdates: {
      title: 'Cập nhật App Store',
      body: 'Nếu bạn dùng “Kiểm tra cập nhật” trong Cài đặt, ứng dụng có thể liên hệ Apple để xem liệu có phiên bản mới hơn trên App Store hay không.',
    },
    launchAtLogin: {
      title: 'Khởi chạy khi đăng nhập (Mac)',
      body: 'Nếu bạn bật Khởi chạy khi đăng nhập trong Cài đặt trên Mac, ứng dụng dùng API hệ thống macOS để đăng ký làm mục đăng nhập. Tùy chọn này do bạn kiểm soát và có thể tắt bất cứ lúc nào.',
    },
    notifications: {
      title: 'Thông báo và Live Activities (iPhone)',
      body: 'Trên iPhone, thông báo cục bộ tùy chọn và Live Activities giúp bạn biết khi phiên kết thúc. Quyền chỉ được yêu cầu khi bạn chọn bật các tính năng đó. Nội dung thông báo ở lại trên thiết bị của bạn.',
    },
    whatWeDoNotDo: {
      title: 'Những gì chúng tôi không làm',
      items: [
        'Không tài khoản hay đăng nhập',
        'Không mạng quảng cáo',
        'Không bán thông tin cá nhân',
        'Không truy cập danh bạ, ảnh, vị trí chính xác, camera hoặc micro cho phân tích',
      ],
    },
    children: {
      title: 'Trẻ em',
      body: `${PULSE_APP_NAME} không cố ý thu thập thông tin cá nhân từ trẻ em. Tín hiệu phân tích là ẩn danh và không gồm nội dung cá nhân.`,
    },
    changes: {
      title: 'Thay đổi',
      body: 'Nếu chính sách này thay đổi, phiên bản cập nhật sẽ được đăng tại URL này.',
    },
    contact: {
      title: 'Liên hệ',
      body: 'Câu hỏi về chính sách này:',
    },
  },
}
