define(function(require){

  var $ = require('jquery');
  var Backbone = require('backbone');
  var _ = require('underscore');
  var templateText = require('text!../templates/detail.html');
  var tubular = require('jquery_tubular');

  var PageDetailView = Backbone.View.extend({
    template: _.template( templateText ),

    render: function(){
      var $wrapper = $('#wrapper');
      var url = this.model.get('video_url');
      $wrapper.tubular({
        videoId: url
      });
      var rendered = this.template(this.model.toJSON());
      return this.$el.html(rendered);
    },

    initialize: function(){
      console.log('init works');
      // this.render();
    }
  });

  return PageDetailView;
});
