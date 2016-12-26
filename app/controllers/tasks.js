(function() {
	var task = angular.module("app");
	task.controller("tasks", tasks);

	function tasks($scope, $timeout) {
	
		
		$scope.showEdit = false;
		Array.prototype.remove = function(v) {
			if (this.indexOf(v) != -1) {
				this.splice(this.indexOf(v), 1);
				return true;
			}
			return false;
		};

		$scope.Tasks = [];
		var alltasks = localStorage.getItem('Tasks');
		$scope.Tasks = JSON.parse(alltasks);
		if ($scope.Tasks === null) {
			$scope.Tasks = [];
		}

		console.log("Tasks:  " + alltasks)
		$scope.taskdate = "";
		$scope.taskContent = "";
		$scope.doneTasks = [];
		$scope.getTask = function() { //process of adding a new task

			var myDate = $scope.taskdate;

			var task = {
				date : myDate,
				content : $scope.taskContent
			}

			$scope.Tasks.unshift(task);
			localStorage.setItem('Tasks', JSON.stringify($scope.Tasks));
			console.log("showedit:  ", $scope.showEdit)

		};
		//removing a task
		$scope.removeTask = function(task) {
			$scope.Tasks.remove(task)
			localStorage.setItem('Tasks', JSON.stringify($scope.Tasks));
		}
		//mark task as done + remove it from active tab
		$scope.doneTask = function(task){
			$scope.Tasks.remove(task)
			localStorage.setItem('Tasks', JSON.stringify($scope.Tasks));
			$scope.doneTasks.unshift(task);
			localStorage.setItem('doneTasks', JSON.stringify($scope.doneTasks));
		}
	}

})();
