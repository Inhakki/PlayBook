define(function(require) {

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
      // Kind of a cool way to locate the specific album that is needed.
      // pages is then appended to the end of whatever album it returns.
      return window.location.pathname + "/pages";
    }
  });
  return new Pages();
});
