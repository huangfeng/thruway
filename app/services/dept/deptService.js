/**
 * Created with JetBrains PhpStorm.
 * User: huangfeng
 * Date: 14-7-4
 * Time: 下午3:24
 * To change this template use File | Settings | File Templates.
 */
'use strict';

define(['services/module'], function(app) {
    return app.factory('DeptService', ['$http', '$window', '$q', '$rootScope',

        function($http, $window, $q, $rootScope) {

            var addDept = function(dept, callback) {
                var deferred = $q.defer(),
                     cb = callback || angular.noop;
                var url = 'Api/dept/addDept';
                $http.post(url, dept).then(
                    function (response) {
                        cb(response.data);
                    });
                return deferred.promise;
            };

            var editDept = function(dept, callback) {
                var deferred = $q.defer(),
                     cb = callback || angular.noop;
                var url = 'Api/dept/editDept';
                $http.post(url, dept).then(
                    function (response) {
                        cb(response.data);
                    });
                return deferred.promise;
            };

            var deleteDept = function(dept) {
                var url = 'Api/dept/deleteDept';
                return $http.post(url, dept);
            };

            var showAllDepts = function() {
                var url = 'Api/dept/showAll';
                return $http.get(url);
            };

            return {
                addDept: function(dept, callback) {
                    addDept(dept, callback);
                },
                editDept: function(dept, callback) {
                    editDept(dept, callback);
                },
                deleteDept: function(dept) {
                    return deleteDept(dept);
                },
                showAllDepts: function() {
                    return showAllDepts();
                }
            }

        }
    ]);
});