
describe("study planner automation", function(){
    //browser.ignoreSynchronization=true; 
    browser.manage().timeouts().implicitlyWait(50000);
    it("Go to the Loginpage", function(){
        browser.get("C:/Users/Mama Inday/Desktop/study-planner/index.html");
         //browser.get("https://cmsc166v2.firebaseapp.com/");
        console.log("\tLogin page opened.");
        browser.sleep(1000);
    }); 
    it("Go to admin page", function(){
        var admin = element(by.id("admin-button"));
        var test1 = element(by.id("cs137"));
        var test2 = element(by.id("cs125"));
        browser.sleep(700);
        admin.click();
        console.log("\tAdmin page opened.");
        browser.sleep(1500);
        browser.actions().mouseMove(element(by.id("cs192"))).perform(); 
        browser.sleep(700);
        browser.actions().mouseMove(element(by.id("cs125"))).perform(); 
        browser.sleep(700);
        test1.click();
        browser.sleep(3300);
        browser.navigate().back(); 
        browser.sleep(1000);
        browser.actions().mouseMove(element(by.id("nstp"))).perform(); 
        browser.sleep(900);
        browser.executeScript('window.scrollTo(0,0)');
        browser.sleep(900);
        browser.actions().mouseMove(element(by.id("cs110"))).perform(); 
        browser.sleep(700);
        browser.actions().mouseMove(element(by.id("cs192"))).perform(); 
        browser.sleep(700);
        test2.click();
        browser.sleep(3300);
        browser.navigate().back();
        browser.sleep(1200);
        browser.navigate().back();
        browser.sleep(1700);
        console.log("\tReturned to login");  
        //var login = element(by.className("firebaseui-idp-button"));
        //login.click();
    });
    /*it("Login", function(){ 
        var login = element(by.className("firebaseui-idp-button"));
        login.click().then(function () { 
            console.log("\tLogging in..."); 
        }); 
        let windowHandles = browser.getAllWindowHandles();
        let parentHandle, emailHandle;

        windowHandles.then(function(handles){
            parentHandle = handles[0];
            emailHandle = handles[1];
             
            browser.switchTo().window(emailHandle).then(function(){  
               var email = element.all(by.tagName('input')).get(0); 
               email.sendKeys('jayfr.dc@gmail.com');
               console.log("\temail entered.");
               
               var button = element.all(by.css('div[role=button]')).get(0); 
                button.click().then(function () { 
                    browser.sleep(3000); 
                    browser.getTitle().then(function(txt){
                        console.log("\tpage title: "+txt);
                    }); 
                    var password = element.all(by.tagName('input')).get(1); 
                    password.sendKeys('Tempus_Mutatur07');
                    
                    var psbutton = element.all(by.css('div[role=button]')).get(1); 
                    psbutton.click().then(function () { 
                        console.log("\tnext button clicked"); 
                        browser.sleep(7000);
                    });  
                });
            }); 
             
                
            browser.switchTo().window(parentHandle).then(function(){
                console.log("\tbrowser logged in to mainpage"); 
                browser.sleep(2000);
            }); 
        }); 
        //browser.close();
    }); 
    */
    it("Main test(to edit)", function(){
        browser.get("C:/Users/Mama Inday/Desktop/study-planner/main.html");
        browser.sleep(2100);
        
       /* browser.executeScript('window.scrollTo(0,document.body.scrollHeight)').then(function(){ 
            browser.sleep(1000);
            browser.executeScript('window.scrollTo(0,0)');
            browser.sleep(700);
        });*/  
       /*browser.actions().mouseMove(element(by.id("CMSC-56"))).perform();  
        browser.sleep(700);
        browser.actions().mouseMove(element(by.id("NSTP-2"))).perform(); 
        browser.sleep(700);
        browser.actions().mouseMove(element(by.id("FREE-ELECTIVE"))).perform(); 
        browser.sleep(700);
        browser.actions().mouseMove(element(by.id("NSTP-2"))).perform(); 
        browser.sleep(700);
        browser.actions().mouseMove(element(by.id("CMSC-56"))).perform(); 
        browser.sleep(700);
        browser.actions().mouseMove(element(by.id("avatar"))).perform(); 
        browser.sleep(700); */
        browser.get("C:/Users/Mama Inday/Desktop/study-planner/index.html");
        browser.sleep(2000);
        var login = element(by.className("firebaseui-idp-button"));
        login.click();
        browser.sleep(2000);
    });
    /*it("logout", function(){
        //var button = element(by.id("logout"));
        var button = element.all(by.tagName('button')).get(0); 
        button.click().then(function(){
            console.log("logged out");
        });
        browser.sleep(7000);
        browser.close();
    });*/
    
});