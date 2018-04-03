import { CreateConversionTrackerModalElements } from './elements/createConversionTrackerModalElements'
import { promise as wdpromise } from 'selenium-webdriver';
import { browser, ExpectedConditions } from "protractor";
import {slowType} from "../helpers/slowType";


export class CreateConversionTrackerModal {

    createConversionTrackerModalElements = new CreateConversionTrackerModalElements();

    verifyModalAppeared(): wdpromise.Promise<{}> {
        return browser.wait(ExpectedConditions.visibilityOf(this.createConversionTrackerModalElements.container),
            browser.params['timeout']['general'], 'Conversion tracker page didn\'t appear');
    }

    verifyModalDisappeared(): wdpromise.Promise<{}> {
        return browser.wait(ExpectedConditions.stalenessOf(this.createConversionTrackerModalElements.container),
            browser.params['timeout']['general'], 'Conversion tracker page didn\'t disappear');
    }

    typeAdvertiserName(name: string): void {
        //return this.createConversionTrackerModalElements.advertiserField.sendKeys(name); //TODO autocomplete appears only if slow typing
        return slowType(this.createConversionTrackerModalElements.advertiserField, name, 500);
    }

    chooseAdvertiser(index: number): wdpromise.Promise<void> {
        browser.wait(ExpectedConditions.visibilityOf(this.createConversionTrackerModalElements.advertiserAutocomplete.first()),
            browser.params['timeout']['general'], 'Autocomplete with advertisers didn\'t appear');
        return this.createConversionTrackerModalElements.advertiserAutocomplete.get(index).click();
    }

    typeTrackerName(name: string): wdpromise.Promise<void> {
        return this.createConversionTrackerModalElements.trackerNameField.sendKeys(name);
    }

    selectTypeByIndex(index: number): wdpromise.Promise<void> {
        this.createConversionTrackerModalElements.typeSelectorButton.click();
        browser.wait(ExpectedConditions.visibilityOf(this.createConversionTrackerModalElements.typeSelectorOptions.first()),
            browser.params['timeout']['general'], 'Autocomplete with types didn\'t appear');
        return this.createConversionTrackerModalElements.typeSelectorOptions.get(index).click();
    }

    selectAttributionWindowByIndex(index: number): wdpromise.Promise<void> {
        this.createConversionTrackerModalElements.attributionWindowSelectorButton.click();
        browser.wait(ExpectedConditions.visibilityOf(this.createConversionTrackerModalElements.attributionWindowSelectorOptions.first()),
            browser.params['timeout']['general'], 'Autocomplete with types didn\'t appear');
        return this.createConversionTrackerModalElements.attributionWindowSelectorOptions.get(index).click();
    }

    clickCreateTracker(): wdpromise.Promise<void> {
        return this.createConversionTrackerModalElements.createButton.click();
    }

    isCreateButtonEnabled(): wdpromise.Promise<boolean> {
        return this.createConversionTrackerModalElements.createButton.isEnabled();
    }

}