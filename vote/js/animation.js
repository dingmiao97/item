
var timeID = null;
function animation(element, current, target, step, time) {
    //让current 等于当前元素的实时位置（获取元素的位置）
    current = element.offsetLeft;
    //判断是否有定时器
    if(element.timeID) {
         //说明程序中有一个定时器
        clearInterval(element.timeID);
        element.timeID = null;
    }
    element.timeID =  setInterval(function(){
         if(current > target) {
               step = -Math.abs(step);
         }
          //极值法
         if( Math.abs(current-target)  <= Math.abs(step) ) {
              //到达终点位置
              current = target;
              //停止定时器
              clearInterval(element.timeID)
         }else {
              current += step;
         }
         element.style.left = current +'px';
     }, time)
 }