/**
 * Created by Amh on 2018-09-04.
 */
/*名称modal*/
$('#yyd').click(function () {
  $id=$(this).attr('id');
  //console.log(`#${$id}M`);
  $sel=`#${$id}M`;
  $modal=$($sel);
  $modal.css("display", "block");
  $('body').css("position", 'fixed');/*关闭模态框禁止底部页面滚动*/
  $('.cancel').click( function () {  // 取消删除事件抬起时
    console.log('cancel');
    $modal.css("display", "none");
    $('body').css("position", 'static');/*关闭模态框禁止底部页面滚动*/
  });
  //timeS();
});