/**
 * Created by huangfeng on 2014/6/23.
 */
'use strict';

define(['controllers/module'], function(controllers) {

    return controllers.controller('MainController', ['$scope', '$state',  'AuthService', '$modal',
        function ($scope, $state, authService, $modal) {
            $scope.isLoggedIn = function() {
                return authService.isLoggedIn();
            };

            $scope.quickSearch = function() {
                $window.alert($scope.queryString);
            };

            $scope.showLatestNews = function() {
                var modalInstance = $modal.open({
                    templateUrl: 'app/views/layout/latestNews.html',
                    controller: 'LatestNewsController',
                    backdrop: 'static',
                    keyboard: false
                });
            };
//
//            var initialized = false;
//
//            $scope.initialize = function() {
//                if (!initialized) {
//                    $("span[data-chart=peity-bar]").peity("bar");
//                    initialized = true;
//                }
//            };

            $scope.totalGoods = 8394;

            $scope.goodsIn = 433;

            $scope.goodsOut = 245;

            $scope.getCurrentHeadTitle = function() {
                return $state.$current.data.headTitle;
            };

            $scope.getCurrentSubTitle = function() {
                return $state.$current.data.subTitle;
            };

            $scope.getCurrentBreadcrumbName = function() {
                return $state.$current.data.breadcrumbName;
            };

            $scope.getCurrentIconName = function() {
                return $state.$current.data.iconName;
            }
        }
    ]);
});