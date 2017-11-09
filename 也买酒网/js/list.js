$(function(){
	autoPlay();
	countDown();
	information();
})
//轮播图
var index = 0;
function autoPlay(){
	timer = setInterval(auto,3000);
	function auto(){
		index++;
		var l = $(".scroll-content li").length;
		if(index==l){
			index=0;
		}
//		alert(index)
		$(".scroll-content").animate({"left":-1200*index},1000,function(){
			$(".scroll-content li").eq(index).addClass("active").siblings().removeClass("active")
		})
		$(".scroll-nav li").eq(index).addClass("on").siblings().removeClass("on");
	}
	$(".jian").mouseover(function(){
		$(this).addClass("setColor");
	})
	$(".jian").mouseout(function(){
		$(this).removeClass("setColor");
	})
	$(".prev").click(function(){
		if(index==0){
			index=$(".scroll-content li").length;
		}
		index--;
		$(".scroll-content").animate({"left":-1200*index},1000,function(){
			$(".scroll-content li").eq(index).addClass("active").siblings().removeClass("active")
		})
		$(".scroll-nav li").eq(index).addClass("on").siblings().removeClass("on");
	})
	$(".next").click(function(){
		index++;
		if(index==$(".scroll-content li").length){
			index=0;
		}
		$(".scroll-content").animate({"left":-1200*index},1000,function(){
			$(".scroll-content li").eq(index).addClass("active").siblings().removeClass("active")
		})
		$(".scroll-nav li").eq(index).addClass("on").siblings().removeClass("on");
	})
}
//购物车滑动定位
$(document).scroll(function(){
	var scrollT = $(document).scrollTop();
//	console.log(scrollT)
	if(scrollT>100){
		$(".sousuo_a").css({"position":"fixed","bottom":0,"right":40})
	}else{
		$(".sousuo_a").css({"position":"absolute","bottom":505,"right":40})
	}
})
//倒计时条
function countDown(){
	$(".pull").hover(function(){
		$(".pull").animate({"right":-160},1000);
	},function(){
		$(".pull").animate({"right":-325},1000);
	})
	var timer = setInterval(cutDown,1000);
}
function cutDown(){
	var endTime = new Date("2017-11-12 00:00:00")
	var now = new Date();
	var t = Math.abs( now - endTime )/1000;
	var d = parseInt(t/86400);
	var h = parseInt((t-d*86400)/3600);
	var m = parseInt((t-d*86400-h*3600)/60);
	var s = parseInt(t-d*86400-h*3600-m*60);
	$(".tcd").html(d);
	$(".tch").html(h);
	$(".tcm").html(m);
	$(".tcs").html(s);
}
function information(){
	$.ajax({
		type:"get",
		url:"data.json",
		success:function(json){
			var html = "";
			for(var i = 0 ; i < json.list.length ; i++){
				var item = json.list[i];
				html += `<li>
				<div class="product">
					<a href="#" class="prod-img">
						<span class="sellout"></span>
						<img src="img/${item.src}"/>
					</a>
					<div class="prod-info">
						<h3>
							<a href="#">
								<b style="font-weight: bold;">${item.name}</b>
								<span>Cuvee Les Agapes</span>
							</a>
						</h3>
						<p class="prod-note">
							<em>卖点</em>
							<span class="prod-em">
								<span class="prod-em-content">
									<b></b>
									<a href="#">喜庆，适合婚宴的法国葡萄酒</a>
								</span>
							</span>
							<label>法国优质餐酒</label>
							<label>超高性价比</label>
						</p>
						<p class="prod-price">
							<span class="minprice">
								抢购价
								<strong>${item.price}</strong>
							</span>
						</p>
						<p class="prod-num">
							<span>选择数量:</span>
							<a href="#" class="jian">-</a>
							<input type="text" value="1" class="txt-num"/>
							<a href="#" class="jia">+</a>
							<span>还剩余:</span>
							<b>0</b>瓶
						</p>
						<p class="prod-btn">
							<a href="#" class="btn-buy"></a>
						</p>
						<p class="pull">
							<label>剩余时间</label>
							<span class="countdown">
								<strong class="tcd">1</strong>
								<b>天</b>
								<strong class="tch">19</strong>
								:
								<strong class="tcm">07</strong>
								:
								<strong class="tcs">28</strong>
							</span>
						</p>
					</div>
				</div>
			</li>`
			}
		$(".col2").html(html);
		}
	})
}
