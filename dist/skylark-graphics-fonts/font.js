/**
 * skylark-graphics-fonts - The skylark font class library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.1
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/langx","./fonts"],function(t,n){var i=t.klass({klassName:"Font",bold:{type:Boolean,writable:!0},family:{type:String},italic:{type:Boolean,writable:!0},size:{type:String},strikeout:{type:Boolean,writable:!0},underline:{type:Boolean,writable:!0},equal:function(t){return!this.notEqual(t)},notEqual:function(t){return!!t&&this.toString()!=t.toString()},toString:function(){return[this.weight,this.style,this.size,this.family].join(" ")},toCss:function(t){return i.toCss(this,t)}});return n.Font=i});
//# sourceMappingURL=sourcemaps/font.js.map
