$(document).ready(function () {
  $("#gameSetUpOnreset").hide();
  $("#mainScreen").show();
  $("#resetbtn").click(function () {
    $("#gameSetUpOnreset").show();
    $("#mainScreen").hide();
  });
  initialSetUp();
});
