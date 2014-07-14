define(function(require){

  //requires:
  var Backbone = require('backbone');
  var albumpages = require('./models/albumpages');
  var router = require('./routers/routes');
  var listView = require('./views/list');

  albumpages.fetch().then(function(){
    Backbone.history.start();
  });

});
