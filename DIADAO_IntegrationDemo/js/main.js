

// GESTION DU HEADER AVEC LE SCROLL

const navbar = document.querySelector('#navbar');
const headerLogo = document.querySelector('.header-logo');
const headerLogoBlack = document.querySelector('.header-logo-black');
const headerBtn = document.querySelector('.header-btn');
const menuBlack = document.querySelector('.menu-black');

window.addEventListener('scroll', () => {
  
  if (window.scrollY > 780)  {

      navbar.classList.add('scroll');
      headerLogo.classList.add('none');
      menuBlack.classList.add('active');
      headerLogoBlack.classList.add('active');
      headerBtn.classList.add('active');


     } else { 

      navbar.classList.remove('scroll');
      headerLogo.classList.remove('none');
      menuBlack.classList.remove('active');
      headerLogoBlack.classList.remove('active');
      headerBtn.classList.remove('active');

     }
});

// NAVIGATION SOUS JQUERY

$(function() {

  $('.menu').click(function(e) {
    $('.nav-mobile').slideDown();
    e.preventDefault();
  });

  $('.close-nav').click(function(e) {
    $('.nav-mobile').slideUp();
    e.preventDefault();
  });

  $('.nav-mobile ul').onePageNav({
    end : function() {
      $('.nav-mobile').slideUp();
    }
  })

// SLIDER

$('.slider-container').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  arrows: false,
  infinite: true,  
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    }
  ]
});
});
