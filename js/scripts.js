//"iffy" - IIFE
(function() {

	angular.module("PortfolioApp", [])
		 .controller("MainController", ["$scope", "$http", MainController]);

	function MainController($scope, $http) {

		function error(){
			console.log("Error: Could not load the websites!");
		}

		var promise = $http.get('data.json');
		var gatherDataComplete = function(response){
			$scope.retrievedData = response.data;

			console.log($scope.retrievedData);
		};

		promise.then(gatherDataComplete, error);

	}


	window.onload = function(){


	};

}());
