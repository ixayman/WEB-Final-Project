(function() {
	var config = angular.module("app", ["ngRoute"]);
	config.controller(config, "config")
	function config($scope, $route, $routeParams, $location, $routeProvider) {
		$scope.$route = $route;
		$scope.$location = $location;
		$scope.$routeParams = $routeParams;
		$routeProvider.when('/doneTasks', {
			templateUrl : 'templates/doneTasks.html',
			controller : 'doneTasks'
		})
	}

})();
