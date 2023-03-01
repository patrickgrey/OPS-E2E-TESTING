const { test, expect } = require('@playwright/test');
require('dotenv').config({ path: "./.env" });

test('Login and open ATC-UNINC', async ({ page }) => {
  page.on('request', async (request) => {
    if (request.method() === "POST" && request.url().includes("www.google-analytics.com")) {
      console.log('>>', request.method(), request.url());
      await expect(request.url()).toContain("cd1=");
    }
  });
  await page.goto('https://learningzone.eurocontrol.int/ilp/pages/external-dashboard.jsf?menuId=1104&locale=en-GB#/?dashboardId=6');
});
