import { Page, Locator } from '@playwright/test';

export class AtrialFibrillationVideoPage {
    readonly page: Page;
    readonly whatsAppLink: Locator;

    constructor(page: Page) {
        this.page = page
        this.whatsAppLink = page.locator('section[class="video-container"] a[href*="whatsapp"]');
    }

    async visit() {
        await this.page.goto('https://automation.altibb.com//فيديوهات-طبية/الامراض-المعدية/الرجفان-الاذيني-القلب-560');
    }
}