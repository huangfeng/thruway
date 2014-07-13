/**
 * Created with JetBrains PhpStorm.
 * User: huangfeng
 * Date: 14-7-8
 * Time: 下午1:04
 * To change this template use File | Settings | File Templates.
 */
'use strict';

define(['controllers/module'], function(controllers) {
    return controllers.controller('NewDeptController', ['$scope', 'DeptService', '$modalInstance',

        function($scope, deptService, $modalInstance) {
            var initialized = false;

            $scope.dept = {};
            $scope.errorMsg = null;

            $scope.initialize = function() {
                if (!initialized) {
                    $('#deptForm').validate();
                }
            }

            $scope.addNewDept = function() {
                if ($('#deptForm').valid()) {
                    deptService.addDept($scope.dept, $scope.showMsg);
                }
            };

            $scope.showMsg = function(data) {
                var status = data.status;
                if (status == 0) {
                    delete $scope.dept;
                    delete $scope.errorMsg;
                    $modalInstance.close(true);
                } else {
                    $scope.errorMsg = data.msg;
                }
            };

            $scope.showErrorMsg = function() {
                return $scope.errorMsg ? true : false;
            };

            $scope.close = function () {
                $modalInstance.dismiss('cancel');
            };
        }
    ]);
});