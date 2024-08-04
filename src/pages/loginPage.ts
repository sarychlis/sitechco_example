import { Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly emailInput: string;
  readonly passwordInput: string;
  readonly rememberMeCheckbox: string;
  readonly loginButton: string;
  readonly registerButton: string
  readonly navigateToForgotPassword: string;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = 'input[id="user_auth_email"]';    
    this.passwordInput = 'input[id="user_auth_password"]';
    this.rememberMeCheckbox = 'input[id="user_auth_remember"]';
    this.loginButton = 'input[value="ВОЙТИ"]';
    this.registerButton = 'a[text="Регистрация"]'
    this.navigateToForgotPassword = 'input[id="frgt-pw"]';
  }

  async goto() {
    await this.page.goto('https://chlist.sitechco.ru/');
  }

  async login(email: string, password: string, remember: boolean = false) {
    await this.page.fill(this.emailInput, email);
    await this.page.fill(this.passwordInput, password);
    if (remember) {
      await this.page.check(this.rememberMeCheckbox);
    }

    await this.page.click(this.loginButton);
  }

  async gotoRegister() {
    await this.page.waitForSelector(this.registerButton)

    await this.page.click(this.registerButton)
  }

  async gotoForgotPassword() {
    await this.page.waitForSelector(this.navigateToForgotPassword)

    await this.page.click(this.navigateToForgotPassword)
  }
}
