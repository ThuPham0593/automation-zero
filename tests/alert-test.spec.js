const { test, expect } = require('@playwright/test');

test('Kịch bản 4: Kiểm tra bắt hộp thoại Alert', async ({ page }) => {
    // 1. Lắng nghe sự kiện khi Alert xuất hiện để kiểm tra nội dung
    page.on('dialog', async dialog => {
        console.log("Nội dung Alert hiển thị là:", dialog.message());
        await dialog.accept(); // Bấm nút OK trên Alert
    });

    // 2. Truy cập trang thực hành Alert
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    // 3. Click nút kích hoạt JS Alert
    await page.getByRole('button', { name: 'Click for JS Alert' }).click();

    // 4. Xác minh kết quả hiển thị trên trang sau khi bấm OK
    await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');
});