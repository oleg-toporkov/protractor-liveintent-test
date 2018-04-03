import { LoginPage } from '../../pages/loginPage'
import { browser } from 'protractor';
let expect = require('chai').expect;

describe('login', () => {

    let loginPage = new LoginPage();

    it('sample', () => {
        loginPage.get();
        browser.getTitle().then( (title) => {
            expect(title, 'title is correct').to.be.equal('LiveIntent Platform');
        });


    });

});
