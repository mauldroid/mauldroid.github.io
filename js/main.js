$(function() {
    host = 'http://voela.test:8000';
    $.ajaxSetup({
	    beforeSend: function (xhr)
	    {
	       xhr.setRequestHeader("Accept","application/json");      
	    }
	});
    // host = 'http://api.voela.id';
    /**
     * on vendor click
     */
    $('#vendor-singup').on("submit", function(e){
    	e.preventDefault();
    	 $.post(host + '/register-vendor',$(this).serialize()).done(function(res){
    		if (res.status === true) {
    			clear_form();
    			$('#messages').html(success_message());
    		}else{
    			if(res.status_code == 2){
    				$('#messages').html('')
    				res.data.forEach(function(data){
    					$('#messages').append(error_message(data));
    				});
    			}
    		}
    	});
    });
});

function clear_form(){
	$('#vendor-name').val('');
	$('#vendor-phone').val('');
	$('#vendor-email').val('');
	$('#vendor-restaurant_name').val('');
	$('#vendor-address').val('');
}

function error_message(message){
	return "<div class='alert alert-danger' role='alert'>"+message+"</div>"
}

function success_message(){
	return "<div class='alert alert-success' role='alert'>\
				<strong>Berhasil Registrasi,</strong> anda akan segera di hubungi oleh tim kami untuk melakukan proses validasi\
			</div>";
}