$('#my_select_box').change(function(){
	$('#my_changing_image').attr('src', $('#my_select_box').val());
});