(function(){
	var task = angular.module("app");
	task.controller("tasks",tasks);
	
	function tasks($scope){
		$scope.taskContent="";
		
		$scope.getTask=function(){
			
			$scope.time='';
			
		while($scope.taskContent[0]!='-'){
			
			$scope.time+=$scope.taskContent[0];
			
			$scope.taskContent=$scope.taskContent.substr(1);
		}
		
		$scope.taskC='';
		$scope.taskContent=$scope.taskContent.substr(1)
		while($scope.taskContent[0]!=null){
			$scope.taskC+=$scope.taskContent[0];
			$scope.taskContent=$scope.taskContent.substr(1)
			
		}
		
		};
	}
	})();
