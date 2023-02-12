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

    var images = gsap.utils.toArray(".images");
    images.forEach((image, i) => {
      gsap.fromTo(
        '.images',
        {
          scale: 1,
        },
        {
          scale: 2.2,
          ease: "none",
          xPercent: 37,
          yPercent: 20,
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
        .to(elem, { opacity: 1, duration: 0.5, })
        .to(elem, { opacity: 0, duration: 0.5, }, 0.8);
        ;
    
    });
    
    var headlines = gsap.utils.toArray(".Text");
    headlines.forEach((elemt, i) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: elemt,
          start: "top top",
          end: "+=400 20%",
          scrub: true,
        }
      });
      tl
        .to(elemt, { opacity: 0, duration: 0.5 })
        .to(elemt, { opacity: 1, duration: 0.5 });
        ;
    
    });

    $('.card').on('click', function(){
      $(this).toggleClass('active');
    });

    $(".Whats_Link").hover(function(){
      $('.Whats').addClass('hide');
      $('.Whats_P').removeClass('hide');
    }, function(){
      $('.Whats_P').addClass('hide');
      $('.Whats').removeClass('hide');
    });

    $(".Insta_Link").hover(function(){
      $('.Insta').addClass('hide');
      $('.Insta_P').removeClass('hide');
    }, function(){
      $('.Insta_P').addClass('hide');
      $('.Insta').removeClass('hide');
    });

    $(".Email_Link").hover(function(){
      $('.Email').addClass('hide');
      $('.Email_P').removeClass('hide');
    }, function(){
      $('.Email_P').addClass('hide');
      $('.Email').removeClass('hide');
    });

    $(".Behance_Link").hover(function(){
      $('.Behance').addClass('hide');
      $('.Behance_P').removeClass('hide');
    }, function(){
      $('.Behance_P').addClass('hide');
      $('.Behance').removeClass('hide');
    });
   
    var largura = window.innerWidth;
    var largura2 = document.documentElement.clientWidth;
    var largura3 = document.body.clientWidth;
    
    var altura = window.innerHeight;
    var altura2 = document.documentElement.clientHeight;
    var altura3 = document.body.clientHeight;
    
    
    var txtTeste = document.createElement('span');
    var txtTeste2 = document.createElement('span');
    txtTeste.style.textAlign = 'center';
    txtTeste2.style.textAlign = 'center';
    txtTeste.style.color = '#FFF';
    txtTeste2.style.color = '#FFF';


    
    txtTeste.innerHTML = largura + ' | ' + largura2 + ' | ' + largura3 + ' -/  ';
    txtTeste2.innerHTML =  ' - ' + altura + ' | ' + altura2 + ' | ' + altura3;
    
    document.body.appendChild(txtTeste);
    document.body.appendChild(txtTeste2);

  });