$(document).ready(function() {
	//var base_z_index = 10;
	var z_index = 10;
	$('.card').click(function() {
		if ($(this).hasClass('flip')) {
			$(this).removeClass('flip');
			$(this).css({'z-index' : 1});
		}
		else {
			z_index = z_index + 1;
			$(this).css({'z-index' : z_index});
			$(this).addClass('flip');
			
		}
	});                  
});