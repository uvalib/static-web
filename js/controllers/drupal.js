//Access Analytics, Level Access’s accessibility analytics tool
var access_analytics={base_url:"https://analytics.ssbbartgroup.com/api/",instance_id:"AA-58bdcc11cee35"};(function(a,b,c){var d=a.createElement(b);a=a.getElementsByTagName(b)[0];d.src=c.base_url+"access.js?o="+c.instance_id+"&v=2";a.parentNode.insertBefore(d,a)})(document,"script",access_analytics);

//Shim for webcomponent support
var webcompjs = document.createElement('script');
webcompjs.type = 'text/javascript';
webcompjs.src = '//static.lib.virginia.edu/bower_components_master/webcomponentsjs/webcomponents-lite.js';
document.getElementsByTagName('head')[0].appendChild(webcompjs);

function importElement(path){
  var link = document.createElement('link');
  link.setAttribute('rel', 'import');
  link.setAttribute('href', path);
  document.getElementsByTagName('head')[0].appendChild(link)
}

importElement("//static.lib.virginia.edu/bower_components_master/uvalib-theme/uvalib-theme.html");
