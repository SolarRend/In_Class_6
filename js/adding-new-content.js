$(function() {
   $("ul").before("<p>Just updated</p>");
   $("li.hot").prepend("+ ");
   $("li#four").after("<li><em>gluten-free</em> soy sauce</li>");
});