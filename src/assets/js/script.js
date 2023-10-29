// Home animation start

particlesJS('particles-js',  
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#3f6491"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#305687",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onClick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);
// Home animation End


// faqs start
$(function() {
    $('.fdetails').slideUp();
    $('.fopen.active').next().slideDown();
    $('.fopen').click(function(j) {
   
    
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).next().slideUp();
      }     
    else {
        $('.fopen').removeClass('active');
        $('.fdetails').slideUp();
      $(this).addClass('active');
      $(this).next().slideDown();
    }
    
  });
});
// faqs end 



// swiper slider start
var swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 500,
    disableOnInteraction: false,
  },
  speed: 3000,
  breakpoints: {
    450: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});
// swiper slider end

// popup toggleclass
$(document).ready(function(){
  $(".quick_view_btn").click(function(){
    $(".popup_pro").toggleClass("open");
  });
  // smooth scroll 
  $("#topscroll").click(function() {
      $('html, body').animate({
          scrollTop: $("body").offset().top}, 2000);
  });
});

 // window scroll
$(window).scroll(function() {    
  var scroll = $(window).scrollTop();

  if (scroll >= 0) {
    $("#topscroll").addClass("active");
  } else {
    $("#topscroll").removeClass("active");
  }
});





// toggleclass javascript
function addActive(Id, db) {
  var element = document.querySelector(Id);
  element.classList.add(db);
}
// toggleclass javascript
function removeActive(Id, db) {
  var element = document.querySelector(Id);
  element.classList.remove(db);
}
// toggleclass javascript
function toggleActive(Id, db) {
  var element = document.querySelector(Id);
  element.classList.toggle(db);
}