$(function(){
	sideOut();
	LouTi();
	magnifying();
})
//页面加载完成后侧边栏出现
function sideOut(){
	$(".side").animate({"right":0},1000)
}
//侧边栏top回顶部
function backTop(){
	$("to-top").click(function(){
		$("html,body").scrollTop(0);
	})
}
//吸顶效果
$(document).scroll(function(){
	var sTop = $(document).scrollTop();
	if(sTop>1062){
		$("#louti").css({"position":"fixed","top":0});
	}else{
		$("#louti").css({"position":"absolute","top":0});
	}
//	var sTop = $(document).scrollTop();
//		console.log(sTop)
})
//楼梯效果
function LouTi(){
	$("#louti").find("a").click(function(){
		$(this).addClass("hover").siblings().removeClass("hover");
		var index = $(this).index();
		if(index==0){
			$("html,body").scrollTop(1062);
		}else if(index==1){
			$("html,body").scrollTop(3400);
		}else if(index==2){
			$("html,body").scrollTop(4225);
		}
	})
}
//放大镜
function magnifying(){
	$(".img-list>li").mouseenter(function(){
		$(this).css("opacity",1).siblings().css("opacity",0.5);
		$("#small-img>img").eq($(this).index()).show().siblings().hide();
		$(".big-img>img").eq($(this).index()).show().siblings().hide();
	})
	$("#small-img").mouseover(function(){
		$(".mask").show();
		$(".big-img").show();
	})
	$("#small-img").mouseout(function(){
		$(".mask").hide();
		$(".big-img").hide();
	})
	$("#small-img").mousemove(function(e){
		var e = e || event;
		var x = e.pageX - $("#small-img").offset().left - $(".mask").width()/2;
		var y = e.pageY - $("#small-img").offset().top - $(".mask").height()/2;
		var maxL = $("#small-img").width()-$(".mask").width();
		var maxT = $("#small-img").height()-$(".mask").height();
		x = Math.min(maxL,Math.max(0,x));
		y = Math.min(maxT,Math.max(0,y));
		$(".mask").css({
			"left":x,
			"top":y
		})
		var bigx = x*$(".big-img img").width()/$("#mm").width();
		var bigy = y*$(".big-img img").height()/$("#mm").height();
		$(".big-img img").css({
			"left":-bigx,
			"top":-bigy
		})
//		console.log(bigx)
	})
	
	
}
