$(function() {
// 商品分类标题
    Route.getcategorytitle(function(info) {

        console.log(info);

        var html = template("tpl" ,info);
        $(".big_box").html(html);

        
        //有个bug
      setTimeout(function() {
          $(".big_box").on("click", ".title", function () {
              var data = $(this).data("id");
              console.log(data);
              $(this).siblings().stop().slideToggle(300).parent().siblings().find(".content").hide();


              // 二级分类列表
              Route.getcategory({ titleid: data }, function (info) {
                  $(".min_box").html(template("tpl2", info));
              })

          }) 
      });
    
    })


})