var $j = jQuery.noConflict(),
    $w = $j(window);

$j(document).ready(function() {
    $j('header #block-header .block-header-right .block-burguer-menu').on('click', function() {
        $j('header #block-header .block-header-middle').addClass('showMenu');
    });

    $j('header #block-header .block-header-middle .main-menu .button-close-menu').on('click', function (){
        $j('header #block-header .block-header-middle').removeClass('showMenu');
    });

    $j('header #block-header .block-header-middle .main-menu .menu ul li').on('click', function (){
        $j('header #block-header .block-header-middle').removeClass('showMenu');
    });
});

$w.on('load', function(){

});

$w.resize(function() {

});

$w.scroll(function() {
    if($j(this).scrollTop() > 50) {
        $j('header').addClass('fixed');
    } else {
        $j('header').removeClass('fixed');
    }
});