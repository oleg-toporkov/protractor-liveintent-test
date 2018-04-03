export { LoginPageSteps } from '../steps/loginPageSteps'
export { HomePageSteps } from '../steps/homePageSteps'
export { ConversionTrackerPageSteps } from '../steps/conversionTrackerPageSteps';
export { CreateConversionTrackerModalSteps } from '../steps/createConversionTrackerModalSteps';
export { ConversionTrackerDetailsModalSteps } from '../steps/conversionTrackerDetailsModalSteps';

export { getUuid } from '../helpers/randomHelper';


require('mocha-allure-reporter');
declare let allure: any;

export function feature(name: string): void {
    allure.feature(name);
}

export function story(name: string): void {
    allure.story(name);
}