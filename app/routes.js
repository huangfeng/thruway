/**
 * Created by huangfeng on 2014/6/19.
 */
define(
    [
        './app'
    ]
    ,function(app) {
        return app.config(['$stateProvider', '$urlRouterProvider',
            function($stateProvider, $urlRouterProvider) {

                $urlRouterProvider.otherwise('/login');

                $stateProvider
                    .state('main', {
                        abstract: true,
                        url: '/main',
                        templateUrl: 'app/views/layout/main.html',
                        controller: 'MainController'
                    })

                    .state('modal', {
                        abstract: true,
                        url: '/modal',
                        templateUrl: 'app/views/layout/modal.html'
                    })

                    .state('main.dashboard', {

                        url: '/dashboard',

                        views: {
                            '': {
                                templateUrl: 'app/views/dashboard/dashboard.html',
                                controller: 'DashboardController'
                            },

                            'navbar': {
                                templateUrl: 'app/views/nav/navbar.html',
                                controller: 'NavbarController'
                            }
                        },

                        data: {
                            headTitle: '面板',
                            subTitle: '欢迎使用库存管理系统',
                            breadcrumbName: '快捷方式',
                            iconName: 'icofont-home'
                        }

                    })

                    .state('main.storage', {
                        url: '/storage',

                        views: {
                            '': {
                                templateUrl: 'app/views/storage/storage.html',
                                controller: 'StorageController'
                            },

                            'navbar': {
                                templateUrl: 'app/views/nav/navbar.html',
                                controller: 'NavbarController'
                            }
                        },

                        data: {
                            headTitle: '库存查询',
                            subTitle: '',
                            breadcrumbName: '库存查询',
                            iconName: 'icofont-magnet'
                        }
                    })

                    .state('main.users', {
                        url: '/users',

                        views: {
                            '': {
                                templateUrl: 'app/views/users/users.html',
                                controller: 'UsersController'
                            },

                            'navbar': {
                                templateUrl: 'app/views/nav/navbar.html',
                                controller: 'NavbarController'
                            }
                        },

                        data: {
                            headTitle: '账号维护',
                            subTitle: '',
                            breadcrumbName: '账号维护',
                            iconName: 'icofont-lock'
                        }
                    })

                    .state('main.dept', {
                        url: '/dept',

                        views: {
                            '': {
                                templateUrl: 'app/views/dept/dept.html',
                                controller: 'DeptController'
                            },

                            'navbar': {
                                templateUrl: 'app/views/nav/navbar.html',
                                controller: 'NavbarController'
                            }
                        },

                        data: {
                            headTitle: '部门维护',
                            subTitle: '',
                            breadcrumbName: '部门维护',
                            iconName: 'elusive-group'
                        }
                    })

                    .state('login', {
                        url: '/login',
                        templateUrl: 'app/views/login/login.html',
                        controller: 'LoginController'
                    })
            }
        ]);
    }
);
