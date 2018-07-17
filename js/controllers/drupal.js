//Access Analytics, Level Access’s accessibility analytics tool
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://cdn.levelaccess.net/accessjs/YW1wX3V2YTExMDA/access.js';
document.getElementsByTagName('head')[0].appendChild(script);

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
