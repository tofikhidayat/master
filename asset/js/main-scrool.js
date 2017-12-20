$(document).on("scroll", function() {

  if($(document).scrollTop()>100) {
    $("#navbar").removeClass("event").addClass("scrool");
  } 
  else {
    $("#navbar").removeClass("scrool").addClass("event");
  }
  
});