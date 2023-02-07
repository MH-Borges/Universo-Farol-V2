$('.controls li').on('click', function () {
    $('.controls li').removeClass('active');
    $(this).addClass('active');
});

if ($('.filter').length > 0) {
    var containerEl = document.querySelector('.filter');
    var mixer = mixitup(containerEl);
}