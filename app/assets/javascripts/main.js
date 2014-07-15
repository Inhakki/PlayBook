define(function(require){

  //requires:
  var Backbone = require('backbone');
  var albumpages = require('./models/albumpages');
  var listView = require('./views/list');

  albumpages.fetch().then(function(){
    var router = require('./routers/routes');
    Backbone.history.start();
  });

});
