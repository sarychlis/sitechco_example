import { Page } from '@playwright/test';

export class RegisterPage {
  readonly page: Page;
  readonly nameInput: string;
  readonly emailInput: string;
  readonly passwordInput: string;
  readonly confirmPasswordInput: string;
  readonly newsletterCheckbox: string;
  readonly notificationsCheckbox: string;
  readonly termsCheckbox: string;
  readonly registerButton: string;

  constructor(page: Page) {
    this.page = page;
    this.nameInput = 'input[id="user_name"]';
    this.emailInput = 'input[id="user_email"]';
    this.passwordInput = 'input[id="user_password"]';
    this.confirmPasswordInput = 'input[id="user_password_again"]';
    this.newsletterCheckbox = 'input[id="user_is_subscribed"]';
    this.notificationsCheckbox = 'input[id="user_notification"]';
    this.termsCheckbox = 'input[id="user_is_polit"]';
    this.registerButton = 'button:has-text("РЕГИСТРАЦИЯ")';
  }

  async goto() {
    await this.page.goto('https://chlist.sitechco.ru/register');
  }

  async register(name: string, email: string, password: string, confirmPassword: string, subscribeNewsletter: boolean = true, subscribeNotifications: boolean = true, acceptTerms: boolean = true) {
    await this.page.fill(this.nameInput, name);
    await this.page.fill(this.emailInput, email);
    await this.page.fill(this.passwordInput, password);
    await this.page.fill(this.confirmPasswordInput, confirmPassword);
    if (subscribeNewsletter) {
      await this.page.check(this.newsletterCheckbox);
    }
    if (subscribeNotifications) {
      await this.page.check(this.notificationsCheckbox);
    }
    if (acceptTerms) {
      await this.page.check(this.termsCheckbox);
    }
  }
}
