function MapLegendView(el, values, headerText, footerText){
    /*
    Class to dynamically generate a legend for a given map
    el: containing element
    values: array of key, value objects
        ex: var legendItems = [
            {text: 'text to display next to color', colorStr: 'color of legend item (hex preferred)'},
        ]
    you'll want your container element and map to be contained in the same parent elemtn and to position the containing element to float over the map like so:
        #map{
            width: 100%;
            height: 100%;
            background-color: white;
        }
        #el{
            width: 50px;
            height: 120px;
            position: absolute;;
            z-index: 120;
            bottom: 0;
            float: left;
            padding: 10px;
            border: solid 1px black;
        }
    */
    this.el = el;
    this.values = values;
    this.headerText = headerText;
    this.footerText = footerText;
    this.render();
}
MapLegendView.prototype = new Object();
MapLegendView.prototype.render = function() {
    var header = $("<div/>", {
        "text": this.headerText,
        "style": "font-style:bold; padding-bottom:10px;font-size:19px;"
    });
    var footer = $("<div/>", {
        "html": this.footerText,
        "style": "font-size:.4em"
    });
    $(this.el).append(header);
    var containerDiv = $("<div/>");
    for(var i = 0; i < this.values.length; i++){
        var obj = this.values[i];
        var subContainer = $("<div/>",{
            "style": "height:25px;width:100%;"
        });
        var colorDiv = $('<div/>', {
            "class": "legend-color-display",
            "style": "background-color:"+ obj.colorStr+";width:3px;height:3px;padding:5px;float:left;position:absolute;padding-right:5px"
        });
        var infoDiv = $("<div/>", {
            "class": "legend-info-display",
            "style": "height:10px;position:absolute;float:right;padding-left:23px;font-size:.75em",
            "text": obj.text
        });
        subContainer.append(colorDiv);
        subContainer.append(infoDiv);
        containerDiv.append(subContainer);
    }
    $(this.el).append(containerDiv);
    $(this.el).append(footer);
};