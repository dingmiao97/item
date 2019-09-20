   //轮播图
    //获取盒子
    var l_logo1 = document.querySelector('.l_logo');
    //自动播放
  
    l_logo1.onmouseenter = function(){
      clearInterval(id);
    }

    l_logo1.onmouseleave = function(){
      autoplay();
    }
    var id = null;
        function autoplay() {
        id = setInterval(function () {
            l_rbb.click();
        }, 4000)
    }
    autoplay();
  
 
   
    //获取ul
  
   var ul = document.querySelector('.l_logo ul');

   //获取按钮
   var l_lbb = document.querySelector('.l_lbb');
   var l_rbb = document.querySelector('.l_rbb');

   //获取圆点父元素
   var l_circle = document.querySelector('.l_circle');

   //获取每张图片宽度

   var l_logo = document.querySelector('.l_logo').offsetWidth;

   //初始话一个变量
   var index = 0;

   //动态创建小圆点
   for(var i = 0; i<ul.children.length; i++){
       //创建span
       var span = document.createElement('span');
       //小圆点点击与图片一致
       span.onclick = click_dotted;
       span.index = i;
     if( i == 0){
        span.className = 'active';
     }
      
      
       l_circle.appendChild(span);
   }

   function click_dotted(){
    index = this.index;

    if(index == 4){
    index=0;
    ul.style.left = 0;
}
  //改变ul位置
 animation(ul, ul.offsetLeft, -index*l_logo, 200,30);

  getDt();
 }

   //点击切换图片

   l_rbb.onclick = function(){

       if(index == 4){
        index=0;
        ul.style.left = 0+'px';
    }

      index++;
      //改变ul位置
      animation(ul,ul.offsetLeft,-index*l_logo,200,30);
        getDt();
   }

   //点击左侧按钮

    l_lbb.onclick = function(){
    if(index == 0){
      index=4;
      ul.style.left = -index*l_logo + 'px';
  }
    index--;
    //改变ul位置
   animation(ul, ul.offsetLeft, -index*l_logo, 200,30);

    getDt();

   }

    //添加一张图片到ul最后(复制一张图片)
    var fz_li = ul.firstElementChild.cloneNode(true);
    ul.appendChild(fz_li);
   
     //设置小圆点封装函数
     function getDt(){
        for(var i = 0; i<l_circle.children.length; i++){
         l_circle.children[i].className = '';
     }
     if(index == 4){
         l_circle.children[0].className = 'active';
     }else{
           l_circle.children[index].className = 'active';
     }
}
 
 
 
  