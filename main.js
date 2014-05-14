/*
 * created by info@webegg.co.uk
 */

/*
 * jQuery throttle / debounce - v1.1 - 3/7/2010
 * http://benalman.com/projects/jquery-throttle-debounce-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;$.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g};$.debounce=function(d,e,f){return f===c?a(d,e,false):a(d,f,e!==false)}})(this);






$(function($) {
    // Cache a reference to $(window), for performance, and get the initial dimensions of the window
    var $window = $(window),
        previousDimensions = {
            width: $window.width(),
            height: $window.height()
        };

    $window.resize( $.debounce( 250, false, function(e){
    	
        var newDimensions = {
            width: $window.width(),
            height: $window.height()
        };

        if (newDimensions.width > previousDimensions.width) {
            // scaling up
            if((newDimensions.width > 480) && (previousDimensions.width < 480)){
		        location.reload();
		        console.log('scaling up');
		    }
        } else {
            // scaling down
            if((newDimensions.width < 480) && (previousDimensions.width > 480)){
		        location.reload();
		        console.log('scaling down');
		    }
        }

        // Store the new dimensions
        previousDimensions = newDimensions;
    }));
});
