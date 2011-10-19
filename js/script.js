// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log=function(){log.history=log.history||[];log.history.push(arguments);if(this.console){console.log(Array.prototype.slice.call(arguments))}};
(function(b){function c(){}for(var d="assert,clear,count,debug,dir,dirxml,error,exception,firebug,group,groupCollapsed,groupEnd,info,log,memoryProfile,memoryProfileEnd,profile,profileEnd,table,time,timeEnd,timeStamp,trace,warn".split(","),a;a=d.pop();){b[a]=b[a]||c}})((function(){try
{console.log();return window.console;}catch(err){return window.console={};}})());

// Prefix for amazon
yepnope.addPrefix('amazon', function(resourceObj) {
	resourceObj.url = 'https://s3.amazonaws.com/toolkit.mshanken.com/' + resourceObj.url;
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
// Countdown
    yepnope({
    test: document.getElementById('countdown_dashboard'),
    yep: {
    'CountdownJS': 'js/jquery.lwtCountdown-1.0.js'
    },
    callback: {
    'CountdownJS' : function(url, result, key){
    console.info('Loaded: CountdownJS');
    $('#countdown_dashboard').countDown({
					targetDate: {
						'day': 		15,
						'month': 	11,
						'year': 	2011,
						'hour': 	11,
						'min': 		0,
						'sec': 		0
					}
				});
    }
    }
    });
    
// accordian via http://www.sohtanaka.com/web-design/simple-accordion-w-css-and-jquery/
	yepnope({
	    test: document.getElementsByName('acc'),
	    yep: {
	    'accJS': 'js/accordian.js'
	    },
	    callback: {
	    'accJS' : function(url, result, key){
	    console.info('Loaded: accJS');
	    
	    }
	    }
	    });

