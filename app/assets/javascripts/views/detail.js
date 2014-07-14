define(function(require){

  var Backbone = require('backbone');
  var _ = require('underscore');
  var templateText = require('text!../templates/detail.html');

  var PageDetailView = Backbone.View.extend({
    template: _.template( templateText ),

    render: function(){
      var rendered = this.template(this.model.toJSON());
      return this.$el.html(rendered);
    },

    events: {
    }
  });

  return PageDetailView;
});
