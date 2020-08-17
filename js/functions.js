jQuery(document).ready(function($){

	/**
	* スマホ用固定フッターバー
	*/
	if ($(".footer-bar02-share").length) {
		$(".footer-bar02-share, #modal-overlay").on("click", function() {
			$("#modal-content, #modal-overlay").toggleClass("hide");			
			return false;
		});	
		$("#modal-overlay, #modal-content").on("touchmove", function(e) {
			e.preventDefault();
		});
	}
	if ($(".footer-bar02").length) {
		var footerBar02 = $(".footer-bar02");  
		$(".footer-bar01").css({
			"padding-bottom": $(".footer-bar02").height() + "px"
		});
		$("#pagetop").css({
			"bottom": $(".footer-bar02").height() + "px"
		});
  		footerBar02.hide();
  		$(window).scroll(function () {
    		if ($(this).scrollTop() > 100) {
    			footerBar02.fadeIn("slow");
    		} else {
      			footerBar02.fadeOut();
    		}
		}); 
	}
});