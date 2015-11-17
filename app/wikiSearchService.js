(function(wikiSearch){
    wikiSearch.factory('searchService', ['$http', function($http){

        var searchWikipedia = function(val){
            return $http.jsonp('https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=' + val + '&format=json&callback=JSON_CALLBACK')
                .then(function(res){
                    return res.data;
                });
        };

        return {
            searchWikipedia: searchWikipedia
        }

    }]);
}(angular.module('WikiSearchApp')));