define([
	"skylark-langx/langx",
	"./fonts",
	"./font"
],function(langx,fonts,Font) {

	return fonts.fromCss = Font.fromCss = function(css) {
        return new Font({
            "family" : css.fontFamily,
            "size" : css.fontSize,
            "bold" : css.fontWeight == "bold",
            "italic": css.fontStyle == "italic",
            "strikeout": css.textDecoration == "strikeout",
            "underline": css.textDecoration == "underline"
        });
	};
});