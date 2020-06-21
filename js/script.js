$(document).ready(function () {
    $(".navbar-toggler").click(() => {
    $(".navbar-toggler-icon").toggleClass("navbar-toggler-icon-close");
    $(".navbar-wrapper").toggleClass("collap");
    });

    $("body").click((e) => {
    if ($(".collap").is($(e.target))) {
        $(".navbar-toggler-icon").click();
    }
    });

    $("#nav").click((e) => {
    if ($("#nav").is($(e.target))) {
        $(".navbar-toggler-icon").click();
    }
    });

    $(window).scroll(() => {
    let md = window.matchMedia("(max-width:500px)").matches;
    if (md) { $var1 = 300 }
    else { $var1 = 800 }
    if ($(document).scrollTop() >= $var1) {
        $('.doc-btn').css({ display: 'inline', opacity: '1', 'z-index': 1 })
    }
    else { $('.doc-btn').css({ display: 'none' }) }
    })

    $('.doc-btn').click(() => {
    $('.doc-btn').css('box-shadow', 'none')
    $('html,body').animate({ scrollTop: 0 }, 1500)
    $('.doc-btn').animate({ opacity: 0 }, 1500)
    })

    $('.portfolio-section a').click((e) => {
    $('.pics .row').css('display', 'block');
    $('#' + e.target.id).css({ color: 'white', background: 'red' });
    $('.portfolio-section a').not('#' + e.target.id).css({ color: 'black', background: 'transparent' });
    if (e.target.id == 'app') { $('.pics .row').not('.' + 'app').css('display', 'none') }
    if (e.target.id == 'web') { $('.pics .row').not('.' + 'web').css('display', 'none') }
    if (e.target.id == 'card') { $('.pics .row').not('.' + 'card').css('display', 'none') }
    if (e.target.id == 'all') { $('.pics .row').css('display', 'block') }

    })

});
