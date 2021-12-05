
jQuery(function($) {
    "use strict";
        var mainbottom = $('#main').offset().top;
        $(window).on('scroll',function(){
        stop = Math.round($(window).scrollTop());
        if (stop > mainbottom) {
            $('.navbar').addClass('past-main');
            $('.navbar').addClass('effect-main')
        } else {
            $('.navbar').removeClass('past-main');
       }

      });


   $(document).on('click.nav','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
    $(this).removeClass('in').addClass('collapse');
   }
  });



    $(window).scroll(function () {
      if ($(this).scrollTop() > 1000) {
          $('#back-top').fadeIn();
      } else {
          $('#back-top').fadeOut();
      }
    });
    // scroll body to 0px on click
    $('#back-top').on('click', function () {
      $('#back-top').tooltip('hide');
      $('body,html').animate({
          scrollTop: 0
      }, 1500);
      return false;
    });


    $(".rev-list").owlCarousel({

      slideSpeed : 200,
      items: 1,
      singleItem: true,
      autoPlay : true,
      pagination : false
      });


      $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: (target.offset().top - 54)
            }, 1000, "easeInOutExpo");
            return false;
          }
        }
      });



  new WOW().init();


$('.counter').counterUp({
		delay: 10,
		time: 1000
});


   $(document).ready(function() {
        $("#chimp-form").validate({
            // if valid, post data via AJAX
            submitHandler: function(form) {
                $.post("assets/php/subscribe.php", { email: $("#chimp-email").val() }, function(data) {
                    $('#response').html(data);
                });
            },
            rules: {
                email: {
                    required: true,
                    email: true
                }
            }
        });
    });


function toggleChevron(e) {
   $(e.target)
     .prev('.panel-heading')
     .find("span.glyphicon")
     .toggleClass('glyphicon-chevron-down glyphicon-chevron-right');
 }
 $('#accordion').on('hide.bs.collapse show.bs.collapse', toggleChevron);

});
