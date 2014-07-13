/**
 * Created by huangfeng on 2014/6/17.
 */
'use strict';

define(
    [
        'angular',
        'uiBootstrap',
        'uiRouter',
        'controllers/index',
        'services/index',
        'directives/index'
    ]
    ,function(ng) {

        return ng.module('app', [
            'ui.bootstrap',
            'app.controllers',
            'app.services',
            'app.directives',
            'ui.router'
        ]).config(['$httpProvider', function($httpProvider) {

            $httpProvider.defaults.useXDomain = true;
            delete $httpProvider.defaults.headers.common['X-Requested-With'];

            var interceptor = ['$rootScope', '$q', 'HttpBuffer', function($rootScope, $q, httpBuffer) {
                function success(response) {
                    return response;
                }

                function error(response) {
                    if (response.status === 401 && response.data == 'session_expired') {
                        var deferred = $q.defer();
                        httpBuffer.append(response.config, deferred);
                        $rootScope.$broadcast('event:auth-loginRequired', response);
                        return deferred.promise;
                    }
                    // otherwise, default behaviour
                    return $q.reject(response);
                }

                return function(promise) {
                    return promise.then(success, error);
                };

            }];
            $httpProvider.responseInterceptors.push(interceptor);
        }]).run(['$rootScope', '$state', 'AuthService', function($rootScope, $state, authService) {

            $rootScope.$on("event:auth-loginRequired", function() {
                console.log("fire event event:auth-loginRequired");
                $state.go("login");
            });

            $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
                if (toState.name != 'login' && !authService.isLoggedIn()) {
                    event.preventDefault();
                    $state.go("login");
                }
            });

        }]);
    }
);
