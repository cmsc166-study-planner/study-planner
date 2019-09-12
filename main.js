$(document).ready(function(){
    $('.header').height($(window).height());
  })
  function adminlog() {
    location.replace("adminlog.html")
  }
  function homepage() {
    location.replace("admin.html")
  }
  function studentcent(){
    location.replace("studentcent.html")
  }
  jQuery(document).ready(function($) {
    $(".clickable-row").click(function() {
        window.location = $(this).data("href");
    });
});
  $(document).ready(function () {
    $('#dtBasicExample').DataTable({
      "paging": false // false to disable pagination (or any other option)
    });
    $('.dataTables_length').addClass('bs-select');
  });
  $(document).ready(function () {
    $('#dtBasicExample').DataTable({
      "pagingType": "simple" // "simple" option for 'Previous' and 'Next' buttons only
    });
    $('.dataTables_length').addClass('bs-select');
  });
