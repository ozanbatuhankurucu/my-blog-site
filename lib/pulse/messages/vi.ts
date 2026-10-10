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
    metaTitle: `${PULSE_APP_NAME} — Bộ đếm tập trung cho iPhone và Mac`,
    metaDescription: `${PULSE_APP_NAME} là bộ đếm Pomodoro nhẹ nhàng cho iPhone và Mac với Focus History, Daily Focus Goals, đăng nhập Apple và Google, và đồng bộ offline-first trên các thiết bị của bạn.`,
    heroImageAlt: `${PULSE_APP_NAME} — bộ đếm tập trung và tổng quan lịch sử tuần`,
    backToProjects: 'Quay lại dự án',
    availableOnAppStore: 'Có trên App Store',
    availabilityLine: 'iOS 17+ · macOS 14.6+',
    eyebrow: 'Bộ đếm tập trung cho iPhone và Mac',
    tagline: 'Một bộ đếm Pomodoro dịu dàng giúp bạn tập trung — trên iPhone và trên thanh menu Mac.',
    description: `Bắt đầu phiên Tập trung, nghỉ giải lao và giữ lịch sử bên bạn. Đăng nhập bằng Apple hoặc Google để Daily Focus Goals, Focus History và tùy chọn đồng bộ đi theo tài khoản trên iPhone và Mac — trong khi bộ đếm vẫn hoạt động ngoại tuyến.`,
    downloadCta: 'Tải trên App Store',
    watchDemo: 'Xem hoạt động thực tế',
    supportCta: 'Hỗ trợ',
    stats: {
      platformLabel: 'Nền tảng',
      platformValue: 'iPhone và Mac',
      languagesLabel: 'Ngôn ngữ',
      languagesValue: '12 ngôn ngữ',
      dataLabel: 'Đồng bộ',
      dataValue: 'Offline-first',
      builtWithLabel: 'Xây dựng bằng',
      builtWithValue: 'SwiftUI + AppKit',
    },
    demo: {
      eyebrow: 'Cách tập trung yên tĩnh hơn',
      title: 'Bộ đếm có mặt khi bạn cần — và biến mất khi bạn không cần.',
      description: `Trên Mac, mở ${PULSE_APP_NAME} từ thanh menu, chọn một phiên và đóng popover. Trên iPhone, bắt đầu Tập trung từ Home và tiếp tục với Live Activities trên thiết bị được hỗ trợ. Bộ đếm vẫn chạy trong khi bạn làm việc.`,
      caption:
        'Bộ đếm Tập trung và nghỉ, Daily Focus Goals, Focus History, theo dõi chuỗi, bản địa hóa 12 ngôn ngữ và cảnh báo hoàn thành tùy chọn.',
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
          'Đồng hồ đếm ngược chạy lặng lẽ khi bạn làm việc. Tạm dừng, đặt lại hoặc bỏ qua — bạn vẫn kiểm soát trên iPhone và Mac.',
        imageFile: 'focus-running.png',
        alt: `${PULSE_APP_NAME} phiên tập trung đang chạy với điều khiển tạm dừng và đếm ngược`,
      },
      {
        title: 'Thanh menu',
        badge: 'Mac',
        description:
          'Trên Mac, hiện hoặc ẩn thời gian còn lại trên thanh menu. Mục trạng thái độ rộng cố định giữ nguyên vị trí mà không làm lệch popover, tối đa 120:00.',
        imageFile: 'menubar.png',
        alt: `${PULSE_APP_NAME} đồng hồ đếm ngược trên thanh menu macOS`,
      },
      {
        title: 'Tùy chỉnh',
        badge: 'Theo cách của bạn',
        description:
          'Thời lượng linh hoạt, Daily Focus Goals, âm thanh và hoạt ảnh hoàn thành, 12 ngôn ngữ giao diện và tùy chọn giao diện.',
        imageFile: 'settings.png',
        alt: `${PULSE_APP_NAME} cài đặt thời lượng, cảnh báo hoàn thành, ngôn ngữ và mục tiêu`,
      },
    ],
    history: {
      eyebrow: 'Tiến độ không áp lực',
      title: 'Nhìn thấy công việc tích lũy.',
      description:
        'Mở Focus History để xem tổng số và chuỗi ngày. Khi đã đăng nhập, lịch sử có thể đồng bộ giữa iPhone và Mac để tiến độ đi theo bạn.',
      items: [
        'Tổng thời gian tập trung',
        'Số phiên đã hoàn thành',
        'Chuỗi hiện tại',
        'Chuỗi tốt nhất',
        'Daily Focus Goals',
      ],
      imageAlt: `${PULSE_APP_NAME} lịch sử tập trung tuần với số phiên, giờ tập trung và chuỗi`,
    },
    feedback: {
      eyebrow: 'Phản hồi dịu dàng, theo cách của bạn',
      title: 'Khiến việc hoàn thành trở nên đáng thưởng.',
      description: `Chọn trong sáu âm thanh hoàn thành nhẹ nhàng và sáu hoạt ảnh động vật, hoặc tắt một trong hai. ${PULSE_APP_NAME} hiện thông báo phù hợp khi phiên Tập trung, Nghỉ ngắn hoặc Nghỉ dài kết thúc.`,
      items: [
        'Tiêu đề và phụ đề hoàn thành theo từng loại phiên',
        'Giao diện 12 ngôn ngữ với mặc định theo ngôn ngữ hệ thống',
        'Tùy chọn ngôn ngữ và giao diện trên từng thiết bị',
        'Nhắc nhở động lực tùy chọn trên iPhone',
      ],
      settingsImageAlt: `${PULSE_APP_NAME} cài đặt thời lượng, ngôn ngữ, âm thanh hoàn thành và mục tiêu`,
      celebrationImageAlt: `${PULSE_APP_NAME} hoạt ảnh thỏ chúc mừng khi phiên hoàn thành`,
      soundNames: ['Forest Birds', 'Crystal Chime', 'Gentle Marimba', 'Rain Drops', 'Soft Bell', 'Zen Gong'],
      animalNames: ['Khỉ', 'Koala', 'Mèo', 'Cáo', 'Gấu trúc', 'Thỏ'],
    },
    native: {
      eyebrow: 'Gốc theo thiết kế',
      title: 'Được tạo để cảm thấy quen thuộc trên thiết bị Apple.',
      description: `SwiftUI, AppKit và quy ước hệ thống giúp ${PULSE_APP_NAME} nhanh và quen thuộc — với nhãn VoiceOver và hỗ trợ Reduce Motion xuyên suốt.`,
      features: [
        {
          title: 'Thanh menu Mac và Home iPhone',
          description: 'Bạn đồng hành yên tĩnh trên thanh menu Mac và trải nghiệm Home tập trung trên iPhone.',
        },
        {
          title: 'Luôn chính xác',
          description:
            'Các phiên vẫn đúng qua ngủ, thức và khởi động lại, với lịch sử ghi nhận theo thời điểm kết thúc thực tế.',
        },
        {
          title: 'Đồng bộ offline-first',
          description:
            'Tiếp tục tập trung khi không có kết nối. Khi trực tuyến trở lại, thay đổi đã đăng nhập đồng bộ vào tài khoản của bạn.',
        },
        {
          title: 'Nói ngôn ngữ của bạn',
          description:
            'Giao diện đầy đủ bằng 12 ngôn ngữ với mặc định theo hệ thống và tùy chọn ghi đè trong Cài đặt.',
        },
      ],
    },
    privacy: {
      eyebrow: 'Riêng tư theo thiết kế',
      title: 'Sự tập trung của bạn vẫn là của bạn.',
      description: `${PULSE_APP_NAME} dùng tài khoản để lịch sử có thể đồng bộ giữa các thiết bị. Chúng tôi chỉ lưu những gì cần cho đồng bộ, không bán dữ liệu của bạn và tách phân tích khỏi lịch sử tập trung.`,
      items: [
        'Đăng nhập bằng Apple hoặc Google',
        'Tập trung offline-first trên từng thiết bị',
        'Đồng bộ đám mây cho lịch sử và tùy chọn đồng bộ',
        'Không mạng quảng cáo',
        'Xóa tài khoản bất cứ lúc nào trong Cài đặt',
      ],
    },
    closing: {
      title: 'Dành chỗ cho công việc tập trung.',
      description: `Tải ${PULSE_APP_NAME} trên App Store cho iPhone và Mac, hoặc đọc chính sách quyền riêng tư và trang hỗ trợ nếu bạn cần giúp.`,
      getSupport: 'Nhận hỗ trợ',
      privacy: 'Quyền riêng tư',
    },
  },
  support: {
    metaTitle: `${PULSE_APP_NAME} Hỗ trợ`,
    metaDescription: `Hỗ trợ, FAQ và trợ giúp tài khoản cho ${PULSE_APP_NAME} trên iPhone và Mac — gồm đăng nhập, đồng bộ, chuyển đổi và xóa tài khoản.`,
    title: `${PULSE_APP_NAME} Hỗ trợ`,
    intro: `${PULSE_APP_NAME} là bộ đếm Pomodoro nhẹ nhàng cho iPhone và Mac. Đăng nhập bằng Apple hoặc Google để đồng bộ Focus History trên các thiết bị.`,
    gettingStarted: {
      title: 'Bắt đầu',
      items: [
        {
          question: 'Làm sao để bắt đầu phiên Tập trung?',
          answer:
            'Trên Mac, nhấp biểu tượng ứng dụng trên thanh menu, chọn Tập trung, Nghỉ ngắn hoặc Nghỉ dài, rồi nhấn Bắt đầu. Trên iPhone, mở ứng dụng, chọn phiên trên Home và nhấn Bắt đầu. Bạn có thể rời ứng dụng khi bộ đếm đang chạy.',
        },
        {
          question: 'Làm sao để đổi thời lượng Tập trung và Nghỉ?',
          answer:
            'Mở Cài đặt và chỉnh độ dài Tập trung, Nghỉ ngắn và Nghỉ dài. Bạn cũng có thể chọn nhịp điệu có sẵn, rồi tinh chỉnh số phút.',
        },
        {
          question: 'Làm sao để cấu hình Daily Focus Goals?',
          answer:
            'Trong Cài đặt, đặt số phiên Tập trung bạn muốn mỗi ngày. Tiến độ hiện trên Home và trong Focus History.',
        },
        {
          question: 'Làm sao để xem Focus History?',
          answer:
            'Mở Focus History từ ứng dụng (trên Mac, từ popover hoặc menu trạng thái). Bạn sẽ thấy tổng số, chuỗi và tiến độ theo tuần.',
        },
        {
          question: 'Làm sao để đổi ngôn ngữ và giao diện?',
          answer:
            'Trong Cài đặt, chọn Ngôn ngữ (Hệ thống hoặc ngôn ngữ được hỗ trợ) và Giao diện (Hệ thống, Sáng hoặc Tối). Các tùy chọn này ở trên từng thiết bị và không được đồng bộ.',
        },
      ],
    },
    accounts: {
      title: 'Tài khoản',
      items: [
        {
          question: 'Tại sao cần đăng nhập?',
          answer:
            'Tài khoản giúp Focus History, Daily Focus Goals và tùy chọn đồng bộ đi theo bạn trên iPhone và Mac. Cài đặt mới yêu cầu đăng nhập trước khi dùng bộ đếm. Thiết bị nâng cấp từ phiên bản cũ có thể dùng lịch sử cục bộ cho đến khi bạn đăng nhập.',
        },
        {
          question: 'Làm sao đăng nhập bằng Apple hoặc Google?',
          answer:
            'Trên màn hình đăng nhập, chọn Tiếp tục với Apple hoặc Tiếp tục với Google và hoàn tất quy trình nhà cung cấp. Apple có thể đề xuất Hide My Email.',
        },
        {
          question: 'Làm sao để đăng xuất?',
          answer:
            'Mở Cài đặt → Tài khoản → Đăng xuất. Nếu một số thay đổi chưa đồng bộ, ứng dụng có thể yêu cầu đồng bộ trước hoặc vẫn đăng xuất. Đăng xuất không xóa tài khoản.',
        },
        {
          question: 'Làm sao đăng nhập lại?',
          answer:
            'Dùng cùng phương thức Apple hoặc Google trên màn hình đăng nhập. Lịch sử trên đám mây được khôi phục cho tài khoản đó trên thiết bị.',
        },
        {
          question: 'Điều gì xảy ra nếu tôi dùng tài khoản khác?',
          answer:
            'Mỗi tài khoản có lịch sử riêng. Đăng nhập tài khoản khác không gộp lịch sử không liên quan. Hãy cẩn thận trước khi xác nhận nhận lịch sử trên thiết bị đã có phiên cục bộ.',
        },
        {
          question: 'Tôi có thể liên kết Apple và Google vào cùng một tài khoản không?',
          answer:
            'Có. Trong Cài đặt → Tài khoản, bạn có thể liên kết phương thức đăng nhập còn lại khi nó chưa được tài khoản khác sử dụng.',
        },
      ],
    },
    cloudSync: {
      title: 'Đồng bộ đám mây',
      items: [
        {
          question: 'Những gì được đồng bộ giữa các thiết bị?',
          answer:
            'Lịch sử phiên Tập trung và nghỉ, bản ghi Daily Focus Goal, dữ liệu tài khoản liên quan chuỗi, và tùy chọn đồng bộ như thời lượng phiên, mục tiêu hàng ngày, âm thanh, hoạt ảnh, âm hoàn thành và động vật chúc mừng.',
        },
        {
          question: 'Không có internet thì sao?',
          answer:
            'Sau khi đăng nhập, bạn vẫn dùng bộ đếm ngoại tuyến. Phiên và thay đổi mới ở trên thiết bị cho đến khi có kết nối.',
        },
        {
          question: 'Khi trực tuyến trở lại thì sao?',
          answer:
            'Ứng dụng đồng bộ thay đổi đang chờ với tài khoản của bạn. Đồng bộ là offline-first và cuối cùng nhất quán — không phải cộng tác thời gian thực tức thì.',
        },
        {
          question: 'Làm sao dùng cùng tài khoản trên iPhone và Mac?',
          answer:
            'Cài ứng dụng trên cả hai thiết bị và đăng nhập cùng tài khoản Apple hoặc Google. Sau khi khôi phục xong, Focus History có thể hiện trên cả hai.',
        },
        {
          question: 'Nếu thiếu lịch sử thì sao?',
          answer:
            'Xác nhận bạn đăng nhập đúng tài khoản, đợi khôi phục/đồng bộ hoàn tất và kiểm tra Focus History lại. Nếu bạn đăng nhập tài khoản khác, tài khoản đó sẽ hiện lịch sử của nó.',
        },
      ],
    },
    migration: {
      title: 'Nâng cấp từ phiên bản cũ',
      items: [
        {
          question: 'Lịch sử cục bộ hiện có của tôi sẽ ra sao?',
          answer:
            'Lịch sử cục bộ hiện có không bị xóa im lặng. Sau khi đăng nhập, ứng dụng hỏi trước khi thêm lịch sử đó vào tài khoản của bạn.',
        },
        {
          question: 'Tôi nên nhận lịch sử như thế nào?',
          answer:
            'Đăng nhập tài khoản sẽ sở hữu lịch sử, xem màn hình Thêm lịch sử của bạn, rồi chọn Thêm vào tài khoản này. Dùng tài khoản khác nếu tài khoản hiển thị sai. Không thể chuyển phiên sang tài khoản khác sau này.',
        },
        {
          question: 'Nếu cài đặt thiết bị và tài khoản khác nhau?',
          answer:
            'Ứng dụng có thể hỏi giữ cài đặt thiết bị này hay dùng cài đặt tài khoản. Ngôn ngữ, giao diện, thông báo và nhắc động lực vẫn cục bộ trên thiết bị.',
        },
      ],
    },
    notifications: {
      title: 'Thông báo',
      items: [
        {
          question: 'Làm sao bật thông báo trên iPhone?',
          answer:
            'Mở Cài đặt → Thông báo và chọn Bật, hoặc mở Cài đặt hệ thống nếu quyền đã bị từ chối trước đó.',
        },
        {
          question: 'Nhắc động lực hoạt động thế nào?',
          answer:
            'Trên iPhone, mở Cài đặt → Nhắc động lực và bật sau khi được phép thông báo. Bạn có thể tạm dừng hoặc đặt giờ yên lặng. Chúng tùy chọn và mặc định tắt.',
        },
        {
          question: 'Nếu thông báo bị tắt?',
          answer:
            'Cảnh báo kết thúc phiên và nhắc động lực cần quyền thông báo. Dùng Cài đặt → Thông báo → Mở Cài đặt để bật trong Cài đặt iOS.',
        },
        {
          question: 'Live Activities hoạt động thế nào?',
          answer:
            'Trên iPhone được hỗ trợ, Live Activity tùy chọn có thể hiện phiên đang chạy trên Màn hình khóa và Dynamic Island. Quyền được yêu cầu khi bạn bật tính năng liên quan.',
        },
      ],
    },
    accountPrivacy: {
      title: 'Tài khoản và quyền riêng tư',
      items: [
        {
          question: 'Làm sao xóa tài khoản?',
          answer:
            'Đăng nhập, mở Cài đặt → Tài khoản → Xóa tài khoản, rồi xác nhận. Tài khoản và lịch sử tập trung đã đồng bộ bị xóa vĩnh viễn khỏi cơ sở dữ liệu đang hoạt động của chúng tôi. Không thể hoàn tác. Xóa cần kết nối mạng.',
        },
        {
          question: 'Xóa tài khoản ảnh hưởng gì?',
          answer:
            'Dữ liệu đám mây đã đồng bộ của tài khoản đó bị gỡ, ủy quyền Sign in with Apple bị thu hồi khi đã lưu, và dữ liệu tài khoản bị xóa khỏi thiết bị bạn xóa trên đó. Bản sao cục bộ trên thiết bị khác không còn đồng bộ; gỡ ứng dụng hoặc xóa ở đó nếu cần. Sao lưu nhà cung cấp có thể giữ dữ liệu đã xóa trong cửa sổ phục hồi giới hạn.',
        },
        {
          question: 'Làm sao xuất dữ liệu?',
          answer:
            'Cài đặt → Tài khoản → Xuất dữ liệu của tôi lưu tệp JSON gồm phiên, mục tiêu hàng ngày, cài đặt đồng bộ và hồ sơ tài khoản. Dữ liệu cục bộ chưa nhận cũng có thể xuất từ màn hình đăng nhập.',
        },
        {
          question: 'Chính sách quyền riêng tư ở đâu?',
          answer:
            'Mở Chính sách quyền riêng tư từ trang web sản phẩm, hoặc dùng liên kết quyền riêng tư trên các trang sản phẩm của trang này.',
        },
      ],
    },
    requirements: {
      title: 'Yêu cầu',
      body: 'iPhone: iOS 17 trở lên. Mac: macOS 14.6 trở lên.',
    },
    contact: {
      title: 'Liên hệ',
      body: 'Để được giúp đỡ, góp ý hoặc báo lỗi:',
    },
    privacyPolicyLink: 'Chính sách quyền riêng tư',
  },
  privacy: {
    metaTitle: `${PULSE_APP_NAME} Chính sách quyền riêng tư`,
    metaDescription: `Chính sách quyền riêng tư cho ${PULSE_APP_NAME}, gồm đăng nhập Apple và Google, đồng bộ đám mây, lưu trữ cục bộ, phân tích và xóa tài khoản trên Mac và iPhone.`,
    title: 'Chính sách quyền riêng tư',
    subtitle: `${PULSE_APP_NAME} — Bộ đếm Pomodoro cho Mac và iPhone`,
    lastUpdated: 'Cập nhật lần cuối: 11 tháng 10, 2026',
    summary: {
      title: 'Tóm tắt',
      body: `Khi bạn đăng nhập bằng Apple hoặc Google, tài khoản giữ lịch sử tập trung, mục tiêu hàng ngày và cài đặt bộ đếm đồng bộ giữa Mac và iPhone. Chúng tôi chỉ lưu những gì ứng dụng cần: địa chỉ email, mã định danh tài khoản và dữ liệu tập trung bạn tạo. Chúng tôi không bán, không dùng cho quảng cáo và không chia sẻ với nhà cung cấp phân tích. Bạn có thể xuất dữ liệu hoặc xóa tài khoản bất cứ lúc nào trong Cài đặt. Riêng biệt, ứng dụng có thể gửi phân tích sử dụng ẩn danh, bảo vệ quyền riêng tư để chúng tôi cải thiện luồng tập trung.`,
    },
    localData: {
      title: 'Dữ liệu lưu trên thiết bị của bạn',
      body: 'Cài đặt bộ đếm, tùy chọn phiên và lịch sử tập trung được lưu cục bộ trên Mac hoặc iPhone bằng bộ nhớ hệ thống tiêu chuẩn để bộ đếm vẫn hoạt động ngoại tuyến. Mỗi tài khoản đăng nhập trên thiết bị có kho cục bộ riêng. Phiên đăng nhập được giữ trong Keychain hệ thống. Ngôn ngữ, giao diện, Khởi chạy khi đăng nhập, thông báo và nhắc động lực ở trên từng thiết bị và không được đồng bộ. Bản thân nội dung lịch sử tập trung không được tải lên nhà cung cấp phân tích của chúng tôi.',
      migrationSafety:
        'Khi bạn lần đầu đăng nhập trên thiết bị đã có lịch sử tập trung, ứng dụng hỏi trước khi chuyển lịch sử đó vào tài khoản. Cho đến khi chuyển được xác nhận trên máy chủ của chúng tôi, cộng thêm 90 ngày, ứng dụng giữ bản sao cục bộ trước đó và tệp sao lưu cục bộ trên thiết bị làm lưới an toàn, rồi tự động xóa chúng.',
    },
    accountAndSync: {
      title: 'Tài khoản và dữ liệu đồng bộ của bạn',
      intro: 'Nếu bạn đăng nhập, chúng tôi xử lý:',
      items: [
        'Thông tin liên hệ: địa chỉ email do Sign in with Apple (có thể là địa chỉ relay riêng qua Hide My Email) hoặc Google chia sẻ. Chúng tôi không yêu cầu tên của bạn.',
        'Định danh: ID tài khoản tạo khi đăng nhập và ID ngẫu nhiên cho mỗi lần cài, chỉ dùng để đồng bộ và xác định thiết bị nào đã thay đổi.',
        'Dữ liệu tập trung: phiên Tập trung và nghỉ đã hoàn thành và đã xóa (thời gian, thời lượng, ngày và múi giờ cục bộ), mục tiêu hàng ngày, chuỗi tốt nhất, và cài đặt đồng bộ (thời lượng phiên, mục tiêu hàng ngày, âm thanh, hoạt ảnh, âm hoàn thành, động vật chúc mừng).',
      ],
      closing:
        'Dữ liệu này chỉ dùng để cung cấp đồng bộ, lịch sử và tính năng tài khoản. Dữ liệu gắn với tài khoản của bạn, không dùng để theo dõi và không chia sẻ với bên thứ ba ngoài các bên xử lý bên dưới.',
    },
    processors: {
      title: 'Bên xử lý và vị trí lưu trữ',
      bodyBeforeSupabase: 'Dữ liệu tài khoản và đồng bộ được lưu với',
      bodyAfterSupabase:
        '(cơ sở dữ liệu và xác thực) tại Liên minh Châu Âu. Đăng nhập do',
      orWord: 'hoặc',
      bodyAfterProviders:
        ' xử lý, tùy theo tùy chọn bạn chọn. Dữ liệu được mã hóa khi truyền, và quyền truy cập bị giới hạn để mỗi tài khoản chỉ đọc dữ liệu của mình.',
    },
    retention: {
      title: 'Lưu giữ, sao lưu và xóa',
      items: [
        'Dữ liệu đồng bộ của bạn được giữ chừng nào tài khoản còn tồn tại.',
        'Xóa tài khoản (Cài đặt → Tài khoản → Xóa tài khoản) xóa vĩnh viễn tài khoản và mọi dữ liệu đồng bộ khỏi cơ sở dữ liệu đang hoạt động, thu hồi ủy quyền Sign in with Apple khi đã lưu, và gỡ dữ liệu tài khoản khỏi thiết bị bạn xóa trên đó. Bản sao cục bộ trên thiết bị khác không còn đồng bộ và ở lại cho đến khi bạn gỡ ứng dụng trên các thiết bị đó, hoặc xóa chúng trên màn hình đăng nhập khi được đề xuất.',
        'Nhà cung cấp cơ sở dữ liệu giữ sao lưu hàng ngày trong 7 ngày. Dữ liệu đã xóa có thể còn trong các sao lưu đó cho đến khi hết hạn; sao lưu chỉ dùng để phục hồi thảm họa. Chúng tôi cũng có thể giữ sao lưu tuần được mã hóa tối đa 90 ngày cho cùng mục đích.',
        'Đăng xuất không xóa gì. Thay đổi chưa đồng bộ ở trên thiết bị cho đến khi cùng tài khoản đăng nhập lại.',
        'Bản ghi phân tích do TelemetryDeck xử lý theo thực hành lưu giữ của họ và không dùng để khôi phục lịch sử tập trung của bạn.',
      ],
    },
    export: {
      title: 'Xuất',
      body: 'Cài đặt → Tài khoản → Xuất dữ liệu của tôi lưu tệp JSON gồm phiên, mục tiêu hàng ngày, cài đặt đồng bộ và hồ sơ tài khoản. Dữ liệu chưa chuyển vào tài khoản cũng có thể xuất từ màn hình đăng nhập.',
    },
    analytics: {
      title: 'Phân tích',
      introBeforeLink: 'Chúng tôi dùng',
      introAfterLink:
        ', một dịch vụ phân tích tập trung vào quyền riêng tư, để hiểu cách ứng dụng được dùng (ví dụ: phiên tập trung hoặc nghỉ được bắt đầu hay hoàn thành, thay đổi mục tiêu hàng ngày, thay đổi cài đặt, kết quả quyền thông báo, sự kiện nhắc động lực, và liệu phần hướng dẫn đã hoàn tất hay chưa). Tín hiệu không gồm văn bản tự do, tên, email hay nội dung lịch sử tập trung của bạn.',
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
      body: 'Trên iPhone, thông báo cục bộ tùy chọn, nhắc động lực và Live Activities giúp bạn biết khi phiên kết thúc hoặc nhẹ nhàng quay lại tập trung. Quyền chỉ được yêu cầu khi bạn chọn bật các tính năng đó. Nội dung thông báo ở lại trên thiết bị của bạn.',
    },
    whatWeDoNotDo: {
      title: 'Những gì chúng tôi không làm',
      items: [
        'Không mạng quảng cáo',
        'Không bán thông tin cá nhân',
        'Không truy cập danh bạ, ảnh, vị trí chính xác, camera hoặc micro cho phân tích',
      ],
    },
    children: {
      title: 'Trẻ em',
      body: `${PULSE_APP_NAME} không cố ý thu thập thông tin cá nhân từ trẻ em ngoài những gì tài khoản cần để đồng bộ như mô tả ở trên. Tín hiệu phân tích là ẩn danh và không gồm nội dung cá nhân.`,
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
