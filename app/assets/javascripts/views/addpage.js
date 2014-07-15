define(function(require){

  console.log("addpage view loaded!");
  var Backbone = require('backbone');
  var _ = require('underscore');
  var templateText = require('text!../templates/addpage.html')

  var AddPageView = Backbone.View.extend({
    template: _.template(templateText),

    render: function(){
      console.log("rendering add page view")
      var rendered = this.template;
      return this.$el.html(rendered);
    },

    events:{
      'submit' : 'createPage'
    },

    createPage: function(evt){
      debugger
      evt.preventDefault();
      var title = this.$('[name="title"]').val();
      var story = this.$('[name="story"]').val();
      var video_url = this.$('[name="video_url"]').val();
      var audio_url = this.$('[name="audio_url"]').val();
      //this.$('form').eq(0).reset();

      this.collection.create({
        title: title,
        story: story,
        video_url: video_url,
        audio_url: audio_url
      });
    }
  });

  return AddPageView;
});
