import { Page, Locator } from '@playwright/test';

export class MedicalNewsPage {
    readonly page: Page;
    readonly happinesArticleLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.happinesArticleLink = page.locator('//h2[@class="news-article-title"]/parent::a[@href="/اخبار-طبية/علم-السموم/تغيرات-يومية-تجعلك-سعيدا-7196"]');
    }

    async visit() {
        await this.page.goto('https://automation.altibb.com/اخبار-طبية');
    }
}