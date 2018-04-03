import { step } from '../helpers/reportHelper';
import { ConversionTrackerPage } from '../pages/conversionTrackerPage';

let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

export let expect = chai.expect;


export class ConversionTrackerPageSteps {

    conversionTrackerPage = new ConversionTrackerPage();

    /**
     * Verify conversion trackers appeared
     */
    verifyPageAppeared(): void {
        step('Verify conversion trackers appeared', () => {
            this.conversionTrackerPage.verifyPageAppeared();
        });
    }

    /**
     * Click create conversion tracker
     */
    clickCreateTracker(): void {
        step('Click create conversion tracker', () => {
            this.conversionTrackerPage.clickCreateTracker();
        });
    }

    /**
     * Verify tracker appears in table
     */
    verifyTracker(name: string): void {
        step('Verify tracker in table', () => {
            //TODO add catching error tooltips
            this.conversionTrackerPage.verifyTrackerAppeared(name);
        })
    }

    /**
     * Open tracker details from table
     */
    openTrackerDetails(index: number): void {
        step('Open tracker details', () => {
            this.conversionTrackerPage.clickOpenTrackerDetails(index);
        })
    }

}