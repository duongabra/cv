# Câu hỏi phỏng vấn có thể có và cách trả lời

Tài liệu liệt kê **chi tiết** các câu hỏi có thể gặp, kèm **câu trả lời ngắn gọn, đi vào trọng tâm**. Dùng để ôn trước khi phỏng vấn.

---

## 1. Giới thiệu bản thân / Kinh nghiệm

**Câu hỏi:** Giới thiệu ngắn về bản thân anh/chị.

**Trả lời:** Em là Frontend Engineer, 5+ năm kinh nghiệm, mạnh nhất React và Web3. Hiện tại tại Lab3 em vừa **dev vừa đóng vai PO + PM cho team nhỏ**: sếp đưa ý tưởng, em tự pick thành viên, lên kế hoạch sprint 1 tuần, tổ chức start/end sprint và daily 10 phút, mỗi tuần báo cáo tiến độ và demo cho sếp. Em cũng dùng AI (Cursor, OpenClaw) cho planning, coding, review, testing. Em từng làm FE tại FPT, Homa, Technixo; 2 năm gần đây lead team 2–5 người và ship Web3 + AI products.

---

**Câu hỏi:** Tại sao anh/chị muốn chuyển công việc / rời Lab3?

**Trả lời:** (Điều chỉnh theo thực tế.) Em muốn thử thách mới / môi trường scale lớn hơn / tập trung vào [domain công ty đang apply]. Em vẫn gắn bó với Lab3 và hoàn thành tốt công việc hiện tại; đây là bước tiếp theo trong định hướng cá nhân.

---

**Câu hỏi:** Điểm mạnh / điểm yếu của anh/chị?

**Trả lời (điểm mạnh):** Em mạnh về delivery: kết hợp AI workflow rõ ràng (Cursor dev, OpenClaw review/test) nên ship nhanh mà vẫn kiểm soát chất lượng. Em cũng quen vai trò **vừa dev vừa PO/PM cho team nhỏ**: tự pick team, lên backlog và sprint, điều hành ceremony, báo cáo và demo cho sếp — không cần PM riêng.

**Trả lời (điểm yếu):** Em ít gõ code tay hơn vì dùng AI nhiều, nên một phần fundamentals có mai một. Em đang ôn lại React, JS/TS để đảm bảo khi cần vẫn viết và debug được; em vẫn đọc và review code hàng ngày nên không mất hẳn.

---

## 2. Công việc hiện tại (Lab3) / Cách làm việc

**Câu hỏi:** Công việc hàng ngày của anh/chị tại Lab3 như thế nào?

**Trả lời:** Em vừa **PO/PM cho team nhỏ** vừa code. Hàng ngày: daily 10 phút với team, sau đó làm task (Cursor code, OpenClaw test/review). Về quản lý: em tự chia sprint 1 tuần, tổ chức start sprint, end sprint, và mỗi tuần họp với sếp báo cáo tiến độ + demo. Sếp chỉ đưa ý tưởng; scope, backlog và execution do em và team quyết.

---

**Câu hỏi:** Team anh/chị có bao nhiêu người? Cấu trúc thế nào?

**Trả lời:** Team size tuỳ dự án, thường 2–5 người (FE, BE, Design, QC). Em là team lead và **đóng luôn vai PO + PM cho team nhỏ đó**: tự pick thành viên, lên backlog, sprint 1 tuần, điều hành start/end sprint và daily 10 phút. Không có PM riêng; em tự quản lý scope, ưu tiên và tiến độ, rồi báo cáo + demo cho sếp mỗi tuần.

---

**Câu hỏi:** Vai trò PO / PM của anh/chị với team nhỏ cụ thể là làm những gì?

**Trả lời:** **PO:** Em chịu trách nhiệm "sản phẩm" của dự án — từ ý tưởng sếp chuyển thành backlog, épic/story/task, và quyết định scope từng sprint. **PM:** Em lên kế hoạch sprint, theo dõi tiến độ, tổ chức họp (start/end sprint, daily), và báo cáo + demo cho sếp. Vì team nhỏ nên một người đảm nhiệm luôn, không tách riêng PO/PM.

---

**Câu hỏi:** Sếp có can thiệp vào sprint / task hàng ngày không?

**Trả lời:** Không. Sếp chủ yếu đưa ý tưởng và xem tiến độ qua buổi báo cáo + demo mỗi tuần. Chia task, sprint planning, daily execution do em và team tự quyết.

---

## 3. Tech stack / Kỹ năng kỹ thuật

**Câu hỏi:** Stack anh/chị dùng nhiều nhất / mạnh nhất?

**Trả lời:** Frontend: React, Next.js, TypeScript, Redux/Zustand. Đó là stack em dùng hàng ngày. Backend khi cần thì Node.js, NestJS, Supabase; mobile thì React Native, Swift — em có làm qua và dùng AI hỗ trợ khi cần.

---

**Câu hỏi:** So sánh Redux và Zustand? Khi nào dùng cái nào?

**Trả lời:** Redux phù hợp khi state phức tạp, nhiều middleware, cần DevTools và pattern chuẩn. Zustand nhẹ hơn, ít boilerplate, phù hợp state đơn giản hoặc vừa. Dự án mới em thường chọn Zustand nếu không cần Redux ecosystem; dự án lớn hoặc đã có Redux thì giữ Redux.

---

**Câu hỏi:** Anh/chị có kinh nghiệm testing (unit, e2e) không?

**Trả lời:** Em có dùng Jest cho unit test; e2e thì em dùng OpenClaw để gen test case và chạy (browser automation, đọc log). Trong team có khi QC phụ trách test; em đảm bảo code review và QA qua OpenClaw trước khi merge.

---

**Câu hỏi:** Kinh nghiệm Web3 (wallet, smart contract, ethers)?

**Trả lời:** Em đã làm Web3 products: tích hợp wallet (MetaMask, WalletConnect), gọi contract qua ethers.js, xử lý connect/disconnect, chain switch. Em không viết smart contract; phần đó do team khác hoặc đã có sẵn. Em tập trung FE + tích hợp.

---

## 4. AI workflow (Cursor, OpenClaw)

**Câu hỏi:** Anh/chị dùng AI trong công việc thế nào?

**Trả lời:** Em phân vai rõ: **Cursor chỉ để code** — em mô tả tính năng, Cursor gen code (FE, BE, mobile). **OpenClaw để review và test** — sau khi code xong em gửi sang OpenClaw review, gen test, chạy test; có lỗi thì OpenClaw đưa chiến lược fix, em approve rồi sửa. Planning (sprint, daily task) em nhờ AI gợi ý ưu tiên, tách task. Code xong một func thì gửi OpenClaw test FE+BE, trong lúc đó em làm func khác.

---

**Câu hỏi:** Cursor và OpenClaw khác nhau chỗ nào?

**Trả lời:** Cursor dùng trong editor để viết code (generate, refactor). OpenClaw là con riêng: nhận code từ Cursor, review, gen test, chạy test, báo lỗi và gợi ý fix. Cursor = viết; OpenClaw = soi lại và kiểm thử.

---

**Câu hỏi:** AI sai / gen code lỗi thì anh/chị xử lý thế nào?

**Trả lời:** Em không deploy thẳng. Luôn có bước OpenClaw review và test; em cũng đọc code trước khi merge. Nếu sai em sửa tay hoặc bảo AI sửa lại với prompt rõ hơn. Quyết định cuối cùng và critical path vẫn do em kiểm tra.

---

**Câu hỏi:** "Vibe coding" là gì? Anh/chị có phụ thuộc quá vào AI không?

**Trả lời:** Vibe coding là mô tả ý bằng ngôn ngữ tự nhiên, AI viết code. Em dùng để tăng tốc, không thay thế hiểu code: em vẫn đọc, review, debug. Khi cần em vẫn viết tay và ôn lại fundamentals; AI là công cụ, không phải để che kiến thức.

---

## 5. Vai trò Team Lead / PO / PM / Scrum Master

**Câu hỏi:** Anh/chị đóng vai trò gì trong quản lý team?

**Trả lời:** Em vừa PO vừa PM vừa điều hành Scrum ở mức basic: sếp đưa ý tưởng, em tự pick team, lên kế hoạch sprint 1 tuần, tổ chức start sprint, end sprint, daily 10 phút đầu ngày. Mỗi tuần em họp với sếp báo cáo tiến độ và demo. Em cũng vẫn code (Cursor + OpenClaw).

---

**Câu hỏi:** Sprint của anh/chị dài bao lâu? Daily thế nào?

**Trả lời:** 1 tuần 1 sprint. Daily meeting khoảng 10 phút đầu ngày: mỗi người nói đã làm gì, sẽ làm gì, có blocker không. Ngắn gọn, không kéo dài.

---

**Câu hỏi:** Khi có conflict trong team / member không đạt commitment anh/chị xử lý thế nào?

**Trả lời:** Em nói chuyện trực tiếp trước: hỏi lý do (blocker, scope quá lớn, ưu tiên lệch). Nếu do scope thì điều chỉnh task hoặc hỗ trợ; nếu do kỹ năng thì pair hoặc assign lại. Em cũng xem lại planning có realistic không. Mục tiêu là unblock và giữ team tin tưởng lẫn nhau.

---

**Câu hỏi:** Anh/chị có mentor / đào tạo member không?

**Trả lời:** Có. Tại Technixo em có mentor intern; tại Lab3 em hỗ trợ member trong team khi họ gặp khó (code review, giải thích design, hướng dẫn dùng AI workflow). Em không có chương trình đào tạo chính thức; chủ yếu qua công việc và review.

---

## 6. Dự án (Interns Market, Lipstick, Georeport, Web3)

**Câu hỏi:** Kể về dự án gần đây nhất / anh/chị tự hào nhất.

**Trả lời (ví dụ Interns Market):** Interns Market là marketplace cho OpenClaw agents: user thuê agent, hệ thống cấp VPS, cài OpenClaw + skills lên đó, kết nối qua Telegram/Zalo hoặc in-app. Em làm PO & Team Lead, stack React, Node.js, OpenClaw, VPS. Ví dụ agent: convert video Trung sang Việt (sub + lồng tiếng) qua pipeline text extraction → translation → voice → video. Team 2 dev.

---

**Câu hỏi:** Trong dự án [X] anh/chị gặp khó khăn gì? Giải quyết thế nào?

**Trả lời:** (Chuẩn bị 1–2 ví dụ thật.) Ví dụ: scope thay đổi giữa sprint → em ngồi lại với sếp xác nhận ưu tiên, cắt bớt hoặc lùi sang sprint sau, và sync lại với team. Hoặc: tích hợp wallet Web3 lỗi trên một số browser → em đọc doc, thử nhiều flow, fix edge case và bổ sung fallback.

---

**Câu hỏi:** Georeport / GEO là gì? Anh/chị làm phần nào?

**Trả lời:** GEO là tối ưu để LLM (AI search) có thể discover và cite nội dung website — giống SEO nhưng cho thời đại AI. Platform phân tích mức độ GEO của site. Em là Team Lead, team 2 dev (1 full-stack FE+BE+Chrome extension, 1 AI). Em phụ trách hướng sản phẩm, chia task, và phần frontend/platform.

---

**Câu hỏi:** Lipstick app làm gì? Tech stack?

**Trả lời:** App beauty: user chụp mặt, hệ thống phân tích da và gợi ý sản phẩm (vd da dầu → clay mask); thử son môi bằng AI generate ảnh môi với các màu. Stack React Native / Swift, AI/ML. Em làm Team Lead, team 2 dev (1 full-stack, 1 AI).

---

## 7. Behavioral / Tình huống

**Câu hỏi:** Kể về lần anh/chị phải deal với deadline rất gấp.

**Trả lời:** (Chuẩn bị 1 ví dụ.) Em ưu tiên lại scope với PO/sếp: cái nào bắt buộc ship, cái nào có thể lùi. Sau đó chia task rõ, daily check tiến độ; em dùng AI (Cursor, OpenClaw) để tăng tốc code và test. Nếu vẫn không kịp thì báo sớm và đề xuất cut scope hoặc extend deadline thay vì ship nửa vời.

---

**Câu hỏi:** Tại sao anh/chị phù hợp với vị trí này?

**Trả lời:** (Điều chỉnh theo JD.) Em có 5+ năm FE/Web3, quen ship production; em vừa code vừa lead team và dùng AI workflow rõ ràng nên delivery nhanh. Em cũng quen vai trò PO/PM basic nên có thể tự quản lý scope và sprint nếu công ty cần. Stack [X] em đã dùng; em học nhanh và sẵn sàng đào sâu thêm.

---

**Câu hỏi:** Anh/chị có câu hỏi gì cho chúng tôi không?

**Trả lời:** (Chuẩn bị 2–3 câu.) Ví dụ: Team structure và vai trò của vị trí này trong team? Sprint và quy trình release thế nào? Công ty có dùng AI tools (Cursor, Copilot…) trong dev không? Kỳ vọng trong 3–6 tháng đầu là gì?

---

## 8. Câu hỏi "khó" / Thử thách

**Câu hỏi:** Ít code tay, toàn AI thì kiến thức có mai một không? Làm sao chúng tôi biết anh/chị vẫn code được?

**Trả lời:** Em vẫn đọc code, review và sửa hàng ngày — Cursor gen, OpenClaw review, em quyết định cuối. Em đang ôn lại React, JS/TS để khi cần vẫn viết và debug được; em sẵn sàng làm coding test hoặc take-home để chứng minh. Value em mang lại là delivery + chất lượng (review, test) + leadership, không chỉ là gõ từng dòng; nhưng em không trốn tránh việc phải code khi cần.

---

**Câu hỏi:** Nếu chúng tôi không cho dùng Cursor / AI trong giờ làm, anh/chị có làm được không?

**Trả lời:** Có. Em vẫn hiểu code và từng code tay nhiều năm; gần đây dùng AI để tăng tốc chứ không thay thế hoàn toàn. Em sẽ cần một chút thời gian làm quen lại tốc độ gõ tay nhưng logic, architecture, debug em vẫn nắm. Em cũng sẵn sàng tuân thủ policy công ty về AI.

---

**Câu hỏi:** Anh/chị apply vị trí dev nhưng CV nổi bật leadership; anh/chị muốn đi theo hướng dev hay lead?

**Trả lời:** (Điều chỉnh theo ý bạn.) Ví dụ: Hiện tại em muốn tập trung vào dev và ship code; leadership em làm vì team nhỏ cần. Em thích vừa code vừa có trách nhiệm với product; nếu công ty cần người thuần code em sẵn sàng, nếu cần lead nhỏ em cũng quen.

---

## 9. Câu hỏi kỹ thuật có thể gặp (gợi ý ôn)

- **React:** useEffect dependency, cleanup; khi nào dùng useMemo/useCallback; so sánh controlled vs uncontrolled component.  
- **JS/TS:** closure, promise/async-await, spread, optional chaining; type vs interface (TS).  
- **State:** Redux flow (action → reducer → store); Zustand so với Redux.  
- **Web3:** flow connect wallet, switch chain, gọi read/write contract (ethers); em trả lời theo kinh nghiệm tích hợp, không cần quá sâu contract.

*(Phần này chỉ liệt kê chủ đề; câu trả lời cụ thể ôn trong tài liệu hoặc khóa học React/JS bạn đã chuẩn bị.)*

---

## 10. Câu hỏi đã gặp khi PV (chi tiết + ví dụ)

*Các chủ đề từ một buổi PV thực tế — ôn kỹ kèm ví dụ để trả lời trôi chảy.*

---

### 10.1. Shallow copy vs Deep copy

**Giải thích:**  

- **Shallow copy:** Copy cấp một; object/array bên trong vẫn là **cùng reference**. Đổi nested → bản gốc cũng đổi.  
- **Deep copy:** Clone toàn bộ cấu trúc, không còn reference chung. 

**Ví dụ:**

```js
// Shallow: spread chỉ copy cấp 1
const a = { x: 1, inner: { y: 2 } };
const b = { ...a };
b.inner.y = 99;
console.log(a.inner.y); // 99 — a cũng bị đổi

// Deep: clone hết (cách đơn giản, không dùng được với function/Date)
const c = JSON.parse(JSON.stringify(a));
c.inner.y = 100;
console.log(a.inner.y); // vẫn 99 — a không đổi
```

**Cách deep copy:** `JSON.parse(JSON.stringify(obj))` (không có function/undefined/Symbol), `structuredClone(obj)` (hiện đại), hoặc `lodash.cloneDeep(obj)`.

---

### 10.2. Debounce

**Giải thích:** Chỉ gọi hàm **sau khi** user ngừng thao tác một khoảng thời gian (vd 300ms). Dùng cho search input: không gọi API từng lần gõ, mà chờ gõ xong mới gọi.

**Ví dụ:**

```js
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}
// Dùng: const searchAPI = debounce(() => fetch('/search?q=' + value), 300);
```

**Trong React:** dùng `useDebouncedCallback` (hoặc custom hook tương tự) để không tạo hàm mới mỗi lần render.

---

### 10.3. undefined vs null

**Giải thích:**  

- **undefined:** Biến chưa gán, property không tồn tại, function không return gì.  
- **null:** Giá trị "không có" do **dev chủ động gán** (vd kết quả API chưa có).

**Ví dụ:**

```js
let x;           console.log(x);        // undefined
let o = {};      console.log(o.foo);    // undefined (property không tồn tại)
function f() {}  console.log(f());      // undefined (không return)

let user = null; // "chưa có user" — mình gán cố ý

typeof undefined; // "undefined"
typeof null;      // "object" (bug lịch sử của JS)

if (value == null) { }  // bắt cả undefined và null
if (value === null) { } // chỉ null
```

---

### 10.4. Bất đồng bộ / setTimeout

**Giải thích:** JS chạy đơn luồng. `setTimeout(fn, ms)` **không** chạy ngay — đưa callback vào **task queue** (macrotask). Event loop chỉ chạy khi call stack rỗng. **Thứ tự:** sync code → hết microtask (Promise.then) → mới tới macrotask (setTimeout).

**Ví dụ:**

```js
console.log('1');
setTimeout(() => console.log('2'), 0);
Promise.resolve().then(() => console.log('3'));
console.log('4');
// In ra: 1, 4, 3, 2  — sync trước, rồi microtask (3), rồi setTimeout (2)
```

`setTimeout(fn, 0)` không có nghĩa "chạy ngay" — vẫn đứng sau toàn bộ sync và microtask.

---

### 10.5. Access token & Refresh token

**Giải thích:**  

- **Access token:** Ngắn hạn (vd 15 phút), gửi kèm **mỗi request** qua header `Authorization: Bearer <token>`.  
- **Refresh token:** Dài hạn (vd 7 ngày), **không** gửi mỗi request; lưu an toàn (httpOnly cookie hoặc storage). Khi API trả **401** (access hết hạn) → gọi endpoint riêng với refresh token → nhận access token mới → lưu lại → retry request vừa fail.

**Flow ngắn:** Request → 401 → gọi `/refresh` với refresh token → lưu access mới → gửi lại request với access mới.

---

### 10.6. Life cycle (React)

**Class component:**  

- **Mount:** constructor → render → componentDidMount (DOM đã có, gọi API ở đây).  
- **Update:** props/state đổi → render → componentDidUpdate.  
- **Unmount:** componentWillUnmount (dọn timer, listener).

**Function component:** Không có lifecycle "đúng tên" — dùng **useEffect**:

```js
useEffect(() => {
  // Chạy sau mount và mỗi khi dep đổi
  doSomething();
  return () => { /* cleanup khi unmount hoặc trước lần chạy tiếp theo */ };
}, [dep]);
```

- `[]`: chỉ chạy 1 lần sau mount; cleanup chạy khi unmount.  
- `[a, b]`: chạy khi mount hoặc khi `a`/`b` đổi; cleanup chạy trước lần chạy mới hoặc unmount.

---

### 10.7. Cơ chế phản ứng React (Reactivity)

**Giải thích:** React **không** tự track từng biến như Vue. Re-render xảy ra khi **state thay đổi** (useState setState, Redux dispatch). React so sánh bằng **reference** (Object.is): nếu mình **mutate** object/array (vd `arr.push(1)`) thì reference không đổi → React không re-render. Nên **immutable update**: tạo object/array mới (spread, filter, map).

**Ví dụ:**

```js
// Sai: mutate — React có thể không re-render
state.list.push(newItem);
setList(state.list);

// Đúng: tạo mảng mới
setList([...list, newItem]);
```

**Luồng:** setState(state mới) → React so sánh (Virtual DOM diff) → chỉ cập nhật DOM thật chỗ thay đổi.

---

### 10.8. Redux

**Ý tưởng:** Một **store** chứa toàn bộ state; state **read-only**; thay đổi chỉ qua **action** → **reducer** (pure function nhận state + action, trả state mới) → store update → component **subscribe** (vd qua useSelector) re-render.

**Ví dụ flow:**

```js
// Action
dispatch({ type: 'INCREMENT', payload: 1 });

// Reducer
function counter(state = 0, action) {
  if (action.type === 'INCREMENT') return state + action.payload;
  return state;
}
```

**Async:** Dùng middleware (redux-thunk, redux-saga): dispatch function thay vì object, trong đó gọi API rồi dispatch action khi xong. **Redux Toolkit:** createSlice (action + reducer gộp), configureStore — ít boilerplate hơn.

---

### 10.9. Key dùng index trong list lớn

**Giải thích:** React dùng **key** để biết item nào là "cùng" item nào giữa các lần render. Nếu dùng **index** làm key và list **thay đổi** (thêm/xóa/sắp xếp), index bị lệch → React tái sử dụng sai instance → lỗi state (vd input nhảy chữ), hoặc performance kém.

**Ví dụ:**

```js
// List có thể sort/filter: không nên dùng index
items.map((item, index) => <Row key={index} data={item} />); // ❌

// Nên dùng id ổn định từ data
items.map((item) => <Row key={item.id} data={item} />);      // ✅
```

Chỉ dùng index khi list **tĩnh**, không reorder/thêm/xóa.

---

### 10.10. Web Worker

**Giải thích:** Chạy JS trên **thread riêng**, không block **main thread** (UI vẫn mượt). Dùng cho: tính toán nặng, xử lý data lớn. Worker **không** truy cập DOM; giao tiếp với main qua **postMessage** / **onmessage** (data được structured clone).

**Ví dụ:**

```js
// Main thread
const worker = new Worker('worker.js');
worker.postMessage({ data: bigArray });
worker.onmessage = (e) => console.log('Result:', e.data);

// worker.js
self.onmessage = (e) => {
  const result = heavyComputation(e.data.data);
  self.postMessage(result);
};
```

---

*File này dùng để ôn trước khi phỏng vấn; câu trả lời có thể chỉnh lại cho đúng tình huống và giọng của bạn.*