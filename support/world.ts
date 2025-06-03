import { setWorldConstructor, World, IWorldOptions } from '@cucumber/cucumber';
import { Browser, chromium, Page, BrowserContext } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

export class CustomWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;
  loginPage!: LoginPage;

  constructor(options: IWorldOptions) {
    super(options);
  }

  async init() {
    this.browser = await chromium.launch();
    this.context = await this.browser.newContext();
  }

  async close() {
    await this.browser.close();
  }
}

setWorldConstructor(CustomWorld);