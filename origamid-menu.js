(function( $, window ) {
$.fn.origamidMenu = function( options ) {
	
	// Opções	
	var settings = $.extend({
			breakpoint: 768,
			top: 50,
			color: 'white',
			background: 'black'
	}, options );
	
	var mobileWidth = settings.breakpoint,
			color = settings.color,
			background = settings.background,
			hambugerActive = false,
			hamburger = '<a id="origamid-icon"></a>',
			menu = $(this);
	
	var styles = '<style>\
					#origamid-menu { background-color: ' + background + '; top: ' + settings.top + 'px; }\
					#origamid-menu li { border-color: ' + color + '; }\
					#origamid-menu li:last-of-type { border-color: ' + color + '; }\
					#origamid-menu li a { color: ' + color + '; }\
					#origamid-menu li a:hover { color: ' + background + '; background: ' + color + '; }\
					#origamid-icon::before { background:' + color + '; }\
					#origamid-icon::after { box-shadow: 0 4px 0 0 ' + color + ', 0 -4px 0 0 ' + color + '; }\
					#origamid-icon.active::before, #origamid-icon.active::after { background:' + color + '; }\
				</style>';

	var menuFunction = function() {
		var width = $(window).width();
		if (width < mobileWidth) {
			menu.attr('id', 'origamid-menu');
			if(!hambugerActive) {
				hambugerActive = true;
				menu.before(hamburger);
				$('#origamid-menu').append(styles);
			} else {
				return false;
			}

		} else if (width > mobileWidth) {
			hambugerActive = false;
			$('#origamid-icon').remove();
			$('#origamid-menu style').remove();
			menu.attr('id', '');
		}

		$('#origamid-icon').on('click touchstart', function(e) {
			e.preventDefault();
			$('#origamid-icon').toggleClass('active');
			menu.toggleClass('active');
		});
	}
	
	menuFunction();
	$(window).resize(menuFunction);
};
}( jQuery, window ));