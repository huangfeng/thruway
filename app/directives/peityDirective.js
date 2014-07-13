/**
 * Created with JetBrains PhpStorm.
 * User: huangfeng
 * Date: 14-7-10
 * Time: 下午5:02
 * To change this template use File | Settings | File Templates.
 */
'use strict';

define(['directives/module'], function(app) {
    return app.directive('peityChart', [function() {
        return function(scope, element, attrs) {
            var chartType = "bar"
            if (attrs.peityChart.length > 0) {
                chartType = attrs.peityChart;
            }

            $(element).peity(chartType);
        };
    }]
)});