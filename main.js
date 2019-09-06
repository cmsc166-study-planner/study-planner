var toggleHighlight = function (e) {
  var bg = e.target.style.backgroundColor;
  if (bg == 'red') {
      e.target.style.backgroundColor = '';
  } else {
      e.target.style.backgroundColor = 'red';   
  }
}

var prepareTable = function () {
  var cells = document.getElementsByTagName("td");
  for (var i = 0 ; i < cells.length ; i++) {
      cells[i].onclick = function(event) {
          toggleHighlight(event);
      }
  }
}

document.onload = prepareTable();
  