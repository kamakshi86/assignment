/*Controller JS*/
app.controller('MainController', function($scope, $route, $routeParams, $location) {
     $scope.$route = $route;
     $scope.$location = $location;
     $scope.$routeParams = $routeParams;
 });
 
app.config(function($routeProvider){
      $routeProvider
          .when('/',{
                templateUrl: 'login.html'
          })
          .when('/about',{
                templateUrl: 'about.html'
          });
});
app.controller('myCtrl',function($scope){

    /*      
    Here you can handle controller for specific route as well.
    */
	$scope.users = [
		{name:"alice",pswd:"password1"},
		{name:"bob", pswd:"password2"},
		{name:"charlie", pswd:"password3"},
		{name:"dan", pswd:"password4"}
	];
	for(i=0;i<$scope.users.length;i++){
		if($scope.userName == scope.users.name && $scope.passWord == scope.users.pswd)
	}
	
});

