define([
	"skylark-langx/langx",
	"./fonts"
],function(langx,fonts) {

	var Font = langx.klass({
		"klassName"	:	"Font",

		"bold"	:	{
			"type"	:	Boolean,
			"writable" : true
		},
		"family"	:	{
			"type"	:	String
		},
		"italic"	:	{
			"type"	:	Boolean,
			"writable" : true
		},
		"size"	:	{
			"type"	:	String
		},
		"strikeout"	:	{
			"type"	:	Boolean,
			"writable" : true
		},
		"underline"	:	{
			"type"	:	Boolean,
			"writable" : true
		},
			
        equal: function(target) {
            return !this.notEqual(target);
        },

        notEqual: function(target) {
            if (!target) {
                return false;
            } 
            var s1 = this.toString(),
                s2 = target.toString();
            return s1 != s2 ;
        },
		"toString"	:	function(){
			return [this.weight, this.style, this.size, this.family].join(" ");
		},
		toCss : function(css) {
			return Font.toCss(this,css);
		}
		
	});
	

	return fonts.Font = Font;
	
});	
