const { test, expect } = require('@playwright/test');

test('Kịch bản 1: Kiểm tra đăng nhập trang Practice', async ({ page }) => {
    // 1. Mở trang web (Thêm waitUntil để không bị treo timeout)
    await page.goto('https://practicetestautomation.com/practice-test-login/', { waitUntil: 'domcontentloaded' });

    // 2. Điền thông tin đăng nhập
    await page.locator('#username').fill('student');
    await page.locator('#password').fill('Password123');

    // 3. Click Submit
    await page.locator('#submit').click();

    // 4. Kiểm tra URL chuyển sang trang thành công
    await expect(page).toHaveURL(/logged-in-successfully/);
});