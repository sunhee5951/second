$(document).ready(function(){	 

	/*------------------------전역변수 부---------------------- */
	var $bannerTop = $(".top").find("ul");
	var $bannerBot = $(".bottom").find("ul");
	var rollingId;
	var rollingId2;
	var widT = $bannerTop.children("li").outerWidth();
	var numT = $bannerTop.children("li").length;
	var widB = $bannerBot.children("li").outerWidth();
	var numB = $bannerBot.children("li").length;
	var totalWid = widT*numT;
	var totalWid2 = widB*numB;
	var $btns_li = $("#visual>.inner #btns>li");
	var $back = $('#visual .back');
	var $txtBox_div = $('#txtBox>.inner>div');
	var $sliderBox = $("#sliderBox");
	var $boxGroup1 = $sliderBox.find("#boxGroup1");
	var $boxGroup1_box = $boxGroup1.children(".box");
	var $boxGroup2 = $sliderBox.find("#boxGroup2");
	var $top = $boxGroup2.children(".top");
	var $top_ul = $top.children("ul");

	$bannerTop.width(totalWid);
	$bannerBot.width(totalWid2);
	//정해진 초마다 함수 실행
	rollingId = setInterval(function() { rollingTop(); }, 2400);//다음 
	rollingId2 = setInterval(function() { rollingBot(); }, 2400);

	/*------------------------이벤트 바인딩---------------------- */

	//마우스 오버시 롤링을 멈춘다.
	$boxGroup2.on("mouseenter",function(){
		clearInterval(rollingId); //중지
		clearInterval(rollingId2);
	});

	//마우스 아웃되면 다시 시작
	$boxGroup2.on("mouseleave",function(){
		rollingId = setInterval(function() { rollingTop(); }, 2400);
		rollingId2 = setInterval(function() { rollingBot(); }, 2400);
	});

	$(".btnNext").on("click",function(e){
		e.preventDefault();
		sideSlide();
	});

	$btns_li.on('click', function(){
		var i = $(this).index();
		var hei = $('.back>li').height();
		mainSlide(i, hei);

	})
	/*------------------------함수 정의 부---------------------- */
	function rollingTop() {
		$bannerTop.animate({left: -widT + "px"}, 1500, function() {
			$bannerTop.children("li").first().appendTo($bannerTop);
		$(this).css("left", 0);
		});
	}

	function rollingBot() {
		$bannerBot.animate({left: -widB + "px"}, 1500, function() {
			$bannerBot.children("li").first().appendTo($bannerBot);
		$(this).css("left", 0);
		});
	}

	function sideSlide(){
		$(".top>ul>li").first().appendTo($top_ul);
		$(".bottom>ul>li").first().appendTo(".bottom>ul");
	}

	function mainSlide(i, hei){
		$boxGroup1_box.stop().animate({marginLeft :(-100*i)+'%' },1000);
		$back.stop().animate({marginTop :-hei*i },1000);

		$btns_li.removeClass('on');
		$btns_li.eq(i).addClass('on');

		$txtBox_div.removeClass('on');
		$txtBox_div.eq(i).addClass('on');

	}

});
