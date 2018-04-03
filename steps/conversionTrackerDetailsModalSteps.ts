import { step } from '../helpers/reportHelper';
import { ConversionTrackerDetailsModal } from '../pages/conversionTrackerDetailsModal';

let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

export let expect = chai.expect;

export class ConversionTrackerDetailsModalSteps {

    conversionTrackerDetailsModal = new ConversionTrackerDetailsModal();

    /**
     * Verify conversion trackers details modal appeared
     */
    verifyModalAppeared(): void {
        step('Verify conversion trackers details modal appeared', () => {
            this.conversionTrackerDetailsModal.verifyModalAppeared();
        });
    }

    /**
     * Verify conversion trackers details modal title
     */
    verifyTitle(title: string): void {
        step('Verify conversion trackers details modal title', () => {
            expect(this.conversionTrackerDetailsModal.getTitle()).to.be.eventually.equal(title);
        });
    }

}