/**
 * skylark-graphics-fonts - The skylark font class library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.1
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/langx","./fonts","./Font"],function(t,n,e){return n.fromCss=e.fromCss=function(t){return new e({family:t.fontFamily,size:t.fontSize,bold:"bold"==t.fontWeight,italic:"italic"==t.fontStyle,strikeout:"strikeout"==t.textDecoration,underline:"underline"==t.textDecoration})}});
//# sourceMappingURL=sourcemaps/fromCss.js.map
