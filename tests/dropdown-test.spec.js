const { test, expect } = require('@playwright/test');

test('Kịch bản 3: Kiểm tra thao tác chọn Dropdown', async ({ page }) => {
    // 1. Truy cập trang thực hành Dropdown
    await page.goto('https://the-internet.herokuapp.com/dropdown');

    // 2. Tìm thẻ Dropdown (thẻ <select>) và chọn "Option 2" theo value
    await page.locator('#dropdown').selectOption('2');

    // 3. Dừng 2 giây để quan sát màn hình đã chuyển sang Option 2
    await page.waitForTimeout(2000);

    // 4. Kiểm tra (Verify) xem Option 2 đã thực sự được chọn chưa
    const selectedOption = await page.locator('#dropdown option:checked').textContent();
    console.log("Giá trị đang được chọn là:", selectedOption.trim());

    // 5. Khẳng định (Assertion) kết quả đúng là "Option 2"
    expect(selectedOption.trim()).toBe('Option 2');
});