import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { CustomWorld } from '../../support/world';

Given('the user is on the login page', async function (this: CustomWorld) {
  this.page = await this.context.newPage();
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.navigate();
});

When('the user logs in with email {string} and password {string}', async function (this: CustomWorld, email: string, password: string) {
  await this.loginPage.login(email, password);
});

Then('the user should be redirected to their profile', async function (this: CustomWorld) {
  await this.loginPage.assertLoginSuccess();
});