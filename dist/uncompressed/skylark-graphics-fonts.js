/**
 * skylark-graphics-fonts - The skylark font class library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.1
 * @link www.skylarkjs.org
 * @license MIT
 */
(function(factory,globals) {
  var define = globals.define,
      require = globals.require,
      isAmd = (typeof define === 'function' && define.amd),
      isCmd = (!isAmd && typeof exports !== 'undefined');

  if (!isAmd && !define) {
    var map = {};
    function absolute(relative, base) {
        if (relative[0]!==".") {
          return relative;
        }
        var stack = base.split("/"),
            parts = relative.split("/");
        stack.pop(); 
        for (var i=0; i<parts.length; i++) {
            if (parts[i] == ".")
                continue;
            if (parts[i] == "..")
                stack.pop();
            else
                stack.push(parts[i]);
        }
        return stack.join("/");
    }
    define = globals.define = function(id, deps, factory) {
        if (typeof factory == 'function') {
            map[id] = {
                factory: factory,
                deps: deps.map(function(dep){
                  return absolute(dep,id);
                }),
                resolved: false,
                exports: null
            };
            require(id);
        } else {
            map[id] = {
                factory : null,
                resolved : true,
                exports : factory
            };
        }
    };
    require = globals.require = function(id) {
        if (!map.hasOwnProperty(id)) {
            throw new Error('Module ' + id + ' has not been defined');
        }
        var module = map[id];
        if (!module.resolved) {
            var args = [];

            module.deps.forEach(function(dep){
                args.push(require(dep));
            })

            module.exports = module.factory.apply(globals, args) || null;
            module.resolved = true;
        }
        return module.exports;
    };
  }
  
  if (!define) {
     throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");
  }

  factory(define,require);

  if (!isAmd) {
    var skylarkjs = require("skylark-langx-ns");

    if (isCmd) {
      module.exports = skylarkjs;
    } else {
      globals.skylarkjs  = skylarkjs;
    }
  }

})(function(define,require) {

define('skylark-graphics-fonts/fonts',[
	"skylark-langx/skylark"
],function(skylark){
	return skylark.attach("graphics.fonts",{});
});
define('skylark-graphics-fonts/Font',[
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

define('skylark-graphics-fonts/main',[
	"./fonts",
	"./Font"
],function(fonts){
	return fonts;
});
define('skylark-graphics-fonts', ['skylark-graphics-fonts/main'], function (main) { return main; });


},this);
//# sourceMappingURL=sourcemaps/skylark-graphics-fonts.js.map
