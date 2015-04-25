angular.module('dribbbleApp')
    .controller('DribbbleDetailCtrl', ['$routeParams', 'DribbbleService', '$window',
        function($routeParams, DribbbleService, $window) {
        var self = this;

        // Show loading modal
        var $loading = $('#loading');
        $loading.modal('show');

        self.init = function() {
            self.dribbble = {};
        };

        DribbbleService.getDribbbleDetail($routeParams.dribbbleId)
            .then(function (resp) {
                $loading.modal('hide');
                self.dribbble = resp;
            });
    }]);
