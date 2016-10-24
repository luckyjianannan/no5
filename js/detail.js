window.onload=function(){
	$("#detafoot").load("foot.html");
	$("#detahead").load("head.html",function(){
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
	
//加入购物车
		$(".incar .putin .num").eq(0).click(function(){
			if($(".incar .putin input").val() <= 1){
				$(".incar .putin input").val(1); 
			}else{
				$(".incar .putin input").val(Number($(".incar .putin input").val() - 1))
				};
			
		});
		$(".incar .putin .num").eq(1).click(function(){
			$(".incar .putin input").val(Number($(".incar .putin input").val()) + 1); 
		});	
		
		
		$(".incar .putin .buy").click(function(){
			var pname = $(".incar .info .name").text();
			var ml = $(".incar .info .ml").text();
			var price = $(".incar .prace .price").text();
			var noprice = $(".incar .prace .noprice").text(); 
			var num = $(".incar .putin input").val();
	
		 if(getCookie("pname")){
		 	var oldnum = Number(getCookie("num"));
		 	var newnum = Number($(".incar .putin input").val());
		 	setCookie("num",oldnum + newnum);
		 	setCookie("pname",pname);
			setCookie("ml",ml);
			setCookie("price",price);
			setCookie("noprice",noprice);
		 	window.location.href="shopcar.html";
		 }else{
		 	setCookie("pname",pname);
			setCookie("ml",ml);
			setCookie("price",price);
			setCookie("noprice",noprice);
			setCookie("num",num);
			window.location.href="shopcar.html";
		 }
			
		});
		
		
		
		
		
		
//放大镜
	$(".incar .small li").mouseover(function(){
		var _index = $(this).index();
		$(this).css("border","1px solid #0081e3").siblings().css("border","1px solid #ccc")

		var bigarr=["img/big1.jpg","img/big2.jpg","img/big3.jpg","img/big4.jpg","img/big5.jpg"]
		$(".big img").attr("src",bigarr[_index])
		
		var morearr=["img/more1.jpg","img/more2.jpg","img/more3.jpg","img/more4.jpg","img/more5.jpg"]
		$(".more img").attr("src",morearr[_index])
		
		})
	
	
	
	var oMove = document.getElementsByClassName("move")[0];
	var oBigg = document.getElementsByClassName("bigg")[0];
	var oMore = document.getElementsByClassName("more")[0];
	var oPic = document.getElementsByClassName("pic")[0];
	var oImg = document.getElementsByClassName("more")[0].getElementsByTagName("img")[0];
	
	var oLi = document.getElementsByClassName("big")[0].getElementsByTagName("li");
	//var oLI = document.getElementsByClassName(".more")[0].getElementsByTagName("li");
	
	oBigg.onmouseover = function(){
		oMove.style.display = "block";
		oMore.style.display = "block"
	};
	oBigg.onmouseout = function(){
		oMove.style.display = "none";
		oMore.style.display = "none"
	};
	oBigg.onmousemove = function(evt){
		
		var e = evt||window.event;
		var l = e.pageX - oPic.offsetLeft - oBigg.offsetLeft - oMove.offsetWidth/2;
		var t = e.pageY - oPic.offsetTop - oBigg.offsetTop  - oMove.offsetHeight/2;
		if(l < 0){
			l = 0;
		}else if(l >　oBigg.offsetWidth - oMove.offsetWidth){
			l = oBigg.offsetWidth - oMove.offsetWidth;
		};
		if(t < 0){
			t = 0;
		}else if(t > oBigg.offsetHeight - oMove.offsetHeight){
			t = oBigg.offsetHeight - oMove.offsetHeight;
		};

		document.title = t;
		oMove.style.left = l + "px";
		oMove.style.top = t + "px";
		var perecentX = l/(oBigg.offsetWidth - oMove.offsetWidth);
		var perecentY = t/(oBigg.offsetHeight - oMove.offsetHeight);

		oImg.style.left = -(perecentX*(oImg.offsetWidth - oMore.offsetWidth)) + "px";
		oImg.style.top = -(perecentY*(oImg.offsetHeight - oMore.offsetHeight)) + "px";
	};



};
