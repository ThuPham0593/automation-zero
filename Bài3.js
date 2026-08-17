// 1. Mảng (Array): Chứa danh sách các nút cần kiểm tra trên giao diện
const menuButtons = ["Trang chủ", "Sản phẩm", "Giới thiệu", "Liên hệ"];

console.log("Tổng số nút trên Menu:", menuButtons.length); // .length dùng để đếm số phần tử

// 2. Vòng lặp for: Chạy duyệt từng nút để kiểm tra
for (let i = 0; i < menuButtons.length; i++) {
    console.log(`Đang kiểm tra nút thứ ${i + 1}: ${menuButtons[i]}`);
}