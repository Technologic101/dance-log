'use strict';

/* Controllers */

angular.module('myApp.controllers', ['myApp.services']).
controller('MainController', ['$scope', 'Lesson', 'Course', function($scope, Lesson, Course) {

  var kizomba = [
    new Lesson('Kizomba 1', 'basic 1,2,3', '', ''),
    new Lesson('Kizomba 2', 'basic advanced', '', 'Here is a custom comment for the second lesson.'),
    new Lesson('Kizomba 3', 'Saidas', '', '')
  ];

  var zouk = [
    new Lesson('Zouk 1', 'frente e tras, lateral', '', ''),
    new Lesson('Zouk 2', 'chicote', '', ''),
    new Lesson('Zouk 3', 'basic turns', '', '')
  ];

  var courses = [
    new Course('Kizomba', kizomba),
    new Course('Zouk', zouk)
  ];

  $scope.courses = courses;

  $scope.createLesson = function () {
    $scope.lessons.push(new Lesson(name, description, date, comments));
  }

}]);

