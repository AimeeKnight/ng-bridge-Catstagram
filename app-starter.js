//On your terminal cd into your catsagram folder. cd ~/Desktop/catstagram
//npm install connect serve-static
//Open localhost:8080/index.html in your browser.

//Create an angular app called catstagram
// var app = ...

//Create a CatController
app.controller('CatController', ['$scope', function($scope){
	//Get the cats data using $http from data.json.
	//On success function assign the data.cats to $scope.cats variable. 
	// Don't forget to add $http as your contollers dependecy.

	//Write a $scope.like function that takes index as an argument and adds 1 to likes attribute of the cat on $scope.cats[index]. 
	// $scope.like = ...

	//Create a function that takes a newCat object as argument.
	// Add likes attribute to the newCat object and assign 1 as the value.
	// Add newCat to the beginning of the $scope.cats array.
	// $scope.addCat = ...
}]);

//Optional 

//Create a directive to replace the <span> tag. 
//Add "liked" class to your element on mouseenter event.

//Optional
//Create the submitComments function in your controller
