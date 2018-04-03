import { LoginPageSteps, HomePageSteps, ConversionTrackerPageSteps, CreateConversionTrackerModalSteps,
    feature, story, getUuid} from '../facade'

describe('Create tracker', () => {

    let loginPageSteps = new LoginPageSteps();
    let homePageSteps = new HomePageSteps();
    let conversionTrackerPageSteps = new ConversionTrackerPageSteps();
    let createConversionTrackerModalSteps = new CreateConversionTrackerModalSteps();

    beforeEach( () => {
        feature('Create Tracker');
    });

    it('Live connect tracker with 30 days attribution', () => {
        story('Create tracker types and attributions');

        let trackerName: string = `Tracker ${getUuid()}`;

        loginPageSteps.openLiveIntentPlatform();
        homePageSteps.clickConversationTrackers();

        conversionTrackerPageSteps.verifyPageAppeared();
        conversionTrackerPageSteps.clickCreateTracker();

        createConversionTrackerModalSteps.verifyModalAppeared();
        createConversionTrackerModalSteps.typeAdvertiserName('4123');
        createConversionTrackerModalSteps.chooseAdvertiserName(0); //TODO better use names instead of indexes
        createConversionTrackerModalSteps.typeTrackerName(trackerName);
        createConversionTrackerModalSteps.selectTrackerType(0);
        createConversionTrackerModalSteps.selectAttributionWindow(0);
        createConversionTrackerModalSteps.clickCreateTracker();
        createConversionTrackerModalSteps.verifyModalDisappeared();

        conversionTrackerPageSteps.verifyTracker(trackerName);
    });

    it('Image pixel tracker with 1 day attribution', () => {
        story('Create tracker types and attributions');

        let trackerName: string = `Tracker ${getUuid()}`;

        loginPageSteps.openLiveIntentPlatform();
        homePageSteps.clickConversationTrackers();

        conversionTrackerPageSteps.verifyPageAppeared();
        conversionTrackerPageSteps.clickCreateTracker();

        createConversionTrackerModalSteps.verifyModalAppeared();
        createConversionTrackerModalSteps.typeAdvertiserName('4123');
        createConversionTrackerModalSteps.chooseAdvertiserName(0);
        createConversionTrackerModalSteps.typeTrackerName(trackerName);
        createConversionTrackerModalSteps.selectTrackerType(1);
        createConversionTrackerModalSteps.selectAttributionWindow(4);
        createConversionTrackerModalSteps.clickCreateTracker();
        createConversionTrackerModalSteps.verifyModalDisappeared();

        conversionTrackerPageSteps.verifyTracker(trackerName);
    });

    //TODO and so on with different combinations of type and attribution

    it('Tracker with one letter name', () => { //TODO need to cleanup if name should be unique
        story('Tracker naming convention');

        let trackerName: string = 'A';

        loginPageSteps.openLiveIntentPlatform();
        homePageSteps.clickConversationTrackers();

        conversionTrackerPageSteps.verifyPageAppeared();
        conversionTrackerPageSteps.clickCreateTracker();

        createConversionTrackerModalSteps.verifyModalAppeared();
        createConversionTrackerModalSteps.typeAdvertiserName('4123');
        createConversionTrackerModalSteps.chooseAdvertiserName(0);
        createConversionTrackerModalSteps.typeTrackerName(trackerName);
        createConversionTrackerModalSteps.selectTrackerType(0);
        createConversionTrackerModalSteps.selectAttributionWindow(0);
        createConversionTrackerModalSteps.clickCreateTracker();
        createConversionTrackerModalSteps.verifyModalDisappeared();

        conversionTrackerPageSteps.verifyTracker(trackerName);
    });

    it('Tracker with special characters name', () => {
        story('Tracker naming convention');

        let specialCharacters =
            ['±', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '=', '+', '.', ',', ';', ':', '|', '?', '/', '~'];

        for (let char of specialCharacters) {
            let trackerName: string = `${char} ${getUuid()}`;

            loginPageSteps.openLiveIntentPlatform();
            homePageSteps.clickConversationTrackers();

            conversionTrackerPageSteps.verifyPageAppeared();
            conversionTrackerPageSteps.clickCreateTracker();

            createConversionTrackerModalSteps.verifyModalAppeared();
            createConversionTrackerModalSteps.typeAdvertiserName('4123');
            createConversionTrackerModalSteps.chooseAdvertiserName(0);
            createConversionTrackerModalSteps.typeTrackerName(trackerName);
            createConversionTrackerModalSteps.selectTrackerType(0);
            createConversionTrackerModalSteps.selectAttributionWindow(0);
            createConversionTrackerModalSteps.clickCreateTracker();
            createConversionTrackerModalSteps.verifyModalDisappeared();

            conversionTrackerPageSteps.verifyTracker(trackerName);
        }
    });

    //TODO add more cases regarding to naming format (if there any restrictions, rules etc.)

    it('Tracker with empty name', () => {
        story('Tracker naming convention');

        loginPageSteps.openLiveIntentPlatform();
        homePageSteps.clickConversationTrackers();

        conversionTrackerPageSteps.verifyPageAppeared();
        conversionTrackerPageSteps.clickCreateTracker();

        createConversionTrackerModalSteps.verifyModalAppeared();
        createConversionTrackerModalSteps.typeAdvertiserName('4123');
        createConversionTrackerModalSteps.chooseAdvertiserName(0);
        createConversionTrackerModalSteps.verifyCreateButtonDisabled();
    });

    it('Tracker with empty advertiser', () => {
        story('Tracker advertisers');

        let trackerName: string = `Tracker ${getUuid()}`;

        loginPageSteps.openLiveIntentPlatform();
        homePageSteps.clickConversationTrackers();

        conversionTrackerPageSteps.verifyPageAppeared();
        conversionTrackerPageSteps.clickCreateTracker();

        createConversionTrackerModalSteps.verifyModalAppeared();
        createConversionTrackerModalSteps.typeTrackerName(trackerName);
        createConversionTrackerModalSteps.verifyCreateButtonDisabled();
    });

    afterEach( () => {
        //TODO better to cleanup here
    });

});
