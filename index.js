 $(".mainbutton").click(function(){
    var audio=new Audio('audio.mp3');
    audio.play();
     $(".top-level").addClass("animation2");
     $(".mainbutton").addClass("animation");
     setTimeout(function(){
         $(".top-level").removeClass("animation2");
         $(".mainbutton").removeClass("animation");
     }, 2000);
     $(".mainbutton").fadeIn(100).fadeOut(100).fadeIn(100);
     $("h1").text("Welcome to India ❤️");
     setTimeout(function(){
         $("h1").text("Moment To Explore Monument");
         $("h1").css("textShadow","#fff")
        //  var audio=new Audio('audio.mp3');
        //  audio.pause();
     } , 2000);
     setTimeout(function(){
        audio.pause();
     } ,10000);
 });
