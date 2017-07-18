$(document).ready(function() {

	/**
	 *
	 * Form Popup in Analysis Section
	 *
	 */
	
	$("i.opened").click (function(){
		$("i.opened").toggleClass('rotate');
		$("div.popup").slideToggle (500);
	});

	$("i.closed").click (function(){
		$("div.popup").slideUp (500);
		$("i.opened").toggleClass('rotate');
	});

	/**
	 *
	 * WOWJs Fire
	 *
	 */
	
	new WOW().init();

});