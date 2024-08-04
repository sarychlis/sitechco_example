import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/registerPage';

test.describe('Register page functionality tests', () => {

  test('Register page loads successfully', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.goto();

    const title = await page.title();
    expect(title).toBe('Регистрация'); 
  });

  test('Successful registration', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.goto();
    await registerPage.register('Test User', 'testuser@example.com', 'password123', 'password123', true);

    const url = page.url();
    expect(url).toBe('https://chlist.sitechco.ru'); 
  });

  test('Unsuccessful registration with mismatched passwords', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.goto();
    await registerPage.register('Test User', 'testuser@example.com', 'password123', 'password124', true);

    const errorMessage = await page.locator('.user_password_againValidationMessage').innerText(); 
    expect(errorMessage).toBe('Пароли не совпадают'); 
  });

  test('Unsuccessful registration without agreeing to terms', async ({ page }) => {
    const registerPage = new RegisterPage(page); // В этом кейсе при ручной проверке нет отображения валидационного сообщения, потому что не проходит запрос
    await registerPage.goto();
    await registerPage.register('Test User', 'testuser@example.com', 'password123', 'password123', false);

    const errorMessage = await page.locator('.error-message').innerText(); 
    expect(errorMessage).toBe('You must agree to the terms and conditions'); // Пример
  });
});
