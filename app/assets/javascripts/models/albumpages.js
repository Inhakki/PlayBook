define(function(require) {

  console.log("album pages ready");
  var Backbone = require('backbone');

  var Page = Backbone.Model.extend({
    defaults: {
      story: '',
      video_url: '',
      audio_url: ''
    }
  });

  var Pages = Backbone.Collection.extend({
      model: Page,
      url: function() {
        return window.location.pathname + "/pages";
      }
  });

  // var Album = Backbone.Model.extend({

  //   initialize: function(){
  //     this.pages = new Pages;
  //     this.pages.url = '/album/' + this.id + '/pages';
  //   }

  // });
  return new Pages();
});
