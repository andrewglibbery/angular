'use strict';

angular.module('todoListApp')
.service('dataService', function($http) {
	this.helloConsole = function(){
		console.log('This is the hello console service!');
	};

	this.getTodos = function(callback) {
		$http.get('mock/todos.json')
		.then(callback)
	};

	this.deleteTodo = function(todo) {
		console.log("This" + todo.name + "todo has been deleted");
	};

	this.saveTodo = function(todo) {
		console.log("this " + todo.name + " todo has been saved");
	}


});