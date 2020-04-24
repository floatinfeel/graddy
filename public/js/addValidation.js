function first_name_validation(){ 
	let first_name = document.forms["addform"]["first_name"];			 
	let valuefn = first_name.value

	if(valuefn[0]==" " || valuefn == false){
		$('#errorfn').show();
	}else {
		$('#errorfn').hide();
	}

}

function last_name_validation(){ 
	let last_name = document.forms["addform"]["last_name"];			 
	let valuefn = last_name.value

	if(valuefn == false || valuefn[0] == " "){
		$('#errorln').show();
	}else {
		$('#errorln').hide();
	}

}

function email_validation() {
	// body...
	$('#email_address').on('keyup', function() {
    var re = /([A-Z0-9a-z_-][^@])+?@[^$#<>?]+?\.[\w]{2,4}/.test(this.value);
	    if(!re) {
	        $('#erroremail').show();
	    } else {
	        $('#erroremail').hide();
	    }
	})
}

function submit_add(){
	let first_name = document.forms["addform"]["first_name"];			 
	let valuefn = first_name.value
	let last_name = document.forms["addform"]["last_name"];			 
	let valueln = last_name.value
	let email = document.forms["addform"]["email"]
	let valueEmail = email.value
	let birth_date = document.forms["addform"]["birth_date"]
	let valueBD = birth_date.value

	if(!valuefn || !valueln || !valueEmail || !valueBD){
		window.alert(" All data must be filled...")
		return false
	} 

	return true
}




