/*
 * created by info@webegg.co.uk
 */

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
        // testing comment
    }));
});
