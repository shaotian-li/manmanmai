$(function() {

    var productid = tools.getSearchObj().productid;
    console.log(productid);

    Route.getdiscountproduct({ productid: productid },function(info) {
        console.log(info);

        $(".details").html(template("tpl",info));
    })
    
})