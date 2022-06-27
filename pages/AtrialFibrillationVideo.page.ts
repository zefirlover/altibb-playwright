import { Page, Locator } from '@playwright/test';

export class AtrialFibrillationVideoPage {
    readonly page: Page;
    readonly whatsAppLink: Locator;
    readonly shareButton: Locator;
    readonly shareList: Locator;
    readonly facebookLink: Locator;
    readonly appointmentLink: Locator;
    readonly appointmentHeader: Locator;
    readonly viewAllQuestionsLink: Locator;
    readonly qnaHeader: Locator;
    readonly newsArticle: Locator;
    readonly newsContainer: Locator;

    constructor(page: Page) {
        this.page = page
        this.whatsAppLink = page.locator('.video-container a[href*="whatsapp"]');
        this.shareButton = page.locator('.video-container img[alt="Share"]');
        this.shareList = page.locator('.video-container #toggle-menu');
        this.facebookLink = page.locator('.video-container a[href*="facebook"]');
        this.appointmentLink = page.locator('#daleel-appointment a[href="/الدليل-الطبي/حجوزات"]');
        this.appointmentHeader = page.locator('h1[class="main-search-header"]');
        this.viewAllQuestionsLink = page.locator('#free-q-and-a-classic-v2 a[href="/اسئلة-طبية/الامراض-المعدية"]');
        this.qnaHeader = page.locator('h1[class="page-title"]');
        this.newsArticle = page.locator('#suggested-articles-news .article-primary-container');
        this.newsContainer = page.locator('#suggested-articles-news');
    }

    async visit() {
        await this.page.goto('https://automation.altibb.com//فيديوهات-طبية/الامراض-المعدية/الرجفان-الاذيني-القلب-560');
    }
}