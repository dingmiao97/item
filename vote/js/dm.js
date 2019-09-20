$(function(){

 //底部返回
  
  $('.l_btn_img img').click(function(){

        $('html,body').animate({
            scrollTop : 0
        })
      
  });


   //导航隐藏内容
   //选电影
   $('.l_r_box1').hover(function(){

      $('.l_select').stop().fadeIn();

   },function(){
    $('.l_select').stop().fadeOut();
   });


   //选影院
   $('.l_r_box2').hover(function(){
      
       $('.l_option').stop().fadeIn();
   },function(){
    $('.l_option').stop().fadeOut();
   })
  
    //更多内容
    
    $('.l_btn_g a').click(function(){
        $('.l_content_images').slideDown(2000);
        $('.l_btn_s').show(4000);
   
    })

     $('.l_btn_s a').click(function(){
        $('.l_content_images').slideUp(2000);
        $('.l_btn_s').hide(4000);
     })

    

     //点击购票

      $('.l_sub_new .l_sub_border').click(function(){

        $('.l_dhz').show();
        $('.l_xp').slideDown(5000);

      })

   
       //关闭页面按钮

       $('.l_dhz input').click(function(){
       
             $('.l_dhz').hide(4000);
             $('.l_xp').hide(2000);
       })




})





