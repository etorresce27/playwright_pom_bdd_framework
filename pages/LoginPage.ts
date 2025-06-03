import { Page, expect } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto('https://demo.realworld.io/#/login');
  }

  async login(email: string, password: string) {
    await this.page.fill('input[type="email"]', email);
    await this.page.fill('input[type="password"]', password);
    await this.page.click('button[type="submit"]');
  }

  async assertLoginSuccess() {
    await expect(this.page).toHaveURL(/@/); // Check user profile URL
  }
}