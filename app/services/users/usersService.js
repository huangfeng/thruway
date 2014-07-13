/**
 * Created with JetBrains PhpStorm.
 * User: huangfeng
 * Date: 14-7-4
 * Time: 下午3:24
 * To change this template use File | Settings | File Templates.
 */
'use strict';

define(['services/module'], function(app) {
    return app.factory('UsersService', ['$http', '$window', '$q', '$rootScope',

        function($http, $window, $q, $rootScope) {

            var addUser = function(newUser, callback) {
                var deferred = $q.defer(),
                     cb = callback || angular.noop;
                var url = 'Api/users/addUser';
                $http.post(url, newUser).then(
                    function (response) {
                        cb(response.data);
                    });
                return deferred.promise;
            };

            var editUser = function(user, callback) {
                var deferred = $q.defer(),
                     cb = callback || angular.noop;
                var url = 'Api/users/editUser';
                $http.post(url, user).then(
                    function (response) {
                        cb(response.data);
                    });
                return deferred.promise;
            };

            var deleteUser = function(user) {
                var url = 'Api/users/deleteUser';
                return $http.post(url, user);
            };

            var showAllUsers = function() {
                var url = 'Api/users/showAll';
                return $http.get(url);
            };

            return {
                addUser: function(newUser, callback) {
                    addUser(newUser, callback);
                },
                editUser: function(user, callback) {
                    editUser(user, callback);
                },
                deleteUser: function(user) {
                    return deleteUser(user);
                },
                showAllUsers: function() {
                    return showAllUsers();
                }
            }

        }
    ]);
});