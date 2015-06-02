'use strict';

eventsApp.directive('mySample', function() { 
	return {
		restrict: 'C',
		template: "<input type='text' ng-model='sampleData' class='form-control' /><br>{{sampleData}}",
		scope: {
			
		}
	};
});