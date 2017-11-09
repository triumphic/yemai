//用户注册
function rand(min,max){
	return Math.floor(Math.random()*(max-min+1)+min);
}
function yzm(){
	var str = "abcdefghijklmnpqrstuvwxyz123456789ABCDEFGHIJKLMNPQRSTUVWXYZ";
	var l = str.length;
	var i1 = str.charAt(rand(0,l));
	var i2 = str.charAt(rand(0,l));
	var i3 = str.charAt(rand(0,l));
	var i4 = str.charAt(rand(0,l));
	return i1+ i2 + i3 + i4 ;
}
$("#yzm").click(function(){
	window.getSelection?window.getSelection():document.selection.empty();
	$("#yzm").html(yzm());
})
//手机
$(".txt-phone").focus(function(){
	$(".txt-phone").addClass("txt-css1").removeClass("txt-phone");
})
$(".txt-css1").blur(function(){
	$(".txt-css1").addClass("txt-phone").removeClass("txt-css1");
	if($(".txt-phone").val()==""){
		$(".error1").css("display","block");
	}else{
		$(".error1").css("display","none")
		$(".txt-phone").removeClass("txt-phone");
	}
})
//验证码
$(".txt-yzm").focus(function(){
	$(".txt-yzm").addClass("txt-css2").removeClass("txt-yzm");
})
$(".txt-css2").blur(function(){
	$(".txt-css2").addClass("txt-yzm").removeClass("txt-css2");
	if($(".txt-yzm").val()==""){
		$(".error2").css("display","block");
	}else{
		$(".error2").css("display","none");
		$(".txt-yzm").removeClass("txt-yzm");
	}
})
//短信验证码
$(".txt-mes").focus(function(){
	$(".txt-mes").addClass("txt-css3").removeClass("txt-mes");
})
$(".txt-css3").blur(function(){
	$(".txt-css3").addClass("txt-mes").removeClass("txt-css3");
	if($(".txt-mes").val()==""){
		$(".error3").css("display","block");
	}else{
		$(".error3").css("display","none");
		$(".txt-mes").removeClass("txt-mes");
	}
})
//密码
$(".txt-pwd").focus(function(){
	$(".txt-pwd").addClass("txt-css4").removeClass("txt-pwd");
})
$(".txt-css4").blur(function(){
	$(".txt-css4").addClass("txt-pwd").removeClass("txt-css4");
	if($(".txt-pwd").val()==""){
		$(".error4").css("display","block");
	}else{
		$(".error4").css("display","none");
		$(".txt-pwd").removeClass("txt-pwd");
	}
})
//确认密码
$(".txt-pwd2").focus(function(){
	$(".txt-pwd2").addClass("txt-css5").removeClass("txt-pwd2");
})
$(".txt-css5").blur(function(){
	$(".txt-css5").addClass("txt-pwd2").removeClass("txt-css5");
	if($(".txt-pwd2").val()==""){
		$(".error5").css("display","block");
	}else{
		$(".error5").css("display","none");
		$("txt-pwd2").removeClass("txt-pwd2");
	}
})
function check(){
	var flagPhone = true;
	var flagYzm = true;
	var flagMes = true;
	var flagPwd = true;
	var flagQpwd = true;
	var flagTy = true;
//	手机号验证
		var strPhone = $("#txt-phone").val();
		var regPhone = /^1[0-9]{10}$/;
		if(!regPhone.test(strPhone)){
			$(".error1 label").html("请输入正确的手机号");
			flagPhone = false;
		}else{
			flagPhone = true;
		}
//	验证码
		var strYzm = $("#txt-yzm").val();
		var regYzm = $("#yzm").html();
//		alert($("#yzm").html())
//		alert($("#txt-yzm").val())
		if(strYzm != regYzm){
			$(".error2 label").html("请输入正确的验证码");
			flagYzm = false;
		}else{
			flagYzm = true;
		}
//	短信验证码
		var strMes = $("#txt-mes").val();
		if(strMes.length!=4){
			$(".error3 label").html("请输入正确的验证码");
			flagMes = false;
		}
//	密码
	var strPwd = $("#txt-pwd").val();
	var regPwd = /^[a-zA-Z\d_]{6,16}$/;
		if(!regPwd.test(strPwd)){
			$(".error4 label").html("请输入正确的密码");
			flagPwd = false;
		}
//	密码确认
	var strQpwd = $("#qpwd").val();
		if(strQpwd!=strPwd){
			$(".error5 label").html("两次输入的密码不一致");
			flagQpwd=false;
		}
//	同意条款
	if(!$("#vip").prop("checked")){
		flagTy = false;
		alert(flagTy)
	}
//	综合验证
	if(flagPhone&&flagYzm&&flagMes&&flagPwd&&flagQpwd&&flagTy){
//		alert(true)
		return true;
	}else{
//		alert(false)
		return false;
	}
}
//点击提交验证
$("#btn").click(function(){
	if(check()){
		var _json = {
			"uphone" : $("#txt-phone").val(),
			"upwd" : $("#txt-pwd").val()
		}
		setCookie("user",JSON.stringify(_json),1);
	}
	location.reload();
})