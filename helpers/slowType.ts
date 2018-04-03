import {browser, ElementFinder} from "protractor";

export function slowType(element: ElementFinder, str: string, delay: number): void {
    element.click();

    for (let char of str) {
        element.sendKeys(char);
        browser.sleep(delay);
    }
}