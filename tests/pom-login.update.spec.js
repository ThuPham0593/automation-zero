const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login.page1');

// Nâng thời gian chờ tối đa của bộ test lên 60 giây
test.setTimeout(60000);

test.describe('Bộ kịch bản Test Chức năng Đăng nhập (POM)', () => {

    test('TC01: Đăng nhập thành công với tài khoản hợp lệ', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigate();
        await loginPage.login('student', 'Password123');

        await expect(page).toHaveURL(/logged-in-successfully/);
    });

    test('TC02: Đăng nhập thất bại khi nhập Sai Username', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigate();
        await loginPage.login('incorrectUser', 'Password123');

        // Chờ và kiểm tra thẻ báo lỗi hiển thị
        await expect(loginPage.errorMessage).toBeVisible();
        const errorText = await loginPage.getErrorMessage();
        expect(errorText).toContain('Your username is invalid!');
    });

    test('TC03: Đăng nhập thất bại khi nhập Sai Password', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigate();
        await loginPage.login('student', 'incorrectPassword');

        // Chờ và kiểm tra thẻ báo lỗi hiển thị
        await expect(loginPage.errorMessage).toBeVisible();
        const errorText = await loginPage.getErrorMessage();
        expect(errorText).toContain('Your password is invalid!');
    });

});
