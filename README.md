# Test Automation for LiveIntent #
Web UI tests in BDD style using page object pattern


### Based on ###

* [TypeScript 2.0](https://www.typescriptlang.org/) - Typed superset of JavaScript
* [Protractor](http://www.protractortest.org/) - Test framework for e2e web tests based on [Selenium Web Driver](http://www.seleniumhq.org/projects/webdriver/)
* [Mocha](https://mochajs.org/) - Test framework with TDD/BDD style
* [Chai](http://chaijs.com/) - Assertion library
* [Allure](http://allure.qatools.ru/) - Nice reports :)


### Prerequisites ###

* [JDK](http://www.oracle.com/technetwork/java/javase/downloads/index.html)
* [Node.js](https://nodejs.org/en/)
* [NPM](https://www.npmjs.com/)
* [Chrome](https://www.google.com/intl/en/chrome/browser/desktop/index.html) or [any browser](https://github.com/angular/protractor/blob/master/docs/browser-support.md) installed in default location

### Set up ###

First, install all dependencies using running [NPM](https://www.npmjs.com/) from root folder as current working directory

```
#!bash

npm install
```

And install driver for browsers

```
#!bash

node node_modules/protractor/bin/webdriver-manager update

```


### Running tests ###

Run the following command from project root (e2e) with path to **.js** config file

```
#!bash
#to run the suite
npm test target/config/sample.config.js -- --suite=<your suite name>

#to run single test
npm test target/config/sample.config.js -- --mochaOpts.grep="<test name>"
```


### Framework layout ###

protractor-liveintent-test/<br />
```├── config``` - - - - - - - - - config files with different environments/suites/browsers<br />
```├── extensions``` - - - - - - - - - browser extension files (*adblokers for now*)<br />
```├── helpers``` - - - - - - - - - files with helper functions (file read/write/convert, reporting etc)<br />
```├── pages``` - - - - - - - - - single page or area representations ([Page Object Pattern] (http://docs.seleniumhq.org/docs/06_test_design_considerations.jsp#page-object-design-pattern))<br />
```│   ├── elements``` - - - - - - - - - folders for single page/area web elements and their locators<br />
```├── specs``` - - - - - - - - - folder for test script files<br />
```│   ├── trackers``` - - - - - - - - - test scripts related to stage/prod monitoring story<br />
```└── steps``` - - - - - - - - - step files with user action than assertion wrapped with reporting (some sort of [BDD](https://en.wikipedia.org/wiki/Behavior-driven_development))<br />
