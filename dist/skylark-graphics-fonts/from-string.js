/**
 * skylark-graphics-fonts - The skylark font class library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.1
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/langx","./fonts","./font"],function(e,n,i){var t=/^([^\|]+)\|([^\|]+)\|([^\|]+)\|([0-9]+[a-z]+)$/i,r=/^([^\|]+)\|([^\|]+)\|([^\|]+)\|([0-9]+[a-z]+)\|([^\|]+)$/i;return n.fromString=i.fromString=function(e){var n,g,a,o,x;return e.match(t)?(n=RegExp.$1,g=RegExp.$2,a=RegExp.$3,o=RegExp.$4,x="none"):e.match(r)&&(n=RegExp.$1,g=RegExp.$2,a=RegExp.$3,o=RegExp.$4,x=RegExp.$5),new i({family:n,size:o,bold:"bold"==g,italic:"italic"==a,strikeout:"strikeout"==x,underline:"underline"==x})}});
//# sourceMappingURL=sourcemaps/from-string.js.map
