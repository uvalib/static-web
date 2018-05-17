//Access Analytics, Level Access’s accessibility analytics tool
var access_analytics={base_url:"https://analytics.ssbbartgroup.com/api/",instance_id:"AA-58bdcc11cee35"};
(function(a,b,c){var d=a.createElement(b);a=a.getElementsByTagName(b)[0];d.src=c.base_url+"access.js?o="+c.instance_id+"&v=2";a.parentNode.insertBefore(d,a)})(document,"script",access_analytics);

console.log('foo');
// Twitters es6-feature-detect
var str = 'class ಠ_ಠ extends Array {constructor(j = "a", ...c) {const q = (({u: e}) => {return { [`s${c}`]: Symbol(j) };})({});super(j, q, ...c);}}' +
          'new Promise((f) => {const a = function* (){return "\u20BB7".match(/./u)[0].length === 2 || true;};for (let vre of a()) {' +
          'const [uw, as, he, re] = [new Set(), new WeakSet(), new Map(), new WeakMap()];break;}f(new Proxy({}, {get: (han, h) => h in han ? han[h] ' +
          ': "42".repeat(0o10)}));}).then(bi => new ಠ_ಠ(bi.rd));';
console.log('bar');

var oldBrowser = false;
var head = document.getElementsByTagName('head')[0];
var addScript = function(src){
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = src;
  script.async = false;
  return script;
}

var addImport = function(href){
  var link = document.createElement('link');
  link.rel = "import";
  link.href= href;
  return link;
}

try {
  eval(str);
} catch(e) {
  console.log('Your browser does not support ES6!');
  oldBrowser = true;
}

if (oldBrowser) {
  !function(e){var r=e.babelHelpers={};r.typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r.classCallCheck=function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")},r.createClass=function(){function e(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(r,t,n){return t&&e(r.prototype,t),n&&e(r,n),r}}(),r.defineEnumerableProperties=function(e,r){for(var t in r){var n=r[t];n.configurable=n.enumerable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,t,n)}return e},r.defaults=function(e,r){for(var t=Object.getOwnPropertyNames(r),n=0;n<t.length;n++){var o=t[n],i=Object.getOwnPropertyDescriptor(r,o);i&&i.configurable&&void 0===e[o]&&Object.defineProperty(e,o,i)}return e},r.defineProperty=function(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e},r.extends=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},r.get=function e(r,t,n){null===r&&(r=Function.prototype);var o=Object.getOwnPropertyDescriptor(r,t);if(void 0===o){var i=Object.getPrototypeOf(r);return null===i?void 0:e(i,t,n)}if("value"in o)return o.value;var a=o.get;if(void 0!==a)return a.call(n)},r.inherits=function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)},r.instanceof=function(e,r){return null!=r&&"undefined"!=typeof Symbol&&r[Symbol.hasInstance]?r[Symbol.hasInstance](e):e instanceof r},r.newArrowCheck=function(e,r){if(e!==r)throw new TypeError("Cannot instantiate an arrow function")},r.objectDestructuringEmpty=function(e){if(null==e)throw new TypeError("Cannot destructure undefined")},r.objectWithoutProperties=function(e,r){var t={};for(var n in e)r.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t},r.possibleConstructorReturn=function(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!=typeof r&&"function"!=typeof r?e:r},r.set=function e(r,t,n,o){var i=Object.getOwnPropertyDescriptor(r,t);if(void 0===i){var a=Object.getPrototypeOf(r);null!==a&&e(a,t,n,o)}else if("value"in i&&i.writable)i.value=n;else{var u=i.set;void 0!==u&&u.call(o,n)}return n},r.slicedToArray=function(){function e(e,r){var t=[],n=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(n=(a=u.next()).done)&&(t.push(a.value),!r||t.length!==r);n=!0);}catch(e){o=!0,i=e}finally{try{!n&&u.return&&u.return()}finally{if(o)throw i}}return t}return function(r,t){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return e(r,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),r.taggedTemplateLiteral=function(e,r){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))},r.temporalRef=function(e,r,t){if(e===t)throw new ReferenceError(r+" is not defined - temporal dead zone");return e},r.temporalUndefined={},r.toArray=function(e){return Array.isArray(e)?e:Array.from(e)},r.toConsumableArray=function(e){if(Array.isArray(e)){for(var r=0,t=Array(e.length);r<e.length;r++)t[r]=e[r];return t}return Array.from(e)}}("undefined"==typeof global?self:global);
  head.appendChild( addScript('https://wwwstatic.lib.virginia.edu/bower_components-compiled/webcomponentsjs/custom-elements-es5-adapter.js') );
  head.appendChild( addImport('https://wwwstatic.lib.virginia.edu/bower_components-compiled/uva-helper-libs/polyfills.html') );
  head.appendChild( addImport('https://wwwstatic.lib.virginia.edu/bower_components-unbundled-compiled/uvalib-header/uvalib-simple-header.html') );
  head.appendChild( addImport('https://wwwstatic.lib.virginia.edu/bower_components-unbundled-compiled/uvalib-footer/uvalib-footer.html') );
} else {
  head.appendChild( addImport('https://wwwstatic.lib.virginia.edu/bower_components/uvalib-header/uvalib-header.html') );
  head.appendChild( addImport('https://wwwstatic.lib.virginia.edu/bower_components/uvalib-footer/uvalib-footer.html') );
}
