define(function(require){

  console.log("list ready")
  var Backbone = require('backbone');
  var albumpages = require('../models/albumpages');

  var PagesItemView = Backbone.View.extend({
    tagName: 'li',

    initialize: function(){
      this.listenTo(this.model, 'change', this.render);
      this.render();
    },

    render: function(){
      this.$el.html('<a href="#' + this.model.get('id') + '">' + "sample title" + '</a>');
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
        var item = new PagesItemView({ model: model});
        item.render();
        list.appendChild(item.el);
      });

      return this.$el.html(list);
    }
  });

  return new AlbumPagesView({collection: albumpages});
});
