import { Page, Locator } from '@playwright/test';

export class MedicalArticlesPage {
    readonly page: Page;
    readonly firstArticleLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstArticleLink = page.locator('article:nth-child(4) a.id-32-1.d-block');
    }

    async visit() {
        await this.page.goto('https://automation.altibb.com/%D9%85%D9%82%D8%A7%D9%84%D8%A7%D8%AA-%D8%B7%D8%A8%D9%8A%D8%A9');
    }
}