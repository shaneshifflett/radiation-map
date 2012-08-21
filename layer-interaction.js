function LayerInteraction(tiles, map, order, hoverCallback, clickCallback, show){
    this.map = map;
    this.tiles = tiles;
    this.layer = new wax.leaf.connector(tiles);
    this.interaction = wax.leaf.interaction();
    this.hidden = true;
    this.order = order;
    this.clickCallback = clickCallback !== undefined ? clickCallback : undefined;
    this.hoverCallback = hoverCallback !== undefined ? hoverCallback : undefined;
    if(show !== undefined && show)
        this.show();
};
LayerInteraction.prototype = {};
LayerInteraction.objects = {};
LayerInteraction.prototype.setHidden = function(){
    this.hidden = !this.hidden;
};
LayerInteraction.prototype.hide = function(){
    if(!this.hidden){
        this.rmInteraction();
        this.rmLayer();
        this.setHidden();
    }
};
LayerInteraction.prototype.show = function(){
    if(this.hidden){
        this.addLayer(); 
        this.setInteraction(); 
        this.setHidden();
    }
};
LayerInteraction.prototype.onHover = function(o){
    if (o.e.type === 'mouseover') {
        
        document.body.style.cursor = "pointer";
        if(this.hoverCallback !== undefined){
            this.hoverCallback(o.data);
        } else {
            console.log(o.data);
        }
    } 
    /*multiple layers screws up the cursor*/
    if(o.e.type === 'mouseout')
        document.body.style.cursor = "default";
};
LayerInteraction.prototype.onClick = function(o){
    if(o.e.type === 'click'){
        if(this.clickCallback !== undefined){
            this.clickCallback(o.data);
        } else {
            var marker = new L.Marker(this.map.mouseEventToLatLng(o.e));
            this.map.addLayer(marker);
            marker.bindPopup(o.formatter({ format: 'teaser' }, o.data)).openPopup();
        }
    }
};
LayerInteraction.prototype.setInteraction = function(){
    var me = this;
    if(me.tiles.grids !== undefined){
        me.interaction.map(me.map)
        .tilejson(me.tiles)
        .on('on', function(o){
            me.onHover(o);
            me.onClick(o);
        });
    }
};
LayerInteraction.prototype.rmInteraction = function(){
    if(this.tiles.grids !== undefined){
        this.interaction.remove();
    };
};
LayerInteraction.prototype.rmLayer = function(){
    this.map.removeLayer(this.layer);
};
LayerInteraction.prototype.addLayer = function(){
    this.map.addLayer(this.layer);
};
LayerInteraction.redrawVisibleLayers = function(){
    _.each(_.keys(LayerInteraction.objects), function(key){
        LayerInteraction.objects[key].rmLayer();
        LayerInteraction.objects[key].rmInteraction();
    });
    var values = _.values(LayerInteraction.objects);
    values = _.sortBy(values, function(obj){
        return obj.order;
    });
    _.each(values, function(obj){
        if(!obj.hidden){
            obj.addLayer(); 
            obj.setInteraction(); 
        }
    });
};