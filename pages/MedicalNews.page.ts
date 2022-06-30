import { Page, Locator } from '@playwright/test';

export class MedicalNewsPage {
    readonly page: Page;
    readonly happinesArticleLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.happinesArticleLink = page.locator('article:nth-child(2) a.id-31-1.d-block');
    }

    async visit() {
        await this.page.goto('https://automation.altibb.com/%D8%A7%D8%AE%D8%A8%D8%A7%D8%B1-%D8%B7%D8%A8%D9%8A%D8%A9');
    }
}