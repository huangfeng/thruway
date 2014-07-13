/**
 * Created with JetBrains PhpStorm.
 * User: huangfeng
 * Date: 14-7-8
 * Time: 下午1:04
 * To change this template use File | Settings | File Templates.
 */
'use strict';

define(['controllers/module'], function(controllers) {
    return controllers.controller('NewUserController', ['$scope', 'UsersService', '$modalInstance', 'deptsHolder',

        function($scope, usersService, $modalInstance, deptsHolder) {
            var initialized = false;

            $scope.newUser = {};
            $scope.errorMsg = null;

            $scope.depts = function() {
                var selections = [];
                var data = deptsHolder.data;
                if (data) {
                    data.forEach(function(dept) {
                        selections.push({value: dept.id, text: dept.dept_name});
                    });
                }
                console.log(selections);
                return selections;
            };

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

                        $scope.addNewUser();
                    }).wizard('form').validate({
                        errorPlacement: function(error, element) {
                            error.insertAfter( element );
                        }
                    });

                    initialized = true;
                }
            };

            $scope.addNewUser = function() {
                $scope.errorMsg = null;
                usersService.addUser($scope.newUser, $scope.showMsg);
            };

            $scope.showMsg = function(data) {
                var status = data.status;
                if (status == 0) {
                    delete $scope.newUser;
                    delete $scope.errorMsg;
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