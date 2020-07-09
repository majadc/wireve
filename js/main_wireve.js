
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

  let delay = 1;
  $("#mdc-awards").find(".mdc-awards__item").each(function(){
    $(this).find('.mdc-awards__img-ico').css('animation-delay', `${delay}s`);
    $(this).find('.mdc-awards__img img').css('animation-delay', `${delay}s`);
    delay++;
  });
  
  $("#officeGallery .mdc-gallery__item").click(function(){
    let imgSrc = $(this).find('img').attr('src').replace("_mini.jpg", '.jpg');
    $("#modalGallery").find(".modal-content").append(`<img src='${imgSrc}' class='img-fluid' alt='Our Office' />`);
  });
  $("#machinesGallery .mdc-gallery__item").click(function(){
    let imgSrc = $(this).find('img').attr('src').replace("_mini.jpg", '.jpg');
    $("#modalGallery").find(".modal-content").append(`<img src='${imgSrc}' class='img-fluid' alt='Our Machines' />`);
  });

  $('#modalGallery').on('hidden.bs.modal', function (e) {
    $(this).find('img').remove();
  })
  $('#modalGallery').modal('handleUpdate') ;

  $("#eventsGallery .mdc-gallery__item").click(function(){
    let imgSrc = $(this).find('img').attr('src').replace("_mini.jpg", '.jpg');
    let dataTarget = $(this).attr('data-target');
    $(dataTarget).find(".modal-body").append(`<img src='${imgSrc}' class='img-fluid' alt='Our Office' />`);
  });



  //comments accordion

  $('.accordionQuestions-panel').on('show.bs.collapse', function () {
   
   $(this).find('.mdc-questions__header').addClass('active');
  })
  $('.accordionQuestions-panel').on('hide.bs.collapse', function () {
   
    $(this).find('.mdc-questions__header').removeClass('active');
   })
  


});//ready