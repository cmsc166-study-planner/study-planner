 
exports.config = {
    //directConnect: true,  
    onPrepare: function(){
        browser.ignoreSynchronization = true;
        browser.resetUrl = 'file://';
    },
    capabilities:{
        'browserName': 'chrome',
        'chromeOptions': {
            'args': [
                "--allow-running-insecure-content", //"--disable-browser-side-navigation"
                "allow-file-access-from-files"
            ]
        }
    },
    framework: 'jasmine2',
    specs: ['uitest.js']
};