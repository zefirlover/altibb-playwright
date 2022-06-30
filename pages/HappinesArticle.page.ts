import { Page, Locator } from '@playwright/test';

export class HappinesArticlePage {
    readonly page: Page;
    readonly whatsAppLink: Locator;
    readonly shareButton: Locator;
    readonly shareList: Locator;
    readonly facebookLink: Locator;
    readonly talkToDocLink: Locator;
    readonly titleInput: Locator;
    readonly watchTheAnswerLink: Locator;
    readonly likeButton: Locator;
    readonly appointmentLink: Locator;
    readonly appointmentHeaderText: Locator;

    constructor(page: Page) {
        this.page = page;
        this.whatsAppLink = page.locator('.news-article-container a[href*="whatsapp"]');
        this.shareButton = page.locator('.news-article-container img[alt="Share"]');
        this.shareList = page.locator('.news-article-container #toggle-menu');
        this.facebookLink = page.locator('.news-article-container a[href*="facebook"]');
        this.talkToDocLink = page.locator('a[href="/اسئلة-طبية/اسأل-الطبي/"]');
        this.titleInput = page.locator('#askquestionform-title');
        this.watchTheAnswerLink = page.locator('[class="in-read-question-btn in-read-a"]');
        this.likeButton = page.locator('#dr-comments [href="/member/login"]');
        this.appointmentLink = page.locator('[class="ask-doctor-new-button "]');
        this.appointmentHeaderText = page.locator('.main-search-header');
    }

    async visit() {
        await this.page.goto('https://automation.altibb.com/%D8%A7%D8%AE%D8%A8%D8%A7%D8%B1-%D8%B7%D8%A8%D9%8A%D8%A9/%D8%B9%D9%84%D9%85-%D8%A7%D9%84%D8%B3%D9%85%D9%88%D9%85/%D8%AA%D8%BA%D9%8A%D8%B1%D8%A7%D8%AA-%D9%8A%D9%88%D9%85%D9%8A%D8%A9-%D8%AA%D8%AC%D8%B9%D9%84%D9%83-%D8%B3%D8%B9%D9%8A%D8%AF%D8%A7-7196');
        await this.page.waitForLoadState();
    }
}