const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/login.page1');
const testCases = require('../data/loginData.json');

test.describe('Bộ kịch bản Đăng nhập đọc dữ liệu tự động từ JSON', () => {

    for (const data of testCases) {
        test(data.testName, async ({ page }) => {
            const loginPage = new LoginPage(page);
            await loginPage.navigate();
            await loginPage.login(data.username, data.password);

            if (data.isSuccess) {
                // Kiểm tra chuyển hướng vào trang sản phẩm
                await expect(page).toHaveURL(/inventory.html/);
            } else {
                const errorText = await loginPage.getErrorMessage();
                expect(errorText).toContain(data.expectedText);
            }
        });
    }

});