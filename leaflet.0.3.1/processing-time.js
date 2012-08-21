var ProcessingTime = Backbone.Model.extend({
    initialize: function(attributes){
        this.attributes = attributes
    },
    url: function(){
        return '/get-processing-time/'
    },
});
var ProcessingTimeView = Backbone.View.extend({
    initialize: function(options){
        this.template = _.template($("#processing-time-template").html())
        this.key = 'all'
        this.models = {this.key: new ProcessingTime()};
        var me = this;
        this.onSuccess = function(model, response){
            me.models[me.key] = model;
            me.updateTemplate(model);
        }
        this.models['all'].fetch({success:this.onSuccess});
    },
    render: function(){
    },
    getNewModel: function(regionslug, cityslug){
        var key = null;
        var data = {};
        if(regionslug == null && cityslug == null){
            key = 'all';
        } else if(regionslug != null && cityslug == null){
            key = regionslug;
            data['regionslug'] = regionslug;
        } else if(regionslug != null && cityslug != null){
            key = regionslug + '-' + cityslug;
            data['regionslug'] = regionslug;
            data['cityslug'] = cityslug;
        }
        if(_.has(this.models, key)){
            this.updateTemplate(this.models[key]);
        } else {
            this.key = key;
            this.models.fetch({success: this.onSuccess, data: data});
        }
    },
    updateTemplate: function(model){
        var variables = model.attributes;
        $(this.el).html(this.template(variables));
    },
})