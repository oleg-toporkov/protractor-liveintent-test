import { step } from '../helpers/reportHelper';
import { CreateConversionTrackerModal } from '../pages/createConversionTrackerModal';

let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

export let expect = chai.expect;

export class CreateConversionTrackerModalSteps {

    createConversionTrackerModal = new CreateConversionTrackerModal();

    /**
     * Verify conversion trackers appeared
     */
    verifyModalAppeared(): void {
        step('Verify create conversion trackers modal appeared', () => {
            this.createConversionTrackerModal.verifyModalAppeared();
        });
    }

    /**
     * Verify conversion trackers disappeared
     */
    verifyModalDisappeared(): void {
        step('Verify create conversion trackers modal disappeared', () => {
            this.createConversionTrackerModal.verifyModalDisappeared();
        });
    }

    /**
     * Type advertiser name
     * @param name
     */
    typeAdvertiserName(name: string): void {
        step('Type advertiser name', () => {
            this.createConversionTrackerModal.typeAdvertiserName(name);
        });
    }

    /**
     * Choose advertiser in autocomplete list
     * @param index zero-based index of advertiser list
     */
    chooseAdvertiserName(index: number): void {
        step('Choose advertiser name from autocomplete', () => {
            this.createConversionTrackerModal.chooseAdvertiser(index);
        });
    }

    /**
     * Type tracker name
     * @param name tracker name
     */
    typeTrackerName(name: string): void {
        step('Type tracker name', () => {
            this.createConversionTrackerModal.typeTrackerName(name);
        });
    }

    /**
     * Select tracker type
     * @param index zero-based index
     */
    selectTrackerType(index: number): void {
        step('Select tracker type', () => {
            this.createConversionTrackerModal.selectTypeByIndex(index);
        });
    }

    /**
     * Select attribution window
     * @param index zero-based index
     */
    selectAttributionWindow(index: number): void {
        step('Select attribution window', () => {
            this.createConversionTrackerModal.selectAttributionWindowByIndex(index);
        });
    }

    /**
     * Click create tracker
     */
    clickCreateTracker(): void {
        step('Click create tracker', () => {
            this.createConversionTrackerModal.clickCreateTracker();
        });
    }

    /**
     * Verify create button disabled
     */
    verifyCreateButtonDisabled(): void {
        step('Verify create button disabled', () => {
            expect(this.createConversionTrackerModal.isCreateButtonEnabled()).to.be.eventually.false;
        });
    }

}