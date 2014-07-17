//Todo Controller

var todoApp = angular.module('todoApp', []);

todoApp.controller("TodoController", function($scope) {
	var todos = [{
		text : "This is task one",
		done : false
	},{
		text : "This is task two",
		done : true
	}];
	$scope.todos = todos;

	$scope.add = function() {
		$scope.todos.push({
			text : $scope.newItem,
			done : false
		});
		$scope.newItem = "";
	};

	$scope.filterOutDone = function() {
		$scope.todos = (function() {
			var arr = [];
			for (var i = 0; i < todos.length; i++) {
				if(!todos[i].done) {
					arr.push(todos[i]);
				}
			}
			return arr;
		})();
	}

});