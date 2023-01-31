$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
      $(".toTop").fadeIn();
    } else {
      $(".toTop").fadeOut();
    }
  });
  
  $(document).on("click", ".toTop", function () {
    $("html, body").animate({ scrollTop: 0 }, 400);
    $('.Anc').addClass('hide');
    $('.Anc_Q').removeClass('hide');
    $('.Anc_Q').addClass('caindo');
    setTimeout(() => { 
      $('.Anc_Q').addClass('hide');
      $('.Anc').removeClass('hide');
    }, 1000)
  });

  $(document).ready(function(){
    $('.card').on('click', function(){
      $(this).toggleClass('active')
    });
  });
  
  
  var images = gsap.utils.toArray(".images");
  images.forEach((image, i) => {
    gsap.fromTo(
      '.images',
      {
        scale: 1,
      },
      {
        scale: 2.3,
        ease: "none",
        xPercent: 33,
        yPercent: 18,
        scrollTrigger: {
          pin: jQuery(image).parent(),
          trigger: jQuery(image).parent(),
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
        }
      }
    );
    gsap.fromTo(
      '.tempes',
      {
        opacity: 1
      },
      {
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          start: "top top",
          end: "20% top",
          scrub: true,
        }
      }
    );
  
  });
  
  var Bannerlines = gsap.utils.toArray(".Banner");
  Bannerlines.forEach((elem, i) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: elem,
        start: "-200 0%",
        end: "+=300 20%",
        scrub: true,
      }
    });
  
    tl
      .to(elem, { opacity: 1, duration: 0.5, y: 0 })
      .to(elem, { opacity: 0, duration: 0.5, y: -50 }, 0.8);
      ;
  
  });
  
  var headlines = gsap.utils.toArray(".Text");
  headlines.forEach((elemt, i) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: elemt,
        start: "top top",
        end: "+=400 top",
        scrub: true,
      }
    });
  
    tl
      .to(elemt, { opacity: 0, duration: 0.5 })
      .to(elemt, { opacity: 1, duration: 0.5 });
      ;
  
  });