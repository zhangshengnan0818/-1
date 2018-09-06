/**
 * Created by Amh on 2018-08-28.
 */
$('.item_del').each(function(){
  $this=$(this);
  var h=$this.siblings('.item_top').height();
  $this.css("height",h+"px");
  $this.css("lineHeight",h+"px");
//      console.dir(b);
});