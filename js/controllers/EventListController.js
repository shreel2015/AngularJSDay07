'use strict';

eventsApp.controller('EventListController', 
	function EventListController($scope) {
		$scope.sortorder = 'name';
		$scope.eventlist = {
			events: [
				{
					name: 'Angular Boot Camp',
					date: 1359781015626,
					time: '10:00 am',
					location: {
						address: 'Monalisa Complex',
						city: 'Baroda',
						state: 'Gujarat',
						country: 'India' 
					},
					eventId: 1
				},
				{
					name: 'Code Camp',
					date: 1359781015626,
					time: '10:00 am',
					location: {
						address: 'Monalisa Complex',
						city: 'Baroda',
						state: 'Gujarat',
						country: 'India' 
					},
					eventId: 2
				},
				{
					name: 'Code Retreat',
					date: 1359781015626,
					time: '10:00 am',
					location: {
						address: 'Monalisa Complex',
						city: 'Baroda',
						state: 'Gujarat',
						country: 'India' 
					},
					eventId: 3
				},
				{
					name: 'Fall Code Camp',
					date: 1359781015626,
					time: '10:00 am',
					location: {
						address: 'Monalisa Complex',
						city: 'Baroda',
						state: 'Gujarat',
						country: 'India' 
					},
					eventId: 4
				},
			]
		};
	}
);