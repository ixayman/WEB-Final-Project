(function(){
	var task = angular.module("app");
	task.controller("tasks",tasks);
	
	function tasks($scope, $timeout){
		$scope.Tasks=[];
		$scope.Tasks=localStorage.getItem('Tasks');
		$scope.Tasks=JSON.parse($scope.Tasks);
		if($scope.Tasks===null)
		{
			$scope.Tasks=[];
		}
		
		
		console.log("Tasks:  " +$scope.Tasks)
		$scope.taskH="";
		$scope.taskM="";
		$scope.taskD="";
		$scope.taskMO="";
		$scope.taskY="";
		$scope.taskContent="";
		$scope.TL=[]
		$scope.getTask=function(){
			$scope.date=[$scope.taskH.toString() + ":" + $scope.taskM.toString(),$scope.taskD.toString()+"-"+$scope.taskMO.toString()+"-"+$scope.taskY.toString()]
			$scope.Task=[$scope.date,$scope.taskContent]
			
			$scope.Tasks.unshift($scope.Task);
			$scope.TL.unshift($scope.Tasks.length);
			localStorage.setItem('Tasks', JSON.stringify($scope.Tasks));

		};
		
	}
	})();
