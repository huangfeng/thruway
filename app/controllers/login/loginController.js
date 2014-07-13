/**
 * Created by huangfeng on 2014/6/17.
 */
'use strict';

define(['controllers/module'], function(controllers) {

    return controllers.controller('LoginController', ['$scope', '$state', 'AuthService',
        function($scope, $state, authService) {
            console.log("in LoginController");
            var initialized = false;

            $scope.initialize = function() {
                if (!initialized) {
                    $('#loginForm').validate();
                    $('#rememberMe').bootstrapSwitch();
                    initialized = true;
                }
            };

            $scope.login = function() {
                if ($('#loginForm').valid()) {
                    console.log("in login function");
                    authService.login($scope.credentials);
                    $state.go("main.dashboard");
                }
            };
//
//            $scope.$on("event:auth-loginConfirmed", function() {
//                console.log("fire event event:auth-loginConfirmed");
//
//            });

        }
    ]);
});
