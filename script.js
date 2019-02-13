$(".roblox").click(function() {
   $(".roblox").fadeOut(); 
   $("marquee").fadeOut();
   $("h1").fadeOut();
   $(".input").fadeIn();
});


$(".submit").click(function(){
    $(".input").fadeOut();
    $(".majic").fadeIn();
    $(".back").fadeIn();
    var name=$(".yourname").val();
   console.log (name);
    var activity=$(".work").val();
   console.log (activity);
    var number=$(".amount").val();
   console.log (number);
   $(".message").append ("So " +name+ " will have done "+activity+" around "+2600*number+" times in fifty years");
});

$(".back").click(function(){
  $(".roblox").fadeIn(); 
   $("marquee").fadeIn();
   $("h1").fadeIn();
    $(".majic").fadeOut();
    $(".back").fadeOut();
});    
