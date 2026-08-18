
const { test, expect } = require('@playwright/test');

test('Kịch bản 1: Kiểm tra đăng nhập trang Practice', async ({ page }) => {
    // 1. Mở trang web luyện tập Automation
    await page.goto('https://practicetestautomation.com/practice-test-login/');

    // 2. Tự động điền Username & Password
    await page.locator('#username').fill('student');
    await page.locator('#password').fill('Password123');

    // 3. Tự động click nút Submit
    await page.locator('#submit').click();

    // 4. Dừng 3 giây để quan sát kết quả đăng nhập thành công
    await page.waitForTimeout(2000);

    // 5. Kiểm tra thông báo thành công xuất hiện
    await expect(page.locator('.has-text-align-center')).toContainText('Logged In Successfully');
});