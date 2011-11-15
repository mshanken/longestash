// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log=function(){log.history=log.history||[];log.history.push(arguments);if(this.console){console.log(Array.prototype.slice.call(arguments))}};
(function(b){function c(){}for(var d="assert,clear,count,debug,dir,dirxml,error,exception,firebug,group,groupCollapsed,groupEnd,info,log,memoryProfile,memoryProfileEnd,profile,profileEnd,table,time,timeEnd,timeStamp,trace,warn".split(","),a;a=d.pop();){b[a]=b[a]||c}})((function(){try
{console.log();return window.console;}catch(err){return window.console={};}})());

// Prefix for amazon
yepnope.addPrefix('amazon', function(resourceObj) {
	resourceObj.url = 'https://s3.amazonaws.com/toolkit.mshanken.com/' + resourceObj.url;
	return resourceObj;
});
// Prefix for Stephen
yepnope.addPrefix('stephen', function(resourceObj) {
	resourceObj.url = 'http://localhost/' + resourceObj.url;
	return resourceObj;
});

// Jquery
yepnope([{
	load: 'https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.js',
	complete: function () {
		if (!window.jQuery) {
			yepnope('amazon!js/jquery.min.js');
		}
	}
}, {
	complete: function () {		
		console.info('Loaded: jQuery');
	}
}]);

    
// Accordion
yepnope({
	test: document.getElementsByClassName('accordion').length,
	yep: {
		'AccordionJS': 'amazon!plugins/accordion/accordion.js',
	},
	callback: {
		'AccordionJS' : function(url, result, key){
			console.info('Loaded: AccordionJS');
		}
	}
});

// twitter stuff
	yepnope({
	    test: document.getElementsByName('la'),
	    yep: {
	    'mousewheelJS': 'amazon!plugins/fancybox/jquery.mousewheel-3.0.4.pack.js',
		'fancyboxJS': 'amazon!plugins/fancybox/jquery.fancybox-1.3.4.pack.js',
		'laJS': 'http://longestashcontest.cigaraficionado.com/js/twitter.js',
	    'masonJS': 'amazon!plugins/masonry/masonry.min.js',
	    'fancyboxCSS': 'amazon!plugins/fancybox/jquery.fancybox-1.3.4.css'    	    
	    },
	    callback: {
	    'laJS' : function(url, result, key){
	    console.info('Loaded: laJS');
	    
	    }
	    }
	    });

