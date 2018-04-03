import {LoginPageElements} from 'elements/loginPageElements'
import {promise as wdpromise} from 'selenium-webdriver';

import {browser} from "protractor";

export class LoginPage {

    loginPageElements = new LoginPageElements();

    get(): any {
        return browser.get(browser.baseUrl);
    }

    typeName(name: string): wdpromise.Promise<void> {
        return this.loginPageElements.nameField.sendKeys(name);
    }

    typePassword(password: string): wdpromise.Promise<void> {
        return this.loginPageElements.passwordField.sendKeys(password);
    }

    clickLogin(): wdpromise.Promise<void> {
        return this.loginPageElements.loginButton.click();
    }

}