$(function(){


    Route.getcoupon(function(info){
        console.log(info);

        $(".mmb_content").html(template("tpl",info));
        
    })
})