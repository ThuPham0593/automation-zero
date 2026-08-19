const { test, expect } = require('@playwright/test');

test('Kịch bản 2: Kiểm tra thao tác điền Form tổng hợp', async ({ page }) => {
    // 1. Truy cập trang thực hành Form
    await page.goto('https://demoqa.com/automation-practice-form', { waitUntil: 'domcontentloaded' });

    // 2. Điền Họ và Tên (Gõ text)
    await page.locator('#firstName').fill('Thu');
    await page.locator('#lastName').fill('Pham');

    // 3. Điền Email
    await page.locator('#userEmail').fill('thu.pham@example.com');

    // 4. Chọn Giới tính (Click Radio Button - dùng label cho dễ click)
    await page.locator('label[for="gender-radio-2"]').click(); // Chọn Female

    // 5. Điền Số điện thoại
    await page.locator('#userNumber').fill('0912345678');

    // 6. Chọn Sở thích (Tích Checkbox)
    await page.locator('label[for="hobbies-checkbox-1"]').click(); // Sports
    await page.locator('label[for="hobbies-checkbox-2"]').click(); // Reading

    // 7. Dừng 3 giây để bạn quan sát các ô đã được điền đầy đủ
    await page.waitForTimeout(3000);
});