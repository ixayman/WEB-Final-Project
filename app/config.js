(function() {
	var config = angular.module("app", ["ngRoute"]);
	config.controller(config, "config")
	function config($scope, $route, $routeParams, $location) {
		$scope.$route = $route;
		$scope.$location = $location;
		$scope.$routeParams = $routeParams;
	}

})();
