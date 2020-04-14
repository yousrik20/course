$(function(){
	// Adjest Slider Height
	var winh=$(window).height(),
		upperh=$(".upper-bar").innerHeight(),
		navh=$(".navbar").innerHeight();
		$(".slider,.carousel-item").height(winh-(upperh+navh));
	// Featured Work Shffule 
	$(".featured-work ul li").on("click",function(){
		$(this).addClass("active").siblings().removeClass("active");
		if ($(this).data("class")==="all") {
			$(".shuffle-imgs .col-sm").css("opacity",1);
		}else{
			$(".shuffle-imgs .col-sm").css("opacity",".3");
			$($(this).data("class")).parent().css("opacity",1);
		}
	});
});