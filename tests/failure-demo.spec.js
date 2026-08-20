const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/login.page1');

test('Cố tình làm Fail để kiểm tra tính năng chụp ảnh tự động', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();

    // Đăng nhập mật khẩu sai
    await loginPage.login('standard_user', 'wrong_password');

    // Cố tình expect chuyển sang trang thành công -> Sẽ FAIL
    await expect(page).toHaveURL(/inventory.html/);
});