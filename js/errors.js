var app = angular.module("hustApp", ["ngRoute"]);
app.config(function($routeProvider) 
{
$routeProvider
.when("/",
{ templateUrl : "index.html" })
.when("/404", { templateUrl : "404.html" })
.when("/403", { templateUrl : "403.html" })
.when("/500", { templateUrl : "500.html" 
});
});
