/**
* @ngdoc overview
* @name Qoffice
* @description
*
* Module Qoffice
*
* Usage:
* Manage Qoffice admin
*/
(function() {
    'use strict';
    angular
        .module('ilpaijin.qoffice', [])
        .config([
            '$routeProvider',
            function config($routeProvider) 
            {
                $routeProvider
                .when('/qoffice', 
                {
                    templateUrl: 'app/bundles/ilpaijin/qoffice/src/views/base.php',
                    controller: 'QofficeMainCtrl'
                })
                .when('/qoffice/:id/*rest', 
                {
                    templateUrl: 'app/bundles/ilpaijin/qoffice/src/views/another.php',
                    controller: 'QofficeMainCtrl'
                });
            }
        ]);
})();    