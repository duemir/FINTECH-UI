'use strict';

var journalService = angular.module('journalService', ['delegatorServices']);

journalService.factory('JournalService', function($http, Remote) {
  return {
    getData: function(url) {
      console.log('Get Data using JournalService...');
      var promise = Remote.get(url);
      return promise;
    },
    saveJournalEntry: function(url, jsondata) {
      console.log('Post Data using JournalService...');
      var promise = Remote.post(url, jsondata);
      return promise;
    } 
  };
});
