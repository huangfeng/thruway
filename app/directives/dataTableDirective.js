/**
 * Created with JetBrains PhpStorm.
 * User: huangfeng
 * Date: 14-7-8
 * Time: 上午9:26
 * To change this template use File | Settings | File Templates.
 */
'use strict';

define(['directives/module'], function(app) {
    return app.directive('dataTable', [function() {
        return function(scope, element, attrs) {
            // apply DataTable options, use defaults if none specified by user
            var isShowActionColumn = false;
            var actionColumnIndex = -1;
            var options = {};
            if (attrs.dataTable.length > 0) {
                options = scope.$eval(attrs.dataTable);
            } else {
                options = {
                    "sDom": "<'row-fluid'<'span12'T>><'row-fluid'<'span6'l><'span6'f>r>t<'row-fluid'<'span6'i><'span6'p>>",
                    "sPaginationType": "bootstrap",
                    "oLanguage": {
                        "sProcessing":   "处理中...",
                        "sLengthMenu":   "显示 _MENU_ 项结果",
                        "sZeroRecords":  "没有匹配结果",
                        "sInfo":         "显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项",
                        "sInfoEmpty":    "显示第 0 至 0 项结果，共 0 项",
                        "sInfoFiltered": "(由 _MAX_ 项结果过滤)",
                        "sInfoPostFix":  "",
                        "sSearch":       "搜索:",
                        "sUrl":          "",
                        "sEmptyTable":     "表中数据为空",
                        "sLoadingRecords": "载入中...",
                        "sInfoThousands":  ",",
                        "oPaginate": {
                            "sFirst":    "首页",
                            "sPrevious": "上页",
                            "sNext":     "下页",
                            "sLast":     "末页"
                        },
                        "oAria": {
                            "sSortAscending":  ": 以升序排列此列",
                            "sSortDescending": ": 以降序排列此列"
                        }
                    },
                    "oTableTools": {
                        "sSwfPath": "vendor/datatables/swf/copy_csv_xls_pdf.swf",
                        "aButtons": [
                            {
                                "sExtends": "xls",
                                "sButtonText": "<i class='typicn-export'></i>&nbsp;导出到Excel"
                            },
                            {
                                "sExtends": "print",
                                "sButtonText": "<i class='icon-print'></i>&nbsp;打印"
                            }
                        ]
                    },
                    "bDestroy": true
                };
            }
            if (attrs.aoShowActionColumn) {
                var isShowActionColumnAttr = scope.$eval(attrs.aoShowActionColumn);
                if ( typeof isShowActionColumnAttr === "function" ) {
                    isShowActionColumn = isShowActionColumnAttr();
                }
                else {
                    isShowActionColumn = Boolean.valueOf(isShowActionColumnAttr);
                }
            }

            if (attrs.aoActionColumn) {
                actionColumnIndex = parseInt(attrs.aoActionColumn);
            }

            if (attrs.sDom) {
                options["sDom"] = scope.$eval(attrs.sDom);
            }

            if (attrs.aoColumns) {
                options["aoColumns"] = scope.$eval(attrs.aoColumns);

            }

            // aoColumnDefs is dataTables way of providing fine control over column config
            if (attrs.aoColumnDefs) {
                var columnDefs =  scope.$eval(attrs.aoColumnDefs);
                if (actionColumnIndex >= 0) {
                    var actionColumnDef = null;
                    if (isShowActionColumn) {
                        actionColumnDef = {
                            "mData": null,
                            "mRender": function ( data, type, row ) {
                                return  '<div class="row-fluid"><div class="span6 pagination-centered">'
                                    + '<button id="edit" class="btn btn-primary btn-small">'
                                    + '    <span class="glyphicon glyphicon-pencil"></span>&nbsp;&nbsp;修改'
                                    + '</button></div>'
                                    + '<div class="span6 pagination-centered"><button id="delete" class="btn btn-danger btn-small">'
                                    + '    <span class="glyphicon glyphicon-trash"></span>&nbsp;&nbsp;删除'
                                    + '</button></div></div>';
                            },
                            bSortable: false,
                            "aTargets":[actionColumnIndex]
                        };

                    } else {
                        actionColumnDef = {
                            "mData": null,
                            "aTargets":[actionColumnIndex]
                        }
                    }
                    columnDefs.push(actionColumnDef);
                }
                options["aoColumnDefs"] = columnDefs;
            }

            if (attrs.fnRowCallback) {
                options["fnRowCallback"] = scope.$eval(attrs.fnRowCallback);
            }

            if (attrs.oTableTools) {
                var extraToolsAttr = scope.$eval(attrs.oTableTools);
                var extraTools = [];
                if (typeof extraToolsAttr == "function") {
                    extraTools = extraToolsAttr();
                    if (typeof extraTools == "array") {
                        if (extraTools.length > 0) {
                            extraTools.reverse().forEach(function(tool) {
                                options["oTableTools"]["aButtons"].unshift(tool);
                            });
                        }
                    }
                    else if (typeof extraTools == "string") {
                        options["oTableTools"]["aButtons"].unshift(extraTools);
                    }
                } else if (typeof extraToolsAttr == "object") {
                    options["oTableTools"] = extraToolsAttr;
                }

            }

            // apply the plugin
            var dataTable = $(element).dataTable(options);
            if (!isShowActionColumn && actionColumnIndex >= 0) {
                dataTable.fnSetColumnVis(actionColumnIndex, false);
            }
            // watch for any changes to our data, rebuild the DataTable
            scope.$watch(attrs.aaData, function(value) {
                var val = value || null;
                if (val) {
                    dataTable.fnClearTable();
                    dataTable.fnAddData(scope.$eval(attrs.aaData));
                }
            });
        };
    }]);
});