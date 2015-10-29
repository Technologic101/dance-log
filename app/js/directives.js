'use strict';

/* Directives */

angular.module('myApp.directives', ["xeditable"])
.directive('editLesson', function() {
  return {
    restrict: 'A',
    replace: true,
    templateUrl: 'partials/class-form.html'
  }
});
