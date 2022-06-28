import { Page, Locator } from '@playwright/test';

export class MainPage {
    readonly page: Page;
    readonly callDocButton: Locator;

    constructor (page: Page) {
        this.page = page;
        this.callDocButton = page.locator('#id-1-13')
    }

    async visit() {
        await this.page.goto('https://automation.altibb.com/');
    }
}