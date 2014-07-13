/** attach controllers to this module 
 * if you get 'unknown {x}Provider' errors from angular, be sure they are
 * properly referenced in one of the module dependencies in the array.
 * below, you can see we bring in our services and constants modules 
 * which avails each controller of, for example, the `config` constants object.
 **/
define([
    './commons/mainController',
    './commons/latestNewsController',
    './nav/navbarController',
    './login/loginController',
    './dashboard/dashboardController',
    './storage/storageController',
    './users/usersController',
    './users/newUserController',
    './users/editUserController',
    './dept/deptController',
    './dept/newDeptController',
    './dept/editDeptController'
], function () {});
