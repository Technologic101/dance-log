'use strict';

/* Services */

angular.module('myApp.services', []).factory('Lesson', function () {

  function Lesson(name, description, date, comments) {
    this.name = name,
    this.description = description,
    this.dateCompleted = date,
    this.comments = comments;  
  }

  return Lesson;

}).factory('Course', function() {

  function Course(name, lessons) {
    this.name = name,
    this.lessons = lessons;
  }

  return Course;

});
