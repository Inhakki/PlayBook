define(function(require){

  console.log("addpage view loaded!");
  var Backbone = require('backbone');
  var _ = require('underscore');
  var templateText = require('text!../templates/addpage.html')

  var AddPageView = Backbone.View.extend({
    template: _.template(templateText),

    render: function(){
      var rendered = this.template;
    }
  });

  return AddPageView;
});
