# TechVibe Home – tính năng bán hàng

## Database
Render sử dụng `DATABASE_URL` và mặc định `DB_PROVIDER=neon`. Chuyển lại SQLite bằng `DB_PROVIDER=sqlite` (dữ liệu hai nguồn không tự đồng bộ).

## Cập nhật sản phẩm
Mở /admin → Dòng robot → Sửa. Nhập giá VNĐ, trạng thái bán, thời hạn bảo hành và tính năng hãng/custom. Để trống giá nếu cần báo giá riêng. Không nhập giá hoặc cam kết bảo hành chưa được xác minh.

Tồn kho hiển thị trên /compare dựa trên các bản ghi trong mục Kho robot có trạng thái "Có sẵn" hoặc "Đang bán". Không có bản ghi sẽ hiển thị "Chưa cập nhật".

## Khách hàng
- /robot/emo (tương tự vector, aibi, alpha-mini, loona, eiliko, emun): giới thiệu chi tiết
- /compare: so sánh tối đa 3 robot
- /track: tra cứu đơn bằng mã UUID và số điện thoại đặt hàng
- /warranty: hướng dẫn hỗ trợ
- /lab: giới thiệu nghiên cứu và custom firmware

## Thông báo đơn mới qua Telegram (tùy chọn)
Trong Render Environment thêm:
- `TELEGRAM_BOT_TOKEN`: token bot từ BotFather
- `TELEGRAM_CHAT_ID`: chat ID nhận thông báo

Không đưa token vào GitHub. Nếu không có hai biến này, đặt hàng vẫn hoạt động và không gửi thông báo Telegram.

## Kiểm tra sau deploy
1. Mở /compare và /robot/emo.
2. Admin → Dòng robot → Sửa, nhập giá thử trên sản phẩm thực tế nếu đã xác minh.
3. Đặt một đơn thử, kiểm tra /admin → Đơn hàng.
4. Mở /track, nhập mã đơn và số điện thoại đã dùng.
5. Kiểm tra dữ liệu trong Neon SQL Editor.
