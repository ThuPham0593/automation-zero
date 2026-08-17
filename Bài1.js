// 1. Khai báo thông tin kịch bản test
const testCaseName = "Test chức năng Đăng nhập"; // Giá trị cố định không đổi
let attemptCount = 1;                           // Số lần thử, có thể tăng lên
let isPassed = true;                             // Trạng thái test: true (Đúng/Pass) hoặc false (Sai/Fail)

// 2. In thông tin ra Terminal
console.log("Tên Test Case:", testCaseName);
console.log("Số lần thử:", attemptCount);
console.log("Kết quả Pass?", isPassed);

// 3. Giả sử test lại lần 2 (tăng số lần thử)
attemptCount = 2;
console.log("Số lần thử sau khi chạy lại:", attemptCount);