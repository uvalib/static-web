//Access Analytics, Level Access’s accessibility analytics tool
var access_analytics={base_url:"https://analytics.ssbbartgroup.com/api/",instance_id:"AA-58bdcc11cee35"};(function(a,b,c){var d=a.createElement(b);a=a.getElementsByTagName(b)[0];d.src=c.base_url+"access.js?o="+c.instance_id+"&v=2";a.parentNode.insertBefore(d,a)})(document,"script",access_analytics);

//Piwik
var pkBaseURL = (("https:" == document.location.protocol) ? "https://analytics.lib.virginia.edu/" : "http://analytics.lib.virginia.edu/");
document.write(unescape("%3Cscript src='" + pkBaseURL + "piwik.js' type='text/javascript'%3E%3C/script%3E"));

try {
    var piwikTracker = Piwik.getTracker(pkBaseURL + "piwik.php", 1);
    piwikTracker.trackPageView();
    piwikTracker.setCustomVariable(0,"Logged in","false")
    piwikTracker.enableLinkTracking();
} catch( err ) {}
