jQuery(document).ready(function($){
	console.log('Todos amammos jQuery');
	var contN=1;
	jQuery('.next').click(function(e){
		if(contN>=4){
			jQuery(this).attr('disabled','disabled');
		}else{
			contN=contN+1;
		}

		showPost(contN)
		
	});
	jQuery('.prev').click(function(e){
		if(contN<2){
			jQuery(this).attr('disabled','disabled');
		}else{
			contN=contN-1;
		}
		showPost(contN)
		
	});
});


function showPost(n){
	console.log(n);
	switch(n) {
	    case 1:
	        jQuery('.dot').css('display','none');
	        jQuery('.dot'+n).css('display','block');
	        break;
	    case 2:
	        jQuery('.dot').css('display','none');
	        jQuery('.dot'+n).css('display','block');
	        break;
	    case 3:
	        jQuery('.dot').css('display','none');
	        jQuery('.dot'+n).css('display','block');
	        break;
	    case 4:
	        jQuery('.dot').css('display','none');
	        jQuery('.dot'+n).css('display','block');
	        break;
	    default:
	        jQuery('.dot').css('display','none');
	        jQuery('.dot'+1).css('display','block');
	        break;
	}
}

