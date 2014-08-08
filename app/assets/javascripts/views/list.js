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

    //adds the actual times symbol to the list element
    render: function(){
      this.$el.html('<a href="#' + this.model.get('id') + '">' + '&times' + '</a>');
    }
  });

  var AlbumPagesView = Backbone.View.extend({
    el: '.album-pages',

    initialize: function(){
      this.listenTo(this.collection, 'sync reset add', this.render);
      this.render();
    },

    render: function(){
      //createDocumentFragment is super useful. Prevents
      //reflow and is causing better performance.
      var list = document.createDocumentFragment();

      //This lists all the collection as "pages" using the times
      //symbol, so the user can navigate through pages.
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

        //adds a plus sign to the end of the page list, allowing
        //the user to put in additional pages.
        var adder = document.createElement('a');
        adder.setAttribute('href', '#add');
        adder.innerHTML = "+";
        list.appendChild(adder);
      }

      return this.$el.html(list);
    }
  });

  return new AlbumPagesView({ collection: albumPages });
});
