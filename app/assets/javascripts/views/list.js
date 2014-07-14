define(function(require){

  console.log("list ready")
  var Backbone = require('backbone');
  var albumpages = require('../models/albumpages');

  var AlbumPagesItemView = Backbone.View.extend({
    tagName: 'li',

    initialize: function(){
      this.listenTo(this.model, 'change', this.render);
      this.render();
    }
  });

  var AlbumPagesView = Backbone.View.extend({
    el: '.album-pages',

    initialize: function(){
      this.listenTo(this.collection, 'sync reset', this.render);
      this.render();
    },

    render: function(){
      var list = document.createDocumentFragment();

      this.collection.each(function(model){
      });
    }
  });
});
