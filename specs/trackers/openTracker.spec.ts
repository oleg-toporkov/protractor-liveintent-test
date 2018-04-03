import { LoginPageSteps, HomePageSteps, ConversionTrackerPageSteps, ConversionTrackerDetailsModalSteps,
    feature, story} from '../facade'

describe('Open tracker', () => {

    let loginPageSteps = new LoginPageSteps();
    let homePageSteps = new HomePageSteps();
    let conversionTrackerPageSteps = new ConversionTrackerPageSteps();
    let conversionTrackerDetailsModalSteps = new ConversionTrackerDetailsModalSteps();

    beforeEach( () => {
        feature('Open Tracker');
        //TODO create some special trackers here to use in tests
    });

    it('Live connect tracker with 30 days attribution', () => {
        story('Create tracker types and attributions');

        loginPageSteps.openLiveIntentPlatform();
        homePageSteps.clickConversationTrackers();

        conversionTrackerPageSteps.verifyPageAppeared();
        conversionTrackerPageSteps.openTrackerDetails(0);


        conversionTrackerDetailsModalSteps.verifyModalAppeared();
        conversionTrackerDetailsModalSteps.verifyTitle('Conversion Tracker Details');
        //TODO move on here with all fields check
    });

});
