$('.page-scroll').on('click', function (e) {

    let tujuan = $(this).attr('href');

    let elemenTujuan = $(tujuan);

    $('html, body').animate({
        scrollTop: elemenTujuan.offset().top - 70
    });

    e.preventDefault();
});

// untuk class active

$('.page-scroll').click(function (element) {
    // console.log(element.target);

    if (element.target = $('.active-scroll')) {
        element.target.removeClass('active-scroll');
    }
    $(this).addClass('active-scroll');
});