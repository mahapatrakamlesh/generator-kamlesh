angular.module('app', [])
.controller('TodoController', function($scope, $http) 
  {
		$scope.todos = [];
		$scope.todo = {};
		
		$scope.firstname=null;
		$scope.pass=null;
		
	    $scope.message=null;
		
		$scope.myFunc = function()
		{
			$http.get('/todo').
				 success(function(data,status) 
				 {
					 if(status==200)
					 {
						$scope.todos = data;
						$scope.todos.forEach( function (i)
								{
									var x = i.name;
									var y=i.email;
									if((x==$scope.firstname) && (y==$scope.pass))
									{
										$scope.message="You are Authorized to Login";
									}
									else
									{
										$scope.message="Not Authorized";
									}
								});
						
					}
					 else
					 {
						 $scope.message="Database Error"; 
					 }
				 });
	  
		};
  });
