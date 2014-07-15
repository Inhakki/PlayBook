define(function(require){

  var Backbone = require('backbone');
  var _ = require('underscore');
  var templateText = require('text!../templates/detail.html');
  // var tubular = require('jquery.tubular.1.0.js');

  var PageDetailView = Backbone.View.extend({
    template: _.template( templateText ),

    render: function(){
      // console.log('render works');
      // var url = this.model.get('video_url');
      // $('#wrapper').tubular({videoId: url});
      var rendered = this.template(this.model.toJSON());
      return this.$el.html(rendered);
    },

    initialize: function(){
      console.log('init works');
      this.render();
    },

    events: {
    }
  });

  return PageDetailView;
});
