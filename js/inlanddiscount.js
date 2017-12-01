$(function() {

    Route.getinlanddiscount(function(info) {
        console.log(info);


        $(".discount_product").html(template("tpl",info));
    })

})