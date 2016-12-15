(function() {
  'use strict';
  angular.module('ThePartiest')
    .factory('ProfPartResource', ProfPartResource)

  ProfPartResource.$inject = ['$resource']

  function ProfPartResource($resource){
    return $resource('https://partiest.herokuapp.com/professionals/:id', {id: '@_id'}, {'update': {method: 'PATCH'}})
  }
}());
