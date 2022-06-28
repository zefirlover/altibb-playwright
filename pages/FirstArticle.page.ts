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
        await this.page.goto('https://automation.altibb.com//مقالات-طبية/امراض-باطنية/bjcbsdcdscds-5923')
    }
}