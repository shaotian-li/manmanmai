$(function() {


    Route.getbrandtitle(function(info) {
        console.log(info);

        $(".classify").html(template("tpl",info));
    })
})