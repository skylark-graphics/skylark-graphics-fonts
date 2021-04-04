define([
	"skylark-langx/langx",
	"./fonts",
	"./Font"
],function(langx,fonts,Font) {
	var REG_EX = /^([^\|]+)\|([^\|]+)\|([^\|]+)\|([0-9]+[a-z]+)$/i,
		REG_EX_2 = /^([^\|]+)\|([^\|]+)\|([^\|]+)\|([0-9]+[a-z]+)\|([^\|]+)$/i;

	return fonts.fromString = Font.fromString = function(s){
	    var family,
	    	weight,
	    	style,
	    	size,
	    	decor;

	    if (s.match(REG_EX)) {
	        family = RegExp.$1;
	        weight = RegExp.$2;
	        style = RegExp.$3;
	        size = RegExp.$4;
	        decor = "none";
	    } else if (s.match(REG_EX_2)) {
	        family = RegExp.$1;
	        weight = RegExp.$2;
	        style = RegExp.$3;
	        size = RegExp.$4;
	        decor = RegExp.$5;
	    }
	    return new Font({
	    	"family" : family,
	    	"size" : size,
	    	"bold" : weight == "bold",
	    	"italic": style == "italic",
	    	"strikeout": decor == "strikeout",
	    	"underline": decor == "underline"
	    });
	};
	
});