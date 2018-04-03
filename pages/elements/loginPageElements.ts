import {ElementFinder, element, by} from "protractor";

export class LoginPageElements {
    nameField: ElementFinder = element(by.xpath('//input[@name="username"]'));

    passwordField: ElementFinder = element(by.xpath('//input[@name="password"]'));

    loginButton: ElementFinder = element(by.xpath('//button[@type="submit"]'));
}