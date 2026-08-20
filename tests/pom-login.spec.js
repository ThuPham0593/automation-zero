const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login.page');

test('Kịch bản POM: Kiểm tra đăng nhập thành công', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // 1. Điều hướng tới trang đăng nhập
    await loginPage.navigate();

    // 2. Thực hiện đăng nhập bằng hàm đã viết sẵn
    await loginPage.login('student', 'Password123');

    // 3. Verification
    await expect(page).toHaveURL(/logged-in-successfully/);
});