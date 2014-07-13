/**
 * Created by huangfeng on 2014/6/23.
 */
'use strict';

define(['controllers/module'], function(controllers) {

    return controllers.controller('StorageController', ['$scope', '$state',
        function ($scope, $state) {
            $scope.storages = [];

            $scope.columnDefs =  [
                {"mDataProp":"catalog.catalog_code", "aTargets":[0]},
                {"mDataProp":"catalog.catalog_name", "aTargets":[1]},
                {"mDataProp":"goods_name", "aTargets":[2]},
                {"mDataProp":"goods_no", "aTargets":[3]},
                {"mDataProp":"deposit", "aTargets":[4]}
            ];

            $scope.tableTools = function() {

                $.fn.dataTable.TableTools.BUTTONS.add_to_cart= $.extend(
                    true,
                    $.fn.dataTable.TableTools.buttonBase,
                    {
                        "sNewLine": "<br>",
                        "sButtonText": "<i class='icon-shopping-cart'></i>&nbsp;添加到申请单",
                        "sDiv": "",
                        "fnClick": function( nButton, oConfig ) {
//                                document.getElementById(oConfig.sDiv).innerHTML =
//                                    this.fnGetTableData(oConfig);
                            $scope.addToCart();
                        }
                    }
                );
                return "add_to_cart";
            };
//
//            $scope.userAction = function(nRow, aData, iDisplayIndex, iDisplayIndexFull) {
//                $(nRow).popover( {
//                    animation: true,
//                    html: true,
//                    placement: 'top',
//                    trigger: 'manual',
//                    title: "操作",
//                    content: '<div class="row-fluid"><div class="span6"><button id="editUserBtn" class="btn btn-block btn-info"><i class="icon-edit"></i> 修改</button></div>' +
//                        '<div class="span6"><button id="deleteUserBtn" class="btn btn-block btn-danger"><i class="icon-remove"></i> 删除</button></div></div>',
//                    delay: {show: 500, hide: 100}
//                });
//                $(nRow).bind('click', function() {
//                    if ( $(this).hasClass('active') ) {
//                        $(this).removeClass('active');
//                        $(this).popover('hide');
//                    }
//                    else {
//                        $('tr.active').popover("destroy");
//                        $('tr.active').removeClass('active');
//                        $(this).addClass('active');
//                        $(this).popover('show');
//                        $("#editUserBtn").bind("click", function() {
////                            $scope.openEditUser(aData);
//                            $(nRow).popover('hide');
//                            $('tr.active').removeClass('active');
//                        });
//                        $("#deleteUserBtn").bind("click", function() {
////                            $scope.deleteUser(aData);
//                            $(nRow).popover('hide');
//                            $('tr.active').removeClass('active');
//                        });
//                    }
//
//                });
//                return nRow;
//            };

            $scope.addToCart = function() {

            };

        }
    ]);
});