(function() {
  'use strict';
  angular
    .module('phoneLineage', [
      'ui.router',
      'ngResource'
    ])
    .config(config);

  config.$inject = ['$stateProvider', '$urlRouterProvider'];

  function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/userphones',
        templateUrl: 'app/userphones/index.html',
        controller: 'UserphoneController as vm'
      });
      
      $urlRouterProvider.otherwise('/userphones');
  }
})();
