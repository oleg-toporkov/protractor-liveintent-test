import { step } from '../helpers/reportHelper';
import { HomePage } from '../pages/homePage';

let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);


export class HomePageSteps {

    homePage = new HomePage();

    /**
     * Click conversion trackers tab
     */
    clickConversationTrackers(): void {
        step('Open conversion trackers', () => {
            this.homePage.clickConversionTrackersTab();
        });
    }

}