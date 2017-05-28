/**
 * Created by Raseel Mohamed on 5/26/17.
 */
module.exports = {
    'Login to Application:' : function (browser) {
        browser
            .url('http://localhost/login')
            .waitForElementVisible('button.btn-login', 10000)
            .click('button.btn-info.btn-login')
            .waitForElementVisible('input.auth0-lock-input[type="email"]', 10000)
            .setValue('input[name="email"]', 'myname@misite.com')
            .setValue('input[name="password"]', 'Password123')
            .click('span.auth0-label-submit')
            .waitForElementVisible('div#inside_page', 10000)


    },
    'Expect to see the First Expectation': function (browser) {
        browser
            .waitForElementVisible('div#patience', 10000)
            .assert.containsText('div#patience' , 'Patience')
    },
    'Expect to see the Second Expectation': function (browser) {
        browser
            .assert.containsText('div#treat' , 'Treats')
    }
//One failure kills all the tests in here if you are using asserts
};
