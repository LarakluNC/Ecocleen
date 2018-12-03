
jQuery(document).ready(function($) {


	$('.main-map-svg path:not(.no-hover)').hover(function() {
		region = $(this).data('region');
		$('.pop.'+region).show();

	}, function() {
		$('.pop.'+region).hide();
	});

	$('.tree').addClass('tree-animate');
	$('.round-tree').addClass('round-tree-animate');


});

