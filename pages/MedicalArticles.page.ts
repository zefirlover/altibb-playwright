import { Page, Locator } from '@playwright/test';

export class MedicalArticlesPage {
    readonly page: Page;
    readonly firstArticleLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstArticleLink = page.locator('//h2[@class="article-title"]/parent::a[@href="/مقالات-طبية/امراض-باطنية/bjcbsdcdscds-5923"]');
    }

    async visit() {
        await this.page.goto('https://automation.altibb.com//مقالات-طبية');
    }
}