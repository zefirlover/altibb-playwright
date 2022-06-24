import { test, expect } from '@playwright/test';
import { MedicalVideosPage } from '../pages/medicalVideos.page';
import { Header } from '../pages/header.page';

test.describe('medical videos page testing', () => {
    test.beforeEach(async ({ page }) => {
        let medicalVideosPage = new MedicalVideosPage(page);
        await medicalVideosPage.visit();
    })

    test('ALT-02 Verify the medical videos page', async ({ page }) => {
        let header = new Header(page);
        let medicalVideosPage = new MedicalVideosPage(page);
        await header.visit();
        await expect(header.discoverMedicalDrop).toBeVisible();
        await expect(header.medicalVideosLink).not.toBeVisible();
        await header.discoverMedicalDrop.click();
        await expect(header.medicalVideosLink).toBeVisible();
        await header.medicalVideosLink.click();
        await expect(medicalVideosPage.heartVideo).toBeVisible();
    })
})