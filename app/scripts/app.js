'use strict';

/**
 * @ngdoc overview
 * @name WindYao
 * @description
 * # WindYao
 *
 * Main module of the application.
 */
angular
  .module('WindYao', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'chart.js',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })      
      .when('/exp', {
        templateUrl: 'views/exp.html',
        controller: 'ExpCtrl'
      })
      .when('/todolist', {
        templateUrl: 'views/todolist.html',
        controller: 'AboutCtrl'
      })
      .when('/linkedSlt', {
        templateUrl: 'views/linkedSlt.html',
        controller: 'LinkedSltCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
