$(function() {

    // 首页菜单
    Route.getindexmenu(function (info) {
        console.log(info);
        var html = template("tpl", info);
        $(".mmm_nav").html(html);


        $(".mmm_nav li").eq(7).on("click",function(){
            $(".mmm_nav ul").toggleClass("contains",320);
        })
    });





    // 推荐商品
    Route.getindexprice(function (info) {
        console.log(info);

        var html = template("tpl2",info);
        $(".recommend_commodity").html(html);
    })
  
})