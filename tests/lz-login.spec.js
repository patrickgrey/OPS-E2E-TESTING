const { test, expect } = require('@playwright/test');
require('dotenv').config({ path: "./.env" });


test('Login and open ATC-UNINC', async ({ page }) => {
  await page.goto('https://learningzone.eurocontrol.int/ilp/pages/login.jsf?menuId=1401&locale=en-GB&showbundlekeys=false');
  await page.locator(`[id="loginform:login"]`).fill(process.env.LZLOGIN);
  // Fill in password
  await page.locator(`[id="loginform:password"]`).fill(process.env.LZPASSWORD);
  // Select login button
  await page.locator(`[id="loginform:loginButton"]`).click();
  // Check at my dashboard
  await expect(page).toHaveTitle(/My Home/);
  // Select the find menu item
  await page.locator(`[id="navi_item_find"]`).click();
  // Select the catalogue submenu item
  await page.locator(`[id="navi_item_learner_catalogue"]`).click();
  // Fill in search field
  await page.locator(`[id="searchField"]`).fill(`UNINC`);
  // Click search button
  await page.locator(`[id="startSearchBtn"]`).click();
  // Select the catelogue item
  await page.locator(`[class="imc-list-item__tile"]`).click();
  await expect(page).toHaveTitle(/ATC-UNINC/);
});
