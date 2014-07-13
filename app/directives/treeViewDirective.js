/**
 * Created with JetBrains PhpStorm.
 * User: huangfeng
 * Date: 14-7-11
 * Time: 下午1:35
 * To change this template use File | Settings | File Templates.
 */
'use strict';

define(['directives/module'], function(app) {
    return app.directive('treeView', [function() {
        return function(scope, element, attrs) {
            var tree = [
                {
                    text: "Parent 1",
                    nodes: [
                        {
                            text: "Child 1",
                            nodes: [
                                {
                                    text: "Grandchild 1"
                                },
                                {
                                    text: "Grandchild 2"
                                }
                            ]
                        },
                        {
                            text: "Child 2"
                        }
                    ]
                },
                {
                    text: "Parent 2"
                },
                {
                    text: "Parent 3"
                },
                {
                    text: "Parent 4"
                },
                {
                    text: "Parent 5"
                }
            ];

            $(element).treeview({
                color: '#000000',
                backColor: '#FFFFFF',
                borderColor:  '#dddddd',
                bootstrap2: true,
                showBorder: true,
                nodeIcon: 'glyphicon glyphicon-list',
                data: tree

            });
        };
    }]);
});