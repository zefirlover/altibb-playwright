import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/main.page';
import { Header } from '../pages/header.page';

test.describe('main page testing', () => {
    test.beforeEach(async ({ page }) => {
        let mainPage = new MainPage(page);
        await mainPage.visit();
    })

    test('ALT-01 Verify the main page', async ({ page }) => {
        let mainPage = new MainPage(page);
        await expect(mainPage.callDocButton).toBeVisible();
    })
})