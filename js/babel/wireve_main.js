"use strict";

$(document).ready(function () {
  $('body').scrollspy({
    target: '#navbarMain'
  });
  $('#navbarMain a').on('click', function (e) {
    if (this.hash !== '') {
      e.preventDefault();
      var hash = this.hash;
      var heightNavbar = $("#navbarMain").height();
      var marginSection = parseInt($("".concat($(this).attr('href'))).css('margin-top'));
      var offset = $(hash).offset().top - heightNavbar - marginSection;
      $('html, body').animate({
        scrollTop: offset
      }, 900, function () {
        if (history.pushState) {
          history.pushState(null, null, hash);
        } else {
          location.hash = hash;
        }
      });
    }
  });
  $('#mdc-stats .counter').counterUp({
    duration: 1000,
    delay: 16
  });
  $(".owl-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 2
      },
      768: {
        items: 4
      },
      900: {
        items: 6
      }
    }
  });
  var delay = 1;
  $("#mdc-awards").find(".mdc-awards__item").each(function () {
    $(this).find('.mdc-awards__img-ico').css('animation-delay', "".concat(delay, "s"));
    $(this).find('.mdc-awards__img img').css('animation-delay', "".concat(delay, "s"));
    delay++;
  });
  $(".mdc-awards__item").click(function (e) {
    e.stopPropagation();
    $(this).find(".mdc-awards__icon").toggleClass('active');
    $(this).find(".card-body").toggleClass('active');
    $(this).find('.mdc-awards__entry').toggleClass('active');
  }); //comments accordion

  $('.accordionQuestions-panel').on('show.bs.collapse', function () {
    $(this).find('.mdc-questions__header').addClass('active');
  });
  $('.accordionQuestions-panel').on('hide.bs.collapse', function () {
    $(this).find('.mdc-questions__header').removeClass('active');
  });
}); //ready