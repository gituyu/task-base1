/*jslint browser: true*/
/*global $, jQuery, requirejs, console*/

//The build will inline common dependencies into this file.

//For any third party dependencies, like jQuery, place them in the lib folder.

//Configure loading modules from the lib directory,
//except for 'app' ones, which are in a sibling
//directory.
requirejs.config({
    baseUrl: 'bootstrap-sass/js/lib',
    paths: {
        app: '../app'
    }
});

// Load the main app module to start the app
requirejs(['jquery', 'slick.min', 'superfish.min', 'jquery-scrolltofixed-min', 'app/global']);