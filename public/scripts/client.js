console.log('in client');

var myApp = angular.module('myApp', []);

//setting up controller
myApp.controller('Moviesearch', function($http){
  //view model
  var vm = this;

  vm.movieArray = [];
//get omdb movies
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
  });//end then
};// end getMovies

vm.postFav = function (title, year, poster) {
  console.log('In post faves');
  var movieToSend = {
    Title: title,
    Year: year,
    Poster: poster,
    // ImdbID: ms.imdbID
  };
  console.log('this the movie to send',movieToSend);

  $http({
    method: 'POST',
    url: '/favorites',
    data: movieToSend,
  }).then( function ( response ) {
    console.log( "this is the POST response", response );
  });//end success
};//end postfav
});//end controller
