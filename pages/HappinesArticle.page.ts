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
        this.watchTheAnswerLink = page.locator('[href="/اسئلة-طبية/علم-السموم/انقطعت-من-تناول-مخدر-الحشيش-بعد-١٢-من-الاستعمال-498850"]');
        this.likeButton = page.locator('#dr-comments [href="/member/login"]');
        this.appointmentLink = page.locator('#daleel-appointment [href="/الدليل-الطبي/حجوزات"]');
        this.appointmentHeaderText = page.locator('.main-search-header');
    }

    async visit() {
        await this.page.goto('https://automation.altibb.com//اخبار-طبية/علم-السموم/تغيرات-يومية-تجعلك-سعيدا-7196');
    }
}