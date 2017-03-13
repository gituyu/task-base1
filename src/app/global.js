/*jslint browser: true*/
/*global $, jQuery, alert, console, autosize*/

$(document).ready(function () {
    "use strict";

    // Carousel
    $('sly').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });


    // Dropdown Menu
    $('.primary-menu').superfish();
    $(".primary-menu__button").click(function () {
        $(".primary-menu__button,.primary-menu").toggleClass("open");
    });

    //Waves effect
    /*define(["javascript/lib/waves.js"], function() {
     Waves.init();
     Waves.attach('.button', ['waves-button', 'waves-float' ,'waves-circle' , 'waves-block']);

     }
     );

     */
    // Scroll to fixed
    // $('#mydiv').scrollToFixed();
});