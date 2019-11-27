 
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
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    // baseURL: 'http://localhost:5000/',
    specs: ['uitest.js']
};