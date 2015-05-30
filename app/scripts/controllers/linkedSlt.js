'use strict';

/**
 * @ngdoc function
 * @name WindYao.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the WindYao
 */
angular.module('WindYao')
  .controller('LinkedSltCtrl', ['$scope', '$http', function($scope, $http) {
  	$scope.error = {};
  	$scope.address = [];
  	$http.get('address.json').success(function (data) {
		$scope.address = data;
	});

	$scope.selectProvince = function() {
		$scope.error.province = false;
		$scope.error.city = false;
		$scope.error.district = false;
		$scope.city = '';
		$scope.district = '';
	};

	$scope.selectCity = function() {
		$scope.error.city = false;
		$scope.error.district = false;
		$scope.district = '';
	};

	$scope.selectDistrict = function() {
		$scope.error.district = false;
	};
  }]);
