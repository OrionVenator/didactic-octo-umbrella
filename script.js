$(document).ready(function() {
    // Get the current hour
    var currentHour = moment().hour();
  
    // Loop through each time slot
    $(".time-block").each(function() {
      // Get the hour from the time slot's ID
      var hour = parseInt($(this).attr("id").split("-")[1]);
  
      // Compare the hour with the current hour and update the class
      if (hour < currentHour) {
        $(this).addClass("past").removeClass("present future");
      } else if (hour === currentHour) {
        $(this).addClass("present").removeClass("past future");
      } else {
        $(this).addClass("future").removeClass("past present");
      }
    });
  });