define([
	"skylark-langx/langx",
	"./fonts",
	"./Font"
],function(langx,fonts,Font) {

	return fonts.toCss = Font.toCss = function(font,css) {
        if (!css) {
            css = {};
        }
        css.fontFamily = font.family;
        css.fontSize = font.size.toString();
        css.fontWeight = font.bold ? "bold" : "normal";
        css.fontStyle = font.italic ? "italic" : "normal";
        css.textDecoration = font.strikeout?"line-through" :(font.underline?"underline":"none");
        return css;
	};

	
});