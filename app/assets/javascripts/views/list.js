define(function(require){

  var Backbone = require('backbone');
  var albumPages = require('../models/albumpages');
  var AddPageView = require('../views/addpage')

  var PagesItemView = Backbone.View.extend({
    tagName: 'li',

    initialize: function(){
      this.listenTo(this.model, 'change add', this.render);
      this.render();
    },

    render: function(){
      this.$el.html('<a href="#' + this.model.get('id') + '">' + '&times' + '</a>');
      // if( !this.model.get(parseInt('id') + 1) ){
      //   this.$el.append('<a href="#add"> + </a>');
      // }
    }
  });

  var AlbumPagesView = Backbone.View.extend({
    el: '.album-pages',

    initialize: function(){
      this.listenTo(this.collection, 'sync reset add', this.render);
      this.render();
    },

    render: function(){
      var list = document.createDocumentFragment();

      if(this.collection.length <= 0){
        var item = new AddPageView({collection: this.collection});
        item.render();
        list.appendChild(item.el);
      } else {
        this.collection.each(function(model){
          var item = new PagesItemView({ model: model});
          item.render();
          list.appendChild(item.el);
        });
      }

      return this.$el.html(list);
    }
  });

  return new AlbumPagesView({ collection: albumPages });
});
