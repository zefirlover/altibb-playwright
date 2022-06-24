import { Page, Locator } from '@playwright/test';

export class MedicalVideosPage {
    readonly page: Page;
    readonly heartVideo: Locator;

    constructor(page: Page) {
        this.page = page;
        this.heartVideo = page.locator('//h2[@class="video-title"]/parent::a[@href="/فيديوهات-طبية/الامراض-المعدية/الرجفان-الاذيني-القلب-560"]');
    }

    async visit() {
        await this.page.goto('https://automation.altibb.com/فيديوهات-طبية');
    }
}