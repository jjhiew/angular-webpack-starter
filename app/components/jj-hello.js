module.exports = function(ngModule) {
  if (ON_TEST) {
    require('./jj-hello.test')(ngModule);
  }

  ngModule.directive('jjHello', ['$log', function($log) {
    require('./jj-hello.scss');
    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'components/jj-hello.html',
      controllerAs: 'ctrl',
      controller: function ctrl() {
        var ctrl = this;
        ctrl.greeting = 'Hello';
        $log.info('Hello');
      }
    };
  }]);
};
