/**
 * Created by huangfeng on 2014/6/23.
 */
'use strict';

define(['controllers/module'], function(controllers) {

    return controllers.controller('NavbarController', ['$scope', '$state',
        function ($scope, $state) {
            $scope.isActive = function(navName) {
                var navNameArray = navName.split("|");
                var index = -1;
                for (var i = 0; i < navNameArray.length; i ++) {
                    if ($state.$current.name.indexOf(navNameArray[i]) >= 0) {
                        return "active";
                    }
                }

                return "";
            };

        }
    ]);
});