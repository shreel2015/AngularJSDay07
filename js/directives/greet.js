'use strict';

eventsApp.directive('greet', function() { 
	return {
		restrict: 'E',
		replace: true,
		template: "<button class='btn' ng-click='sayWelcome()'>Say Welcome</button>",
		controller: '@',
		name: 'ctrl'
	};
});

eventsApp.controller('greetController', function($scope) {
	$scope.sayWelcome = function() {
		alert('Welcome !!');
	}
});