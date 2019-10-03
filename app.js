var firebaseConfig = {
    apiKey: "AIzaSyBz04hnU6uEcW-e_JwFBBohbtlJHs2zHDs",
    authDomain: "cmsc166-01.firebaseapp.com",
    databaseURL: "https://cmsc166-01.firebaseio.com",
    projectId: "cmsc166-01",
    storageBucket: "",
    messagingSenderId: "964733508584",
    appId: "1:964733508584:web:843ee7dc354e9f19dda25d"
}; 
firebase.initializeApp(firebaseConfig);

const dbRef = firebase.database().ref();
const subjectsRef = firebase.database().ref("subjects/"); 
const subTaken = firebase.database().ref("subjectsTaken/");
const studentsRef = firebase.database().ref("students/");
const userListUI = document.getElementById("userList");
 

var database = firebase.database();

subjectsRef.on('value', function(snapshot) { 
  var content = ''; 
  snapshot.forEach(function(childSnapshot){ 
    var value = childSnapshot.val();  
    //console.log(value);
    content += '<tr>';
    content += '<td>' + value.code + '</td>'; 
    content += '<td>' + value.name + '</td>';
    content += '<td>' + value.studentsTaken + '</td>'; 
    content += '<td>' + value.type + '</td>'; 
    content += '<td>' + value.unit + '</td>';
    content += '</tr>'; 
  });
  $('#courserows').append(content); 
});

subTaken.on('value', function(snapshot) { 
  var content = '';
  snapshot.forEach(function(childSnapshot){ 
    var value = childSnapshot.val();    
    console.log(value);  
      content += '<tr>'; 
      content += '<td>' + value + '</td>'; 
      content += '<td>' +  " " + '</td>'; 
      content += '<td>' + " " + '</td>'; 
      content += '</tr>';  
  });
  $('#studentrows').append(content); 
}); 
 

 
  



