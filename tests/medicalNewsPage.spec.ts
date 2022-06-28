import { test, expect } from '@playwright/test';
import { MedicalNewsPage } from '../../altibb-playwright/pages/MedicalNews.page';
import { Header } from '../../altibb-playwright/pages/Header.page';

test.describe('med news test', () => {
    test('ALT-09 Verify Medical news page', async ({ page }) => {
        let header = new Header(page);
        let medicalNewsPage = new MedicalNewsPage(page);
        await header.visit();
        await expect(header.discoverMedicalDrop).toBeVisible();
        await header.discoverMedicalDrop.click();
        await expect(header.medicalNewsLink).toBeVisible();
        await header.medicalNewsLink.click();
        await expect(medicalNewsPage.happinesArticleLink).toBeVisible();
    })
})