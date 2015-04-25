angular.module('dribbbleApp')
    .controller('DribbbleListCtrl', ['DribbbleService', '$window', '$document', '$log', function (DribbbleService,
                                                                                          $window, $document, $log) {

        var self = this;
        var PAGE = 1;

        // Show loading modal
        var $loading = $('#loading');
        $loading.modal('show');

        self.init = function() {
            self.hideLoadMore = false;
            self.dribbbles = [];

            // Scroll load more
            $($window).scroll(function() {
                var $loadMore = $('#load-more');
                if ($loadMore.is(':visible') &&
                    $($window).scrollTop() >= ($($document).height() - $($window).height() - 10)) {
                    $loadMore.trigger('click');
                }
            });

            // Getting dribbbles
            getAndResetDribbbles();
        };

        function getAndResetDribbbles() {
            PAGE = 1;
            self.dribbbles = [];
            self.hideLoadMore = true;
            DribbbleService.getDribbbles(PAGE).then(function(resp) {
                self.pages = resp.pages;
                self.dribbbles = resp.shots;
                $log.log(self.dribbbles);
                self.hideLoadMore = false;
                $loading.modal('hide');
                $log.log(resp);
            });
        }

        self.loadMore = function() {
            $loading.modal('show');
            PAGE++;
            if (PAGE === self.pages) {
                self.hideLoadMore = true;
            }
            DribbbleService.getDribbbles(PAGE).then(function(resp) {
                angular.forEach(resp.shots, function(obj, i) {
                    self.dribbbles.push(obj);
                });
                $loading.modal('hide');
            }, function(resp) {
                $log.log(resp);
                $loading.modal('hide');
            });
        };
    }]);
