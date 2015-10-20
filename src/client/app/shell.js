(function() {
    'use strict';

    angular
        .module('app')
        .controller('Shell', Shell);

    Shell.$inject = ['$timeout'];

    function Shell($timeout) {
        /*jshint validthis: true */
        var vm = this;

        vm.title = 'Template';
        vm.busyMessage = 'Please wait ...';
        vm.isBusy = true;
        vm.showSplash = true;

        activate();

        function activate() {
//            Using a resolver on all routes or dataservice.ready in every controller
//            dataservice.ready().then(function(){
//                hideSplash();
//            });
            hideSplash();
        }

        function hideSplash() {
            //Force a 1 second delay so we can see the splash.
            $timeout(function() {
                vm.showSplash = false;
            }, 1000);
        }
    }
})();
