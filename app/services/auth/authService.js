/**
 * Created by huangfeng on 2014/6/20.
 */
'use strict';

define(['services/module'], function(app) {
    return app.factory('AuthService', ['$http', '$window', '$q', 'AuthNotificationService', '$rootScope',

        function($http, $window, $q, authNotification, $rootScope) {

            $rootScope.currentUser = getUserFromSessionStorage();

            function getUserFromSessionStorage() {
                var token = $window.sessionStorage.token || null;
                if (token) {
                    var encodeProfile = token.split('.')[1];
                    var profile = encodeProfile;// JSON.parse(urlBase64Decode(encodeProfile));
                    return profile;
                }
                return undefined;
            };

            var urlBase64Decode = function(str) {
                var output = str.replace('-', '+').replace('_', '/');
                switch (output.length % 4) {
                    case 0:
                        break;
                    case 2:
                        output += '==';
                        break;
                    case 3:
                        output += '=';
                        break;
                    default:
                        throw 'Illegal base64url string!';
                }
                return window.atob(output); //polifyll https://github.com/davidchambers/Base64.js
            };

            var login = function (credentials) {
                var url = '/auth/login';
                var deferred = $q.defer();
                authNotification.loginConfirmed();

                $window.sessionStorage.token = credentials.userName + "." + credentials.password;
                $rootScope.isAuthenticated = true;
                var data = {token: credentials.userName + "." + credentials.password};
                var encodedProfile = data.token.split('.')[1];
                var profile = encodedProfile; //JSON.parse(urlBase64Decode(encodedProfile));
                $rootScope.currentUser = profile;
                console.log('Welcome ' + profile.name);
                deferred.resolve(profile);
//                $http.post(url, credentials).then(
//                    function (response) {
//                        var token = response.data.token;
//                        var username = response.data.username;
//
//                        if (token && username) {
//                            $window.localStorage.token = token;
//                            $window.localStorage.username = username;
//                            deferred.resolve(true);
//                            userIsLoggedIn = true;
//                            authNotification.loginConfirmed();
//                        } else {
//                            deferred.reject('Invalid data received from server');
//                            authNotification.loginCancelled();
//                        }
//                    },
//                    function (response) {

//                delete $window.sessionStorage.token;
//                $rootScope.isAuthenticated = false;
//                $rootScope.currentUser = null;
//                cb(data.error);
//                deferred.reject($rootScope.currentUser);
//                        userIsLoggedIn = false;
//                        deferred.reject(response.data.error);
//                    }
//                );
                return deferred.promise;
            };

            var logout = function() {
                var deferred = $q.defer();
                var url = '/auth/logout';
                authNotification.loginCancelled();
                delete $window.sessionStorage.token;
                $rootScope.isAuthenticated = false;
                $rootScope.currentUser = null;
                deferred.resolve();
//
//                $http.delete(url).then(
//                    function () {
//                        userIsLoggedIn = false;
//                        $window.localStorage.removeItem('token');
//                        $window.localStorage.removeItem('username');
//                        deferred.resolve();
//                        authNotification.loginCancelled();
//                    },
//                    function (error) {
//                        userIsLoggedIn = false;
//                        deferred.reject(error.data.error);
//                        authNotification.loginCancelled();
//                    }
//                );
                return deferred.promise;
            };

            var isLoggedIn = function() {
                var user = $rootScope.currentUser;
                return !!user;
            };

            var currentUser = function() {
                return $rootScope.currentUser;
            };

            return {
                login: function(credentials) {
                    return login(credentials);
                },
                logout: function() {
                    return logout();
                },
                isLoggedIn: function() {
                    return isLoggedIn();
                },
                currentUser: function() {
                    return currentUser();
                }
            }
        }
    ]);
});