import {ElementFinder, element, by, ElementArrayFinder} from "protractor";

export class CreateConversionTrackerModalElements {

    container: ElementFinder = element(by.tagName('conversion-tracker-create'));

    title: ElementFinder = this.container.element(by.tagName('h4'));

    advertiserField: ElementFinder = this.container.element(by.xpath('.//input[contains(@placeholder, "advertiser name")]'));

    advertiserAutocomplete: ElementArrayFinder = this.container.element(by.tagName('searchable-select-single')).all(by.xpath('.//dropdown//a'));

    trackerNameField: ElementFinder = this.container.element(by.xpath('.//input[@name="name"]'));

    typeSelector: ElementFinder = this.container.element(by.xpath('//select-dropdown[@name="type"]'));

    typeSelectorButton: ElementFinder = this.typeSelector.element(by.xpath('.//button[@class="dropdown regular"]'));

    typeSelectorOptions: ElementArrayFinder = this.typeSelector.element(by.tagName('dropdown')).all(by.tagName('span'));

    attributionWindowSelector: ElementFinder = this.container.element(by.xpath('//select-dropdown[@name="expiration"]')); //TODO add custom component for such dropdown

    attributionWindowSelectorButton: ElementFinder = this.attributionWindowSelector.element(by.xpath('.//button[@class="dropdown regular"]'));

    attributionWindowSelectorOptions: ElementArrayFinder = this.attributionWindowSelector.element(by.tagName('dropdown')).all(by.tagName('li'));

    createButton = this.container.element(by.xpath('.//button[@class="button--primary"]'));

}