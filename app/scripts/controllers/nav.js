'use strict';

/**
 * @ngdoc function
 * @name WindYao.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the WindYao
 */
angular.module('WindYao')
  .controller('NavCtrl', function ($scope, $location) {
    $scope.isCurrent = function (route) {
        if ($location.path().indexOf('/dropdown') == 0) {
            return  route == '/dropdown';
        }
        return route == $location.path();
    };
  });
