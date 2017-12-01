$(function() {


    var categoryid = tools.getSearchObj().productid;
    // console.log(categoryid);
 
// 商品列表
    Route.getcategorybyid({ categoryid: categoryid},function(info){
        // console.log(info);
        
        $(".screen").html(template("tpl",info));
        var brandName = tools.getSearchObj().brandName;
        // console.log(brandName);
        $(".scren_nature").text(brandName);
    })

//详情列表
    var productid = tools.getSearchObj().productid;
    console.log(productid);
    Route.getproduct({ productid: productid},function(info){
        // console.log(info);

        $(".details_box").html(template("tpl2",info));
    })

    // 获取商品评论
    Route.getproductcom({productid:productid},function(info) {
        console.log(info);
        $(".evaluate").html(template("tpl3",info));
    })
})