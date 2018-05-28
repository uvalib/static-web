//Access Analytics, Level Access’s accessibility analytics tool
var access_analytics={base_url:"https://analytics.ssbbartgroup.com/api/",instance_id:"AA-58bdcc11cee35"};
(function(a,b,c){var d=a.createElement(b);a=a.getElementsByTagName(b)[0];d.src=c.base_url+"access.js?o="+c.instance_id+"&v=2";a.parentNode.insertBefore(d,a)})(document,"script",access_analytics);

//webcomponents-loader.js
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

(function() {
  'use strict';
  // global for (1) existence means `WebComponentsReady` will fire,
  // (2) WebComponents.ready == true means event has fired.
  window.WebComponents = window.WebComponents || {};
  var name = 'libradata.js';
  // Feature detect which polyfill needs to be imported.
  var polyfills = [];
  if (!('import' in document.createElement('link'))) {
    polyfills.push('hi');
  }
  if (!('attachShadow' in Element.prototype && 'getRootNode' in Element.prototype) ||
    (window.ShadyDOM && window.ShadyDOM.force)) {
    polyfills.push('sd');
  }
  if (!window.customElements || window.customElements.forcePolyfill) {
    polyfills.push('ce');
  }
  // NOTE: any browser that does not have template or ES6 features
  // must load the full suite (called `lite` for legacy reasons) of polyfills.
  if (!('content' in document.createElement('template')) || !window.Promise || !Array.from ||
    // Edge has broken fragment cloning which means you cannot clone template.content
    !(document.createDocumentFragment().cloneNode() instanceof DocumentFragment)) {
    polyfills = ['lite'];
  }

  if (polyfills.length) {
    var script = document.querySelector('script[src*="' + name +'"]');
    var newScript = document.createElement('script');
    // Load it from the right place.
    var replacement = 'webcomponents-' + polyfills.join('-') + '.js';
    var url = script.src.replace(name, replacement);
    newScript.src = "https://www.library.virginia.edu/bower_components/webcomponentsjs/"+url;
    // NOTE: this is required to ensure the polyfills are loaded before
    // *native* html imports load on older Chrome versions. This *is* CSP
    // compliant since CSP rules must have allowed this script to run.
    // In all other cases, this can be async.
    if (document.readyState === 'loading' && ('import' in document.createElement('link'))) {
      document.write(newScript.outerHTML);
    } else {
      document.head.appendChild(newScript);
    }
  } else {
    // Ensure `WebComponentsReady` is fired also when there are no polyfills loaded.
    // however, we have to wait for the document to be in 'interactive' state,
    // otherwise a rAF may fire before scripts in <body>

    var fire = function() {
      requestAnimationFrame(function() {
        window.WebComponents.ready = true;
        document.dispatchEvent(new CustomEvent('WebComponentsReady', {bubbles: true}));
      });
    };

    if (document.readyState !== 'loading') {
      fire();
    } else {
      document.addEventListener('readystatechange', function wait() {
        fire();
        document.removeEventListener('readystatechange', wait);
      });
    }
  }
})();

var head = document.getElementsByTagName('head')[0];

var addImport = function(href){
  var link = document.createElement('link');
  link.rel = "import";
  link.href= href;
  return link;
}

head.appendChild( addImport('https://wwwstatic.lib.virginia.edu/bower_components/uva-helper-libs/polyfills.html') );
head.appendChild( addImport('https://wwwstatic.lib.virginia.edu/bower_components/uvalib-header/uvalib-header.html') );
head.appendChild( addImport('https://wwwstatic.lib.virginia.edu/bower_components/uvalib-footer/uvalib-footer.html') );
