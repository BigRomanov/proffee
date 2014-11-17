'use strict';


angular.module('core').controller('ProController', ['$scope', 'Authentication', '_',
	function($scope, Authentication, _) {
		// This provides Authentication context.
		$scope.authentication = Authentication;

    console.log($scope.authentication.roles);
    if (!_.contains($scope.authentication.roles, "pro")) {
      $location.path('home');
    }
	}
]);