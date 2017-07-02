const angularApp=angular.module('siddhu',['ngRoute','postServices','angular-ranger']);

angularApp.config(['$routeProvider',(a)=>{

a.when('/',{
    templateUrl:'./partials/home.html',
    title:'Movies listing | Flight Network'
});

}]);

angularApp.controller('mainController',function(postFactory, $scope){
   var self=this;
   this.hello="Siddhu Vydyabhushan's";
   this.movieList = JSON.parse(localStorage.getItem('movieData'));
   this.loading = true;
   if(!this.movieList) {
    postFactory.get().then(function(response){
        if(response.status === 200) {
            localStorage.movieData = JSON.stringify(response.data);
        }
    });
   }
   this.movieList = JSON.parse(localStorage.getItem('movieData'));
   console.log(this.movieList);
   this.isReverse = true; // for ascending order
   this.loading = false;
});

angularApp.run(['$rootScope', '$route', function($rootScope, $route) {
    $rootScope.$on('$routeChangeSuccess', function() {
        document.title = $route.current.title;
    });
}]);