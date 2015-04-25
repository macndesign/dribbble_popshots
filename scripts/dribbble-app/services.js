angular.module('dribbbleApp')
    .factory('DribbbleService', ['$http', '$q',
        function($http, $q){
            return {
                getDribbbles: function(page) {
                    return $http.jsonp('http://api.dribbble.com/shots/popular?per_page=9&page=' + page + '&callback=JSON_CALLBACK')
                        .then(function(resp){
                            if (typeof resp.data === 'object') {
                                return resp.data;
                            } else {
                                $q.reject(resp.data);
                            }
                        }, function (resp) {
                            return $q.reject(resp);
                        });
                },
                getDribbbleDetail: function (dribbbleId) {
                    return $http.jsonp('http://api.dribbble.com/shots/' + dribbbleId + '?callback=JSON_CALLBACK')
                        .then(function (resp) {
                            if (typeof resp.data === 'object') {
                                return resp.data;
                            } else {
                                $q.reject(resp.data);
                            }
                        }, function (resp) {
                            return $q.reject(resp);
                        });
                }
            }
        }]);
