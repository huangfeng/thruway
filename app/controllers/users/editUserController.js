/**
 * Created with JetBrains PhpStorm.
 * User: huangfeng
 * Date: 14-7-8
 * Time: 下午1:04
 * To change this template use File | Settings | File Templates.
 */
'use strict';

define(['controllers/module'], function(controllers) {
    return controllers.controller('EditUserController', ['$scope', 'UsersService', '$modalInstance', 'editUser',  'deptsHolder',

        function($scope, usersService, $modalInstance, editUser, deptsHolder) {
            $scope.user = editUser;
            $scope.errorMsg = null;

            $scope.depts = function() {
                var selections = [];
                var data = deptsHolder.data;
                if (data) {
                    data.forEach(function(dept) {
                        selections.push({value: dept.id, text: dept.dept_name});
                    });
                }
                return selections;
            };

            $scope.deptDefault = editUser.dept_id;

            $scope.deptChange = function(e) {
                if (e.target.value && e.target.value != $scope.user.dept_id) {
                    $scope.user.dept_id = e.target.value;
                }
            }

            var initialized = false;

            $scope.initialize = function() {
                if (!initialized) {
                    $('#form-wizard').wizard({
                        stepsWrapper: "#wrapped",
                        submit: ".submit",
                        beforeSelect: function( event, state ) {
                            var inputs = $(this).wizard('state').step.find(':input');
                            return !inputs.length || !!inputs.valid();
                        }
                    }).submit(function( event ) {
                        event.preventDefault();
                        $scope.errorMsg = null;
                        $scope.editUser();
                    }).wizard('form').validate({
                        errorPlacement: function(error, element) {
                            error.insertAfter( element );
                        }
                    });
                    initialized = true;
                }
            }

            $scope.editUser = function() {
                usersService.editUser($scope.user, $scope.showMsg);
            };

            $scope.showMsg = function(data) {
                var status = data.status;
                if (status == 0) {
                    delete $scope.user;
                    $('#form-wizard').wizard("destroy");
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