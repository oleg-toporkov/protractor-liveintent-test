import {ElementFinder, element, by} from "protractor";

export class HomePageElements {

    conversionTrackersTab: ElementFinder = element(by.xpath('//a[contains(@routerlink, "conversion-trackers")]'));

}