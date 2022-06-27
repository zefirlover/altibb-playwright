import { Browser, BrowserContext, chromium } from '@playwright/test';
import { test, expect } from '@playwright/test';
import { MedicalVideosPage } from '../pages/medicalVideos.page';
import { AtrialFibrillationVideoPage } from '../pages/AtrialFibrillationVideo.page';
const arrMedias = [ 'facebook', 'linkedin', 'twitter', 'instagram', 'whatsapp' ];

test.describe('atrial fibrillation video page testing', () => {
    test.beforeEach(async ({ page }) => {
        let atrialFibrillationVideoPage = new AtrialFibrillationVideoPage(page);
        test.setTimeout(80000);
        await atrialFibrillationVideoPage.visit();
        await page.waitForLoadState();
    })

    test('ALT-03 Verify the atrial fibrillation video page', async ({ page }) => {
        let medicalVideosPage = new MedicalVideosPage(page);
        let atrialFibrillationVideoPage = new AtrialFibrillationVideoPage(page);
        test.setTimeout(100000);
        await medicalVideosPage.visit();
        await page.waitForLoadState();
        await expect(medicalVideosPage.heartVideo).toBeVisible();
        await medicalVideosPage.heartVideo.click();
        await expect(atrialFibrillationVideoPage.whatsAppLink).toBeVisible();
    })

    test('ALT-04 Verify share button work', async ({ page }) => {
        let atrialFibrillationVideoPage = new AtrialFibrillationVideoPage(page);
        await expect(atrialFibrillationVideoPage.shareButton).toBeVisible();
        await expect(atrialFibrillationVideoPage.shareList).not.toBeVisible();
        await atrialFibrillationVideoPage.shareButton.click();
        await expect(atrialFibrillationVideoPage.shareList).toBeVisible();
    })

    test('ALT-05 Verify all share links works', async ({ page }) => {
        let atrialFibrillationVideoPage = new AtrialFibrillationVideoPage(page);
        test.setTimeout(200000);
        for (let i = 0; i < arrMedias.length; i++) {
            let media = page.locator(`.video-container a[href*="${arrMedias[i]}"]`)
            await atrialFibrillationVideoPage.shareButton.click();
            await expect(media).toBeVisible();
            let [newPage] = await Promise.all([
                page.context().waitForEvent("page"),
                page.click(`.video-container a[href*="${arrMedias[i]}"]`)
            ])
            await newPage.waitForLoadState()
            expect(newPage.url()).toContain(arrMedias[i]);
            await page.waitForTimeout(3000);
            await atrialFibrillationVideoPage.visit();
            await page.waitForLoadState();
        }
    })

    test('ALT-06 Verify the appointment page', async ({ page }) => {
        let atrialFibrillationVideoPage = new AtrialFibrillationVideoPage(page);
        await expect(atrialFibrillationVideoPage.appointmentLink).toBeVisible();
        await atrialFibrillationVideoPage.appointmentLink.click();
        await expect(atrialFibrillationVideoPage.appointmentHeader).toBeVisible();
        await expect(atrialFibrillationVideoPage.appointmentHeader).toHaveText(' ابحث عن طبيب واحجز موعد بكل سهولة ');
    })

    test('ALT-07 Verify the QnA page', async ({ page }) => {
        let atrialFibrillationVideoPage = new AtrialFibrillationVideoPage(page);
        await expect(atrialFibrillationVideoPage.viewAllQuestionsLink).toBeVisible();
        await atrialFibrillationVideoPage.viewAllQuestionsLink.click();
        await expect(atrialFibrillationVideoPage.qnaHeader).toBeVisible();
        await expect(atrialFibrillationVideoPage.qnaHeader).toHaveText('أسئلة واجابات طبية الامراض المعدية');
    })

    test('ALT-08 Verify news and articles container', async ({ page }) => {
        let atrialFibrillationVideoPage = new AtrialFibrillationVideoPage(page);
        await expect(atrialFibrillationVideoPage.newsContainer).toBeVisible();
        let arrNewsArticles = await page.$$('#suggested-articles-news .article-primary-container');
        for (let i = 0; i < arrNewsArticles.length; i++)
            await expect(atrialFibrillationVideoPage.newsArticle.nth(i)).toBeVisible();
    })

    test('ALT-10 Verify Video articles container', async ({ page }) => {
        let atrialFibrillationVideoPage = new AtrialFibrillationVideoPage(page);
        let arrVideoArticles = await page.$$('article[class="video-box"]');
        for (let i = 0; i < arrVideoArticles.length; i++)
            await expect(atrialFibrillationVideoPage.videoArticle.nth(i)).toBeVisible();
    })
})