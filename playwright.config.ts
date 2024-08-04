import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests', // Директория с тестами
  timeout: 30000, // Тайм-аут для каждого теста в миллисекундах
  retries: 1, // Количество повторных попыток при неудачном тесте
  reporter: [['list'], ['json', { outputFile: 'test-results.json' }]], // Репортеры для результатов тестов
  use: {
    browserName: 'chromium', // Браузер по умолчанию
    headless: false, // Запуск в headless режиме
    viewport: { width: 1280, height: 720 }, // Размер окна браузера
    ignoreHTTPSErrors: true, // Игнорировать ошибки HTTPS
    video: 'on-first-retry', // Запись видео при первой неудачной попытке
    screenshot: 'only-on-failure', // Скриншоты только при неудаче
    baseURL: 'https://chlist.sitechco.ru', // Базовый URL вашего сайта
  },
  projects: [
    {
      name: 'Desktop Chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Desktop Firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'Desktop Safari',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    },
  ],
  outputDir: 'test-results/', // Директория для сохранения результатов тестов
});
