//第一个轮播图
var $items = $(".slide_item>li");
var $index = $(".slide_index>span");
$(function(){
	var index= 0 ;
	timer = setInterval(autoPlay,5000);
	function autoPlay(){
		index++;
		if(index == $items.length){
			index=0;
		}
		$index.eq(index).addClass("current")
						.siblings()
						.removeClass("current");
		$items.eq(index).fadeIn(2000).siblings().fadeOut(2000);			
	}
	$index.each(function(){
		$(this).mouseover(function(){
			$index.eq($(this).index()).addClass("current")
			                          .siblings()
			                          .removeClass("current");
			$items.eq($(this).index()).fadeIn(200).siblings().fadeOut(200);
			clearInterval(timer)
		})
		$(this).mouseout(function(){
			index = $(this).index();
			timer = setInterval(autoPlay,2000)
		})
		$("#txt").val("输入您要查找的商品名称");
		$("#txt").focus(function(){
			$(this).val("");
		}).blur(function(){
			$(this).val("输入您要查找的商品名称");
		})
	})
//选项卡
	$(".left-h3 span").mouseover(function(){
		$(this).addClass("on").siblings().removeClass("on");
		$(".left-bottom ul").css("display","none");
		$(".left-bottom ul").eq($(this).index()).css("display","block");
	})
//分页
	$(".section_main li").mouseover(function(){
		$(this).addClass("main-on").siblings().removeClass("main-on");
		$(".section_ul ul").eq($(this).index()).slideDown(300)
											   .siblings()
											   .slideUp(300);
	})
	autoscroll();
	accordion();
	accord();
	mouseleft();
	BigPic();
	bannerShow();
//	fixCar();
})
//banner图的显现
function bannerShow(){
	$(".banner").animate({"height":195},1000)
}
//购物车滑动定位
$(document).scroll(function(){
	var scrollT = $(document).scrollTop();
//	console.log(scrollT)
	if(scrollT>250){
		$(".sousuo_a").css({"position":"fixed","bottom":0,"right":40})
	}else{
		$(".sousuo_a").css({"position":"absolute","bottom":310,"right":40})
	}
})
//轮播图2
function autoscroll(){
	var $img = $(".main-slide");
	var $span = $(".slide-index>span");
	var index = 0;
	var flag = true;
	timer = setInterval(auto,2500);
	// 0 1 2   1 0   1 2 1 0
	//  true   false
	function auto(){
		if(flag){
			index++;
			if(index==2){
				flag=false;
			}
		}else{
			index--;
			if(index==0){
				flag=true;
			}
		}
		console.log($span.length)
		for(var j = 0 ; j < 5 ;j++){
			$span.eq(j*3+index).addClass("active").siblings().removeClass("active");
			
		}
		$img.animate({"left":-760*index},1500)
	}
}
//垂直方向  手风琴效果
function accordion(){
	
	var $ulist = $(".right-in-ul>li");
	$ulist.each(function(){
		$(this).mouseover(function(){
			console.log($(this).siblings())
			$(this).addClass("on").removeClass("item")
				   .siblings().addClass("item").removeClass("on");
		})
	})
}
//水平方向   手风琴效果
function accord(){
	$(".pinpai-main ul li:nth-child(1)").mouseenter(function(){
		$(".pinpai-main ul li:nth-child(2)").stop().animate({"left":450},1000);
		$(".pinpai-main ul li:nth-child(3)").stop().animate({"left":600},1000);
		$(".pinpai-main ul li:nth-child(4)").stop().animate({"left":750},1000);
		$(".pinpai-main ul li:nth-child(5)").stop().animate({"left":900},1000);
		$(".pinpai-main ul li:nth-child(6)").stop().animate({"left":1050},1000);
	})
	$(".pinpai-main ul li:nth-child(2)").mouseenter(function(){
		$(".pinpai-main ul li:nth-child(1)").stop().animate({"left":0},1000);
		$(".pinpai-main ul li:nth-child(2)").stop().animate({"left":150},1000);
		$(".pinpai-main ul li:nth-child(3)").stop().animate({"left":600},1000);
		$(".pinpai-main ul li:nth-child(4)").stop().animate({"left":750},1000);
		$(".pinpai-main ul li:nth-child(5)").stop().animate({"left":900},1000);
		$(".pinpai-main ul li:nth-child(6)").stop().animate({"left":1050},1000);
	})
	$(".pinpai-main ul li:nth-child(3)").mouseenter(function(){
		$(".pinpai-main ul li:nth-child(1)").stop().animate({"left":0},1000);
		$(".pinpai-main ul li:nth-child(2)").stop().animate({"left":150},1000);
		$(".pinpai-main ul li:nth-child(3)").stop().animate({"left":300},1000);
		$(".pinpai-main ul li:nth-child(4)").stop().animate({"left":750},1000);
		$(".pinpai-main ul li:nth-child(5)").stop().animate({"left":900},1000);
		$(".pinpai-main ul li:nth-child(6)").stop().animate({"left":1050},1000);
	})
	$(".pinpai-main ul li:nth-child(4)").mouseenter(function(){
		$(".pinpai-main ul li:nth-child(1)").stop().animate({"left":0},1000);
		$(".pinpai-main ul li:nth-child(2)").stop().animate({"left":150},1000);
		$(".pinpai-main ul li:nth-child(3)").stop().animate({"left":300},1000);
		$(".pinpai-main ul li:nth-child(4)").stop().animate({"left":450},1000);
		$(".pinpai-main ul li:nth-child(5)").stop().animate({"left":900},1000);
		$(".pinpai-main ul li:nth-child(6)").stop().animate({"left":1050},1000);
	})
	$(".pinpai-main ul li:nth-child(5)").mouseenter(function(){
		$(".pinpai-main ul li:nth-child(1)").stop().animate({"left":0},1000);
		$(".pinpai-main ul li:nth-child(2)").stop().animate({"left":150},1000);
		$(".pinpai-main ul li:nth-child(3)").stop().animate({"left":300},1000);
		$(".pinpai-main ul li:nth-child(4)").stop().animate({"left":450},1000);
		$(".pinpai-main ul li:nth-child(5)").stop().animate({"left":600},1000);
		$(".pinpai-main ul li:nth-child(6)").stop().animate({"left":1050},1000);
	})
	$(".pinpai-main ul li:nth-child(6)").mouseenter(function(){
		$(".pinpai ul-main li:nth-child(1)").stop().animate({"left":0},1000);
		$(".pinpai ul-main li:nth-child(2)").stop().animate({"left":150},1000);
		$(".pinpai ul-main li:nth-child(3)").stop().animate({"left":300},1000);
		$(".pinpai ul-main li:nth-child(4)").stop().animate({"left":450},1000);
		$(".pinpai ul-main li:nth-child(5)").stop().animate({"left":600},1000);
		$(".pinpai ul-main li:nth-child(6)").stop().animate({"left":750},1000);
	})
}
//水平方向    鼠标滑过 图片向左滑动
function mouseleft(){
	$(".pinpai-bottom>ul>li>a>img").each(function(){
		$(this).mouseenter(function(){
//			alert($(this).index())
			$(this).animate({"left":-85},500)
		})
		$(this).mouseleave(function(){
			$(this).animate({"left":0},500)
		})
	})
}
function BigPic(){
	$(".td-code").mouseenter(function(){
//		alert()
		$(this).addClass("b-code");
	}).mouseleave(function(){
		$(this).removeClass("b-code");
	})
}
