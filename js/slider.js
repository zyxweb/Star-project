$(function(){
	$('body').on('click','a.ac_slider',function(){
		var index = $(this).index();
		// alert(index);
		$('.slider li').eq(index).fadeIn(1000,function(){

		})//让图片的第n个元素淡入
		.siblings().hide();//让图片的第n个元素的兄弟元素隐藏
		$(this).addClass('current')//让当前点击的按钮显示为蓝色
		.siblings().removeClass('current');//让第n个元素的兄弟元素隐藏
		// return;
	});
	var timer = null;
	function __loopli(){
		clearTimeout(timer);
		timer = setTimeout(function(){
			if($('.ac_slider').index($('.ac_slider.current'))+1==$('.ac_slider').length){
				$('.ac_slider').eq(0).click();
			}else{
				$('.ac_slider.current').next().click();
			}
			__loopli();
		},3000)
	}
	__loopli();
	$('.slider').mouseover(function(){clearTimeout(timer)}).mouseout(function(){__loopli()});
	$('body').on('click','a.ac_slider1',function(){
		var index = $(this).index();
		// alert(index);
		$('.slider1 li').eq(index).fadeIn(1000,function(){

		})//让图片的第n个元素淡入
		.siblings().hide();//让图片的第n个元素的兄弟元素隐藏
		$(this).addClass('current')//让当前点击的按钮显示为蓝色
		.siblings().removeClass('current');//让第n个元素的兄弟元素隐藏
		// return;
	});
	var timer1 = null;
	function __loopli1(){
		clearTimeout(timer1);
		timer1 = setTimeout(function(){
			if($('.ac_slider1').index($('.ac_slider1.current'))+1==$('.ac_slider1').length){
				$('.ac_slider1').eq(0).click();
			}else{
				$('.ac_slider1.current').next().click();
			}
			__loopli1();
		},5000)
	}
	__loopli1();
	$('.slider1').mouseover(function(){clearTimeout(timer1)}).mouseout(function(){__loopli1()});
	//点击《《《左翻动；
	$('body').on('click','.ac_prev',function(){
    	$('.ac_slider.current').prev().click();
	})
	$('body').on('click','.ac_next',function(){
    	$('.ac_slider.current').next().click();
    	$('.slider ul').animate({'left':'200px'})
	});

	var ul_width = 0,
		list_width = $('.list').width()/3-10//每个li宽度
	;
	// console.log(list_width)
	$('.list li').each(function(i){
		// ul_width=ul_width+$(this).outerWidth(true);
		$(this).width(list_width);
	});
	$('.list ul').css({'width':list_width*$('.list li').length});
	var left = 0,
		li_width = $('.list li').eq(0).outerWidth(true)
	;
	$('body').on('click','.ac_preva',function(){
		// if($('.list ul').width()<=-(parseInt($('.list ul').css('left'))-parseInt(li_width))) return
		// console.log(left+li_width+li_width)
		if($('.list ul').width()<=left+li_width+li_width+li_width)$(this).css({color:'gray'});
		if($('.list ul').width()<=left+li_width+li_width) return;
		left=left+li_width;
		$(this).closest('.btn').prev().animate({'left':-left+'px'});
	});
	$('body').on('click','.ac_nexta',function(){
		// if($('.list ul').width()<=-(parseInt($('.list ul').css('left'))-parseInt(li_width))) return
		//todo
		console.log(left+li_width)
		if($('.list ul').width()<=left+li_width+li_width) return
		left=left+li_width;
		$(this).closest('.btn').prev().animate({'left':-left+'px'});
	});
	$('.slider li img').on('load',function(){
		$('.about').height($('.slider li img').height());
	});
	$('.list .item img').on('load',function(){
		$('.list').height($('.list .item img').eq(0).height());
	});
});