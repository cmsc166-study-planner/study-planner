var app_firebase = {};
(function(){
	// initialize firebase
	var firebaseConfig = {
   		apiKey: "AIzaSyB5gl6AEdx9V6p91Vv-Q1JwLgXx1MDe5pU",
   	 	authDomain: "login-javascript-e5e24.firebaseapp.com",
    	databaseURL: "https://login-javascript-e5e24.firebaseio.com",
    	projectId: "login-javascript-e5e24",
    	storageBucket: "login-javascript-e5e24.appspot.com",
    	messagingSenderId: "768767598975",
    	appId: "1:768767598975:web:05f7d402e0292b7cdc3a4a",
    	measurementId: "G-EPGS5Y0QQ5"
 	};
  	firebase.initializeApp(firebaseConfig);	

  	app_firebase = firebase;
})()
