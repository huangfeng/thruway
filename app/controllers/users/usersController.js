/**
 * Created by huangfeng on 2014/7/1.
 */
'use strict';

define(['controllers/module'], function(controllers) {

    return controllers.controller('UsersController', ['$scope', 'UsersService', 'DeptService', '$q', '$modal', '$log',
        function ($scope, usersService, deptService, $q, $modal, $log) {
            $scope.users = [];

            $scope.loadUsers = function() {
                usersService.showAllUsers().success(function(resp) {
                    var deferred = $q.defer();
                    $scope.users = resp;
                    deferred.resolve($scope.users);
                });
            };

            $scope.columnDefs =  [
                {"mDataProp":"user_no", "aTargets":[0]},
                {"mDataProp":"username", "aTargets":[1]},
                {"mDataProp":"name", "aTargets":[2]},
                {"mDataProp":"dept.dept_name", "aTargets":[3]}
            ];

            $scope.showActionColumn = function() {
                return true;
            }


            $scope.tableTools = function () {
                $.fn.dataTable.TableTools.BUTTONS.add_new_user= $.extend(
                    true,
                    $.fn.dataTable.TableTools.buttonBase,
                    {
                        "sNewLine": "<br>",
                        "sButtonText": "<i class='icofont-user'></i>&nbsp;添加新用户",
                        "sDiv": "",
                        "fnClick": function( nButton, oConfig ) {
                            $scope.openNewUser();
                        }
                    }
                );
                return "add_new_user";
            };

            $scope.userAction = function(nRow, aData, iDisplayIndex, iDisplayIndexFull) {
                $(nRow).on("click", 'button#edit', function() {
                    $scope.openEditUser(aData);
                });
                $(nRow).on("click", 'button#delete', function() {
                    $scope.deleteUser(aData);
                });
                return nRow;
            };

            $scope.openNewUser = function () {

                var modalInstance = $modal.open({
                    templateUrl: 'app/views/users/newUser.html',
                    controller: 'NewUserController',
                    backdrop: 'static',
                    keyboard: false,
                    resolve: {
                        deptsHolder: function() {
                            return deptService.showAllDepts();
                        }
                    }
                });

                modalInstance.result.then(function (isSuccessful) {
                    $scope.loadUsers();
                }, function () {
                    $log.info('Modal dismissed at: ' + new Date());
                });

            };

            $scope.openEditUser = function(user) {
                $log.info("edit user " + user);
                var modalInstance = $modal.open({
                    templateUrl: 'app/views/users/editUser.html',
                    controller: 'EditUserController',
                    backdrop: 'static',
                    keyboard: false,
                    resolve: {
                        editUser: function() {
                            return user;
                        },
                        deptsHolder: function() {
                            return deptService.showAllDepts();
                        }
                    }
                });

                modalInstance.result.then(function (isSuccessful) {
                    $scope.loadUsers();
                }, function () {
                    $log.info('Modal dismissed at: ' + new Date());
                });
            };

            $scope.deleteUser = function(user) {
                $log.info("delete user " + user);
                $.messager.model = {
                    ok:{ text: "确认", classed: 'btn btn-warning' },
                    cancel: { text: "取消", classed: 'btn btn-inverse' }
                };
                var content = '<div class="alert alert-warning"><span class="glyphicon glyphicon-warning-sign"></span>&nbsp;&nbsp;是否确定删除用户' + user.name + '？</div>';

                $.messager.confirm("确认删除", content, function() {
                    usersService.deleteUser(user).then(function (){
                        $log.info(user + "deleted");
                        $scope.loadUsers();
                    });
                });
            }

            $scope.loadUsers();
        }
    ]);
});