/**
 * Created by Amh on 2018-08-28.
 */
var InterValObj; //timer变量，控制时间
var count = 60; //间隔函数，1秒执行
var curCount;//当前剩余秒数
$send=$("#send");
$input=$send.siblings('input');
$next=$send.parent().parent().siblings(".info6").children('input');
getInput();
function getInput(){//监视输入框
  $input.bind('input porpertychange',function(){
    var len=$(this).val().length;
//      console.log(len);
    if(len===6){//验证码书入6位后  css样式变换
      $next.removeAttr("disabled");//启用按钮
      $next.css("opacity",1);
    }else{
      $next.attr("disabled", "true");
      $next.css("opacity",.5);
    }
//      console.log( $(this).val().length);
  });
}

function sendMessage() {
  curCount = count;
  //设置button效果，开始计时
  $send.attr("disabled", "true");
  $send.css("opacity",.5);
  $send.text(curCount + "S");
  InterValObj = window.setInterval(SetRemainTime, 1000); //启动计时器，1秒执行一次

  //请求后台发送验证码 TODO

}

//timer处理函数
function SetRemainTime() {
  if (curCount == 0) {
    window.clearInterval(InterValObj);//停止计时器
    $send.removeAttr("disabled");//启用按钮
    $send.text("重新发送");
    $send.css("opacity",1);
  }
  else {
    curCount--;
    $send.text(curCount + "S");
  }
}


