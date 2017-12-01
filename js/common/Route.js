( function( ) {

    var Route = {
        baseUrl: "http://127.0.0.1:9090/",

        // 获取主页菜单栏数据
        getindexmenu: getindexmenu,

        // 取首页上面的特价数据
        getindexprice: getindexprice,

        // 渲染分页标签
        getcategorytitle: getcategorytitle,

        // 分类标签api
        getcategory: getcategory,

        //分类ad获取分类名称
        getcategorybyid: getcategorybyid,

        // 国内折扣页面
        getinlanddiscount:getinlanddiscount,

        // 折扣详情
        getdiscountproduct: getdiscountproduct,

        // 白菜价标签
        getbaicaijiatitle: getbaicaijiatitle,

        // 折扣商品详情
        getmoneyctrlproduct: getmoneyctrlproduct,


        // 白菜价列表
        getbaicaijiaproduct: getbaicaijiaproduct,

        // 商品详情
        getproduct: getproduct,

        // 获取商品评论
        getproductcom: getproductcom,

        // 优惠券标题
        getcoupon: getcoupon,

        // 优惠券列表
        getcouponproduct:getcouponproduct,

        // 商品导航api
        getsitenav: getsitenav,

        // 功能界面
        getbrandtitle: getbrandtitle,

        // 商品对应的十大品牌
        getbrand: getbrand,

        // 实现三级菜单
        getcategorybyid:getcategorybyid,

        // 商品分类
        getproductlist: getproductlist,

        // 排行商品列表
        getbrandproductlist:getbrandproductlist,

        // 凑单品的店铺
        getgsshop: getgsshop,

        // 凑单品区域
        getgsshoparea: getgsshoparea,

        // 凑单商品列表
        getgsproduct: getgsproduct,

        // 省钱控的下拉菜单
        getmoneyctrl: getmoneyctrl,
    };

    /**
     * 获取首页上面的菜单栏数据
     * 方法名：getindexmenu
     * 请求方式：get
     * 传参:无
     * 返回数据样例：
     *     {
                "result": [{
                    "indexmenuId": “菜单的id”,
                    "name": "菜单的名称",
                    "img": "菜单的图片",
                    "titlehref": "菜单的链接地址"
                }]
            }
     */
    // 获取数据的 ajax 请求
    function getindexmenu( callback ) {
        var url = Route.baseUrl + 'api/getindexmenu';
        $.get( url, function( res ) {
            callback && callback( res );
        }, 'json' );
    }

    // 获取首页上面的特价数据
    function getindexprice(callback) {
        var url =Route.baseUrl +'api/getmoneyctrl';
        $.get(url,function(res) {
            callback && callback(res);
        },"json");
    }
    // 渲染分类标签
    function getcategorytitle(callback) {
        var url = Route.baseUrl +"api/getcategorytitle";
        $.get(url,function(res) {
            callback && callback(res);
        },"json");
        
    }

    // 分类列表api
    function getcategory(option,callback) {
        var url = Route.baseUrl +"api/getcategory";
        $.ajax({
            type:"get",
            url:url,
            data:option,
            success:function(data){
                callback && callback(data);
            }
        });
    }

    //分类ad获取分类名称
    function getcategorybyid(option,callback) {
        var url = Route.baseUrl +"api/getcategorybyid";
        $.ajax({
            type:"get",
            url:url,
            data:option,
            success:function(data){
                callback && callback(data);
            }
        })
    }
    // 折扣详情
    function getdiscountproduct(option,callback){
        var url = Route.baseUrl +"api/getdiscountproduct";
        $.ajax({
            type:"get",
            url:url,
            data:option,
            success:function(data){
                callback && callback(data);
            }
        })
    }
    
   // 国内折扣页面
    function getinlanddiscount(callback){
        var url = Route.baseUrl +"api/getinlanddiscount";
        $.get(url,function(res){
            callback && callback(res);
        },"json");
    }

    
    // 白菜价标签
    function getbaicaijiatitle(callback) {
        var url = Route.baseUrl + "api/getbaicaijiatitle";
        $.get(url,function(res){
            callback && callback(res);
        },"json");
    }

    // 白菜价列表
    function getbaicaijiaproduct(option,callback){
        var url = Route.baseUrl + "api/getbaicaijiaproduct";
        $.ajax({
            type:"get",
            url:url,
            data:option,
            success:function(data){
                callback && callback(data);
            }
        })
    }



    // 国内折扣商品详情
    function getmoneyctrlproduct(option,callback){
        var url = Route.baseUrl + "api/getmoneyctrlproduct";
        $.ajax({
            type:"get",
            url:url,
            data:option,
            success:function(data){
                callback && callback(data);
            }
        })
    }
    
    // 商品详情
    function getproduct(option,callback){
        var url = Route.baseUrl +"api/getproduct";
        $.ajax({
            type:"get",
            url:url,
            data:option,
            success:function(data){
                callback && callback(data);
            }
        })
    }

    // 获取商品评论
    function getproductcom(option,callback) {
        var url = Route.baseUrl + "api/getproductcom";
        $.ajax({
            type:"get",
            url:url,
            data:option,
            success:function(data){
                callback && callback(data);
            }
        })
    }



    // 优惠券标题
    function getcoupon(callback){
        var url = Route.baseUrl + "api/getcoupon";
        $.get(url,function(res){
            callback && callback(res);
        },"json")
    }

    // 优惠券列表
    function getcouponproduct(option,callback) {
        var url = Route.baseUrl + "api/getcouponproduct";
        $.ajax({
            type:"get",
            url:url,
            data:option,
            success:function(data){
                callback && callback(data);
            }
        });
    }


    // 商城导航api
    function getsitenav(callback){
        var url = Route.baseUrl + "api/getsitenav";
        $.get(url,function(res){
            callback && callback(res);
        },"json")
    }


    // 功能界面
    function getbrandtitle(callback){
        var url = Route.baseUrl + "api/getbrandtitle";
        $.get(url,function(res) {
            callback && callback(res);
        },"json");
    }


    // 品牌标题对应的十大品牌
    function getbrand(option,callback){
        var url = Route.baseUrl +"api/getbrand";
        $.ajax({
            type:"get",
            url:url,
            data:option,
            success:function(data){
                callback && callback(data);
            }
        });
    }


    // 实现三级菜单
    function getcategorybyid(option,callback){
        var url = Route.baseUrl +"api/getcategorybyid";
       $.ajax({
            type:"get",
            url:url,
            data:option,
            success:function(data){
                callback && callback(data);
            }
       })
    }

    // 商品分类
    function getproductlist(option,callback) {
        var url = Route.baseUrl + "api/getproductlist";
        $.ajax({
            type:"get",
            url:url,
            data:option,
            success:function(data){
                callback && callback(data);
            }
        });
    }

    // 排行商品列表
    function getbrandproductlist(option,callback) {
        var url = Route.baseUrl + "api/getbrandproductlist";
        $.ajax({
            type:"get",
            url:url,
            data:option,
            success:function(data){
                callback && callback(data);
            }
        });
    }

    // 凑单品店铺api
    function getgsshop(callback){
        var url = Route.baseUrl +"api/getgsshop";
        $.get(url,function(res){
            callback && callback(res);
        },"json");
    }

    // 凑单品区域
    function getgsshoparea(callback){
        var url = Route.baseUrl + "api/getgsshoparea";
        $.get(url,function(res){
            callback && callback(res);
        },"json");
    }


    // 凑单商品列表api
    function getgsproduct(option,callback){
        var url = Route.baseUrl +"api/getgsproduct";
        $.ajax({
            type:"get",
            url:url,
            data:option,
            success:function(res){
                callback && callback(res);
            }
        });
    }


    // 省钱控下来菜单
    function getmoneyctrl(option,callback){
        var url = Route.baseUrl +"api/getmoneyctrl";
        $.ajax({
            type:"get",
            url:url,
            data:option,
            success:function(res){
                callback && callback(res);
            }
        });
    }
    /****
     * 
     * 
     *  url =  http://127.0.0.1:9090/api/getindexmenu
     *  get
     * 
     * 
     * 
     * $.get(url,fun(res){
     *      console.log(res);
     * 
     * })

     * 
     *****/


    window.Route = Route;

} )( );


    var tools = {
        getSearchObj: function () {
            //获取地址栏参数,封装成一个对象  {name:"zs", age:18, desc:"呵呵呵"}
            var search = location.search;
            //对search字符串进行解码
            search = decodeURI(search);
            //去除？    name=zs&age=18&desc=呵呵呵
            search = search.slice(1);
            //把search切割成一个数组    ["name=zs", "age=18", "desc=呵呵呵"]
            var arr = search.split("&");
            var obj = {};
            //遍历数组
            arr.forEach(function (v) {
                var key = v.split("=")[0];
                var value = v.split("=")[1];
                obj[key] = value;
            });
            return obj;
        },
        getSearch: function (key) {
            return this.getSearchObj()[key];
        }
    }

