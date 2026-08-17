// 1. Tạo một Object chứa toàn bộ thông tin của 1 Test Case
const testCaseDetail = {
    id: "TC001",
    title: "Kiểm tra thêm sản phẩm vào giỏ hàng",
    author: "Phạm Thị Thu",
    severity: "High",
    isAutomated: true
};

// 2. Truy cập vào từng thuộc tính bên trong Object (dùng dấu chấm)
console.log("Mã Test Case:", testCaseDetail.id);
console.log("Tên Test Case:", testCaseDetail.title);
console.log("Người thực hiện:", testCaseDetail.author);

// 3. Cập nhật thuộc tính trong Object
testCaseDetail.severity = "Critical";
console.log("Độ nghiêm trọng sau khi update:", testCaseDetail.severity);