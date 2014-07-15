define(function(require) {

  console.log("album pages ready");
  var Backbone = require('backbone');

  var Page = Backbone.Model.extend({
    defaults: {
      story: '',
      video_url: '',
      audio_url: ''
    },
  });

  var Pages = Backbone.Collection.extend({
    model: Page,
    url: function() {
      return window.location.pathname + "/pages";
    }
  });
  return new Pages();
});
