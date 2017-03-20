$(function(){
  //轮播
  $('body').on('click','a.ac_slider',function(){
    var index = $(this).index();
    // alert(index);
    $('.slider .item').eq(index).fadeIn(1000,function(){

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
  //左右翻动
  var ul_width = 0,
    list_width = $('.list').width()/3-10//每个li宽度
  ;
  // console.log(list_width)
  $('.list .item').each(function(i){
    // ul_width=ul_width+$(this).outerWidth(true);
    $(this).width(list_width);
  });
  $('.list .itembox').css({'width':list_width*$('.list .item').length});
  var left = 0,
    li_width = $('.list .item').eq(0).outerWidth(true)
  ;
  $('body').on('click','.ac_preva',function(){
    // if($('.list ul').width()<=-(parseInt($('.list ul').css('left'))-parseInt(li_width))) return
    // console.log(left+li_width+li_width)
    var $t = $(this);
    if($('.list .itembox').width()<=left+li_width+li_width+li_width)$(this).addClass('gray');
    if($('.list .itembox').width()<=left+li_width+li_width) return;
    left=left+li_width;
    $(this).closest('.btn').prev().animate({'left':-left+'px'},function(){
      if(parseInt($('.list .itembox').css('left'))!=0)$t.next().removeClass('gray');
    });
  });
  $('body').on('click','.ac_nexta',function(){
    // if($('.list ul').width()<=-(parseInt($('.list ul').css('left'))-parseInt(li_width))) return
    //todo
    // console.log(left+li_width)
    var $t = $(this);
    if($('.list .itembox').width()<=left+li_width+li_width+li_width)$(this).prev().removeClass('gray');
    console.log(parseInt($('.list .itembox').css('left')));
    console.log(left)
    if(left == 0) return
    left=left-li_width;
    $(this).closest('.btn').prev().stop().animate({'left':-left+'px'},function(){
      if(parseInt($('.list .itembox').css('left'))==0) $t.addClass('gray');
    });
  });
  // $('.slider .item img').on('load',function(){
  //   $('.about').height($('.slider .item img').height());
  // });
  // $('.list .item img').eq(0).on('load',function(){
  //   $('.list').height($('.list .item img').eq(0).height());
  // });
  var img = new Image();
  img.onload = function(){
    $('.list').height($('.list .item img').eq(0).height());
  }
  img.src = $('.list .item img').eq(0).attr('src');
  String.prototype.insert=function(partten,insertStr){
  var lastLastIndex = 0,
    str = this.toString(),
    store=[],
    separator = RegExp(partten,'gm')
  ;
  while(tmp_match = separator.exec(str)){
      var lastIndex = tmp_match.index+tmp_match[0].length;
      store.push(str.slice(lastLastIndex,tmp_match.index));
      lastLastIndex =lastIndex;
      store.push(partten+insertStr);
  }
  console.log(store.join(''))
  }
  'fdfdstrentfdfdtrenthhtrent'.insert('trent','trent_b');
//   var match1 = /trent/gm.exec('fdsaftrent');
// console.log(match1,match1[0],match1[1]);
});
// ['fdfds','trent','trent_b','fdfd','trent','trent_b']
