import {HomePageElements} from './elements/homePageElements'
import {promise as wdpromise} from 'selenium-webdriver';

import {browser} from "protractor";

export class HomePage {

    homePageElements = new HomePageElements();

    clickConversionTrackersTab(): wdpromise.Promise<void> {
        return this.homePageElements.conversionTrackersTab.click();
    }

}