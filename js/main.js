// Slick Carousel

jQuery(function($){
	    $('.clients_say_carousel').slick({
        infinite: true,
        fade: true,
        dots: true,
        appendDots: $('.clients_say_carousel_dots'),
        prevArrow: $('.clients_say_carousel_prev_arrow'),
        nextArrow: $('.clients_say_carousel_next_arrow'),
        slidesToShow: 1,
        autoplay:true,
        slidesToScroll: 1
      });



      jQuery(function($){
    
      $('#preload').fadeOut().end().fadeOut('slow');
      
      setTimeout( 10000);  
      // setTimeout(greet, 15000);  
   });

    
              
})


// Change Image  


    $(".js-click-case").on("click", function(){
        $image = $(this).attr("data-image");
        $title = $(this).attr("data-title");
        $description = $(this).attr("data-description");
        $link = $(this).attr("data-link");
        $tags = $(this).attr("data-tags")

        $image_mainImage = $("#mainImage").attr("data-image");
        $title_mainImage = $("#mainImage").attr("data-title");
        $description_mainImage = $("#mainImage").attr("data-description");
        $link_mainImage = $("#mainImage").attr("data-link");
        $tags_mainImage = $("#mainImage").attr("data-tags")

        $(this).css("background-image", "url(" + $image_mainImage + ")");
        $(this).attr("data-image", $image_mainImage);
        $(this).attr("data-title", $title_mainImage);
        $(this).attr("data-description", $description_mainImage);
        $(this).attr("data-link", $link_mainImage);
        $(this).attr("data-tags", $tags_mainImage )

        $("#mainImage").css("background-image", "url(" + $image + ")");
        $("#mainImage").find(".front-card-title").text($title);
        $("#mainImage").find(".front-card-text").text($description);
        $("#mainImage").find(".front-card-link").attr("href",$link);
        $("#mainImage").find(".tags").text($tags);
        $("#mainImage").attr("data-image", $image);
        $("#mainImage").attr("data-title", $title);
        $("#mainImage").attr("data-description", $description);
        $("#mainImage").attr("data-link", $link);
        $("#mainImage").attr("data-tags", $tags)

    })

    //  By Nunbers 

      var a = 0;
      $(window).scroll(function() {

        var oTop = $('#counter').offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
          $('.counter-value').each(function() {
            var $this = $(this),
              countTo = $this.attr('data-count');
            $({
              countNum: $this.text()
            }).animate({
                countNum: countTo
              },

              {

                duration: 2000,
                easing: 'swing',
                step: function() {
                  $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                  $this.text(this.countNum);
                  
                }

              });
          });
          a = 1;
        }

      });

// Mobile Menu 

jQuery(function($){


$('.navbar-toggler').click( function() {
  $('.navbar').css({"background-color": "rgba(18, 25, 36, 0.7)", "backdrop-filter": "blur(14px)"});
  $('.navbar-collapse').show();
  $('.close').show();
  $('.navbar-toggler').hide();
  $('html').css('overflow', 'hidden');
});
$('.close').click( function() {
  $('.close').hide();
  $('.navbar-collapse').hide();
  $('.navbar-toggler').show();
  $('.navbar-toggler').css({"background-color": "transparent", "backdrop-filter": "blur(0px)"});
  $('html').css('overflow', 'inherit');
});
$('.nav-link').click( function() {
  $('.navbar-collapse').hide();
  $('.close').hide();
  $('.navbar-toggler').show();
  $('#masthead').css({"background-color": "transparent", "backdrop-filter": "blur(0px)"});
  $('html').css('overflow', 'inherit');
});


});

// Solutions

jQuery(function($){
  $('a.hexagon_top').hover( function() {
    var active_hexagon = $('.active');
  var active_hexagon_id = active_hexagon.attr('data-id');
  $('.solution_description_item_inner_' + active_hexagon_id).removeClass('active-inner');
    
  var hexagon_id = $(this).attr('data-id');
    active_hexagon.removeClass('active');
    $(this).addClass('active');
  
 $('.solution_description_item_inner_' + hexagon_id).addClass('active-inner');
   });

}) 