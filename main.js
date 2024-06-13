$(".btn_header").on("mouseover", function() {
  $(this).css("background", "rgba(255, 0, 122, 0.3)");
  $(this).css("border-color", "#FF007A");
});
$(".btn_header").on("mouseout", function() {
  $(this).css("background", "#FC0A7E");
  $(this).css("border", "none");
});

$(".part9_1").on("mouseover", function() {
  $(this).css("background", "rgba(255, 0, 122, 0.3)");
  $(this).css("border-color", "#FF007A");
});
$(".part9_1").on("mouseout", function() {
  $(this).css("background", "#FC0A7E");
  $(this).css("border", "none");
});

$(".part9_2").on("mouseover", function() {
  $(this).css("background", "rgba(255, 0, 122, 0.3)");
  $(this).css("border-color", "#FF007A");
});
$(".part9_2").on("mouseout", function() {
  $(this).css("background", "none");
  $(this).css("border-color", "#B04BB3");
});

$(document).ready(function () {
  $(".close").click(function () {
    $(".modal").css("display", "none");
  });
  $("#email").keyup(function () {
    if (
      $("#email").val().length < 5 ||
      $("#email").val().indexOf("@") == -1 ||
      $("#email").val().indexOf(".") == -1
    ) {
      
      $(".email-er").css("display", "flex");
      $(this).css("border", "3px solid #FC0A7E");
      emailer = 1;
    } else {
      $(this).css("border", "none");
      $(".email-er").css("display", "none");
      emailer = 0;
    }
  });
  $(".btn").click(function () {
    errors = 0;
    if (
      emailer == 0
    ) {
      $(".modal").css("display", "flex");
    }
  });
});
