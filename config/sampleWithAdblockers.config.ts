import {Config} from "protractor";
import {getFileAsBase64} from '../helpers/fileHelper';

process.env['multi'] = 'xunit=xunit_result-' + process.pid + '.xml spec=- mocha-allure-reporter=-'; //add reporters here

export let config: Config = {

    baseUrl: 'https://platform.liveintent.com/campaign-manager',

    framework: 'mocha',

    allScriptsTimeout: 120000, //120 seconds wait for angular

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
            general: 120000
        }
    },

    capabilities: {
        browserName: 'chrome',

        'chromeOptions': {
            'extensions': [getFileAsBase64('../../extensions/Adblock-Plus_v1.12.4.crx'),
                           getFileAsBase64('../../extensions/AdBlock_v3.8.5.crx'),
                           getFileAsBase64('../../extensions/Adblock-Pro_v4.1.crx'),
                           getFileAsBase64('../../extensions/Ghostery_v7.1.2.3.crx'),
                           getFileAsBase64('../../extensions/uBlock-Pro_v0.0.2.crx')], //add here more extensions to load
        }
    }
};