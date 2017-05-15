console.log('in client');

var myApp = angular.module('myApp', []);

//setting up controller
myApp.controller('Moviesearch', function($http){
  //view model
  var vm = this;

  vm.movieArray = [];

vm.getMovies = function(){
  console.log('getting OMDb movies');
  return $http({
    method: 'GET',
    url:'http://www.omdbapi.com/?s=' + vm.searchbox,
  }).then(function success(response){
    console.log('this is the response', response);
    console.log('heres the data', response.data);
    vm.movieArray = response.data.Search;
    // console.log('in the search results', movieArray.Search);
    return vm.movieArray;
  });

};

});//end controller