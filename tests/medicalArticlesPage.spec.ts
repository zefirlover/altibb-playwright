import { test, expect } from '@playwright/test';
import { Header } from "../../altibb-playwright/pages/Header.page";
import { MedicalArticlesPage } from "../../altibb-playwright/pages/MedicalArticles.page";

test.describe('medical articles page tests', () => {
    test.beforeEach(async ({ page }) => {
        let medicalArticlesPage = new MedicalArticlesPage(page);
        //test.setTimeout(1000000);
        await medicalArticlesPage.visit();
        await page.waitForLoadState();
    })

    test('ALT-17 Verify the medical articles page', async ({ page }) => {
        let header = new Header(page);
        let medicalArticlesPage = new MedicalArticlesPage(page);
        //test.setTimeout(100000);
        await header.visit();
        await page.waitForLoadState();
        await expect(header.discoverMedicalDrop).toBeVisible();
        await expect(header.medicalArticlesLink).not.toBeVisible();
        await header.discoverMedicalDrop.click();
        await expect(header.medicalArticlesLink).toBeVisible();
        await header.medicalArticlesLink.click();
        await expect(medicalArticlesPage.firstArticleLink).toBeVisible();
    })
})