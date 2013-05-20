## Pagination filter
A simple filter to paginate items in a list, based on page size and the current page

### Example Usage
set up your app, then create some simple control logic in the controller, consisting
of the page size, the current page, and a list of items, as well as previous/next controls: 

```javascript
angular.module('app', []);

angular.module('app').controller('MainCtrl', ['$scope', '$filter', function($scope, $filter) {
    $scope.things = [1,2,3,4,5,6,7,8,9,10];
    $scope.page_size = 5;
    $scope.current_page = 0;

    $scope.prevPage = function () {
        $scope.current_page -= 1;
    }

    $scope.nextPage = function () {
        $scope.current_page += 1;
    }
}]);

});
```

include the paginate-filter.js file, then provide the filter with the current page
and page size:

```html
  <!doctype html>
  <html lang="en" x-ng-app="app">
  <head>
    <meta charset="utf-8">
    <title>paginate</title>
  </head>
  <body ng-controller="MainCtrl">
      
    <ul>
      <li ng-repeat="thing in things | Paginate : current_page : page_size">{{thing}}</li>
    </ul>
    <button ng-disabled="prevDisabled" ng-click="prevPage()">previous</button>
    <button ng-disabled="nextDisabled" ng-click="nextPage()">next</button>

    <script src="lib/angular/angular.js"></script>
    <script src="js/app.js"></script>
    <script src="js/controllers.js"></script>
    <script src="js/paginate-filter.js"></script>
  </body>
  </html>
```

if you want to include some simple logic to enable/disable the previous/next buttons

```javascript
    $scope.$watch('current_page', function () {
        if ($scope.current_page == 0) {
            $scope.prevDisabled = true;
            $scope.nextDisabled = false; 
        } else if ($scope.current_page >= $scope.page_count - 1) {
            $scope.prevDisabled = false;
            $scope.nextDisabled = true; 
        } else {
            $scope.prevDisabled = false;
            $scope.nextDisabled = false;
        }
    });

```
