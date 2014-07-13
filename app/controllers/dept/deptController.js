/**
 * Created with JetBrains PhpStorm.
 * User: huangfeng
 * Date: 14-7-9
 * Time: 下午2:35
 * To change this template use File | Settings | File Templates.
 */
'use strict';

define(['controllers/module'], function(controllers) {

    return controllers.controller('DeptController', ['$scope', 'DeptService', '$q', '$modal', '$log',
        function ($scope, deptService, $q, $modal, $log) {
            $scope.depts = [];

            $scope.loadDepts = function() {
                 deptService.showAllDepts().success(function(resp) {
                    var deferred = $q.defer();
                    $scope.depts = resp;
                    deferred.resolve($scope.depts);
                });
            };

            $scope.columnDefs =  [
                {"mDataProp":"dept_no", "aTargets":[0]},
                {"mDataProp":"dept_name", "aTargets":[1]}
            ];

            $scope.showActionColumn = function() {
                return true;
            }

            $scope.tableTools = function() {
                $.fn.dataTable.TableTools.BUTTONS.add_new_dept = $.extend(
                    true,
                    $.fn.dataTable.TableTools.buttonBase,
                    {
                        "sNewLine": "<br>",
                        "sButtonText": "<i class='icofont-user'></i>&nbsp;添加新部门",
                        "sDiv": "",
                        "fnClick": function( nButton, oConfig ) {
                            $scope.openNewDept();
                        }
                    }
                );
                return "add_new_dept";
            };

            $scope.deptAction = function(nRow, aData, iDisplayIndex, iDisplayIndexFull) {
                $(nRow).on("click", 'button#edit', function() {
                    $scope.openEditDept(aData);
                });
                $(nRow).on("click", 'button#delete', function() {
                    $scope.deleteDept(aData);
                });
                return nRow;
            };

            $scope.openEditDept = function(dept) {
                $log.info("edit dept " + dept);
                var modalInstance = $modal.open({
                    templateUrl: 'app/views/dept/editDept.html',
                    controller: 'EditDeptController',
                    backdrop: 'static',
                    keyboard: false,
                    resolve: {
                        dept: function() {
                            return dept;
                        }
                    }
                });

                modalInstance.result.then(function (isSuccessful) {
                    $scope.loadDepts();
                }, function () {
                    $log.info('Modal dismissed at: ' + new Date());
                });
            };

            $scope.deleteDept = function(dept) {
                $log.info("delete user " + dept);
                $.messager.model = {
                    ok:{ text: "确认", classed: 'btn btn-warning' },
                    cancel: { text: "取消", classed: 'btn btn-inverse' }
                };
                var content = '<div class="alert alert-warning"><span class="glyphicon glyphicon-warning-sign"></span>&nbsp;&nbsp;是否确定删除部门' + dept.dept_name + '？</div>';


                $.messager.confirm("确认删除", content, function() {
                     deptService.deleteDept(dept).then(function (){
                        $log.info(dept + "deleted");
                        $scope.loadDepts();
                    });
                });
            }

            $scope.openNewDept = function () {

                var modalInstance = $modal.open({
                    templateUrl: 'app/views/dept/newDept.html',
                    controller: 'NewDeptController',
                    backdrop: 'static',
                    keyboard: false
                });

                modalInstance.result.then(function (isSuccessful) {
                    $scope.loadDepts();
                }, function () {
//                    $log.info('Modal dismissed at: ' + new Date());
                });

            };

            $scope.loadDepts();
        }
    ]);
});