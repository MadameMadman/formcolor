$(document).ready(function() {

  $("#blanks form").submit(function(event) {
    debugger;
    var nameInput = $("input#name").val();
    var ageInput = $("select#age").val();
    var colorInput = $("input#color").val();
    var birthdayInput = $("input#birthday").val();



    $(".name").text(nameInput);
    $(".age").text(ageInput);
    $(".color").text(colorInput);
    $("body").css("background-color", colorInput);
    $(".birthday").text(birthdayInput);

    $("#story").show();


    event.preventDefault();
  });
});
