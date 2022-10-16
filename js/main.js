$(function() {

  // NAVIGATION MOBILE

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
  });

});  