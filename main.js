var prepareTable = function () {
  var cells = document.getElementsByTagName("td");
  for (var i = 0 ; i < cells.length ; i++) {
      cells[i].onclick = function(event) {
          getConfirmation(event);
      }
  }
}

var getConfirmation = function (e) {
  var first_result = confirm("Have you taken this course?");
  var second_result = confirm("Have you passed this course?");

  if(first_result) {
    e.target.style.backgroundColor = "";
    if(second_result) {
      e.target.style.backgroundColor = "red";
    }
  } else {
    e.target.style.backgroundColor = "gray";
    alert("Error! You must pass this course first.");
  }
}

document.onload = prepareTable();
  