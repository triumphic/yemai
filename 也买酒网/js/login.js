$("#txt-mobile").focus(function(){
	$(".txt-mobile").addClass("txt-css1").removeClass("txt-mobile");
})
$("#txt-mobile").blur(function(){
	$(".txt-css1").addClass("txt-mobile").removeClass("txt-css1");
	if($(".txt-mobile").val()==""){
		$(".error1").css("display","block");
	}else{
		$(".error1").css("display","none")
		$(".txt-mobile").removeClass("txt-mobile");
	}
})
$("#txt-pwd").focus(function(){
	$(".txt-pwd").addClass("txt-css2").removeClass("txt-pwd");
})
$("#txt-pwd").blur(function(){
	$(".txt-css2").addClass("txt-pwd").removeClass("txt-css2");
	if($(".txt-pwd").val()==""){
		$(".error1").css("display","block");
	}else{
		$(".error1").css("display","none")
		$(".txt-pwd").removeClass("txt-pwd");
	}
})
var flagMobile = true;
var flagPwd = true;
function login(){
	var user = JSON.stringify(getCookie("user"));
	alert(user)
	var str1 = user.split(",")[0];
	var str2 = user.split(",")[1];
	alert(str2)
	str1=JSON.parse(str1.split(":")[1]);
	str2=str2.split(":")[1];
	str2=JSON.parse(str2.split("}")[0]);
	var uname2 = $(".txt-mobile").val();
	var upwd2 = $(".txt-pwd").val();
	if(uname2!=str1){
		$(".error1").css("display","block");
		$(".error1").html("您输入的手机号错误");
		flagMobile = false;
	}
	if(upwd2!=str2){
		$(".error2").css("display","block");
		$(".error2").html("您输入的密码错误");
		flagPwd = false;
	}
	if(flagMobile&&flagPwd){
		alert(true)
		return true;
	}
}
//点击登录
$(".btn-login").click(function(){
	if(login()){
		location.href="http://127.0.0.1:8020/%E4%B9%9F%E4%B9%B0%E9%85%92%E7%BD%91/shouye.html";
	}
})
