$(document).ready(function() {

	$('input, textarea').placeholder();

	$('table').wrap('<div class="table-responsive" />');

	// fancy select lists
	$('select').each(function() {
		$(this).wrap('<div class="js-select"/>');
	});

	$('.js-select select').on('focus', function() {
		$(this).parent().addClass('js-focus');
	});

	$('.js-select select').on('focusout', function() {
		$(this).parent().removeClass('js-focus');
	});

	// fancy radios
	$('input[type=radio]').each(function() {
		$(this).wrap('<span class="js-radio"/>');
		if($(this).is(':checked')) {
			$(this).parent().addClass('js-selected');
		}
	});

	$('.form-radio-inline').on('click', function() {
		var radio_name = $('input', this).attr('name');
		$('input[name='+radio_name).parent().each(function() {
			$(this).removeClass('js-selected');
		});
		$('.js-radio', this).addClass('js-selected');
	});

	// fancy checkboxes
	$('input[type=checkbox]').each(function() {
		$(this).wrap('<span class="js-checkbox"/>');
		if($(this).is(':checked')) {
			$(this).parent().addClass('js-selected');
		}
	});

	$('.form-checkbox-inline').on('click', function() {
		$('.js-checkbox', this).toggleClass('js-selected');
	});

	$('.js-radio input, .js-checkbox input').on('focus', function() {
		$(this).parent().addClass('js-focus');
	});

	$('.js-radio input, .js-checkbox input').on('focusout', function() {
		$(this).parent().removeClass('js-focus');
	});
	
	// tab panels
	$('.tab-switcher a').on('click', function() {
		$('.tab-switcher a').removeClass('tab-selected');
		$('.tab-panel').hide();
		var tabpanel_id = $(this).attr('id');
		$(this).addClass('tab-selected');
		$('.'+tabpanel_id).fadeIn('fast');
		return false;
	});
	
	
	$(".navigation li").hover(function(){
	
		$(this).addClass("nav-hovered");
			$('ul:first',this).css('visibility', 'visible');
		}, function(){
		$(this).removeClass("nav-hovered");
		$('ul:first',this).css('visibility', 'hidden');
	
	});
	
	$('.nav-button-expand').on('click', function() {
		$(this).toggleClass('nav-button-expand-open');
		$('.nav-current ul').slideToggle('fast');
		return false;
	});

});