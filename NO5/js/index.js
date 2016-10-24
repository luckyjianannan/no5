$(function(){
	$("#fo").load("foot.html");
			
	$("#header").load("head.html",function(){
		
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
//		$("#box").mouseenter(function(){
//			$("#box dl").stop(true).slideDown(200)
//		});
//					
//		$("#box").mouseleave(function(){
//			$("#box dl").stop(true).slideUp(200)
//		});
					
		$("#box dl").mouseenter(function(){	
			$(this).css("background","#fff");
			$(this).children("dd").stop(true).show();
		});
					
		$("#box dl").mouseleave(function(){
			$(this).css("background","#F8F8F8");
			$(this).children("dd").stop(true).hide();
		});
	});
	
//轮播图
	var i = 0;
	var $length = $(".tu li").size();
	var arr = ["#eadaca","#f5e9d3","#c1dfff","#f5f8ff","#fcede6"];	
	$(".num li").eq(i).css("background","#0094FF");
	$("#banner").css("background","#eadaca");
	var time = setInterval(change,3000);
	var timer = "";
	$(".pic").mouseover(function(){
		clearInterval(time);
		clearInterval(timer);
	});
	$(".pic").mouseout(function(){
		clearInterval(timer);
		timer = setInterval(change,3000);
	});
			
	$(".num li").on("mouseover",function(){
		i = $(this).index() - 1;
		change();
	});
	function change(){
		i++;
		if(i >= $length){
			i = 0;
		};
	$(".rightlb li").eq(i).animate({"z-index":"5"},50).siblings().animate({"z-index":"0"},50);
	$("#banner").css("background",arr[i]);
	$(".num li").eq(i).css("background","#0094FF").siblings().css("background","#e8e8e8");
	$(".pic .tu li").eq(i).fadeIn().siblings().fadeOut();
	};
//remind轮播图
  	setInterval(function(){
  		$(".remind ul").animate({"top":"-33px"},100,function(){
  			$(".remind ul li:first").appendTo($(".remind ul"))
  			$(".remind ul").css("top","0");
  		})	
  	},3000);
//倒计时
	setInterval(function(){
			var now = new Date();
			var time = new Date(2016,8,3,0);
			var cha = time.getTime() - now.getTime();
			var hour = Math.floor(cha/1000/60/60);
			var min = Math.floor((cha/1000 - hour*60*60)/60);
			var sec = Math.floor(cha/1000 - hour*60*60 - min*60)
			var secc = Math.floor((cha - hour*60*60*1000 - min*60*1000-sec*1000)/100);
			if(hour < 0){
				$(".time-buy .times .hour").html("00");
			}else if(hour < 10&&hour >= 0){
				$(".time-buy .times .hour").html("0" + hour);
			}else{
				$(".time-buy .times .hour").html(hour);
			};
			if(min < 10){
				$(".time-buy .times .min").html("0" + min);
			}else{
				$(".time-buy .times .min").html(min);
			};
			if(sec < 10){
				$(".time-buy .times .sec").html("0" + sec + "." + secc);
			}else{
				$(".time-buy .times .sec").html(sec + "." + secc);
			}	
		},100)
	
//选项卡
		$(".sale-box .top li").mouseover(function(){
			var index = $(this).index();
			$(this).css("border-bottom","2px solid #0094ff").siblings().css("border-bottom","2px solid #d1d1d1")
			$(".sale-box .down li").eq(index).css("display","block").siblings().css("display","none");
		});
	
//手风琴
		$("#content .accor li").mouseover(function(){
			$(this).find(".pic").css("display","block").siblings(".world").css("display","none");
			$(this).siblings().find(".pic").css("display","none").siblings(".world").css("display","block");
		});
//返回顶部
		$(document).scroll(function(){
			if($(this).scrollTop() >= 300){
				$("#back-top .top").fadeIn();
			}else{
				$("#back-top .top").fadeOut();
			};
			});
			$("#back-top .top").click(function(){
				$("html,body").animate({
					"scrollTop":"0"
			});
		})
	
});
	
	
	

	
