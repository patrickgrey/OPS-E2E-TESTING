import { test, expect } from '@playwright/test';

test('Codegen automated test creation', async ({ page }) => {
  await page.goto('https://learningzone.eurocontrol.int/ilp/pages/external-dashboard.jsf?menuId=1104&locale=en-GB#/?dashboardId=6');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Understood' }).click();
  await page.getByPlaceholder('Please enter your login name NOT your email address.').click();
  await page.getByPlaceholder('Please enter your login name NOT your email address.').fill(process.env.LZLOGIN);
  await page.getByPlaceholder('Please enter your login name NOT your email address.').press('Tab');
  await page.getByLabel('Password').fill(process.env.LZPASSWORD);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Find' }).click();
  await page.getByRole('link', { name: 'Training Catalogue' }).click();
  await page.getByPlaceholder('Search term').click();
  await page.getByPlaceholder('Search term').fill('ATC-UNINC');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.locator('a').filter({ hasText: 'Unusual and Emergency Situations [ATC-UNINC] Available for 12 Months e-Learning ' }).click();
  await page.getByRole('link', { name: 'Progress' }).click();
  await page.getByRole('link', { name: 'My Digital CV' }).click();
  await page.frameLocator('#ianspanel').getByText('Add work experience').click();
  await page.frameLocator('#ianspanel').getByLabel('Job Title').click();
  await page.frameLocator('#ianspanel').getByLabel('Job Title').fill('New job');
  await page.getByRole('link', { name: 'User profile folder' }).click();
  await page.getByRole('link', { name: 'Log out' }).click();
});