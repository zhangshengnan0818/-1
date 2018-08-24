/*tab切换-star*/
$('.tab-head').on('click', 'li', function (e) {
  e.preventDefault();
  $this = $(this);
  if (!$this.hasClass('active')) {
    $this.addClass('active');
    $this.parent().siblings().children().removeClass('active');
    var m=$this.children('a').attr('href');
    $(m).addClass('curren');
    $(m).siblings().removeClass('curren');
  } else {
    return;
  }
})
/*tab切换-end*/

/*footer切换-star*/
$('.footer').on('click', '.footItem', function () {
  if (!$(this).hasClass("active")) {
    var url = $(this).children('p').html();
//      var str=`${url}.html`;
//      console.log(str);
    window.location.href = `${url}.html`;
//      获取目标元素图片src
    var picSrc = $(this).children('img').attr('src');
    picSrc = picSrc.split(".")[0] + "1." + picSrc.split(".")[1];
    $(this).children('img').attr('src', picSrc);
//      添加目标元素CSS
    $(this).addClass('active');
//      找到要替换元素src
    var pic2 = $(this).parent().siblings().children('.active');
//      console.dir(pic2);
//      移除CSS
    pic2.removeClass('active');
//      重置路径
    var picSrc2 = pic2.children('img').attr('src');
//      console.log(picSrc2);
    var str = picSrc2.split(".")[0];
    picSrc2 = str.substring(0., str.length - 1) + "." + picSrc2.split(".")[1];
    pic2.children('img').attr('src', picSrc2);
  } else {
    return;
  }
})
/*footer切换-end*/

/*轮播互动切换-star*/
$(function () {
  // 获取手指在轮播图元素上的一个滑动方向（左右）

  // 获取界面上轮播图容器
  var $carousels = $('.carousel');
  var startX,endX;
  // 在滑动的一定范围内，才切换图片
  var offset = 10;
  // 注册滑动事件
  $carousels.on('touchstart',function (e) {
    // 手指触摸开始时记录一下手指所在的坐标x
    startX = e.originalEvent.touches[0].clientX;

  });
  $carousels.on('touchmove',function (e) {
    // 目的是：记录手指离开屏幕一瞬间的位置 ，用move事件重复赋值
    endX = e.originalEvent.touches[0].clientX;
  });
  $carousels.on('touchend',function (e) {
    //console.log(endX);
    //结束触摸一瞬间记录手指最后所在坐标x的位置 endX
    //比较endX与startX的大小，并获取每次运动的距离，当距离大于一定值时认为是有方向的变化
    var distance = Math.abs(startX - endX);
    if (distance > offset){
      //说明有方向的变化
      //根据获得的方向 判断是上一张还是下一张出现
      $(this).carousel(startX >endX ? 'next':'prev');
    }
  })
});
/*轮播互动切换-end*/