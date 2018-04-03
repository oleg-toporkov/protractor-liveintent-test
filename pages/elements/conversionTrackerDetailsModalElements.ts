import {ElementFinder, element, by} from "protractor";

export class ConversionTrackerDetailsModalElements {

    container: ElementFinder = element(by.tagName('conversion-tracker-details'));

    title: ElementFinder = this.container.all(by.tagName('h4')).first(); //TODO sensitive locator

}