// JavaScript source code
var myapp =angular.module("myApp",['ngRoute']);
myapp.config(["$routeProvider",function($routeProvider){
	$routeProvider
	.when("/home",
		{templateUrl:"home.html",
		controller:"myCtrl"})

	.when("/products", 
	 	{templateUrl:"products.html",
	 	controller:"myCtrl"})

	.when("/services",
		{templateUrl:"services.html",
		controller:"myCtrl"})

	.when("/contactus",
		{templateUrl:"contactus.html",
		controller:"myCtrl"})

	.otherwise("/");
}]);

myapp.run(['$rootScope',function($rootScope){
	$rootScope.$on('$routeChangeSuccess',function(event,current,previous){
		$rootScope.mytitle=current.$$route.title;
	});
}]);

myapp.controller("myCtrl1",function($scope){

});

myapp.controller("ProdCtrl",function($scope){


});