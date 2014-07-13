/**
 * Created by huangfeng on 2014/6/20.
 */
'use strict';

define(['services/module'], function(app) {

    return app.factory('AuthNotificationService', ['$rootScope', 'HttpBuffer',
        function($rootScope, httpBuffer) {
            return {
                /**
                 * Call this function to indicate that auth was successfull and trigger a
                 * retry of all deferred requests.
                 * @param data an optional argument to pass on to $broadcast which may be useful for
                 * example if you need to pass through details of the user that was logged in
                 */
                loginConfirmed: function(data, configUpdater) {
                    var updater = configUpdater || function(config) {return config;};
                    $rootScope.$broadcast('event:auth-loginConfirmed', data);
                    httpBuffer.retryAll(updater);
                },

                /**
                 * Call this function to indicate that auth should not proceed.
                 * All deferred requests will be abandoned or rejected (if reason is provided).
                 * @param data an optional argument to pass on to $broadcast.
                 * @param reason if provided, the requests are rejected; abandoned otherwise.
                 */
                loginCancelled: function(data, reason) {
                    httpBuffer.rejectAll(reason);
                    $rootScope.$broadcast('event:auth-loginCancelled', data);
                }
            };
        }
    ]);
});