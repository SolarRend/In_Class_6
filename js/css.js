$(function() {
   var backgroundColor = $("li#one").css("background-color");
   $("ul").append("<p> Color is: " + backgroundColor + "</p>");
   
   $("li").each(function() {
      $(this).css({
         "background-color": "#c5a996",
         "border-style": "solid",
         "border-color":"white",
         "border-width": "1px",
         "color": "black",
         "text-shadow": "none",
         "font-family": "Georgia"
      });
   });
});