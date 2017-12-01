$(function() {


    Route.getsitenav(function(info){
        console.log(info);

        $(".mmm_mian").html(template("tpl",info));
    })
})