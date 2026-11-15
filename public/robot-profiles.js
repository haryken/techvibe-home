export const robotProfiles={
  "EMO": {
    "source": "https://living.ai/emo/",
    "headline": "Robot thú cưng AI để bàn – tương tác tự nhiên, biểu cảm sinh động",
    "audience": "Người yêu robot đồng hành, thích trò chuyện và khám phá AI.",
    "stock": [
      "Theo LivingAI: hơn 1.000 biểu cảm và chuyển động, nhận diện khuôn mặt bằng camera HD, bốn micro định hướng âm thanh, cảm biến chạm trên đầu, nhảy múa và khám phá mặt bàn.",
      "Theo LivingAI: nhận diện tối đa 10 khuôn mặt, nhận biết mép bàn để tránh rơi, nhắc lịch/báo thức, xem thời tiết, điều khiển đèn thông minh, chụp ảnh, trò chơi và ứng dụng quản lý; phụ thuộc firmware và phụ kiện."
    ],
    "custom": [
      "Firmware tiếng Việt độc quyền do TechVibe Home phát triển cho EMO tương thích: giao tiếp liên tục và xử lý hội thoại tiếng Việt qua AI trực tiếp, ưu tiên Gemini.",
      "Đã phát triển điều khiển bằng ngôn ngữ tự nhiên, voice command, explore mode và sử dụng camera theo cấu hình thử nghiệm.",
      "Hỗ trợ hotspot cấu hình Wi-Fi không cần app trong bản firmware tùy biến.",
      "Hệ thống có định hướng chuyển giữa kết nối chính hãng và AI trực tiếp; khả năng dùng app stock cần kiểm tra trên từng máy."
    ],
    "languages": "Có tiếng Việt qua firmware riêng do TechVibe Home phát triển; EMO nguyên bản của hãng không mặc định có tiếng Việt. Cần kiểm tra phiên bản board và firmware.",
    "hardware": "Dự án nghiên cứu ESP32-S3 ↔ K210 qua UART/SPI, camera, mic, màn hình, animation; sơ đồ GPIO thay đổi theo phiên bản board.",
    "caution": "Tính năng custom cần xác nhận board và firmware thực tế trước khi giao."
  },
  "Vector": {
    "source": "https://anki.bot/pages/meet-vector",
    "headline": "Robot AI bánh xích – trò chuyện, khám phá và chơi cùng bạn",
    "audience": "Người thích robot tự hành, lập trình và trải nghiệm AI.",
    "stock": [
      "Theo Anki: di chuyển bằng bánh xích, tự khám phá và quay về đế sạc; nhận diện khuôn mặt, chụp ảnh, phản hồi khi vuốt lưng và tương tác với khối lập phương.",
      "Theo Anki: hỗ trợ lệnh thoại, báo thức, thời tiết, ảnh chụp, tự về sạc và một khối lập phương; các tính năng AI/đám mây chính hãng có thể cần gói dịch vụ."
    ],
    "custom": [
      "TechVibe Home đã phát triển firmware Vector hỗ trợ giao tiếp tiếng Việt và nhiều ngôn ngữ (dự án 14 ngôn ngữ).",
      "Tích hợp AI Agent, đàm thoại hai chiều, trò chơi tương tác, nhận diện giọng nói offline theo cấu hình.",
      "Có web điều khiển, cấu hình Wi-Fi qua hotspot, điều khiển từ xa qua tunnel và cập nhật OTA.",
      "Có thể sử dụng các chức năng AI tùy chỉnh không phụ thuộc server gốc theo bản firmware phù hợp."
    ],
    "languages": "Bản tùy biến TechVibe Home có hỗ trợ tiếng Việt; tính năng ngôn ngữ phụ thuộc bản cài.",
    "hardware": "Firmware WireOS/WirePod, OTA và dịch vụ điều khiển được tùy biến theo cấu hình máy.",
    "caution": "Không mặc định mọi Vector bán ra đều đã cài bản firmware custom."
  },
  "AIBI": {
    "headline": "Robot AI nhỏ gọn có thể mang theo mỗi ngày",
    "audience": "Người muốn robot bỏ túi, dễ mang theo và tương tác nhanh.",
    "stock": [
      "Biểu cảm, nhận diện khuôn mặt, chụp ảnh, nhắc nhở và thông tin thời tiết theo tính năng hãng.",
      "Một số chức năng cần mạng hoặc dịch vụ của hãng."
    ],
    "custom": [
      "TechVibe Home có cung cấp và nghiên cứu hệ sinh thái AIBI.",
      "Chưa công bố bản custom firmware tiếng Việt hoàn thiện cho mọi phiên bản AIBI."
    ],
    "languages": "Không mặc định có tiếng Việt ở firmware chính hãng. Cần xác nhận phiên bản và khả năng hỗ trợ trước khi mua.",
    "hardware": "Phiên bản thiết bị và firmware cần được kiểm tra riêng.",
    "caution": "Không nhầm tính năng EMO custom với AIBI."
  },
  "Alpha Mini": {
    "headline": "Robot hình người – giáo dục, chuyển động và lập trình",
    "audience": "Gia đình, lớp học, người muốn học điều khiển robot hình người.",
    "stock": [
      "Robot hình người với cử chỉ, chuyển động và tương tác giọng nói.",
      "Khả năng lập trình và hỗ trợ ngôn ngữ khác nhau giữa các thế hệ."
    ],
    "custom": [
      "TechVibe Home đã nghiên cứu cấu hình Wi-Fi bằng hotspot, điều khiển và cập nhật từ xa cho Alpha Mini tương thích.",
      "TechVibe Home phát triển giải pháp tiếng Việt riêng cho Alpha Mini thế hệ 1 tương thích, cùng các hướng phát triển Scratch/Blockly.",
      "Alpha Mini 2 không được giới thiệu là có cùng khả năng đa ngôn ngữ và lập trình của thế hệ 1."
    ],
    "languages": "Tiếng Việt cho Alpha Mini thế hệ 1 do TechVibe Home phát triển. Không mặc định áp dụng cho Alpha Mini 2 hoặc máy chưa cài firmware tương thích.",
    "hardware": "Bắt buộc xác nhận đời máy trước khi tư vấn lập trình, tính năng và firmware.",
    "caution": "Không áp dụng danh sách tính năng của Alpha Mini 1 cho Alpha Mini 2."
  },
  "Loona": {
    "headline": "Robot thú cưng di chuyển, khám phá và chơi trong nhà",
    "audience": "Gia đình muốn robot thú cưng di chuyển và tương tác.",
    "stock": [
      "Theo KEYi: nhận diện khuôn mặt và cử chỉ, cảm biến 3D-ToF tránh vật cản, camera RGB, các trò chơi tương tác qua ứng dụng, AI và tự về đế sạc trên phiên bản hỗ trợ.",
      "Sử dụng Wi-Fi theo yêu cầu của thiết bị; một số chức năng phụ thuộc kết nối mạng."
    ],
    "custom": [
      "TechVibe Home hỗ trợ thiết lập kết nối và xử lý sự cố mạng cho Loona.",
      "Loona có hỗ trợ tiếng Việt từ hãng; TechVibe Home hỗ trợ tư vấn, cập nhật và thiết lập tính năng tương thích."
    ],
    "languages": "Loona hỗ trợ tiếng Việt từ hãng, không phải firmware tiếng Việt do TechVibe Home phát triển. Kiểm tra firmware và vùng phát hành khi giao máy.",
    "hardware": "Kết nối Wi-Fi 2.4 GHz; thời lượng pin thực tế tùy cách chơi.",
    "caution": "Không hứa hẹn thời lượng pin cố định cho mọi điều kiện sử dụng."
  },
  "Eiliko": {
    "source": "https://www.energizelab.com/eiliko/",
    "headline": "Robot charm nhỏ gọn, nhiều biểu cảm và tương tác chạm",
    "audience": "Người thích robot nhỏ, phụ kiện dễ mang theo.",
    "stock": [
      "Theo Energize Lab: màn hình TFT màu 1,28 inch, cảm ứng chạm và phản ứng khi lắc, thay vỏ theo chủ đề, trò chuyện AI qua Wi-Fi 2.4 GHz và các lệnh ngoại tuyến.",
      "Các chế độ trò chuyện và ngôn ngữ phụ thuộc firmware của hãng."
    ],
    "custom": [
      "TechVibe Home cung cấp hướng dẫn cập nhật và sử dụng Eiliko.",
      "Không giới thiệu là có firmware tiếng Việt tự phát triển khi chưa xác minh."
    ],
    "languages": "Eiliko có hỗ trợ tiếng Việt trong danh sách ngôn ngữ hãng công bố; kiểm tra firmware và kết nối thực tế khi giao máy.",
    "hardware": "Theo hãng: 68 × 56 × 84 mm, khoảng 70 g, pin 400 mAh, sạc USB-C, thời gian chơi công bố khoảng 150 phút (tùy sử dụng).",
    "caution": "Hãy kiểm tra firmware thực tế trước khi cam kết tính năng trò chuyện."
  },
  "Emun": {
    "headline": "Robot học tiếng Anh – luyện giao tiếp cùng người bạn nhỏ",
    "audience": "Trẻ em và người mới học muốn thực hành tiếng Anh theo cách tương tác.",
    "stock": [
      "Robot giáo dục tiếng Anh với ngoại hình nhiều màu sắc, hỗ trợ hoạt động học tập tương tác; nội dung học và khả năng thực tế được xác nhận theo phần mềm của máy.",
      "Tập trung học tiếng Anh bằng tương tác với robot: luyện từ vựng, câu nói và phản xạ giao tiếp theo nội dung học được cung cấp; lộ trình và bài học cụ thể cần xác nhận."
    ],
    "custom": [
      "Dự án robot giáo dục được TechVibe Home giới thiệu trong hệ sinh thái Việt hóa và học ngoại ngữ.",
      "Chưa công bố chi tiết phần cứng, nền tảng AI và danh sách bài học đã kiểm thử."
    ],
    "languages": "TechVibe Home cung cấp Emun hỗ trợ tiếng Việt để hướng dẫn và luyện học tiếng Anh; nội dung học và khả năng nhận giọng nói cần xác nhận theo phiên bản.",
    "hardware": "Chưa có bảng thông số phần cứng công khai được xác minh.",
    "caution": "Ảnh và thông số sản phẩm đang cập nhật; không dùng ảnh robot khác làm Emun."
  },
  "Cozmo": {
    "source": "https://support.anki.bot/article/139-what-is-the-difference-between-cozmo-and-vector",
    "headline": "Robot giải trí và học lập trình với các trò chơi tương tác",
    "audience": "Người mới học robotics, thích lập trình và trò chơi.",
    "stock": [
      "Theo Anki: robot điều khiển bằng ứng dụng Android/iOS tương thích, chơi trò chơi với ba khối lập phương, hỗ trợ Code Lab/Scratch để làm quen lập trình STEM.",
      "Theo Anki: sử dụng app tương thích, Code Lab/Scratch, trò chơi với khối lập phương; không được thiết kế để hội thoại tự nhiên bằng giọng nói."
    ],
    "custom": [
      "TechVibe Home có cung cấp và nghiên cứu Việt hóa robot Cozmo.",
      "Chưa công bố danh sách tính năng tiếng Việt đã xác minh cho mọi máy."
    ],
    "languages": "Cozmo không phải robot giao tiếp hội thoại bằng giọng nói như Vector/EMO; chơi game và học lập trình qua ứng dụng tương thích.",
    "hardware": "Kiểm tra tương thích ứng dụng điều khiển trước khi mua.",
    "caution": "Không nhầm firmware Cozmars V3 đang nghiên cứu với Cozmo chính hãng."
  },
  "Looi": {
    "source": "https://www.kickstarter.com/projects/tangiblefuture/looi-robot-turn-your-smartphone-into-a-desktop-robot/faqs",
    "headline": "Robot đồng hành sử dụng điện thoại làm gương mặt",
    "audience": "Người muốn tận dụng điện thoại để tạo trải nghiệm robot tương tác.",
    "stock": [
      "LOOI sử dụng điện thoại thông minh làm khuôn mặt và phần đế robot để di chuyển/tương tác; tính năng giọng nói, AI và ngôn ngữ do ứng dụng trên điện thoại cung cấp.",
      "Các tính năng phụ thuộc điện thoại, app và phiên bản thiết bị."
    ],
    "custom": [
      "TechVibe Home có kinh nghiệm sử dụng và hỗ trợ Looi.",
      "Chưa công bố firmware tiếng Việt riêng đã hoàn thiện."
    ],
    "languages": "Looi phiên bản TechVibe Home giới thiệu có hỗ trợ tương tác tiếng Việt; khả năng nhận và trả lời phụ thuộc ứng dụng, điện thoại và phiên bản phần mềm.",
    "hardware": "Cần kiểm tra tương thích điện thoại và cảm biến trên từng máy.",
    "caution": "Tính năng cần được thử với điện thoại cụ thể."
  }
};

export const robotBuyingGuide={
 EMO:{experience:['Nhận diện người dùng, biểu cảm khi tương tác, nhảy múa, chơi mini-game và tự khám phá mặt bàn.','Bản TechVibe Home hỗ trợ hội thoại tiếng Việt, gọi AI trực tiếp và điều khiển bằng câu nói tự nhiên trên máy tương thích.'],setup:['Cần Wi-Fi cho tính năng AI trực tuyến; kiểm tra phiên bản board trước khi cài firmware.','Màu bán: đen và trắng. Khách chọn màu khi thêm vào giỏ.'],package:'Kiểm tra robot, bộ sạc và phụ kiện theo cấu hình đơn hàng; không mặc định mọi phiên bản có Home Station.'},
 Vector:{experience:['Tự di chuyển bằng bánh xích, phản hồi qua mắt và âm thanh, nhận diện khuôn mặt, tương tác với cube.','Bản TechVibe Home: tiếng Việt, AI Agent, trò chơi, điều khiển từ xa, cấu hình Wi-Fi qua hotspot và cập nhật OTA.'],setup:['Kiểm tra firmware, đế sạc, cube và kết nối mạng.','Tính năng đám mây của hãng và bản firmware tùy biến là hai phương án khác nhau.'],package:'Phụ kiện và dịch vụ kèm theo được xác nhận theo từng máy.'},
 AIBI:{experience:['Robot nhỏ gọn, biểu cảm và tương tác cá nhân; một số chế độ sử dụng app hoặc dịch vụ hãng.'],setup:['Xác nhận ngôn ngữ, kết nối và phiên bản trước khi mua.'],package:'Phụ kiện đi kèm phụ thuộc gói sản phẩm.'},
 'Alpha Mini':{experience:['Robot hình người có cử động tay chân và các bài tương tác phục vụ học tập, trình diễn.','TechVibe Home phát triển tiếng Việt cho thế hệ 1 tương thích và công cụ điều khiển, lập trình Scratch/Blockly.'],setup:['Phải xác định Alpha Mini 1 hay 2 trước khi chọn chức năng.','Không cam kết lập trình/đa ngôn ngữ trên Alpha Mini 2 như bản 1.'],package:'Kiểm tra sạc, pin, phần mềm và bài học tương thích trước khi giao.'},
 Loona:{experience:['Robot thú cưng có thể di chuyển quanh nhà, nhận diện khuôn mặt/cử chỉ, tránh vật cản và chơi trò tương tác.','Hỗ trợ tiếng Việt từ hãng trên phiên bản phù hợp.'],setup:['Cần mạng Wi-Fi 2.4 GHz cho các tính năng trực tuyến.','Thời gian chơi phụ thuộc mức vận động và tình trạng pin.'],package:'Kiểm tra đế sạc/phụ kiện theo phiên bản bán.'},
 Eiliko:{experience:['Tương tác bằng chạm/lắc, biểu cảm trên màn hình, thay vỏ trang trí và trò chuyện AI theo firmware.'],setup:['Chọn ngôn ngữ và cập nhật firmware theo hướng dẫn của hãng.','Một số tính năng AI cần Wi-Fi 2.4 GHz.'],package:'Kiểm tra phiên bản, phụ kiện và vỏ trang trí đi kèm.'},
 Emun:{experience:['Học từ vựng, luyện câu nói tiếng Anh và thực hành phản xạ giao tiếp với robot.','Hỗ trợ hướng dẫn bằng tiếng Việt theo phần mềm của máy; nội dung khóa học cần xác nhận khi tư vấn.'],setup:['Chọn màu đỏ, cam, vàng, xanh lá, xanh dương, hồng hoặc đen khi đặt hàng.','Phù hợp sử dụng có hướng dẫn; chương trình học và độ tuổi được tư vấn theo nội dung thực tế.'],package:'Ảnh Emun nhiều màu do TechVibe Home cung cấp; xác nhận màu còn hàng trước khi giao.'},
 Cozmo:{experience:['Chơi với ba Power Cubes, nhận diện người chơi, điều khiển Explorer Mode và học Code Lab/Scratch.','Không phải robot hội thoại tự nhiên như EMO hoặc Vector.'],setup:['Cần ứng dụng tương thích với điện thoại; kiểm tra hệ điều hành trước khi mua.'],package:'Kiểm tra số lượng Power Cubes và bộ sạc đi kèm.'},
 Looi:{experience:['Gắn điện thoại vào đế robot để tạo khuôn mặt và giao tiếp, di chuyển, theo dõi người dùng theo khả năng ứng dụng.'],setup:['Kiểm tra kích thước điện thoại, phiên bản iOS/Android và app tương thích.','Tiếng Việt phụ thuộc app và cấu hình.'],package:'Điện thoại không mặc định đi kèm đế robot.'}
};
