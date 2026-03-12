# Dùng AI trong toàn bộ vòng đời phát triển — Hướng dẫn trả lời phỏng vấn

Tài liệu này giúp bạn diễn giải chi tiết mục **"Use AI across the full development lifecycle"** trong CV khi đi phỏng vấn (Planning, Coding, Code Review, Testing, QA).

**Phân vai rõ ràng:**

- **Cursor:** chỉ dùng để **phát triển** (coding) — viết code, generate, refactor trong editor.
- **OpenClaw:** dùng để **review** — code review, testing, QA, kiểm tra chéo code do Cursor tạo ra.

---

## Bối cảnh công ty (Lab3) — Cách vận hành team

Công ty vận hành theo mô hình **chia ra các team lead**: mỗi team lead đóng vai vừa **PO (Product Owner)** vừa **PM (Project Manager)** của dự án đó. Số lượng thành viên trong team tuỳ theo từng dự án (team size linh hoạt). Mỗi team lead tự phân chia công việc, tự quản lý sprint, backlog và tiến độ — tức là tự tổ chức cách làm việc của team mình.

**Vai trò sếp:** Sếp chủ yếu **đưa ra ý tưởng** (direction, vision); việc triển khai cụ thể (backlog, sprint, task) do team lead và team đảm nhiệm. **Mỗi tuần** có buổi họp với sếp để **báo cáo tiến độ** và **demo** những phần đã làm — sếp xem tiến độ thực tế và cho feedback, không can thiệp chi tiết vào daily execution.

Trong bối cảnh đó, em dùng AI để hỗ trợ phần planning và execution (như mô tả bên dưới).

**Khi bị hỏi về cách làm việc / tổ chức team, có thể nói:**

- "Công ty em chia ra từng team lead, mỗi người vừa làm PO vừa làm PM cho dự án của mình, team size tuỳ dự án. Sếp chỉ đưa ra ý tưởng, còn em tự phân chia công việc, sprint, backlog cho team. Mỗi tuần em họp với sếp để báo cáo tiến độ và demo những phần đã làm. Em dùng AI (OpenClaw hoặc chatbot) để hỗ trợ lên kế hoạch sprint, ưu tiên ticket, tách task, ước lượng… để làm nhanh và nhất quán hơn."

---

## 1. Planning — Lên kế hoạch với AI

**Trên CV:** Sprint planning and daily task planning with AI.

**Ý nghĩa:** Dùng AI (ví dụ OpenClaw hoặc chatbot) để hỗ trợ lên kế hoạch sprint và kế hoạch công việc hằng ngày. Cursor em giữ chỉ cho phần phát triển, không dùng cho planning.

**Ví dụ: Bắt đầu một sprint thì dùng AI cho những việc gì**

- **Tổng hợp backlog / scope:** Đưa danh sách feature, ticket hoặc mục tiêu sprint vào AI, nhờ AI gợi ý cấu trúc backlog (epic → story → task) hoặc tách nhỏ cho dễ estimate.
- **Ưu tiên và thứ tự làm:** Nhờ AI đề xuất thứ tự ticket theo dependency, risk, hoặc value (ví dụ: làm auth trước rồi mới profile, payment).
- **Ước lượng (estimation):** Nhờ AI gợi ý story point hoặc effort cho từng task dựa trên mô tả (em vẫn quyết định cuối).
- **Lên agenda cho sprint planning / kickoff:** Nhờ AI draft chương trình họp sprint (mục tiêu sprint, review backlog, commitment, blockers).
- **Daily standup / daily plan:** Mỗi ngày đưa danh sách task đang làm vào AI, nhờ gợi ý thứ tự làm trong ngày hoặc checklist cho từng task.

**Khi bị hỏi, có thể nói:**

- Em dùng AI để hỗ trợ **sprint planning**: nhập mục tiêu sprint, danh sách feature hoặc ticket, rồi nhờ AI đề xuất thứ tự ưu tiên, ước lượng effort, hoặc tách task nhỏ hơn. Em vẫn là người quyết định cuối cùng, AI giúp nhanh và nhất quán hơn.
- **Daily planning:** Mỗi ngày em có thể mô tả nhanh hôm nay cần làm gì (hoặc paste backlog) và nhờ AI gợi ý thứ tự làm, task nào nên làm trước vì phụ thuộc nhau, hoặc checklist cho từng task. Giúp em và team bám sát kế hoạch hơn.

**Ví dụ cụ thể (nếu hỏi sâu):**

- "Ví dụ sprint này có 5 ticket: login, profile, payment, notification, dashboard. Em đưa vào OpenClaw (hoặc chatbot) rồi hỏi: theo dependencies và risk thì nên làm thứ tự nào, ticket nào nên tách nhỏ. AI đưa ra gợi ý, em chỉnh lại rồi đưa vào Jira/Linear."

---

## 2. Coding — Viết code với Cursor (vibe coding)

**Trên CV:** Cursor for accelerated development; capable of producing code in any language with AI (vibe coding).

**Ý nghĩa:** Cursor em **chỉ dùng để phát triển**: viết code trong editor, mô tả ý bằng prompt ngắn, Cursor sinh code — kể cả ngôn ngữ em ít dùng (Swift, Kotlin, Go…). "Vibe coding" = code theo ý (vibe), không cần gõ từng dòng thủ công. Em không dùng Cursor để review hay test; phần đó giao cho OpenClaw.

**Khi bị hỏi, có thể nói:**

- Em dùng **Cursor** hàng ngày chỉ cho phần code: gõ comment hoặc prompt mô tả tính năng (ví dụ "thêm nút login gọi API /auth, hiển thị lỗi bằng toast"), Cursor sinh code. Sau đó em đưa code sang OpenClaw để review và test, còn em chỉnh sửa nếu cần rồi chạy thử. Tốc độ nhanh hơn nhiều so với gõ tay.
- **Vibe coding:** Em mô tả "mình cần gì" bằng tiếng Anh hoặc tiếng Việt, AI viết code. Nhờ vậy em có thể deliver cả FE (React), BE (Node/NestJS), hoặc mobile (React Native/Swift) dù chuyên sâu nhất là frontend — vì AI hỗ trợ cú pháp và pattern của ngôn ngữ đó.

**Ví dụ cụ thể (nếu hỏi sâu):**

- "Ví dụ em cần API GET /users với filter theo role. Em chỉ cần nói trong Cursor: thêm endpoint GET /users, query param role, trả về list user từ DB. Cursor sinh route, service, có khi cả validation. Em chỉ cần kiểm tra và chỉnh cho đúng convention của project."

---

## 3. Code Review — OpenClaw review code (không dùng Cursor)

**Trên CV:** AI-assisted review workflows.

**Ý nghĩa:** Dùng **OpenClaw** để review code (style, logic, bug, security, performance) trước khi tạo PR. Cursor chỉ dùng để viết code; phần review do OpenClaw đảm nhiệm.

**Khi bị hỏi, có thể nói:** 

- Sau khi viết xong bằng **Cursor**, em gửi đoạn code hoặc diff sang **OpenClaw** và nhờ OpenClaw review: tìm lỗi logic, edge case, code smell, gợi ý refactor. Em coi đây là lớp review đầu tiên, sau đó mới đẩy PR cho team review.
- OpenClaw là con riêng cho review: em gửi file hoặc diff, OpenClaw đưa ra nhận xét theo checklist (naming, error handling, test coverage…). Như vậy code do Cursor tạo ra được soi bởi OpenClaw và người.

**Ví dụ cụ thể (nếu hỏi sâu):**

- "Ví dụ em vừa viết xong component React gọi API bằng Cursor. Em gửi đoạn code đó sang OpenClaw và bảo: review giúp xem có thiếu loading/error state không, có memory leak không. OpenClaw chỉ ra chỗ chưa cleanup effect hoặc chưa handle 401. Em sửa rồi mới commit."

---

## 4. Testing — OpenClaw chuyên cho kiểm thử

**Trên CV:** Dedicated OpenClaw instance validating FE, BE, and mobile outputs.

**Ý nghĩa:** Chạy một instance OpenClaw riêng, chỉ dùng cho testing: validate đầu ra của FE, BE, và mobile (test case, chạy test, so sánh kết quả).

**Quy trình song song (code xong 1 func → test FE+BE trong lúc làm func khác):**

- Mỗi khi **code xong một function** (bằng Cursor), em gửi luôn sang **OpenClaw** để test cả **FE lẫn BE** (gen test case, chạy test, xem log).
- **Trong lúc OpenClaw đang chạy test**, em không ngồi chờ — em chuyển sang **phát triển function khác** (Cursor). Nhờ vậy thời gian không bị lãng phí.
- **Nếu OpenClaw báo lỗi:** em bảo OpenClaw **đưa ra chiến lược fix** (fix strategy: nên sửa chỗ nào, cách sửa, hoặc patch gợi ý). Sau đó em (hoặc em approve để OpenClaw fix) áp dụng fix theo chiến lược đó. Xong rồi có thể chạy lại test nếu cần.

**Khi bị hỏi, có thể nói:**

- Em có **một con OpenClaw riêng** chỉ làm nhiệm vụ kiểm thử. Em tích hợp các skill cần thiết (browser automation, đọc log, so sánh ảnh…) vào OpenClaw.
- Quy trình: code xong một func thì gửi OpenClaw test cả FE và BE; trong lúc OpenClaw chạy em làm func tiếp theo. Có lỗi thì bảo OpenClaw đưa ra chiến lược fix rồi em (hoặc OpenClaw sau khi em approve) fix theo.
- Chi tiết hơn: **Bước 1** — Bảo OpenClaw gen file test case (theo tính năng, API…). **Bước 2** — OpenClaw thực thi test (ví dụ login: mở web local, điền form, click, theo dõi server log). **Bước 3** — Nếu có lỗi (401, 500…), OpenClaw báo và đưa ra chiến lược fix; em approve rồi fix. **Bước 4** — Có thể kết hợp screenshot so với Figma. Một instance OpenClaw validate được cả FE, BE và flow end-to-end.

**Ví dụ cụ thể (nếu hỏi sâu):**

- "Ví dụ em vừa viết xong function login (FE + gọi API). Em gửi sang OpenClaw test cả FE lẫn BE; trong lúc OpenClaw chạy em quay lại Cursor làm function profile. OpenClaw báo: API trả 500 khi thiếu field. Em bảo OpenClaw đưa ra chiến lược fix — OpenClaw gợi ý thêm validation ở BE và message lỗi ở FE. Em approve, OpenClaw (hoặc em) sửa xong rồi chạy lại test."
- "Ví dụ sau khi Cursor gen xong API login, em đưa endpoint đó vào OpenClaw. OpenClaw tự gen test case: gọi POST /auth với body sai, body đúng, thiếu token… rồi chạy và kiểm tra response. Nếu có lỗi trong log backend, OpenClaw báo và đưa ra chiến lược fix, em approve thì nó mới sửa."

---

## 5. QA — Kiểm tra chéo để bắt không nhất quán và bug

**Trên CV:** Cross-checking generated code to detect inconsistencies and bugs.

**Ý nghĩa:** Không chỉ tin vào code do một AI (Cursor) sinh ra; dùng thêm một kênh khác (OpenClaw) để kiểm tra chéo — tìm chỗ không nhất quán (logic, naming, contract) và lỗi (bug, edge case).

**Khi bị hỏi, có thể nói:**

- Code do Cursor (hoặc em + Cursor) tạo ra có thể có lỗi hoặc không nhất quán với phần khác. Em dùng **OpenClaw** như lớp QA: gửi đoạn code hoặc task đó cho OpenClaw, nhờ nó review lại hoặc làm lại một phiên bản rồi so sánh. Chỗ nào hai bên khác nhau hoặc OpenClaw chỉ ra lỗi thì em kiểm tra và sửa.
- Cụ thể: OpenClaw có thể **review** code Cursor vừa gen (tìm bug, edge case), hoặc **sinh test** cho đoạn code đó rồi chạy test để bắt lỗi. Kết quả là code "generated" được kiểm lại bởi một AI khác → giảm inconsistency và bug.

**Ví dụ cụ thể (nếu hỏi sâu):**

- "Ví dụ Cursor vừa viết xong hàm validate form đăng ký. Em copy hàm đó sang OpenClaw và bảo: viết unit test cho hàm này, chạy giúp. OpenClaw gen test, chạy, báo một vài case em chưa handle (ví dụ email trùng format nhưng chưa check trùng trong DB). Em bổ sung logic rồi chạy lại."

---

## 6. Tóm tắt một câu khi bị hỏi "Anh/em dùng AI như thế nào?"

Có thể trả lời ngắn:

- "Em phân vai rõ: **Cursor chỉ để phát triển** — em dùng Cursor viết code (vibe coding), kể cả ngôn ngữ ít dùng. **OpenClaw để review** — code review, testing, QA đều do OpenClaw: sau khi Cursor gen code, em gửi sang OpenClaw để review, gen test case, chạy test cho FE/BE/mobile, và kiểm tra chéo bắt inconsistency và bug. Planning thì em có thể nhờ AI (OpenClaw hoặc chatbot) gợi ý sprint và daily task. Nhờ vậy em ship nhanh mà vẫn giữ chất lượng."

---

## 7. Câu hỏi thường gặp và gợi ý trả lời

**"AI sai thì sao?"**  
— Em không deploy thẳng code AI sinh ra. Luôn có bước review (của em hoặc của OpenClaw), và critical path em vẫn tự kiểm tra hoặc có test. AI là công cụ tăng tốc và gợi ý, quyết định cuối cùng vẫn là người.

**"Team có dùng chung workflow này không?"**  
— Em dùng cho bản thân và giới thiệu cho team; ai muốn thì có thể áp dụng tương tự. Em có thể nói rõ đang dùng ở Lab3 cho planning, code, review và testing.

**"Tốc độ tăng khoảng bao nhiêu?"**  
— Em có thể nói theo cảm nhận thực tế: ví dụ "ước lượng nhanh hơn 30–50% cho phần boilerplate và CRUD, còn logic phức tạp thì vẫn cần suy nghĩ và chỉnh nhiều."

**"OpenClaw và Cursor khác nhau chỗ nào trong workflow?"**  
— **Cursor chỉ để phát triển:** em dùng Cursor trong lúc viết code (edit, generate, refactor) trong editor; không dùng Cursor để review hay test. **OpenClaw để review:** em gửi code (do Cursor tạo) sang OpenClaw để code review, gen test case, chạy test, QA và kiểm tra chéo. Cursor = viết; OpenClaw = soi lại và kiểm thử.

---

*File này dùng để ôn trước khi phỏng vấn; có thể in hoặc mở trên điện thoại để nhìn nhanh khi cần.*