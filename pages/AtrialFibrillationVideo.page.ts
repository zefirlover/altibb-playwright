import { Page, Locator } from '@playwright/test';

export class AtrialFibrillationVideoPage {
    readonly page: Page;
    readonly whatsAppLink: Locator;
    readonly shareButton: Locator;
    readonly shareList: Locator;
    readonly facebookLink: Locator;

    constructor(page: Page) {
        this.page = page
        this.whatsAppLink = page.locator('.video-container a[href*="whatsapp"]');
        this.shareButton = page.locator('.video-container img[alt="Share"]');
        this.shareList = page.locator('.video-container #toggle-menu');
        this.facebookLink = page.locator('.video-container a[href*="facebook"]')
    }

    async visit() {
        await this.page.goto('https://automation.altibb.com//فيديوهات-طبية/الامراض-المعدية/الرجفان-الاذيني-القلب-560');
    }
}