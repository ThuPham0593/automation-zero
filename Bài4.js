// 1. Khai báo hàm kiểm tra đăng nhập (đóng gói logic)
function checkLogin(username, password) {
    console.log(`--- Đang kiểm tra tài khoản: ${username} ---`);
    
    if (username === "admin" && password === "123456") {
        console.log("🟢 Đăng nhập THÀNH CÔNG!");
        return true;
    } else {
        console.log("🔴 Đăng nhập THẤT BẠI: Sai tài khoản hoặc mật khẩu!");
        return false;
    }
}

// 2. Tái sử dụng hàm với nhiều bộ dữ liệu test khác nhau (Data-Driven Test)
checkLogin("admin", "123456"); // Test case 1: Dữ liệu đúng
checkLogin("user_test", "999999"); // Test case 2: Dữ liệu sai