/*
 /!**
 * Created by Amh on 2018-09-05.
 *!/
 function timeS() {

 var viewWidth = $(window).width();
 /!*浏览器宽度*!/
 var viewHeight = $(window).height();
 var desWidth = 640;
 var touchstart = 'touchstart';
 var touchmove = 'touchmove';
 var touchend = 'touchend';

 var $tview = $('.tview');//显示内容框
 var $ul = $('.hL');//内容列表

 var downY = 0;
 var prevY = 0;
 var downT = 0;
 var parentH = $tview.height();
 //console.log(parentH);
 var childH = $ul.height();
 //console.log(childH);
 var onoff1 = true;
 var onoff2 = true;
 var timer = null;
 var speed = 0;

 function moveScroll() {
 $(document).on(touchmove, function (ev) {
 ev.preventDefault();       //苹果手机滑动时 整个页面都滑动，阻止其默认事件
 });
 $ul.on(touchstart, function (ev) {
 console.log("1");
 //console.log(parentH > childH);
 if (parentH > childH) {
 return false;
 }
 /!*移动touch*!/
 var touch = ev.originalEvent.changedTouches ? ev.originalEvent.changedTouches[0] : ev;
 //console.dir(ev.originalEvent.changedTouches );

 var This = $(this);
 console.dir('This '+This );
 downY = touch.pageY;/!*开始位置*!/
 console.log('downY '+downY );
 prevY = touch.pageY;/!*结束位置  改变*!/
 console.log('prevY1'+prevY);
 downT = $(this).position().top;/!*ul元素相对于父元素的位置*!/
 console.log('downT'+downT);
 onoff1 = true;
 onoff2 = true;
 clearInterval(timer);
 $(document).on(touchmove + '.move', function (ev) {
 var touch = ev.originalEvent.changedTouches ? ev.originalEvent.changedTouches[0] : ev;
 var iTop = $(This).position().top;/!*元素相对于父元素的位置*!/
 console.dir("$(This)"+JSON.stringify($(This)));
 /!*判断上下滑-1 上*!/
 speed = touch.pageY - prevY;
 console.log('touch.pageY'+touch.pageY);
 console.log("speed"+speed);
 prevY = touch.pageY;
 console.log('prevY'+prevY);
 if (iTop >= 0) {
 if (onoff1) {
 onoff1 = false;
 downY = touch.pageY;
 }
 y=parseInt((touch.pageY - downY) %30) *30;
 console.log("变化数"+y);
 $(This).css('transform', 'translate3d(0,' +parseInt((touch.pageY - downY) %30) *30 + 'px,0)');
 }
 else if (iTop <= parentH - childH) {
 if (onoff2) {
 onoff2 = false;
 downY = touch.pageY;
 }
 $(This).css('transform', 'translate3d(0,' + (parseInt((touch.pageY - downY) %30) *30+ (parentH - childH)) + 'px,0)');
 }
 else {
 $(This).css('transform', 'translate3d(0,' + parseInt((touch.pageY - downY) %30) *30 + 'px,0)');
 }

 });
 $(document).on(touchend + '.move', function () {
 $(this).off('.move');

 clearInterval(timer);
 timer = setInterval(function () {
 var iTop = $(This).position().top;
 if (Math.abs(speed) <= 1 || iTop > 50 || iTop < parentH - childH - 50) {
 clearInterval(timer);
 if (iTop >= 0) {
 $(This).css('transition', '.2s');
 $(This).css('transform', 'translate3d(0,0,0)');
 }
 else if (iTop <= parentH - childH) {
 $(This).css('transition', '.2s');
 $(This).css('transform', 'translate3d(0,' + (parentH - childH) + 'px,0)');
 }
 }
 else {
 speed *= 0.9;
 $(This).css('transform', 'translate3d(0,' + (iTop + speed) + 'px,0)');
 }

 }, 13);

 });
 return false;
 });
 $ul.on('transitonend webkitTransitionEnd', function () {
 $(this).css('transition', '');
 });
 }
 moveScroll();
 };*/
function timeS() {
  //var gundongX = 0;
  var gundongY = 0;
  var moveEle = $('.sL,.hL');
  var step = 5;
  var mdl = $('#yytM .modalBody').offset().left;
  var liw = $('#yytM .modalBody ul').width();

  var stx = sty = etx = ety = curX = curY = 0;

  function moveScroll() {
    $(document).on('touchstart', moveEle, function (event) { //touchstart
      gundongY = 0;
      // 元素当前y值
      //ety = parseInt(getT3d($this, "y"));

      // 手指位置
      stx = event.originalEvent.changedTouches[0].pageX;
      sty = event.originalEvent.changedTouches[0].pageY;
    });
    var isMove = true;//防止过快点击
    moveEle.on("touchmove", function (event) {
      // 防止拖动页面
      event.preventDefault();
      // 手指位置 减去 元素当前位置 就是 要移动的距离
      //gundongX = event.originalEvent.changedTouches[0].pageX - stx;
      gundongY = event.originalEvent.changedTouches[0].pageY - sty;
      // 目标位置 就是 要移动的距离 加上 元素当前位置tray
      //curY=parseInt((gundongY%step))*40+ety;
      //webkitTransform = 'translate3d( 0px, ' + (curY) + 'px,0px)';
      if (isMove) {
        isMove = false;
        curY = parseInt((gundongY % step)) * 40 + ety;
        webkitTransform = 'translate3d( 0px, ' + (curY) + 'px,0px)';
        if (stx > (mdl + 9) && stx < (mdl + 9 + liw)) {
          //console.log("1");
          ety = parseInt(getT3d($('#hL1'), "y"));
          //console.log("ety:", ety);
          if (curY <= 40 && curY >= -880) {
            $('#hL1').css("webkitTransform", webkitTransform);
          } else {
            return false;
          }
        }
        else if (stx > (mdl + 9 * 3 + liw) && stx < (mdl + 9 * 2 + liw * 2)) {
          //console.log("2");
          ety = parseInt(getT3d($('#sL1'), "y"));
          if (curY <= 40 && curY >= -2320) {
            $('#sL1').css("webkitTransform", webkitTransform);
          } else {
            return false;
          }
        }
        else if (stx > (mdl + 9 * 5 + liw * 2) && stx < (mdl + 9 * 5 + liw * 3)) {
          ety = parseInt(getT3d($('#hL2'), "y"));
          if (curY <= 40 && curY >= -880) {
            $('#hL2').css("webkitTransform", webkitTransform);
          } else {
            return false;
          }
        }
        else if (stx > (mdl + 9 * 7 + liw * 3) && stx < (mdl + 9 * 7 + liw * 7)) {
          //console.log("4");
          ety = parseInt(getT3d($('#sL2'), "y"));
          if (curY <= 40 && curY >= -2320) {
            $('#sL2').css("webkitTransform", webkitTransform);
          } else {
            return false;
          }
        }
        else{
          return false;
        }

        setTimeout(function(){
          isMove=true;
        },200);
      }

    });
    moveEle.on("touchend", function (event) { //touchend
      etx = curX;
      ety = curY;
    });
    function adC() {
      var lis = $('#sL2 li');
      $.each(lis, function (i, item) {
        item[i].position().top;
        console.dir(item[i].position().top);
      })
    }

    function getT3d(elem, ename) {
      var str1 = elem.css("webkitTransform");
      //console.dir('str1:' + str1);
      if (str1 == "") {
        return "0";
      }
      str1 = str1.replace("matrix(", "");
      str1 = str1.replace(")", "");
      var carr = str1.split(",");
      //console.dir('carr:' + carr);
      if (ename == "x") return carr[4];
      else if (ename == "y") return carr[5];
      else return "";
    }
  }

  moveScroll();
}