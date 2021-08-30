/**
 * skylark-graphics-fonts - The skylark font class library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.1
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/langx","./fonts","./font"],function(n,t,o){return t.toCss=o.toCss=function(n,t){return t||(t={}),t.fontFamily=n.family,t.fontSize=n.size.toString(),t.fontWeight=n.bold?"bold":"normal",t.fontStyle=n.italic?"italic":"normal",t.textDecoration=n.strikeout?"line-through":n.underline?"underline":"none",t}});
//# sourceMappingURL=sourcemaps/to-css.js.map
