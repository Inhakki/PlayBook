define(function(require){

  console.log("router ready");
  var Backbone = require('backbone');
  var pages = require('../models/albumpages');
  var PageDetailView = require('../views/detail');

  var PagesRouter = Backbone.Router.extend({
    routes: {
      // '#add' : 'pageAdder',
      ':id' : 'page',
      '*default' : 'titlePage'
    },

    page: function(id){
      console.log("the id is " + id)
      if(this.view) {
        this.view.remove();
      }

      var page = pages.findWhere({ id: parseInt(id) });
      this.view = new PageDetailView({ model: page });
      this.view.render().appendTo('#page-detail');
    },

    titlePage: function(){
      debugger
      id = pages.at(0).get('id');

      var page = pages.findWhere({ id: parseInt(id) });
      this.view = new PageDetailView({ model: page });
      this.view.render().appendTo('#page-detail');
    },

    pageAdder: function(){
      this.view = new AddPageView({collection: pages});
      this.view.render().appendTo('#page-detail');
    }
  });

  return new PagesRouter();
});
