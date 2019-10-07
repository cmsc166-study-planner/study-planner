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
 

var subjectdata = "no data";

function rowHandlers() { 
  var table = document.getElementById("course-table");
  var rows = table.getElementsByTagName("tr"); 
  for (i = 0; i < rows.length; i++) { 
    var currentRow = table.rows[i]; 
    var createClickHandler = function(row) {
      return function() {
        var cell = row.getElementsByTagName("td")[0];
        var id = cell.innerHTML;  
        subjectdata = id;
        console.log("row clicked: "+ subjectdata);  
      };
    };
    currentRow.onclick = createClickHandler(currentRow); 
  }
  console.log("data sent: "+ subjectdata);
  localStorage.setItem("subname", subjectdata);
  window.open('coursestats.html');
}  
/*document.addEventListener('readystatechange', event => {
  var subname = localStorage.getItem("subname");
  if (event.target.readyState === "interactive") {      //same as:  document.addEventListener("DOMContentLoaded"...   // same as  jQuery.ready
      alert("All HTML DOM elements are accessible");
  }

  if (event.target.readyState === "complete") {
      alert("Now external resources are loaded too, like css,src etc... ");
      alert(subname);
  }
  studentList(subname); 
});*/

function studentList(subject){   
  console.log('subject: ' + subject);     
  var tableBody = document.getElementById("student-rows");
  dbRef.child("subjects").orderByChild("code").equalTo(subject).once("value", snapshot => {
      if(snapshot.exists()){ 
          snapshot.forEach(function(childSnapshot) {
              childSnapshot.forEach(function(listSnapshot){
                  let obj = listSnapshot.val();  
                  for(let key in obj){
                      if(obj[key].name != undefined){  
                        var tr = document.createElement('TR');
                        var tdname = document.createElement('TD');
                        var tdstatus = document.createElement('TD');
                        tdstatus.appendChild(document.createTextNode('status'));  
                        tdname.appendChild(document.createTextNode(obj[key].name+" ")); 
                        tr.appendChild(tdstatus); 
                        tr.appendChild(tdname);
                        tableBody.appendChild(tr);
                      } 
                      else{
                        console.log('undefined'+ key);
                      }
                  } 
              });
          });
      }
      else{
          console.log("The subject does not exist")
      }
  }); 
} 