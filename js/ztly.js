$(function () {
    // 顶部导航  左
    $(".top-ul1>li").mouseenter(function () {
        $(this).addClass("mk-bj")
        $(this).find(".family").slideDown(300);
    })
    $(".top-ul1>li").on("mouseleave", function (e) {
        $(".top-ul1>li").removeClass("mk-bj")
        $(this).find(".family").hide();

    })
    // 顶部导航  右
    $(".top-ul2>li").mouseenter(function () {
        $(this).addClass("mk-bj")
        $(this).find(".family").slideDown(300);
    })
    $(".top-ul2>li").on("mouseleave", function (e) {
        $(".top-ul2>li").removeClass("mk-bj")
        $(this).find(".family").hide();
    })
    // 返回顶部 出现
    $(window).scroll(function () {

        if ($(window).scrollTop() > 762) {
            $(".return-top").fadeIn(1000)
        } else {
            $(".return-top").fadeOut(500)
        }
    })
    // 点击返回顶部
    $(".return-top").on("click", function () {
        $("html,body").animate({
            scrollTop: 0,
        })
    })

    $(".park_dian").mouseover(function () {
        var index = $(this).index()
        $(".park_dian").removeClass("park_dian_cur"),
            $(this).addClass("park_dian_cur")
        $(".region div").hide()
        $(".region div").eq(index).show().animate({
            opacity: 1,
        }, 1000);
        // 鼠标移入第一条边框淡出
        $(".park_map_line1").animate({
            opacity: 0,
            left: 1090,
        }, 1, function () {
            $(".park_map_line1").animate({
                opacity: 1,
                left: 768,
            }, 500)
        })
        // 鼠标移入第二条边框淡出
        $(".park_map_line2").animate({
            opacity: 0,
            top: 520,
        }, 1, function () {
            $(".park_map_line2").animate({
                opacity: 1,
                top: 400,
            }, 500)
        })
        // 鼠标移入第三条边框淡出
        $(".park_map_line3").animate({
            opacity: 0,
            left: 768,
        }, 1, function () {
            $(".park_map_line3").animate({
                opacity: 1,
                left: 1090,
            }, 500)
        })
        // 鼠标移入第二、四条边框淡出

        $(".park_map_line4").animate({
            opacity: 0,
            top: 400,
        }, 1, function () {
            $(".park_map_line4").animate({
                opacity: 1,
                top: 520,
            }, 500)
        })
    })

    // 轮播一
    let val = 0
    $(".next").on("click", function () {
        if (val < $(".p3_wrap ul li").length - 1) { //3
            val++
            $(".p3_wrap ul li").eq(val).animate({
                opacity: 1,
            }, 500)
        } else {
            val = 0
            // 先把所有的opavity都该为0在把该显示的改为1会出现一段时间得空白，不能完美渐变
            // $(".p3_wrap ul li").animate({
            //     opacity: 0
            // }, 500)
            $(".p3_wrap ul li").eq(val).animate({
                opacity: 1,
            }, 400)
            $(".p3_wrap ul li").eq(val).siblings().animate({
                opacity: 0
            })
        }
    })
    $(".prev").on("click", function () {
        if (val == 0) {
            val = 2
            $(".p3_wrap ul li").eq(val).animate({
                opacity: 1,
            }, 400)
            $(".p3_wrap ul li").eq(val).siblings().animate({
                opacity: 0
            })
        } else {
            val--
            $(".p3_wrap ul li").eq(val).animate({
                opacity: 1,
            }, 500)
            $(".p3_wrap ul li").eq(val).siblings().animate({
                opacity: 0
            })
        }
    })
    var time = setInterval(function () {
        $(".next").click()
    }, 3000)
})