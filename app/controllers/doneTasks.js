(function(){
	var note = angular.module("app");
	note.controller(doneTasks,"doneTasks");
	function doneTasks($scope){
		var donetasks= localStorage.getItem('doneTasks')
		$scope.finished = JSON.parse(donetasks);
	}
	})();
