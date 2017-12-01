$(function() {

    // 注册点击事件
    // 单品  京东
    $(".one_nav").on("click",function(){
        $(".one_block").toggleClass("now");
        Route.getgsshop(function (info) {
            // console.log(info);
            $(".one_block").html(template("tpl",info));

        })
    })
    // 地区
   $(".two_nav").on("click",function(){
       $(".two_block").toggleClass("now");
       Route.getgsshoparea(function(info) {
        //    console.log(info);
           $(".two_block").html(template("tpl2",info))
       })
   })

  Route.getgsproduct({ shopid: 0, areaid: 0 }, function (info) {
          console.log(info);
        
          $(".mmp_content").html(template("tpl3",info));
        })


      $(".one_block").on("click", "li", function () {
          var shopid = $(this).data("id");
          console.log(shopid);
          window.shopid = shopid;
          Route.getgsproduct({ shopid: shopid, areaid: 0 }, function (info) {
              console.log(info);

              $(".mmp_content").html(template("tpl3", info));
              
          })
        //   当点击里的时候让大容器隐藏
          $(this).parent().parent().removeClass("now");
         
      });
      
      $(".two_block").on("click","li",function() {
          var areaid = $(this).data("id");
          console.log(areaid);
          window.areaid = areaid;
          Route.getgsproduct({ shopid: 0, areaid: areaid }, function (info) {
              console.log(info);

              $(".mmp_content").html(template("tpl3", info));
          });

          //   当点击里的时候让大容器隐藏
          $(this).parent().parent().removeClass("now");
      })
     
      
})