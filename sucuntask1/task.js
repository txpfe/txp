$(function(){
	var ul = $(".n1 ul");
	var li = $(".n1 li");
	
	var speed = 350;
	var autospeed = 3000;	
	var i=1;
	var index = 0;
	var n = 0;
/* 自动轮换 */
function autoroll() {
					if(n >= 3) {
						n = 0;
					}
					tli.removeClass("cur");
				tli.eq(n).addClass("cur");
					ul.css({"left":"0px"});	
				li.css({"left":"0px"}); 
				li.eq(n).css({"z-index":i});	
				li.eq(n).css({"left":"1350px"});	
				 	
					n++;
					i++;
					timer = setTimeout(autoroll, autospeed);
					ul.animate({left:"-1350px"},speed);
				};
/* 鼠标悬停即停止自动轮换 */
function stoproll() {
					li.hover(function() {
						clearTimeout(timer);
						n = $(this).prevAll().length+1;
					}, function() {
						timer = setTimeout(autoroll, autospeed);
					});
					tli.hover(function() {
						clearTimeout(timer);
						n = $(this).prevAll().length+1;
					}, function() {
						timer = setTimeout(autoroll, autospeed);
					});
				};		
tli.mouseenter(n1);
	autoroll();
	stoproll();
});