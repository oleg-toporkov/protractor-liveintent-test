import {Config} from "protractor";

process.env['multi'] = 'xunit=xunit_result-' + process.pid + '.xml spec=- mocha-allure-reporter=-'; //add reporters here

export let config: Config = {

    baseUrl: 'https://platform.liveintent.com/login',

    framework: 'mocha',

    allScriptsTimeout: 120000, //120 seconds wait for angular

    suites: {
        trackers: '../specs/trackers/*.spec.js'
    },

    mochaOpts: {
        ui: 'bdd',
        reporter: 'mocha-multi',
        timeout: 120 * 1000 // 120 sec max test duration
    },

    params: {
        login: {
            user:     process.env['sharepoint_login'] || 'add user name here',
            password: process.env['sharepoint_password'] || 'add password here'
        },

        timeout: {
            animation: 500,
            general: 120000
        }
    }
};