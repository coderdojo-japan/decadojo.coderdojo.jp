jQuery(document).ready(function($){

  $("a").bind("focus",function(){if(this.blur)this.blur();});
  $("a.target_blank").attr("target","_blank");

  $('#return_top a, #header_logo_index a').click(function() {
    var myHref= $(this).attr("href");
    var myPos = $(myHref).offset().top;
    $("html,body").animate({scrollTop : myPos}, 1000, 'easeOutExpo');
    return false;
  });

  //return top button
	var topBtn = $('#return_top');	
	topBtn.removeClass('active');
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			topBtn.addClass('active');
		} else {
			topBtn.removeClass('active');
		}
	});

  //category widget
  $(".collapse_category_list li").hover(function(){
     $(">ul:not(:animated)",this).slideDown("fast");
     $(this).addClass("active");
  }, function(){
     $(">ul",this).slideUp("fast");
     $(this).removeClass("active");
  });

  //comment tab
  $("#trackback_switch").click(function(){
    $("#comment_switch").removeClass("comment_switch_active");
    $(this).addClass("comment_switch_active");
    $("#comment_area").animate({opacity: 'hide'}, 0);
    $("#trackback_area").animate({opacity: 'show'}, 1000);
    return false;
  });

  $("#comment_switch").click(function(){
    $("#trackback_switch").removeClass("comment_switch_active");
    $(this).addClass("comment_switch_active");
    $("#trackback_area").animate({opacity: 'hide'}, 0);
    $("#comment_area").animate({opacity: 'show'}, 1000);
    return false;
  });

  //tab
  $('#single_tab li:first-child a').addClass('active');
  $("#single_tab_contents .single_tab_content:first").show();
  $("#single_tab li a").click(function(){
    $("#single_tab li a").removeClass("active");
    $(this).addClass("active");
    $("#single_tab_contents .single_tab_content").hide();
    $($(this).attr('href')).fadeIn();
    return false;
  });

  $("html").addClass("pc");

  $(".menu_button").css("display","none");

  $("#global_menu li").hover(function(){
    $(">ul:not(:animated)",this).slideDown("fast");
    $(this).addClass("active");
  }, function(){
    $(">ul",this).slideUp("fast");
    $(this).removeClass("active");
  });

});