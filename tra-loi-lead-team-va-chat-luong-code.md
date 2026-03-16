# Trả lời phỏng vấn: Lead team, quản lý chất lượng code, review code, xử lý mâu thuẫn

## 1. Kinh nghiệm lead team

**Gợi ý trả lời:**

- "Em lead team 2–5 người tại Lab3 và trước đó tại Technixo (5 engineers). Em đóng vai PO + PM: sếp đưa ý tưởng, em tự pick thành viên, lên backlog và sprint 1 tuần, chạy start sprint, end sprint, daily 10 phút. Mỗi tuần em báo cáo tiến độ và demo cho sếp. Em vừa lead vừa code (Cursor + OpenClaw), nên hiểu sâu task và có thể hỗ trợ member khi bị kẹt."

**Nếu hỏi thêm:** Team size, cách chia task, đánh giá hiệu suất — trả lời theo đúng số trong CV (2–5 người, sprint 1 tuần, daily 10p); nhấn mạnh em dùng AI hỗ trợ planning, còn đánh giá qua delivery và demo.

---

## 2. Quản lý chất lượng code

**Gợi ý trả lời:**

- "Chất lượng code em quản lý qua vài lớp: (1) **Review:** Code do Cursor gen thì em gửi sang OpenClaw review trước, sau đó em đọc lại rồi mới merge. (2) **Testing:** Có một instance OpenClaw chuyên test FE/BE/mobile—gen test case, chạy test, báo lỗi và đưa chiến lược fix; em approve rồi mới sửa. (3) **QA chéo:** OpenClaw kiểm tra chéo với output của Cursor để bắt inconsistency và bug. Critical path em vẫn tự kiểm tra; không deploy thẳng code AI sinh ra mà luôn qua review và test."

---

## 3. Review code

**Gợi ý trả lời:**

- "Em dùng **OpenClaw** làm lớp review đầu: sau khi code xong (bằng Cursor), em gửi diff/file sang OpenClaw, nhờ review logic, edge case, code smell, error handling. OpenClaw trả về nhận xét theo checklist; em sửa rồi mới tạo PR. PR sau đó có thể cho team review thêm nếu có. Em coi OpenClaw là review tự động, còn em và team là quyết định cuối."

**Nếu hỏi:** Có checklist review không? — "Có, em nhờ OpenClaw review theo naming, error handling, test coverage, và các điểm dễ gây bug; em cũng tự kiểm tra phần quan trọng."

---

## 4. Có mâu thuẫn (conflict) thì xử lý thế nào?

**Gợi ý trả lời:**

- "Em ưu tiên nói chuyện trực tiếp trước: tìm hiểu lý do—có thể do blocker, scope quá lớn, hoặc ưu tiên lệch. Nếu do scope thì điều chỉnh task hoặc hỗ trợ unblock; nếu do kỹ năng thì pair hoặc assign lại cho phù hợp. Em cũng xem lại planning có realistic không. Mục tiêu là unblock và giữ team tin tưởng lẫn nhau, không đổ lỗi."

**Nếu hỏi ví dụ cụ thể:** Chuẩn bị 1–2 tình huống thật (vd: member không đạt commitment vì task quá lớn → em cắt nhỏ hoặc hỗ trợ; bất đồng technical approach → em lắng nghe, so sánh trade-off, quyết định với tư cách lead và giải thích cho team).

---

*File dùng để ôn trước khi phỏng vấn khi bị hỏi về lead team, chất lượng code, review code và xử lý conflict.*
