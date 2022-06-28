import { Page, Locator } from '@playwright/test';
import { MainPage } from './Main.page';

export class Header extends MainPage {
    readonly page: Page;
    readonly discoverMedicalDrop: Locator;
    readonly medicalVideosLink: Locator;
    readonly medicalNewsLink: Locator;
    readonly medicalArticlesLink: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.discoverMedicalDrop = page.locator('.white-header *> a[data-toggle="dropdown"]');
        this.medicalVideosLink = page.locator('.white-header *> a[href="/فيديوهات-طبية"]');
        this.medicalNewsLink = page.locator('.white-header *> a[href="/اخبار-طبية"]');
        this.medicalArticlesLink = page.locator('.white-header *> a[href="/مقالات-طبية"]')
    }
}