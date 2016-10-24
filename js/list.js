window.onload=function(){
	$("#listfoot").load("foot.html");
	$("#listhead").load("head.html",function(){
		 var now = new Date();
	  if(getCookie("judge")==1){
		if(now.getHours() >= 6 && now.getHours() <8){
			$("#header-info .time").html("早上好，<b style='color:red'>" + getCookie("name")+ "</b>！欢迎来到No5时尚广场。")
		}else if(now.getHours() >= 8 && now.getHours() <12){
			$("#header-info .time").html("上午好，<b style='color:red'>" + getCookie("name")+ "</b>！欢迎来到No5时尚广场。")
		}else if(now.getHours() >= 12 && now.getHours() <14){
			$("#header-info .time").text("中午好，<b style='color:red'>" + getCookie("name")+ "</b>！欢迎来到No5时尚广场。")
		}else if(now.getHours()>= 14 && now.getHours()<18){
			$("#header-info .time").html("下午好，<b style='color:red'>" + getCookie("name")+ "</b>！欢迎来到No5时尚广场。")
		}else {
			$("#header-info .time").html("晚上好，<b style='color:red'>" + getCookie("name")+ "</b>！欢迎来到No5时尚广场。")
		};
	 }else{
	 	if(now.getHours() >= 6 && now.getHours() <8){
			$("#header-info .time").text("早上好，欢迎光临No5时尚广场。")
		}else if(now.getHours() >= 8 && now.getHours() <12){
			$("#header-info .time").text("上午好，欢迎光临No5时尚广场。")
		}else if(now.getHours() >= 12 && now.getHours() <14){
			$("#header-info .time").text("中午好，欢迎光临No5时尚广场。")
		}else if(now.getHours()>= 14 && now.getHours()<18){
			$("#header-info .time").text("下午好，欢迎光临No5时尚广场。")
		}else {
			$("#header-info .time").text("晚上好，欢迎光临No5时尚广场。")
		};
	 };
	 
	
	if(getCookie("judge")==1){
	 	$("#header-info .l .deng").html("<a style=" + "cursor:pointer;"+">[退出]</a>");
	 	$("#header-info .l .deng").on("click","a",function(){
	 		$("#header-info .l .deng").html("<a href='logi.html'>[登录]</a>" + "<a href='reg.html'>[免费注册]</a>");
	 		setCookie("judge",0);
	 		window.location.href="logi.html";
	 	})
	 }
	//三级菜单	
		$("#box").mouseenter(function(){
			$("#box dl").stop(true).slideDown(200)
		});
					
		$("#box").mouseleave(function(){
			$("#box dl").stop(true).slideUp(200)
		});
					
		$("#box dl").mouseenter(function(){	
			$(this).css("background","#fff");
			$(this).children("dd").stop(true).show();
		});
					
		$("#box dl").mouseleave(function(){
			$(this).css("background","#F8F8F8");
			$(this).children("dd").stop(true).hide();
		});
	});
//伸缩菜单
	$("#listleft .ll-top dt").click(function(){
		$(this).siblings("dd").stop(true).slideToggle(20);
		$(this).children(".bg,.bg1").toggleClass("bg");
	})
	
}
