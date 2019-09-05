var firebaseConfig = {
    apiKey: "AIzaSyBz04hnU6uEcW-e_JwFBBohbtlJHs2zHDs",
    authDomain: "cmsc166-01.firebaseapp.com",
    databaseURL: "https://cmsc166-01.firebaseio.com",
    projectId: "cmsc166-01",
    storageBucket: "",
    messagingSenderId: "964733508584",
    appId: "1:964733508584:web:843ee7dc354e9f19dda25d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const dbRef = firebase.database().ref();
const subjectsRef = firebase.database().ref("subjects/");
const userListUI = document.getElementById("userList");

//const subjectsRef = dbRef.child('subjects');
/*
subjectsRef.on("value", function(snapshot) {
    console.log(snapshot.val());
}, function (error) {
    console.log("Error: " + error.code);
});*/
/*
var sub_codes=[];
subjectsRef.orderByKey().on("child_added", function(data){
    console.log(data.val().code);
    //sub_codes.push(data.val().code);
});
console.log(sub_codes);

var sel = document.getElementById('SubjectsList');
for(var i=0; i < sub_codes.length; i++){
    var opt = document.createElement('option');
    opt.innerHTML = sub_codes[i];
    opt.value = sub_codes[i];
    sel.appendChild(opt);
}*/

subjectsRef.on("child_added", snap => {
    let subject = snap.val();
    let $li = document.createElement("li");
    $li.innerHTML = subject.code;
    $li.setAttribute("child-key", snap.key);
    $li.addEventListener("click", userClicked);
    userListUI.append($li);
});

function userClicked(e) {
    var userID = e.target.getAttribute("child-key");
    const userRef = dbRef.child('subjects/' + userID);
    const userDetailUI = document.getElementById("userDetail");
    userDetailUI.innerHTML = ""
    userRef.on("child_added", snap => {
        var $p = document.createElement("p");
        $p.innerHTML = snap.key + " : " + snap.val();
        userDetailUI.append($p);
    });
}



