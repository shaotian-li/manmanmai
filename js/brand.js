$(function() {

    var brandtitleid = tools.getSearchObj().brandtitleid;
    console.log(brandtitleid);
    Route.getbrand({brandtitleid,brandtitleid},function(info) {
        console.log(info);

        $(".details").html(template("tpl",info));
    })
})