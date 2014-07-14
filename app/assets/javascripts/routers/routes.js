define(function(require){

  console.log("router ready");
  var Backbone = require('backbone');
  var pages = require('../models/albumpages');
  var PageDetailView = require('../views/detail');

  var PagesRouter = Backbone.Router.extend({
    routes: {
      ':id' : 'page',
      '*default' : 'page'
    },

    page: function(id){
      if(this.view) {
        this.view.remove();
      }

      if (!id) {
        id = pages.at(0).get('story');
        this.navigate(id);
      }

      var page = pages.findWhere({story: id});
      this.view = new PageDetailView({model: page});
      this.view.render().appendTo('#page-detail')
    }
  });
});
