
//时间显示
function rendertime(){
	var currentTime =new Date();
	var h = currentTime.getHours();
	var m=currentTime.getMinutes();
	var s=currentTime.getSeconds();
	var Mytime=document.getElementById("timeDisplay");
	Mytime.innerHTML= h +':'+ m +':'+s;
	setTimeout("rendertime()",1000);
}

//最后修改时间显示
function lastModify(){
    var modiDate = new Date(document.lastModified);
    var showAs = modiDate.getDate() + "-" + (modiDate.getMonth() + 1) + "-" + modiDate.getFullYear();
    document.getElementById("Modifydate").innerHTML='Last modified on '+showAs;
}

//提交日期格式检测
function submitt(){
	var d=document.getElementById("day").value;
	var m=document.getElementById("month").value;
	var y=document.getElementById("year").value;
	if(d&&m&&y)
	{alert("You are successfully submitted!");}
	else
		{alert("Please enter the valid dates");}
	
}

//登陆账户表单验证
function verification(){
	//获取表单信息
	var acct = document.getElementByName("acco").value;
	var pass = document.getElementByName("pass").value;
	//密码必须包含数字，且大于8位
	var partn_pass = new RegExp(/^[0-9A-Za-z]+$/);
	//检测账号是否有效，邮箱格式
	var idx_mail = acct.indexOf("@");
	var idx_dot = acct.lastIndexOf(".");
	
	if (acct == null || idx_mail<1 || (idx_dot)-(idx_mail)<2 ){
		$.messager.alert('warming', 'you need to enter your valid account address.');
	}
	
	if (partn_pass.test(pass) && pass.length >8){
		return true;
	}else{
		$.messager,alert('warming', 'you need to enter a valid password.');
	}
	
	
}


