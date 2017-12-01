$(function( ){

    var productid = tools.getSearchObj().productid;
    // console.log(productid);

    Route.getmoneyctrlproduct({ productid: productid }, function (info) {
        console.log(info);

        $(".details").html(template("tpl", info));
    })
})