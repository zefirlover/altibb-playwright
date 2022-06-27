import { Page, Locator } from '@playwright/test';

export class MedicalNewsPage {
    readonly page: Page;
    readonly happinesArticleLink: Locator;
    readonly talkToDocLink: Locator;
    readonly titleInput: Locator;

    constructor(page: Page) {
        this.page = page;
        this.happinesArticleLink = page.locator('//h2[@class="news-article-title"]/parent::a[@href="/اخبار-طبية/علم-السموم/تغيرات-يومية-تجعلك-سعيدا-7196"]');
        this.talkToDocLink = page.locator('a[href="/اسئلة-طبية/اسأل-الطبي/"]');
        this.titleInput = page.locator('#askquestionform-title');
    }
}