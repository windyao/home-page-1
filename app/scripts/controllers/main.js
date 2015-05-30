'use strict';

/**
 * @ngdoc function
 * @name WindYao.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the WindYao
 */
angular.module('WindYao').controller('MainCtrl', function ($scope) {
  $scope.data = [];
});

angular.module('WindYao').service('SkillDataService', ['$rootScope', '$http', '$q', function($rootScope, $http, $q) {
  var deferred = $q.defer();
  $http.get('skills.json').success(function (data) {
    deferred.resolve(data);
  }); 
  return deferred.promise;
  
}]);

angular.module('WindYao').controller('ExampleController', function ($scope) {//my work show
  	// set interval
	$scope.myInterval = 5000;
	// init
	$scope.slides = [
	  { image: 'examples/mango.jpg', subTitle: 'Mango Associates', text: [{ content: 'UI/UX Design'}, { content: 'Make Mockup' }, { content: 'Create HTML/JavaScript/CSS' }], className : 'work-show-mango', outLink: 'http://www.mango-associates.com/' },
	  { image: 'examples/qs.jpg', subTitle: 'Morningstar QuoteSpeed', text: [{ content: 'Created UI Components (Window, Barometer, Sector Delta...)' }, { content: 'Make Widgets (Quicktake, Quote, Time&Sales...)' }], className : 'work-show-qs', outLink: 'http://quotespeed.morningstar.com/' }
	];

});

angular.module('WindYao').config(['ChartJsProvider', function (ChartJsProvider) {//set chart
  // Configure all charts
  ChartJsProvider.setOptions({
    colours: ['#00b38a'],
    responsive: true
  });
}]);

angular.module('WindYao').controller('SkillRadarCtrl', function ($scope, SkillDataService) {//radar chart for develop tools
  SkillDataService.then(function(data) {
    $scope.labels = data['skills']['labels'];

    $scope.data = data['skills']['values'];
  }, function(data) { 
      
  });

});

angular.module('WindYao').controller('ToolRadarCtrl', function ($scope, SkillDataService) {//radar chart for develop tools
  SkillDataService.then(function(data) {
    $scope.labels = data['tool']['labels'];

    $scope.data = data['tool']['values'];
  }, function(data) { 
      
  });

});

angular.module('WindYao').controller('ProRadarCtrl', function ($scope, SkillDataService) {//radar chart for project manangement tools
	SkillDataService.then(function(data) {
    $scope.labels = data['project']['labels'];

    $scope.data = data['project']['values'];
  }, function(data) { 
      
  });

});

angular.module('WindYao').controller('PostDoughnutCtrl', ['$scope', '$timeout', function ($scope, $timeout) {//doughnut chart for post
  $scope.labels = ['Mobile Web APP Develop', 'Front-end Develop', 'Web Design'];
  $scope.data = [0, 0, 0];

  $timeout(function () {
    $scope.data = [450, 350, 200];
  }, 500);
}]);

angular.module('WindYao').controller('SectorDoughnutCtrl', ['$scope', '$timeout', function ($scope, $timeout) {//doughnut chart for sector
	$scope.legend = true;
  $scope.labels = ['Mobile Internet', 'Electronic Commerce', 'Internet Banking'];
  $scope.data = [0, 0, 0];

  $timeout(function () {
    $scope.data = [500, 400, 100];
  }, 500);
}]);
