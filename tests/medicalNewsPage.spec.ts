import { test, expect } from '@playwright/test';
import { MedicalNewsPage } from '../pages/MedicalNews.page';
import { Header } from '../pages/header.page';

test.describe('med news test', () => {
    test('test', async ({ page }) => {
        let header = new Header(page);
        let medicalNewsPage = new MedicalNewsPage(page);
        await header.visit();
        await expect(header.discoverMedicalDrop).toBeVisible();
        await header.discoverMedicalDrop.click();
        await expect(header.medicalNewsLink).toBeVisible();
        await header.medicalNewsLink.click();
        await expect(medicalNewsPage.happinesArticleLink).toBeVisible();
        await medicalNewsPage.happinesArticleLink.click();
        await expect(medicalNewsPage.talkToDocLink).toBeVisible();
        await medicalNewsPage.talkToDocLink.click();
        await expect(medicalNewsPage.titleInput).toBeVisible();
    })
})