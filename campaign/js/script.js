


$(document).ready(function() {
    
    var nav = $('.nav-container');
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            nav.addClass("f-nav");
        } else {
            nav.removeClass("f-nav");
        }
    });


    $( ".readMore" ).hide();



    $('.expandButton').click(function(){
           $(this).parent().addClass( "expand" );
          $( ".readMore" ).show();
          $( ".hide" ).hide();
          $( this ).hide();
          $( ".closeButton" ).show();
     });

    $('.closeButton').click(function(){
           $(this).parent().removeClass( "expand" );
           $(this).parent().addClass( "close" );
           $(this).parent().parent().removeClass( "expand" );
           $(this).parent().parent().addClass( "close" );
            $( ".readMore" ).hide();
          $( ".hide" ).show();
          $( this ).hide();
          $( ".expandButton" ).show();
      });








      var $window = $(window); //You forgot this line in the above example

      $('section[data-type="background"]').each(function(){
          var $bgobj = $(this); // assigning the object

          $(window).scroll(function() {
          var yPos = -($window.scrollTop() / $bgobj.data('speed'));
          // Put together our final background position
          var coords = '50% '+ yPos + 'px';


          // Move the background
          $bgobj.css({ backgroundPosition: coords });
          });
      });





var slideshows = $('.cycle-slideshow').on('cycle-next cycle-prev', function(e, opts) {
    // advance the other slideshow
    slideshows.not(this).cycle('goto', opts.currSlide);
});

$('#cycle-2 .cycle-slide').click(function(){
    var index = $('#cycle-2').data('cycle.API').getSlideIndex(this);
    slideshows.cycle('goto', index);
});






});



