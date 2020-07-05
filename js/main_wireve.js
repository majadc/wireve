
$(document).ready(function() {
  $('body').scrollspy({ target: '#navbarMain'});
      $('#navbarMain a').on('click', function (e) {
        if (this.hash !== '') {
          e.preventDefault();
          const hash = this.hash;
          const heightNavbar = $("#navbarMain").height();
          const marginSection = parseInt($(`${$(this).attr('href')}`).css('margin-top'));
          let offset = $(hash).offset().top - heightNavbar - marginSection;
          $('html, body').animate({
            scrollTop: offset
          }, 900, function () {
            if ( history.pushState ) {
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

      $("#clients .owl-carousel").owlCarousel({
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

  let delay = 1;
  $("#mdc-awards .mdc-awards__item").each(function(){
    $(this).find('.mdc-awards__img-ico').css('animation-delay', `${delay}s`);
    $(this).find('.mdc-awards__img img').css('animation-delay', `${delay}s`);
    
    delay++;
  });
  
});