  $(document).ready(function(){
    $('.toTop').on('click', function(){
      $("html, body").animate({ scrollTop: 0 }, 400);
      $('.Anc').addClass('hide');
      $('.Anc_Q').removeClass('hide');
      $('.Anc_Q').addClass('caindo');
      setTimeout(() => { 
        $('.Anc_Q').addClass('hide');
        $('.Anc').removeClass('hide');
        $('.Anc_Q').removeClass('caindo');
      }, 1000)
    });

    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll >= 100) {
        $(".toTop").fadeIn();
      } else {
        $(".toTop").fadeOut();
      }
    });

    $('.card').on('click', function(){
      $(this).toggleClass('active');
    });

    $(".WhatsappLink").hover(function(){
      $('.Whats').addClass('hide');
      $('.Whats_P').removeClass('hide');
    }, function(){
      $('.Whats_P').addClass('hide');
      $('.Whats').removeClass('hide');
    });

    $(".InstagramLink").hover(function(){
      $('.Insta').addClass('hide');
      $('.Insta_P').removeClass('hide');
    }, function(){
      $('.Insta_P').addClass('hide');
      $('.Insta').removeClass('hide');
    });

    $(".EmailLink").hover(function(){
      $('.Email').addClass('hide');
      $('.Email_P').removeClass('hide');
    }, function(){
      $('.Email_P').addClass('hide');
      $('.Email').removeClass('hide');
    });

    $(".BehanceLink").hover(function(){
      $('.Behance').addClass('hide');
      $('.Behance_P').removeClass('hide');
    }, function(){
      $('.Behance_P').addClass('hide');
      $('.Behance').removeClass('hide');
    });
   
  });