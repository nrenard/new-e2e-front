 // taken from http://nightwatchjs.org/guide
module.exports = {
  'Demo test Google' : function (browser) {
    console.log('aaeeo')
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', 'nightwatch')
      .pause(1000)
      .end();
  }
};