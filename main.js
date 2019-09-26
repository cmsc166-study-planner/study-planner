 console.log("check")
 $(document).ready(function(){
    $('.header').height($(window).height());
  })
$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#listTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});   
$(document).ready(function($) {
  $(".clickable-row").click(function() {
    console.log("transferred.................");
      window.location = $(this).data("href");
  });
}); 
