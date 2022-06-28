import { test, expect } from '@playwright/test';
import { HappinesArticlePage } from '../pages/HappinesArticle.page';
import { MedicalNewsPage } from '../pages/MedicalNews.page';
import { AtrialFibrillationVideoPage } from '../pages/AtrialFibrillationVideo.page';
const arrMedias = [ 'facebook', 'linkedin', 'twitter', 'instagram', 'whatsapp' ];

test.describe('happines article page tests', () => {
    test.beforeEach(async ({ page }) => {
        let happinesArticlePage = new HappinesArticlePage(page);
        test.setTimeout(60000);
        await happinesArticlePage.visit();
        await page.waitForLoadState();
    })

    test('ALT-11 Verify the Happines article page', async ({ page }) => {
        let happinesArticlePage = new HappinesArticlePage(page);
        let medicalNewsPage = new MedicalNewsPage(page);
        await medicalNewsPage.visit();
        await page.waitForLoadState();
        await expect(medicalNewsPage.happinesArticleLink).toBeVisible();
        await medicalNewsPage.happinesArticleLink.click();
        await expect(happinesArticlePage.talkToDocLink).toBeVisible(); 
    })

    test('ALT-12 Verify Talk to doctor page', async ({ page }) => {
        let happinesArticlePage = new HappinesArticlePage(page);
        await expect(happinesArticlePage.talkToDocLink).toBeVisible();
        await happinesArticlePage.talkToDocLink.click();
        await expect(happinesArticlePage.titleInput).toBeVisible();
    })

    test('ALT-13 Verify the share options', async ({ page }) => {
        let happinesArticlePage = new HappinesArticlePage(page);
        test.setTimeout(200000);
        for (let i = 0; i < arrMedias.length; i++) {
            let media = page.locator(`.news-article-container a[href*="${arrMedias[i]}"]`)
            await happinesArticlePage.shareButton.click();
            await expect(media).toBeVisible();
            let [newPage] = await Promise.all([
                page.context().waitForEvent("page"),
                page.click(`.news-article-container a[href*="${arrMedias[i]}"]`)
            ])
            await newPage.waitForLoadState()
            expect(newPage.url()).toContain(arrMedias[i]);
            await page.waitForTimeout(3000);
            await happinesArticlePage.visit();
            await page.waitForLoadState();
        }
    })

    test('ALT-14 Verify Watch the answer page', async ({ page }) => {
        let happinesArticlePage = new HappinesArticlePage(page);
        await expect(happinesArticlePage.watchTheAnswerLink).toBeVisible();
        await happinesArticlePage.watchTheAnswerLink.click();
        await expect(happinesArticlePage.likeButton).toBeVisible();
    })

    test('ALT-15 Verify the Appointment page', async ({ page }) => {
        let happinesArticlePage = new HappinesArticlePage(page);
        await expect(happinesArticlePage.appointmentLink).toBeVisible();
        await happinesArticlePage.appointmentLink.click();
        await expect(happinesArticlePage.appointmentHeaderText).toBeVisible();
        await expect(happinesArticlePage.appointmentHeaderText).toHaveText(' ابحث عن طبيب واحجز موعد بكل سهولة ');
    })

    test('ALT-16 Verify Video articles container', async ({ page }) => {
        let atrialFibrillationVideoPage = new AtrialFibrillationVideoPage(page);
        let arrVideoArticles = await page.$$('article[class="video-box"]');
        for (let i = 0; i < arrVideoArticles.length; i++)
            await expect(atrialFibrillationVideoPage.videoArticle.nth(i)).toBeVisible();
    })
})