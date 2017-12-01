$(function() {


    // 白菜价标签
    Route.getbaicaijiatitle(function(info) {
        console.log(info);

        $("#mmm_sb").html(template("tpl",info));
    })


    // 给所有li添加点击事件
    $("#mmm_sb").on("click","li",function() {
        $(this).addClass("now").siblings().removeClass("now");
    })


    var titleid = tools.getSearchObj().titleid;
    console.log(titleid);
    // 内容
    Route.getbaicaijiaproduct({ titleid:0},function(info){
        console.log(info);

        $(".mmp_commodity").html(template("tpl2",info));
        
    })

    $(".mmp_nav").on("click","li a",function() {
        var id = $(this).data("id");
        // console.log(id);
        Route.getbaicaijiaproduct({titleid:id},function(info){
            $(".mmp_commodity").html(template("tpl2", info));
        })
    });


    
})