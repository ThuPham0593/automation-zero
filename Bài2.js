// Giả định dữ liệu test đăng nhập
const actualTitle = "Trang chủ - Hệ thống QA";  // Kết quả thực tế web trả về
const expectedTitle = "Trang chủ 111 - Hệ thống QA"; // Kết quả mong đợi (Expected Result)

// Dùng if-else để verify (xác minh)
if (actualTitle === expectedTitle) {
    console.log("🟢 TEST PASSED: Tiêu đề trang khớp hoàn toàn!");
} else {
    console.log("🔴 TEST FAILED: Tiêu đề không khớp. Thực tế là: " + actualTitle);
}