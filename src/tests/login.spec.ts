import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

test.describe('Login page functionality tests', () => {

  test('Login page loads successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();

    const title = await page.title();
    expect(title).toBe('Sitechco.ru'); 
  });

  test('Successful login', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('gagaxe9323@eixdeal.com', 'gagaxe9323@eixdeal.com');

    expect(page.url()).toBe('https://chlist.sitechco.ru/'); 
  });

  test('Navigate to Register page', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();


    await loginPage.gotoRegister();

    await page.waitForSelector('form[action="/register"]'); // Ожидание загрузки формы регистрации
    const url = page.url();
    expect(url).toBe('https://chlist.sitechco.ru/register'); // Проверка, что URL правильный
  });

  test('Navigate to Forgot Password page', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.gotoForgotPassword();

    await page.waitForSelector('form[action="/forgot-password"]'); // Ожидание загрузки формы восстановления пароля
    const url = page.url();
    expect(url).toBe('https://chlist.sitechco.ru/forgot-password'); // Проверка, что URL правильный
  });
});


