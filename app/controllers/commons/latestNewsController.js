/**
 * Created with JetBrains PhpStorm.
 * User: huangfeng
 * Date: 14-7-8
 * Time: 下午3:09
 * To change this template use File | Settings | File Templates.
 */
'use strict';

define(['controllers/module'], function(controllers) {

    return controllers.controller('LatestNewsController', ['$scope', '$modalInstance',
        function ($scope, $modalInstance) {
            $scope.sDom = "<'row-fluid'<'span4'l><'span8'f>r>t<'row-fluid'<'span6'i><'span6'p>>"

            $scope.close = function () {
                $modalInstance.dismiss('cancel');
            };

        }
    ]);
});