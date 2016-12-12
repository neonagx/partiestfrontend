(function() {
  'use strict';
  angular.module('ThePartiest')
    .factory('ProfPartResource', ProfPartResource)

  ProfPartResource.$inject = ['$resource']

  function ProfPartResource($resource){
    return $resource('http://localhost:3000/professionals/:id', {id: '@_id'}, {'update': {method: 'PATCH'}})
  }
}());
