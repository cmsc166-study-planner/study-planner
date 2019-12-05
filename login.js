(function() {
  // Initialize the FirebaseUI Widget using Firebase.

  database = firebase.database();
  
 
  
  var ui = new firebaseui.auth.AuthUI(firebase.auth());

ui.start('#firebaseui-auth-container', uiConfig);

  var uiConfig = {
  callbacks: {
    // signInSuccessWithAuthResult: function(authResult, redirectUrl) {
    // //   // User successfully signed in.
    // //   // Return type determines whether we continue the redirect automatically
    // //   // or whether we leave that to developer to handle.
    //   return true;
    // },
   
    uiShown: function() {
      document.getElementById('loader').style.display = 'none';
      var n = 1;
    }
  },
//   // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: 'popup',
  signInSuccessUrl: '/',
  signInOptions: [{
//     // Leave the lines as is for the providers you want to offer your users.
   provider:  firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    customParameters:{
      hd: 'up.edu.ph'
    },
  }
  ],
  callbacks:{
    signInSuccess: function(currentUser, credential, redirectUrl){
      // ref: 9.3:Firebase: Retrieving Data - Programming with Text
      const userId = currentUser.userId;
       var ref = database.ref('adminPeople');
        ref.on('value', gotData, errData);

        //  var data = {
        //   name:"admin1",
        //   uid: "q3Gsi1B86vNKvcww3CaSZuiYegS2"
        // }
        // ref.push(data);

        function gotData(data){
          console.log(data.val());
          var adminPeople = data.val();
          var keys = Object.keys(adminPeople);
          console.log(keys);
          for(var i = 0; i < keys.length; i++){
              var k = keys[i];
              var name = adminPeople[k].name;
              var uid = adminPeople[k].uid;
              var adminUID = "p3Gsi1B86vNKvcww3CaSZuiYegS2";
              // console.log(name, uid);
              if(uid == adminUID){
                window.location.assign('admin.html');
              }
              else
                window.location.assign('main.html');
          }
        }
    }
  },

//   // Terms of service url.
  tosUrl: '<main.html>',
};

  ui.start('#firebaseui-auth-container', uiConfig);



})()



