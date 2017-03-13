/*jslint browser: true*/
/*global $, jQuery, alert, console, autosize*/

$(document).ready(function ($) {
    "use strict";

    // Carousel
    $('.carousel').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        infinite: true,
        fade: true,
        adaptiveHeight: false
    });

    // Dropdown Menu
    // $('.primary-menu').superfish();
    $(".primary-menu__button").click(function () {
        $(".primary-menu__button,.primary-menu").toggleClass("open");
    });

    // Scroll to fixed
    // $('#mydiv').scrollToFixed();
});