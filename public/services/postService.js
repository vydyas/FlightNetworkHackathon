angular.module('postServices',[]).factory('postFactory',function($http){
var services={};

services.get=()=>{
       return $http.get('http://starlord.hackerearth.com/movieslisting');
};

return services;

});