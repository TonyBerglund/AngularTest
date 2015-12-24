$(function () {
    $('ul.nav li.dropdown').hover(function () {
        $(this).addClass("open-menu");
        $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn();

    }, function () {
        $(this).find('.dropdown-menu').stop(true, true).fadeOut("fast");
        $(this).removeClass("open-menu");
    });
});
