(function(){
	var task = angular.module("app");
	task.controller("tasks",tasks);
	
	function tasks($scope){
		$scope.taskH="";
		$scope.taskM="";
		$scope.taskD="";
		$scope.taskMO="";
		$scope.taskY="";
		$scope.Tasks=[];
		$scope.taskContent="";
		
		$scope.getTask=function(){
			$scope.date=[$scope.taskH.toString() + ":" + $scope.taskM.toString(),$scope.taskD.toString()+"-"+$scope.taskMO.toString()+"-"+$scope.taskY.toString()]
			$scope.Task=[$scope.date,$scope.taskContent]
			
			$scope.Tasks.unshift($scope.Task);
			$scope.TL=$scope.Tasks.length;
		};
		
	}
	})();
