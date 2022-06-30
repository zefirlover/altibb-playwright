import { Page, Locator } from '@playwright/test';

export class FirstArticlePage {
    readonly page: Page;
    readonly whatsAppLink: Locator;
    readonly shareButton: Locator;
    readonly shareList: Locator;
    readonly facebookLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.whatsAppLink = page.locator('.article-container a[href*="whatsapp"]');
        this.shareButton = page.locator('.article-container img[alt="Share"]');
        this.shareList = page.locator('.article-container #toggle-menu');
        this.facebookLink = page.locator('.article-container a[href*="facebook"]');
    }

    async visit() {
        await this.page.goto('https://automation.altibb.com/%D9%85%D9%82%D8%A7%D9%84%D8%A7%D8%AA-%D8%B7%D8%A8%D9%8A%D8%A9/%D8%A7%D9%85%D8%B1%D8%A7%D8%B6-%D8%A8%D8%A7%D8%B7%D9%86%D9%8A%D8%A9/bjcbsdcdscds-5923');
        await this.page.waitForLoadState();
    }
}