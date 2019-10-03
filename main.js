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
const studentsRef = firebase.database().ref("students/");
const userListUI = document.getElementById("userList");


var database = firebase.database();
  

subjectsRef.on('value', function(snapshot) { 
  var content = "";
snapshot.forEach(function(childSnapshot){ 
  var value = childSnapshot.val();  
  //console.log(value);
  content += '<tr>';
  content += '<td>' + value.code + '</td>';  
  content += '<td>' + "check" + '</td>';  
  content += '<td>' + value.code + '</td>';  
  content += '<td>' + "check" + '</td>'; 
  content += '<td>' + value.code + '</td>';  
  content += '<td>' + "check" + '</td>';  
  content += '<td>' + value.code + '</td>';  
  content += '<td>' + "check" + '</td>'; 
  content += '<td>' + value.code + '</td>';  
  content += '<td>' + "check" + '</td>';  
  content += '<td>' + value.code + '</td>';  
  content += '<td>' + "check" + '</td>'; 
  content += '<td>' + value.code + '</td>';  
  content += '<td>' + "check" + '</td>';  
  content += '<td>' + value.code + '</td>';  
  content += '<td>' + "check" + '</td>'; 
  content += '</tr>'; 
});
$('#courserows').append(content); 
});
 
 
 $(document).ready(function(){
    $('.header').height($(window).height());
  })
$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#list-Table tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});   
$(document).ready(function($) {
 // var table = $('#list-Table').dataTable();  
  $(".clickable-row").click(function() {
    console.log("transferred.................");
   // console.log(table.row());
    window.location = $(this).data("href");
    /*
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
      }); */
      });

});  
