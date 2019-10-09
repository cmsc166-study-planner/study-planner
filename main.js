(function(){
	firebase.auth().onAuthStateChanged(function(user) {
  		if (user) {
  		  // User is signed in.
  		 	name = user.displayName;
  			email = user.email;
  			photoUrl = user.photoURL;
  			emailVerified = user.emailVerified;
  			uid = user.uid;

  			// window.alert(name);

  			document.getElementById("user").innerHTML = user.displayName;
  			document.getElementById("avatar").setAttribute("src", user.photoURL);
 		} else {
  		  // No user is signed in.
  		}
	});

	
})()

