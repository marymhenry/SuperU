$("button").click(function(){
    $("button").removeClass("active");
    $(this).addClass("active");
  });

$(".rotate").click(function(){
    $(this).toggleClass("up"); 
});