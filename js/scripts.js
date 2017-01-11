$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var textInput = $("input#text").val();

    $(".text").text(textInput);

    $("#story").show();

    event.preventDefault();
    });
});
