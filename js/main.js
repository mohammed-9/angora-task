
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
          $("nav").css("background" , "white");
        }
  
        else{
            $("navbar-nav").css("background" , "#333");  	
        }
    })
  })
