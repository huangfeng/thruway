/**
 * Created with JetBrains PhpStorm.
 * User: huangfeng
 * Date: 14-7-10
 * Time: 下午3:29
 * To change this template use File | Settings | File Templates.
 */
'use strict';

define(['controllers/module'], function(controllers) {
    return controllers.controller('EditDeptController', ['$scope', 'DeptService', '$modalInstance', 'dept',

        function($scope, deptService, $modalInstance, dept) {
            var initialized = false;

            $scope.dept = dept;
            $scope.errorMsg = null;

            $scope.initialize = function() {
                if (!initialized) {
                    $('#deptForm').validate();
                }
            }

            $scope.editDept = function() {
                if ($('#deptForm').valid()) {
                    deptService.editDept($scope.dept, $scope.showMsg);
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