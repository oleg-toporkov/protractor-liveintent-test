import {Config} from "protractor";

export let config: Config = {

    baseUrl: 'https://platform.liveintent.com/login',

    framework: 'mocha',

    allScriptsTimeout: 120000, //120 seconds wait for angular

    suites: {
        '': '../spec/trackers'
    },

    mochaOpts: {
        ui: 'bdd',
        timeout: 120 * 1000
    }
};