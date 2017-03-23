/**
 * A service for error handling.
 * This service works with alert.directive together
 * The alerts will be cleared once the state changes. see app.run.js
 */
(function() {
  'use strict';
  angular.module('angular-ui-quick-start')
    .factory('ErrorHandler', function(blockUI) {
      var alerts, DEFAULT_ERROR;
      alerts = [];
      DEFAULT_ERROR = 'Failed to connect server';
      return {
        handleError: handleError,
        getAlerts: getAlerts,
        clearAlerts: clearAlerts,
        handleWarning: handleWarning
      };

      function clearAlerts() {
        alerts.splice(0, alerts.length);
      }

      function getAlerts() {
        return alerts;
      }

      function handleError(res) {
        var msg;
        blockUI.stop();
        if (typeof res === 'string') {
          msg = res;
        } else {
          msg = res.data ? res.data.message : res.message;
          if (!msg) {
            msg = DEFAULT_ERROR;
          }
        }
        console.error(res);
        alerts.push({ msg: msg });
      }

      function handleWarning(msg) {
        alerts.push({ msg: msg, type: 'warning' });
      }
    });
}());
