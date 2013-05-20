'use strict';

/* Filters */
// pagination filter, uses the current page and page size to
// calculate the current state/page of a list of items

angular.module('app').filter('Paginate', ['$filter', function ($filter) {
   return function(input, current_page, page_size) {
      if (input) {
          return $filter('limitTo')(input.slice(current_page * page_size), page_size);
      }
   } 
}]);


