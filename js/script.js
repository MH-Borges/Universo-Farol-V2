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
});


$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    var height = $(window).height();
    if (scroll <= height) {
        $(".zoom img").css({
            transform: 'translate3d(-'+ (50+(scroll / 100)*-11) +'%, '+ ((scroll / 100)*17) + '%, 0) scale(' + (100 + scroll / 2.5) / 100 + ')',
        });
    }
    if(scroll > height){
        console.log(scroll);
        console.log('entrei');
        console.log(height);
    }
});