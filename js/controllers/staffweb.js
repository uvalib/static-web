//Access Analytics, Level Access’s accessibility analytics tool
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://cdn.levelaccess.net/accessjs/YW1wX3V2YTExMDA/access.js';
document.getElementsByTagName('head')[0].appendChild(script);

// Implement accessible skip to navigation for page content
/*var SkipToConfig =
{
	"settings": {
		"skipTo": {
			"headings"     : "h1, h2, h3, h4",
			"main"         : "main, [role=main]",
			"landmarks"    : "[role=navigation], [role=search]",
			"sections"     : "nav",
			"accesskey"    : "0",
			"wrap"         : "true",
			"visibility"   : "onfocus"
		}
	}
};
var script = document.createElement('script');
script.src = '//static.lib.virginia.edu/js/skipTo/skipto.min.js';
document.head.appendChild(script);*/
