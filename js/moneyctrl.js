$(function() {
    // 渲染详情
    var pageid = 1;
    var pagesize = null;
    var totalcount = null;
    var page = null;
    // 封装一下ajax
  function render(){
    //   ajax请求获取商品的条数
      Route.getmoneyctrl({ pageid: pageid }, function (info) {
          console.log(info);

          var html = template("tpl", info);
          $(".mmp_content").html(html);

        //   获取总页数   商品总条数 / 每页的条数
          page = Math.ceil(info.totalCount / info.pagesize);
          console.log(page);
      })
  }

    render();

    setTimeout(function() {
        // 渲染下拉框的总页数
        $("select").html(template("tpl2",{page:page}));       
        
        $(".previous_page").on("click", function () {
        // 当点击上一页的时候 pageid -- 判断一些 如果到了第一页的时候 就teturn下
            pageid--;
            if (pageid == 0) {
                pageid = 1;
                return false;
            }
            // 当切换页面调用ajax
            render();
            // 当点击上一页的时候 select里面的值也要跟这变
            $("select [value=" + pageid + "]").attr("selected", true).siblings().attr("selectd", false);

            $("select").val(pageid);

        })

        // 注册点击下一页事件
        $(".next_page").on("click", function () {
            pageid++;
            if(pageid > page){
                pageid = page;
                return false;
            }
            render();
            $("select [value="+pageid+"]").attr("selected",true).siblings().attr("selectd",false);
            
            $("select").val(pageid);
        })

        $("select").on("change",function(){
           pageid = $("select").val();
           
           render();               
        })
    }, 100);
})