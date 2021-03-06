import {Config} from "protractor";

process.env['multi'] = 'xunit=xunit_result-' + process.pid + '.xml spec=- mocha-allure-reporter=-'; //add reporters here

export let config: Config = {

    baseUrl: 'https://platform.liveintent.com/campaign-manager',

    framework: 'mocha',

    allScriptsTimeout: 120000, //120 seconds wait for angular

    capabilities: {
        browserName: 'chrome'
    },

    suites: {
        trackers: '../specs/trackers/*.spec.js'
    },

    mochaOpts: {
        ui: 'bdd',
        reporter: 'mocha-multi',
        timeout: 360 * 1000 // 360 sec max test duration
    },

    params: {
        login: {
            user:     process.env['login'] || 'add user name here',
            password: process.env['password'] || 'add password here'
        },

        timeout: {
            animation: 500,
            general: 30 * 1000 //30 seconds
        }
    }
};