/**
 * Created by mohamedr2 on 5/26/17.
 */
var chromedriver = require('chromedriver');
module.exports = {

    before : function(done) {
        chromedriver.start();

        done();
    },

    after : function(done) {
        chromedriver.stop();

        done();
    }
};
