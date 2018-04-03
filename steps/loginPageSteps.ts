import { browser } from 'protractor';
import { step } from '../helpers/reportHelper';
import { LoginPage } from '../pages/loginPage';

let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

export let expect = chai.expect;


export class LoginPageSteps {

    loginPage = new LoginPage();

    /**
     * Login with credentials from config and verify tab title
     */
    private performLogin(): void {
        step('Login to LiveIntent Platform with correct credentials', () => {
            this.loginPage.typeName(browser.params['login']['user']);
            this.loginPage.typePassword(browser.params['login']['password']);
            this.loginPage.clickLogin();

            expect(browser.getTitle(), 'Browser title didn\'t contain "LiveIntent Platform"').to.eventually.contain('LiveIntent Platform');
            expect(browser.getCurrentUrl(), 'Browser URL didn\'t contain "campaign-manager"').to.eventually.contain('campaign-manager');
        });
    }

    /**
     * Open LiveIntent Platform and perform login if needed
     */
    openLiveIntentPlatform(): void {
        step('Open LiveIntent Platform', () => {
            this.loginPage.get();
            browser.manage().window().maximize();

            browser.getCurrentUrl().then( (url) => {
                if (url.includes('login')) {
                    this.performLogin();
                }
            });
        });
    }

}