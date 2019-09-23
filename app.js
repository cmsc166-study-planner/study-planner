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
var studentName = "sample";

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

    //updating the list of students under subjects, NO DUPLICATES
    //every student has a unique idea para dili gubot inig delete
    //other method kay name1, name 2, name n, etc, (NOT)

    if(studentName != "sample"){
        const subjectStudentRef = dbRef.child('subjects/' + userID +'/studentsTaken');

        subjectStudentRef.orderByChild("name").equalTo(studentName).once("value", snapshot => {
            if(snapshot.exists()){
                console.log("Student is already on the list");
            }
            else{
                var a = subjectStudentRef.push({
                    name: studentName
                });
                console.log("SUBJECT TAKEN");
            }
        });
    }
    else console.log("YOU HAVE TO LOG IN FIRST");

    console.log("Hello "+ studentName);


}

function setName(){
    //pushing the name of the logged in person. NO DUPLICATES
    var flag = 0;
    var x = document.getElementById("name").value;
    studentName = x;
    //document.getElementById("demo").innerHTML = x;
    const studentsRef = dbRef.child("students");

    dbRef.child("students").orderByChild("name").equalTo(x).once("value",snapshot => {
        if(snapshot.exists()){
            console.log("DUPE")
        }
        else{
            var userRef = studentsRef.push({
                name: x
            });
            console.log("New student name pushed");
        }
    });
}

function studentList(){
    var x = document.getElementById("subject").value;
    const subjectStudentRef = dbRef.child("subjects");
    const studentListUI = document.getElementById("studList");
    studentListUI.innerHTML = "";

    dbRef.child("subjects").orderByChild("code").equalTo(x).once("value", snapshot => {
        if(snapshot.exists()){
            snapshot.forEach(function(childSnapshot) {
                childSnapshot.forEach(function(listSnapshot){
                    let obj = listSnapshot.val();
                    for(let key in obj){
                        if(obj[key].name != undefined){
                            console.log(obj[key].name);
                            let $li = document.createElement("li");
                            $li.innerHTML = obj[key].name;
                            studentListUI.append($li);
                        }
                    }

                    //console.log(childSnapshot.key+" - "+listSnapshot.key+": "+listSnapshot.val());
                });
            });
        }
        else{
            console.log("The subject does not exist")
        }
    });

}


