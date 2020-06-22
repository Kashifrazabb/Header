$(document).ready(function () {
    
    $(".navbar-toggler").click(() => {
    $(".navbar-toggler-icon").toggleClass("navbar-toggler-icon-close");
    $(".navbar-wrapper").toggleClass("collap");
    });

    $("body").click((e) => {
    if ($(".collap").is($(e.target))) {
        $(".navbar-toggler-icon").click();}
    });

    $("#nav").click((e) => {
    if ($("#nav").is($(e.target))) {
        $(".navbar-toggler-icon").click();}
    });

    $(window).scroll(() => {
    let md = window.matchMedia("(max-width:500px)").matches;
    if (md) { $var1 = 300 }
    else { $var1 = 800 }
    if ($(document).scrollTop() >= $var1) {
        $('.doc-btn').css({ visibility: 'visible', opacity: '1', 'z-index': 1 })}
    else { $('.doc-btn').css({ visibility: '' }) }
    })

    $('.doc-btn').click(() => {
    $('.doc-btn').css('box-shadow', 'none')
    $('html,body').animate({ scrollTop: 0 }, 1000)
    $('.doc-btn').animate({ opacity: 0 }, 1500)
    })

    $('.portfolio-section a').click((e) => {
    $('.pics .row').css('display', 'block');
    $('#' + e.target.id).css({ color: 'white', background: 'red' });
    $('.portfolio-section a').not('#' + e.target.id).css({ color: 'black', background: 'transparent' });
    if (e.target.id == 'app') { $('.pics .row').not('.' + 'APP').css('display', 'none') }
    if (e.target.id == 'web') { $('.pics .row').not('.' + 'WEB').css('display', 'none') }
    if (e.target.id == 'card') { $('.pics .row').not('.' + 'CARD').css('display', 'none') }
    if (e.target.id == 'all') { $('.pics .row').css('display', 'block') }
    })

    $('.navbar .dropdown > a').click(()=>
        $('.navbar .dropdown > a').toggleClass('special'))

    $('.pics .row').mouseenter((e)=>{
        var target=e.target.className.split(' ')[1]
        $(e.target).append('<div class="content">\
        <h5>'+ target+ ' '+ e.target.id+'<h5>\<h6>'+target+'<h6/>\</div>')
    })

    $('.pics .row').mouseleave((e)=>$('.pics .row .content').remove())

    $('.carousel-caption h1').addClass('animate__animated animate__slideInDown').
    css('animation-duration','3s')
    $('.carousel-caption p').addClass('animate__animated animate__slideInLeft').
    css('animation-duration','3s')
    $('.carousel-caption button').addClass('animate__animated animate__slideInUp').
    css('animation-duration','1s')

});
