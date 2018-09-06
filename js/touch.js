/**
 * Created by Amh on 2018-08-27.
 */
/*触屏操作*/
(function () {


  var star_x;   // touchstart时的水平起始位置
  var end_x;     // touchmove过程中的水平结束位置
  //var touchmove = false;    // 标识是否成功触发了touchmove，默认没有触发。

  // on方法事件绑定，可将事件绑定到新添加的子元素上
  $(document).on("touchend", '#bannerAd', function (e) {
    // 获取手指在轮播图元素上的一个滑动方向（左右）
    var touchmove = true;    // 标识是否成功触发了touchmove，默认没触发。
// 获取界面上轮播图容器
    var $carousels = $(this);
    // 在滑动的一定范围内，才切换图片
    var offset = 10;
    // 注册滑动事件
    $carousels.on('touchstart', function (e) {
      // 手指触摸开始时记录一下手指所在的坐标x
      star_x = e.originalEvent.touches[0].clientX;

    });
    $carousels.on('touchmove', function (e) {
      // 目的是：记录手指离开屏幕一瞬间的位置 ，用move事件重复赋值
      end_x = e.originalEvent.touches[0].clientX;
    });
    $carousels.on('touchend', function (e) {
      //console.log(endX);
      //结束触摸一瞬间记录手指最后所在坐标x的位置 endX
      //比较endX与startX的大小，并获取每次运动的距离，当距离大于一定值时认为是有方向的变化
      var distance = Math.abs(star_x - end_x);
      if (distance > offset) {
        //说明有方向的变化
        //根据获得的方向 判断是上一张还是下一张出现
        $(this).carousel(star_x > end_x ? 'next' : 'prev');
      }
    })
  });

  $(document).on("touchstart", '.item_top', function (e) { // 触摸开始时
    if (e.originalEvent.targetTouches) {
      star_x = e.originalEvent.targetTouches[0].pageX;
    } else {
      star_x = e.pageX;
    }
    //console.log(star_x);
  });

  $(document).on("touchmove", '.item_top', function (e) { // 触摸过程中...
    var width = $('.item_del:first').width();   // 删除按钮的宽
    var left = $(this).css('left');
    if (star_x - end_x >= 5) {
      touchmove = true;
    }

    if (e.originalEvent.targetTouches) {
      end_x = e.originalEvent.targetTouches[0].pageX;
    } else {
      end_x = e.pageX;
    }

    if (star_x - end_x >= 0) {  // touchmove 向左移动
      if (parseInt(left) > -width) {
        $(this).css('left', end_x - star_x + 'px');  // 移动效果
      }
    } else {  // 向右移动
      if (parseInt(left) < 0) {
        $(this).animate({left: 0}, 500);  // 恢复原状（动画效果）
      }
    }
  });

  $(document).on("touchend", '.item_top', function (e) {  // 触摸抬起时
    var width = $('.item_del:first').width();   // 删除按钮的宽
    var offset = star_x - end_x;     // 偏移量
    if (touchmove == false) {
      return;
    }

    if (offset > 0) {   // 左滑动
      if (offset >= width / 2) {      // 偏移量大于等于删除按钮的一半
        $(this).animate({left: -width + 'px'}, 500);  // 动画显示删除按钮
      } else {
        $(this).animate({left: 0}, 500);  // 恢复原状
      }
    }
    touchmove = false;
  });
  $(document).on("touchend", '.item_del', function (e) {
    $modal = $("#del");
    $modal.css("display", "block");
    //$(this).parent().remove();
    $this = $(this);
    $(document).on("touchend", '.cancel', function (e) {  // 取消删除事件抬起时
      //console.log('cancel');
      $modal.css("display", "none");
      $this.siblings('.item_top').animate({left: 0}, 500);  // 恢复原状
      //$(this).parent().remove();
    });
    $(document).on("touchend", '.ok', function (e) {  // 确认删除事件抬起时
      //console.log('ok');
      $this.parent().remove();
      $modal.css("display", "none");
    });
  });
  $(document).on("touchend", '#add1', function (e) {  // 触摸抬起时
    $modal = $("#add");
    $modal.css("display", "block");
    $this = $(this);
    $(document).on("touchend", '.cancel', function (e) {  // 取消事件抬起时
      //console.log('cancel');
      $modal.css("display", "none");
    });
    $(document).on("touchend", '.ok', function (e) {  // 确认删除事件抬起时
      $modal.css("display", "none");

    });
  });

  $(document).on("touchend", '#delC', function (e) {  // 管理总删除
    $this = $(this);
    $this.text("取消").addClass("cancelC");

    $(".item_top").animate({left: '-15%'}, 500);
  });
  $(document).on("touchend", '.cancelC', function (e) {  // 取消删除事件抬起时
    $('.item_top').animate({left: 0}, 500);  // 恢复原状
    $this.text("管理").css("color", "#c39528").removeClass("cancelC");
  });


})();
