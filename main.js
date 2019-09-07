var prepareTable = function () {
  var cells = document.getElementsByTagName("td");
  for (var i = 0 ; i < cells.length ; i++) {
      cells[i].onclick = function(event) {
          getConfirmation(event);
      }
  }
}

var getConfirmation = function (e) {
  var result = confirm("Have you passed this course?");
  if(result) {
    e.target.style.backgroundColor = 'red';
  } else {
    e.target.style.backgroundColor = '';
    alert("Error! You must pass this course first.");
  }
}

document.onload = prepareTable();
  