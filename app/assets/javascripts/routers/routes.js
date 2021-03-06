define(function(require){

  console.log("router ready");
  var Backbone = require('backbone');
  var pages = require('../models/albumpages');
  var PageDetailView = require('../views/detail');
  var AddPageView = require('../views/addpage');

  var PagesRouter = Backbone.Router.extend({
    routes: {
      'add' : 'pageAdder',
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
      id = pages.at(0).get('id');

      var page = pages.findWhere({ id: parseInt(id) });
      this.view = new PageDetailView({ model: page });
      this.view.render().appendTo('#page-detail');
    },

    // function that runs when the plus sign is clicked to add a page.
    pageAdder: function(){
      if(this.view){
        this.view.remove();
      }

      this.view = new AddPageView({collection: pages});
      this.view.render().appendTo('#page-add');
    }
  });

  return new PagesRouter();
});
