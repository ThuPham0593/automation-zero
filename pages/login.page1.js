class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.submitButton = page.locator('#submit');
        // Sửa Selector tìm chính xác thẻ chứa thông báo lỗi trên trang Practice
        this.errorMessage = page.locator('#error');
    }

    async navigate() {
        await this.page.goto('https://practicetestautomation.com/practice-test-login/', { waitUntil: 'domcontentloaded' });
    }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.submitButton.click();
    }

    async getErrorMessage() {
        // Chờ thẻ lỗi xuất hiện rồi mới lấy chữ
        await this.errorMessage.waitFor({ state: 'visible' });
        return await this.errorMessage.textContent();
    }
}

module.exports = { LoginPage };