

$(document).ready(function(){
	var image1=0;
	var image2=0;
	var image1holder;
	var image2holder;
	var numbertilesclicked=0;

	$('.mg_tile-inner').click(function(){
		image1 = $(this).find('.mg_tile-inside').html();
		console.log(image1);
		$(this).find('.mg_tile-inside').css('display', 'block');
		$(this).find('.mg_tile-outside').css('display','none');	
		
    });
    
});
        