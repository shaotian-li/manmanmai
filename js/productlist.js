$(function () {

    var categoryid = tools.getSearchObj().categoryid;
    console.log(categoryid);
    var category = tools.getSearchObj().category;
    var pageid = 1;
    var page = null;//总页数
    var pagesize = null; //商品一页显示的商品个数
    var totalcount = null; //商品总条数
    var brandtitleid = tools.getSearchObj().brandtitleid;
    console.log(brandtitleid);

    

    // 实现三级菜单
    Route.getcategorybyid({categoryid:categoryid},function(info){
        // console.log(info);
        $(".screen").html(template("tpl",info));

        // 添加三级分类
        $(".scren_nature").text(category);
            // console.log(category);
    })

    // // 商品分类
    // Route.getproductlist({ categoryid: categoryid, pageid:pageid},function(info){
    //     $(".product_box").html(template("tpl2",info));
    // });

    // Route.getbrandproductlist({ brandtitleid: brandtitleid }, function (info) {
    //     console.log(info);

    //     $(".product_box").html(template("tpl2", info));


    function render(){
        if (brandtitleid = tools.getSearchObj().brandtitleid) {

            Route.getbrandproductlist({ brandtitleid: brandtitleid }, function (info) {
                console.log(info);
                $(".product_box").html(template("tpl2", info));

                // 获取总页数
                page = Math.ceil(info.totalCount / info.pagesize);
                console.log(page);
            });
        } else if (categoryid = tools.getSearchObj().categoryid) {
            Route.getproductlist({ categoryid: categoryid, pageid: pageid }, function (info) {
                console.log(info);
                $(".product_box").html(template("tpl2", info));

                // 获取总页数
                page = Math.ceil(info.totalCount / info.pagesize);
                console.log(page);
            });
        }

    }

    //   第一次渲染
    render();


    // 渲染下拉框总页数

    setTimeout(function() {
        // 渲染下拉框总页数
        $("select").html(template("tpl3",{page:page}));

        // 注册上一页事件
        $(".previous_page").on("click",function() {
            pageid--;
            if(pageid ==0){
                pageid = 1;
                return false;
            }
            render();
            $("select [value="+ pageid+"]").attr("selected",true).siblings().attr("selected",false);
            $("select").val(pageid);
        });

        // 注册下一页事件
        $(".next_page").on("click",function(){
            pageid++;
            if(pageid >page) {
                pageid = page;
                return false;
            }
          render();
            $("select [value="+ pageid+"]").attr("selected",true).siblings().attr("slected",false);
            $("select").val(pageid);
        })

        // 渲染下拉框
        $("select").on("change",function(){
           pageid = $("select").val();
           
           render();
        })

    }, 100);


});