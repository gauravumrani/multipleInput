
(function ( $ ) {

	$.fn.multiInput = function(options) {
		var settings = $.extend({
            // These are the defaults.
            plusBtnClass: "primary",
            minusBtnClass: "default",
            backgroundColor: "white",
            maxInput:5
        }, options );
		var elemType=$(this).find('input').attr('type') || "";
		if(elemType=='text'){
		var elemClass=$(this).find('input').attr('class') || "";
		var elemId=$(this).find('input').attr('id') || "";
		var elemName=$(this).find('input').attr('name') || "";
		var count=1;
		var currentElem=this;
		$(this).append('&nbsp;&nbsp;<button class="btn '+settings.plusBtnClass+' add"><span class="glyphicon glyphicon-plus-sign"></span></button>').find('.add_field_button');
		$(currentElem).on("click",".add", function(e){
			if(count<settings.maxInput){
				count++;
				$(currentElem).append('<div><br><input class="'+elemClass+'" id="'+elemId+'" type="'+elemType+'" name="'+elemName+'"/> &nbsp;<button class=" btn '+settings.minusBtnClass+' remove" ><span class="glyphicon glyphicon-minus-sign"></span></button></div>'); 
				
			}					
		});
		$(currentElem).on("click",".remove", function(e){ 
			//user click on remove text
			$(this).parent('div').remove();
			count--;
		});
		return this;
	}
	};

}( jQuery ));
