// written by Robin Lucbernet <niborEH@gmail.com> - nibor.me
// jquery.checkbox.js
// Transform a regular checkbox input into a two state slider.

(function( $ ){

  $.fn.checkbox = function( options ) {  

    // Create some defaults, extending them with any options that were provided
    var settings = $.extend( {
      'on_image'   : 'images/on.png',
      'off_image'  : 'images/off.png',

      'on_text'    : 'ON',
      'off_text'   : 'OFF'
    }, options);

    return this.each(function() {        

    	var checkbox = this
    	var checkbox_wrapper = $('<span class="jquery_checkbox"><span class="jquery_checkbox_text"></span></span>')

      // hide the regular checkbox and insert our wrapper
    	$(checkbox).css({position: 'absolute', zIndex: -1, visibility: 'hidden'}).after(checkbox_wrapper)
    	
    	checkbox_wrapper.click(function(event) {
          $(checkbox).trigger('click')
          event.preventDefault();
          event.stopPropagation();
    	});

    	$(checkbox).change(function() {
        if ($(this).is(':checked')) {
       			checkbox_wrapper
    				.css({background: "url('"+settings.on_image+"')"})
					.find('.jquery_checkbox_text')
						.removeClass('jquery_checkbox_off')
						.addClass('jquery_checkbox_on')
						.html(settings.on_text)
    		} else {
    			checkbox_wrapper
    				.css({background: "url('"+settings.off_image+"')"})
	    			.find('.jquery_checkbox_text')
	    				.removeClass('jquery_checkbox_on')
						.addClass('jquery_checkbox_off')
						.html(settings.off_text)
    		}
    	}).change()
    });
  };
})( jQuery );