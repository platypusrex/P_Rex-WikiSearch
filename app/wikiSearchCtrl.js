(function(wikiSearch){
    wikiSearch.controller('mainController', ['$scope', 'searchService', function($scope, searchService){

        var onSuccess = function(data){
            $scope.wikiPages = data.query.search.map(function(val){
                return {
                    snippet: val.snippet + '<em>....click anywhere to read more</em>',
                    timeStamp: val.timestamp,
                    title: val.title,
                    link: 'https://en.wikipedia.org/wiki/' + val.title
                }
            });
        };

        var onError = function(err){
            $scope.err = 'Sorry, dude. Looks like there was a problem with the request. Try again in a minute.'
        };

        $scope.getWikiResults = function(inputValue){
            searchService.searchWikipedia(inputValue).then(onSuccess, onError);
        };

    }]);
}(angular.module('WikiSearchApp')));