import { test, expect } from '@playwright/test';
import { MedicalArticlesPage } from "../../altibb-playwright/pages/MedicalArticles.page";
import { FirstArticlePage } from "../../altibb-playwright/pages/FirstArticle.page";
import { HappinesArticlePage } from "../../altibb-playwright/pages/HappinesArticle.page";
import { AtrialFibrillationVideoPage } from "../../altibb-playwright/pages/AtrialFibrillationVideo.page";
const arrMedias = [ 'facebook', 'linkedin', 'twitter', 'instagram', 'whatsapp' ];

test.describe('first article page tests', () => {
    test.beforeEach(async ({ page }) => {
        let firstArticlePage = new FirstArticlePage(page);
        test.setTimeout(1000000);
        await firstArticlePage.visit();
        await page.waitForLoadState();
    })

    test('ALT-18 Verify the first article page', async ({ page }) => {
        let firstArticlePage = new FirstArticlePage(page);
        let medicalArticlesPage = new MedicalArticlesPage(page);
        //test.setTimeout(200000);
        await medicalArticlesPage.visit();
        await page.waitForLoadState();
        await expect(medicalArticlesPage.firstArticleLink).toBeVisible();
        await medicalArticlesPage.firstArticleLink.click();
        await expect(firstArticlePage.whatsAppLink).toBeVisible();
    })

    test('ALT-19 Verify all share links works', async ({ page }) => {
        let firstArticlePage = new FirstArticlePage(page);
        test.setTimeout(2800000);
        for (let i = 0; i < arrMedias.length; i++) {
            let media = page.locator(`.article-container a[href*="${arrMedias[i]}"]`)
            await firstArticlePage.shareButton.click();
            await expect(media).toBeVisible();
            let [newPage] = await Promise.all([
                page.context().waitForEvent("page"),
                page.click(`.article-container a[href*="${arrMedias[i]}"]`)
            ])
            await newPage.waitForLoadState()
            expect(newPage.url()).toContain(arrMedias[i]);
            await page.waitForTimeout(3000);
            await firstArticlePage.visit();
            await page.waitForLoadState();
        }
    })

    test('ALT-20 Verify the Appointment page', async ({ page }) => {
        let happinesArticlePage = new HappinesArticlePage(page);
        await expect(happinesArticlePage.appointmentLink).toBeVisible();
        await happinesArticlePage.appointmentLink.click();
        await expect(happinesArticlePage.appointmentHeaderText).toBeVisible();
        await expect(happinesArticlePage.appointmentHeaderText).toHaveText(' ابحث عن طبيب واحجز موعد بكل سهولة ');
    })

    test('ALT-21 Verify Video articles container', async ({ page }) => {
        let atrialFibrillationVideoPage = new AtrialFibrillationVideoPage(page);
        let arrVideoArticles = await page.$$('article[class="video-box"]');
        for (let i = 0; i < arrVideoArticles.length; i++)
            await expect(atrialFibrillationVideoPage.videoArticle.nth(i)).toBeVisible();
    })
})