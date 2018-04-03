import {ElementFinder, element, by, ElementArrayFinder, Locator} from "protractor";

export class ConversionTrackerPageElements {

    container: ElementFinder = element(by.tagName('conversion-tracker'));

    title: ElementFinder = this.container.element(by.tagName('h1'));

    createButton: ElementFinder = this.container.element(by.xpath('.//button[@class="button--create"]'));

    trackersTable: ElementFinder = this.container.element(by.tagName('async-table')).element(by.tagName('table'));

    trackerNameCells: ElementArrayFinder = this.trackersTable.all(by.tagName('td'));

    trackerNameMoreDetailsLinkLocator: Locator = by.xpath('.//a[text()="View Details"]');

}