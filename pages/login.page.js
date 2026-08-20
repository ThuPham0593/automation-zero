class LoginPage {
    constructor(page) {
        this.page = page;
        // 1. Quản lý toàn bộ Selector trên màn hình Đăng nhập
        this.usernameInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.submitButton = page.locator('#submit');
    }

    // 2. Định nghĩa hành động Mở trang
    async navigate() {
        await this.page.goto('https://practicetestautomation.com/practice-test-login/', { waitUntil: 'domcontentloaded' });
    }

    // 3. Định nghĩa hành động Đăng nhập
    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.submitButton.click();
    }
}

module.exports = { LoginPage };