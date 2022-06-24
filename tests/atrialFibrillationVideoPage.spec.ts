import { test, expect } from '@playwright/test';
import { MedicalVideosPage } from '../pages/medicalVideos.page';
import { AtrialFibrillationVideoPage } from '../pages/AtrialFibrillationVideo.page';

test.describe('atrial fibrillation video page testing', () => {
    test.beforeEach(async ({ page }) => {
        let atrialFibrillationVideoPage = new AtrialFibrillationVideoPage(page);
        await atrialFibrillationVideoPage.visit();
    })

    test('ALT-03 Verify the atrial fibrillation video page', async ({ page }) => {
        let medicalVideosPage = new MedicalVideosPage(page);
        let atrialFibrillationVideoPage = new AtrialFibrillationVideoPage(page);
        await medicalVideosPage.visit();
        await expect(medicalVideosPage.heartVideo).toBeVisible();
        await medicalVideosPage.heartVideo.click();
        await expect(atrialFibrillationVideoPage.whatsAppLink).toBeVisible();
    })
})