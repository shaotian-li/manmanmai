$(function() {

    var coupond = tools.getSearchObj().coupond;
    console.log(coupond);

    Route.getcouponproduct({ couponid: coupond},function(info) {
        console.log(info);

        $(".kfc_headline").html(template("tpl",info));
    });


    // 注册点击事件

    $(".kfc_headline").on("click","a",function(){
        $(".mmm_content").hide();
        $(".mmm_mengceng").show();
    })
})