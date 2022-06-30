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
    readonly videosContainer: Locator;
    readonly videoArticle: Locator;

    constructor(page: Page) {
        this.page = page
        this.whatsAppLink = page.locator('.video-container a[href*="whatsapp"]');
        this.shareButton = page.locator('.video-container img[alt="Share"]');
        this.shareList = page.locator('.video-container #toggle-menu');
        this.facebookLink = page.locator('.video-container a[href*="facebook"]');
        this.appointmentLink = page.locator('[class="ask-doctor-new-button "]');
        this.appointmentHeader = page.locator('h1[class="main-search-header"]');
        this.viewAllQuestionsLink = page.locator('[class="show-all-questions-button"]');
        this.qnaHeader = page.locator('h1[class="page-title"]');
        this.newsArticle = page.locator('#suggested-articles-news .article-primary-container');
        this.newsContainer = page.locator('#suggested-articles-news');
        this.videosContainer = page.locator('video-container-inner');
        this.videoArticle = page.locator('article[class="video-box"]');
    }

    async visit() {
        await this.page.goto('https://automation.altibb.com/%D9%81%D9%8A%D8%AF%D9%8A%D9%88%D9%87%D8%A7%D8%AA-%D8%B7%D8%A8%D9%8A%D8%A9/%D8%A7%D9%84%D8%A7%D9%85%D8%B1%D8%A7%D8%B6-%D8%A7%D9%84%D9%85%D8%B9%D8%AF%D9%8A%D8%A9/%D8%A7%D9%84%D8%B1%D8%AC%D9%81%D8%A7%D9%86-%D8%A7%D9%84%D8%A7%D8%B0%D9%8A%D9%86%D9%8A-%D8%A7%D9%84%D9%82%D9%84%D8%A8-560');
        await this.page.waitForLoadState();
    }

    async getAllElements(elementSelector){
        return await this.page.$$(elementSelector);
    }

    async arrNewsArticles(){
        return await this.getAllElements('#suggested-articles-news .article-primary-container');
    }
}