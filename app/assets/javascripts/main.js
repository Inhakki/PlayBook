define(function(require){

  //requires:
  var $ = require('jquery');
  var Backbone = require('backbone');
  var albumPages = require('./models/albumpages');
  var listView = require('./views/list');

  // This part of the code grabs the wrapper, which is wrapped around the body
  // of the HTML, and then sets up tubular, the plugin/framework we are using to
  // insert those beautiful background youtube videos. The default is set
  // here.
  var $wrapper = $('#wrapper');
      $wrapper.tubular({'videoId': 'sXZ2LNnNX_g'});

  albumPages.fetch().then(function(){
    var router = require('./routers/routes');
    Backbone.history.start();
  });

});
