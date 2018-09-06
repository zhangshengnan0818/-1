/*tab切换-star*/
$('.tab-head').on('click', 'li', function (e) {
  e.preventDefault();
  $this = $(this);
  if (!$this.hasClass('active')) {
    $this.addClass('active');
    $this.parent().siblings().children().removeClass('active');
    $this.siblings().removeClass('active');

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
//    window.location.href = `${url}.html`;
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
