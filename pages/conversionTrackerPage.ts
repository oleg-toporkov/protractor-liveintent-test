import { ConversionTrackerPageElements } from './elements/conversionTrackerPageElements'
import { promise as wdpromise } from 'selenium-webdriver';
import {browser, ExpectedConditions, by} from "protractor";


export class ConversionTrackerPage {

    conversionTrackerPageElements = new ConversionTrackerPageElements();

    verifyPageAppeared(): wdpromise.Promise<{}> {
        return browser.wait(ExpectedConditions.visibilityOf(this.conversionTrackerPageElements.container),
            browser.params['timeout']['general'], 'Conversion tracker page didn\'t appear');
    }

    clickCreateTracker(): wdpromise.Promise<void> {
        return this.conversionTrackerPageElements.createButton.click();
    }

    verifyTrackerAppeared(name: string): wdpromise.Promise<{}> {
        return browser.wait(ExpectedConditions.visibilityOf(
            this.conversionTrackerPageElements.trackerNameCells.all(by.xpath(`.//*[text()="${name}"]`)).first()),
            browser.params['timeout']['general'], 'Conversion tracker didn\'t appear in table');
    }

    clickOpenTrackerDetails(index: number): wdpromise.Promise<void> {
        browser.actions().mouseMove(this.conversionTrackerPageElements.trackerNameCells.get(index)).perform();
        return this.conversionTrackerPageElements.trackerNameCells.get(index).element(
            this.conversionTrackerPageElements.trackerNameMoreDetailsLinkLocator).click();
    }
}