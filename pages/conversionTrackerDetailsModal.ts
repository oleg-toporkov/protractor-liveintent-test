import { ConversionTrackerDetailsModalElements } from './elements/conversionTrackerDetailsModalElements'
import { promise as wdpromise } from 'selenium-webdriver';
import { browser, ExpectedConditions } from "protractor";


export class ConversionTrackerDetailsModal {

    conversionTrackerDetailsModalElements = new ConversionTrackerDetailsModalElements();

    verifyModalAppeared(): wdpromise.Promise<{}> {
        return browser.wait(ExpectedConditions.visibilityOf(this.conversionTrackerDetailsModalElements.container),
            browser.params['timeout']['general'], 'Conversion tracker detail didn\'t appear');
    }

    getTitle(): wdpromise.Promise<string> {
        return this.conversionTrackerDetailsModalElements.title.getText();
    }

}