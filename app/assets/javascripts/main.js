define(function(require){

  //requires:
  var $ = require('jquery');
  var Backbone = require('backbone');
  var albumpages = require('./models/albumpages');
  var listView = require('./views/list');

  var $wrapper = $('#wrapper');
      $wrapper.tubular({'videoId': 'sXZ2LNnNX_g'});

  albumpages.fetch().then(function(){
    var router = require('./routers/routes');
    Backbone.history.start();
  });

});
