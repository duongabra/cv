# Chiến lược ôn luyện phỏng vấn theo CV

Tình hình: làm với AI 3 năm, ít gõ code tay nên một phần kiến thức code mai một. Câu hỏi: nên ôn tập trung vào AI hay ôn lại stack trong CV? Thị trường hiện tại phỏng vấn thế nào?

---

## 1. Thị trường phỏng vấn hiện tại (xu hướng chung)

- **Vẫn có vòng code** ở nhiều công ty: React/JS/TS cơ bản, component, hook, 1–2 bài algo (easy, đôi khi medium). Take-home (mini project FE) cũng phổ biến.
- **Hỏi sâu CV:** dự án, vai trò, tại sao chọn tech này, khó khăn gì, giải quyết thế nào. Team Lead / PO / PM / Scrum Master thường bị hỏi "tổ chức team thế nào", "conflict thì sao", "sprint chạy ra sao".
- **AI workflow:** nhiều nơi (đặc biệt startup, product AI) hỏi "dùng Cursor/AI thế nào", "AI sai thì sao", "review với AI làm thế nào". Một số nơi vẫn nghi ngờ "toàn AI thì code có vững không" → cần chứng minh mình vẫn **đọc được, review được, sửa được** code.
- **Web3:** apply Web3 thì dễ bị hỏi ethers, wallet, flow cơ bản; **full-stack** thì có thể hỏi API, NestJS, DB.

**Kết luận:** Nhà tuyển dụng vừa hỏi **kinh nghiệm + AI + leadership**, vừa có thể cho **coding test**. Ôn lệch hẳn một bên (chỉ AI hoặc chỉ code) đều rủi ro.

---

## 2. Nên ôn gì: cả AI lẫn code, nhưng có trọng tâm

| Ưu tiên | Nội dung | Lý do |
|--------|----------|--------|
| **Cao** | **React + JS/TS cơ bản** (component, hook, state, 1–2 bài algo đơn giản) | Tránh "đổ" vòng code; chứng minh vẫn đọc/sửa được code dù ít gõ tay. |
| **Cao** | **AI workflow + cách nói** (Cursor chỉ dev, OpenClaw review/test, quy trình song song, chiến lược fix) | CV nổi bật phần này; nhiều nơi hỏi sâu. Dùng sẵn `ai-workflow-phong-van.md`. |
| **Cao** | **Vai trò PO/PM/Scrum Master** (pick team, sprint 1 tuần, daily 10p, báo cáo + demo sếp) | Team Lead trong CV → hay bị hỏi. Dùng sẵn `po-pm-scrummaster-agile.txt`. |
| **Trung bình** | **Web3 cơ bản** (ethers, wallet flow) nếu apply Web3 | CV có Web3; một số công ty hỏi. |
| **Trung bình** | **BE/API cơ bản** (NestJS, REST, Supabase) nếu apply full-stack | Đủ để trả lời "khi cần em làm BE thế nào", "AI gen BE em review ra sao". |
| **Thấp** | LeetCode khó, system design nâng cao | Chỉ cần khi target senior/architect; có thể ôn sau khi đã vững phần trên. |

---

## 3. Gợi ý phân bổ thời gian ôn

- **~50% thời gian:** Ôn lại **code**  
  - React: component, hooks (useState, useEffect, custom hook), state (Redux/Zustand ý niệm), 1–2 bài easy/medium (array, object, promise).  
  - Làm 1–2 mini component tay (form, list + filter) để tay quen lại.  
  - Mục tiêu: **không cần code nhanh như xưa, nhưng đọc hiểu + sửa + giải thích được** trong 30–45 phút.

- **~50% thời gian:** Ôn **nói + tài liệu đã có**  
  - Đọc lại `ai-workflow-phong-van.md`, `po-pm-scrummaster-agile.txt`; tập **nói to** (hoặc ghi âm) câu trả lời cho: "Dùng AI thế nào?", "Cursor vs OpenClaw?", "Tổ chức team/sprint thế nào?", "AI sai thì sao?".  
  - Ôn lại 2–3 dự án trong CV (Interns Market, Lipstick, GEO…) để kể flow, stack, vai trò của mình.

---

## 4. Cách trả lời khi bị hỏi "Ít code tay, toàn AI thì kiến thức có mai một không?"

- "Em vẫn **đọc code, review và sửa** hàng ngày — Cursor gen, OpenClaw review, em quyết định cuối. Em ôn lại fundamentals (React, JS/TS) để đảm bảo khi cần vẫn **viết được và debug được**; với task phức tạp em dùng AI để tăng tốc chứ không thay thế hoàn toàn việc hiểu code."
- Nhấn mạnh: **delivery** (ship FE/BE/mobile, production), **quality** (review, test, QA bằng OpenClaw), **leadership** (team, sprint, báo cáo) — tức là value mình tạo ra không chỉ là "gõ từng dòng code".

---

## 5. Tóm tắt một dòng

**Ôn cả AI (workflow + cách nói) và code (React, JS/TS, 1–2 algo đơn giản); ưu tiên đủ để qua vòng code và trả lời trôi về AI + PO/PM/Scrum. Thị trường vẫn hỏi cả hai.**

---

*File này dùng để định hướng ôn luyện; có thể điều chỉnh tỉ lệ 50/50 theo thời gian và loại công ty (nặng code test vs nặng behavioral/AI).*
