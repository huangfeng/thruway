/**
 * Created with JetBrains PhpStorm.
 * User: huangfeng
 * Date: 14-7-10
 * Time: 上午9:11
 * To change this template use File | Settings | File Templates.
 */
'use strict';

define(['directives/module'], function(app) {
    return app.directive('selectBoxIt', [function() {
        return function(scope, element, attrs) {

            // apply DataTable options, use defaults if none specified by user
            var options = {};
            if (attrs.selectBoxIt.length > 0) {
                options = scope.$eval(attrs.selectBoxIt);
            } else {
                options = {
                    // Uses the Twitter Bootstrap theme for the drop down
                    theme: "bootstrap",
                    showFirstOption: false
                };
            }

            if (attrs.showFirstOption) {
                options["showFirstOption"] = Boolean.valueOf(attrs.showFirstOption);
            }

            if (attrs.defaultText) {
                options["defaultText"] = attrs.defaultText;
            }

            var selectComponent = $(element);
            // apply the plugin
            selectComponent.selectBoxIt(options);
            selectComponent.bind({
                // Binds to the 'open' event on the original select box
                "open": function() {
                    // Adds the Twitter Bootstrap 'dropup' class to the drop down
                    $(this).data("selectBox-selectBoxIt").dropdown.addClass("dropup");
                },

                // Binds to the 'close' event on the original select box
                "close": function() {
                    // Removes the Twitter Bootstrap 'dropup' class from the drop down
                    $(this).data("selectBox-selectBoxIt").dropdown.removeClass("dropup");
                }
            });
            var dataComp = selectComponent.data("selectBox-selectBoxIt");

            if (attrs.fnOnChange) {
                var fnOnChange = scope.$eval(attrs.fnOnChange);
                selectComponent.on("change", fnOnChange);
            }

            // watch for any changes to our data, rebuild the DataTable
            scope.$watch(attrs.selections, function(value) {
                var val = value || null;
                if (val) {
                    dataComp.add(val);
                    if (attrs.defaultValue) {
                        dataComp.wait(200, scope.setDefaultValue);
                    }
                }
            });

            scope.setDefaultValue = function() {
                var defaultValue = scope.$eval(attrs.defaultValue);
                return dataComp.selectOption(defaultValue)
            };

        };
    }]);
});