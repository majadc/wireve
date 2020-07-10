
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
  
  // $("#officeGallery .mdc-gallery__item").click(function(){
  //   let imgSrc = $(this).find('img').attr('src').replace("_mini.jpg", '.jpg');
  //   $("#modalGallery").find(".modal-content").append(`<img src='${imgSrc}' class='img-fluid' alt='Our Office' />`);
  // });
  // $("#machinesGallery .mdc-gallery__item").click(function(){
  //   let imgSrc = $(this).find('img').attr('src').replace("_mini.jpg", '.jpg');
  //   $("#modalGallery").find(".modal-content").append(`<img src='${imgSrc}' class='img-fluid' alt='Our Machines' />`);
  // });

  // $('#modalGallery').on('hidden.bs.modal', function (e) {
  //   $(this).find('img').remove();
  // })
  // $('#modalGallery').modal('handleUpdate') ;

  // $("#eventsGallery .mdc-gallery__item").click(function(){
  //   let imgSrc = $(this).find('img').attr('src').replace("_mini.jpg", '.jpg');
  //   let dataTarget = $(this).attr('data-target');
  //   $(dataTarget).find(".modal-body").append(`<img src='${imgSrc}' class='img-fluid' alt='Our Office' />`);
  // });


  // gallery

  $(".mdc-gallery__item").click(function(){
    let currentGalleryItem = $(this);

    
    operateGalleryModal( getSrcImg($(this)) );

    operateControls(currentGalleryItem);
    

    $("#mdcModalGalleryPrev").click( function() {
      let prevImgSrc = getSrcImgPrevGalleryItem(currentGalleryItem);
      $('#modalGallery').find('img').remove();
      $('#modalGallery').find('.modal-content').append(`<img src='${prevImgSrc}' class='img-fluid' alt='Our Office' />`);

      // $('#modalGallery').mouseover(function() {
      //   if ( currentGalleryItem.prev().length > 0 ) {
      //     $("#mdcModalGalleryPrev").show();  
      //   } else {
      //     $("#mdcModalGalleryPrev").hide();
      //   }
      // });
      
    
      currentGalleryItem = currentGalleryItem.prev();
      console.log( currentGalleryItem.prev().length);
      if ( currentGalleryItem.prev().length === 0 ) {
        console.log("wow");
        $("#mdcModalGalleryPrev").hide();
       }
       operateControls(currentGalleryItem);
      

    });


    $("#mdcModalGalleryNext").click( function() {
      let nextImgSrc = getSrcImgNextGalleryItem(currentGalleryItem);
      $('#modalGallery').find('img').remove();
      $('#modalGallery').find('.modal-content').append(`<img src='${nextImgSrc}' class='img-fluid' alt='Our Office' />`);
     
      operateControls(currentGalleryItem);
      currentGalleryItem = currentGalleryItem.next();
      //console.log(currentGalleryItem);
      // if ( currentGalleryItem.next().length > 0 ) {
        
      // } else {
      //   currentGalleryItem = currentGalleryItem;
      // }
      
      

    });
    
  });

 

  function getSrcImgPrevGalleryItem ( currentGalleryItem ) {
    let prevGalleryItem = currentGalleryItem.prev();
    return getSrcImg(prevGalleryItem);
  }

  function getSrcImgNextGalleryItem ( currentGalleryItem ) {
    let nextGalleryItem = currentGalleryItem.next();
    return getSrcImg(nextGalleryItem);
  }

  function getSrcImg ( galleryItem ) {
    if ( galleryItem.length > 0 ) {
      return galleryItem.find('img').attr('src').substring(0, galleryItem.find('img').attr('src').lastIndexOf('/') + 1) +  galleryItem.attr('data-imgsrc');
    } else {
      return '';
    }
    
  }

  function operateGalleryModal ( newSrcImg ) {
    $('#modalGallery').on('show.bs.modal', function (e) {
      $(this).find('.modal-content').append(`<img src='${newSrcImg}' class='img-fluid' alt='Our Office' />`);
    })
    $("#modalGallery").modal({
      keyboard: true
    });
    $('#modalGallery').on('hidden.bs.modal', function (e) {
      $(this).find('img').remove();
      $(this).modal('dispose');
    })
  }

  function operateControls( currentGalleryItem ) {
    $("#modalGallery .modal-content").hover(
      function() {
        console.log($(this));
        if ( currentGalleryItem.prev().length > 0 ) {
          $("#mdcModalGalleryPrev").show();  
        } else {
          $("#mdcModalGalleryPrev").hide();
        }
        if ( currentGalleryItem.next().length > 0 ) {
          $("#mdcModalGalleryNext").show();  
        } else {
          $("#mdcModalGalleryNext").hide();  
        }
      },
      function() {
        $("#mdcModalGalleryPrev").hide();
        $("#mdcModalGalleryNext").hide();
      }
    );
  }

  // $("#mdcModalGalleryPrev").hide();
  // $("#mdcModalGalleryNext").hide();
  

  //comments accordion

  $('.accordionQuestions-panel').on('show.bs.collapse', function () {
   
   $(this).find('.mdc-questions__header').addClass('active');
  })
  $('.accordionQuestions-panel').on('hide.bs.collapse', function () {
   
    $(this).find('.mdc-questions__header').removeClass('active');
   })
  


});//ready