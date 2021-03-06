'use strict';

eventsApp
	.directive('greetingnested', function() { 
		return {
			restrict: 'E',
			replace: true,
			transclude: true,
			template: "<div><button class='btn' ng-click='sayHello()'>Say Hello</button><div ng-transclude></div></div>",
			controller: function($scope) {
				var greetings = ['Hello'];
				$scope.sayHello = function() {
					alert(greetings.join());
				}
				this.addGreeting = function(greeting) {
					greetings.push(greeting);
				}
			}
		}
	})
	.directive('finnish', function() {
		return {
			restrict: 'A',
			require: '^greetingnested',
			link: function(scope, element, attrs, controller) {
				controller.addGreeting('Hei');
			}
		}
	})
	.directive('hindi', function() {
		return {
			restrict: 'A',
			require: '^greetingnested',
			link: function(scope, element, attrs, controller) {
				controller.addGreeting('Namaste');
			}
		}
	})