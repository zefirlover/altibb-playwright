import { Page, Locator } from '@playwright/test';

export class MedicalVideosPage {
    readonly page: Page;
    readonly heartVideo: Locator;

    constructor(page: Page) {
        this.page = page;
        this.heartVideo = page.locator('#right_bar_content > article:nth-child(4) > div.video-body.w-100 > a.id-33-1.d-block');
    }

    async visit() {
        await this.page.goto('https://automation.altibb.com/%D9%81%D9%8A%D8%AF%D9%8A%D9%88%D9%87%D8%A7%D8%AA-%D8%B7%D8%A8%D9%8A%D8%A9');
    }
}