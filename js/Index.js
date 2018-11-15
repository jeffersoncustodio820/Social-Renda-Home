
window.addEventListener("load", function () {
    $(".div-wrap-loading").delay(2000).fadeOut(1000);
    $(".nav-bar, .brand-heading-center-ap, .button-acessar-conta").addClass('on');
    setInterval(() => {
       $('body').css('overflow', 'auto') 
    }, 3000);
});

$("#button-open-menu").click(function () {
    $(".div-list").fadeToggle(1000);
    $(".fa-bars").toggleClass("fa-times");
});    

$('#icon-scroll-top').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
});

$('#contatos').click(function(){
    $(".div-list").fadeOut();
    $('html, body').animate({scrollTop : $("footer").offset().top},1500);
    return false;
});

