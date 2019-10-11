var app_firebase = {};
(function(){
	// initialize firebase
	const firebaseConfig = {
    apiKey: "AIzaSyAYkKT_7D8Q8Xc2fMUxGnlEaUMCTmkZvTY",
    authDomain: "cmsc166v2.firebaseapp.com",
    databaseURL: "https://cmsc166v2.firebaseio.com",
    projectId: "cmsc166v2",
    storageBucket: "cmsc166v2.appspot.com",
    messagingSenderId: "360366352461",
    appId: "1:360366352461:web:5d16f66cc1dfbcfed3d404",
    measurementId: "G-4MGKXGBZ31"
  };
  	firebase.initializeApp(firebaseConfig);	

  	app_firebase = firebase;
})()
