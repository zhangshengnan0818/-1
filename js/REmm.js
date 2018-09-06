/**
 * Created by Amh on 2018-08-28.
 */
function validate() {
  var pwd1 = document.getElementById("password").value;
  var pwd2 = document.getElementById("password1").value;
  var tips=document.getElementById("tips");
  var sub=document.getElementById("dosubmit");
  if(pwd1 === pwd2) {
    sub.disabled = false;
    sub.style.cssText="opacity:1";
    tips.innerHTML="OK";
    tips.style.cssText="color:#c39528";
  }
  else {
    tips.innerHTML="* 两次密码不一致";
    tips.style.cssText="color:#e61734";
    sub.disabled = true;
    sub.style.cssText="opacity:.5";

  }
}
