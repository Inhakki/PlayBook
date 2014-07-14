define(function(require){
  var Album = Backbone.Model.extend({

    initialize: function(){
      this.pages = new Pages;
      this.pages.url = '/album/' + this.id + '/pages';
      this.pages.on('')
    }

  });

  return new Album;
});
