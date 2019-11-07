 
exports.config = {
    directConnect: true, 
    /*baseUrl: 'C:/Users/Mama Inday/Desktop/study-planner/login.html',
    onPrepare: function(){
        browser.resetUrl = 'file://';
    },*/
    capabilities:{
        'browserName': 'chrome',
        'chromeOptions': {
            'args': [
                "--allow-running-insecure-content", "--disable-browser-side-navigation"
            ]
        }
    },
    framework: 'jasmine2',
    specs: ['test.js']
};