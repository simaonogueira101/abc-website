if ($(window).width() < 999) {
  $(function(){
    $(".x-container" ).on('touchstart', function(){
      $("nav").toggleClass("active")
      $("nav").toggleClass("inactive")
    })
  })
  $(function(){
    $(".exit2").on('touchstart', function(){
      $("nav").toggleClass("active")
      $("nav").toggleClass("inactive")
    })
  })
  $(function(){
    $(".exit").on('touchstart', function(){
      $("nav").removeClass("active")
      $("nav").addClass("inactive")
    })
  })
}
else {
  $(function(){
    $(".x-container" ).on('click', function(){
      $("nav").toggleClass("active")
      $("nav").toggleClass("inactive")
    })
  })
  $(function(){
    $(".exit2").on('click', function(){
      $("nav").toggleClass("active")
      $("nav").toggleClass("inactive")
    })
  })
  $(function(){
    $(".exit").on('click', function(){
      $("nav").removeClass("active")
      $("nav").addClass("inactive")
    })
  })
}




$(function(){
  $("#home").hover(function(){
    $(".picker").removeClass("picker-2")
    $(".picker").removeClass("picker-3")
    $(".picker").removeClass("picker-4")
    $(".picker").addClass("picker-1")
    $("#home-info").toggleClass("invisible")
    $("#home-info").toggleClass("active")
    $("#placeholder-info").toggleClass("invisible")
  })
})
$(function(){
  $("#about").hover(function(){
    $(".picker").removeClass("picker-1")
    $(".picker").removeClass("picker-3")
    $(".picker").removeClass("picker-4")
    $(".picker").addClass("picker-2")
    $("#about-info-nav").toggleClass("invisible")
    $("#placeholder-info").toggleClass("invisible")
  })
})
$(function(){
  $("#happening").hover(function(){
    $(".picker").removeClass("picker-1")
    $(".picker").removeClass("picker-2")
    $(".picker").removeClass("picker-4")
    $(".picker").addClass("picker-3")
    $("#happening-info").toggleClass("invisible")
    $("#placeholder-info").toggleClass("invisible")
  })
})
$(function(){
  $("#greenery").hover(function(){
    $(".picker").removeClass("picker-1")
    $(".picker").removeClass("picker-2")
    $(".picker").removeClass("picker-3")
    $(".picker").addClass("picker-4")
    $("#greenery-info").toggleClass("invisible")
    $("#placeholder-info").toggleClass("invisible")
  })
})


function aboutMore(){
  document.getElementById("about-more").classList.remove('invisible');
}
function aboutHappening(){
  document.getElementById("about-happening").classList.remove('invisible');
}
function aboutGreenery(){
  document.getElementById("about-greenery").classList.remove('invisible');
}
function aboutLegume(){
  document.getElementById("about-legume").classList.remove('invisible');
}
function aboutGardens(){
  document.getElementById("about-gardens").classList.remove('invisible');
}
function aboutContacts(){
  document.getElementById("about-contacts").classList.remove('invisible');
}
function aboutInfo(){
  document.getElementById("about-info").classList.remove('invisible');
}
function exit(){
  document.getElementById("about-more").classList.add('invisible');
  document.getElementById("about-happening").classList.add('invisible');
  document.getElementById("about-greenery").classList.add('invisible');
  document.getElementById("about-legume").classList.add('invisible');
  document.getElementById("about-gardens").classList.add('invisible');
  document.getElementById("about-contacts").classList.add('invisible');
  document.getElementById("about-info").classList.add('invisible');
}
