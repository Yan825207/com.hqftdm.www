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
            $(".return-top").fadeOut(400)
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
            }, 400)
        })
        // 鼠标移入第二条边框淡出
        $(".park_map_line2").animate({
            opacity: 0,
            top: 520,
        }, 1, function () {
            $(".park_map_line2").animate({
                opacity: 1,
                top: 400,
            }, 400)
        })
        // 鼠标移入第三条边框淡出
        $(".park_map_line3").animate({
            opacity: 0,
            left: 768,
        }, 1, function () {
            $(".park_map_line3").animate({
                opacity: 1,
                left: 1090,
            }, 400)
        })
        // 鼠标移入第二、四条边框淡出

        $(".park_map_line4").animate({
            opacity: 0,
            top: 400,
        }, 1, function () {
            $(".park_map_line4").animate({
                opacity: 1,
                top: 520,
            }, 400)
        })
    })

    // 轮播一
    let val = 0
    $(".p3_wrap .next").on("click", function () {
        if (val < $(".p3_wrap ul li").length - 1) { //3
            val++
            $(".p3_wrap ul li").eq(val).animate({
                opacity: 1,
            }, 400)
        } else {
            val = 0
            $(".p3_wrap ul li").eq(val).animate({
                opacity: 1,
            }, 400)
            $(".p3_wrap ul li").eq(val).siblings().animate({
                opacity: 0
            })
        }
    })
    $(".p3_wrap .prev").on("click", function () {
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
            }, 400)
            $(".p3_wrap ul li").eq(val).siblings().animate({
                opacity: 0
            })
        }
    })
    var time = setInterval(function () {
        $(".p3_wrap .next").click()
    }, 3000)
    // 轮播二
    let val1 = 0
    $(".p4_wrap .next").on("click", function () {
        if (val < $(".p4_wrap ul li").length - 1) { //3
            val1++
            $(".p4_wrap ul li").eq(val1).animate({
                opacity: 1,
            }, 400)
        } else {
            val1 = 0
            $(".p4_wrap ul li").eq(val1).animate({
                opacity: 1,
            }, 400)
            $(".p4_wrap ul li").eq(val1).siblings().animate({
                opacity: 0
            })
        }
    })
    $(".p4_wrap .prev").on("click", function () {
        if (val1 == 0) {
            val1 = 2
            $(".p4_wrap ul li").eq(val1).animate({
                opacity: 1,
            }, 400)
            $(".p4_wrap ul li").eq(val1).siblings().animate({
                opacity: 0
            })
        } else {
            val1--
            $(".p4_wrap ul li").eq(val1).animate({
                opacity: 1,
            }, 400)
            $(".p4_wrap ul li").eq(val1).siblings().animate({
                opacity: 0
            })
        }
    })
    var time = setInterval(function () {
        $(".p4_wrap .next").click()
    }, 3000)
    // 轮播三
    let val3 = 0
    $(".p5_wrap .next").on("click", function () {
        if (val3 < $(".p5_wrap ul li").length - 1) { //3
            val3++
            $(".p5_wrap ul li").eq(val3).animate({
                opacity: 1,
            }, 400)
        } else {
            val3 = 0
            $(".p5_wrap ul li").eq(val3).animate({
                opacity: 1,
            }, 400)
            $(".p5_wrap ul li").eq(val3).siblings().animate({
                opacity: 0
            })
        }
    })
    $(".p5_wrap .prev").on("click", function () {
        if (val3 == 0) {
            val3 = 2
            $(".p5_wrap ul li").eq(val3).animate({
                opacity: 1,
            }, 400)
            $(".p5_wrap ul li").eq(val3).siblings().animate({
                opacity: 0
            })
        } else {
            val3--
            $(".p5_wrap ul li").eq(val3).animate({
                opacity: 1,
            }, 400)
            $(".p5_wrap ul li").eq(val3).siblings().animate({
                opacity: 0
            })
        }
    })
    var time = setInterval(function () {
        $(".p5_wrap .next").click()
    }, 3000)
    // 第四个轮播图
    let val4 = 0
    $(".p6_wrap .next").on("click", function () {
        if (val4 < $(".p6_wrap ul li").length - 1) { //3
            val4++
            $(".p6_wrap ul li").eq(val4).animate({
                opacity: 1,
            }, 400)
        } else {
            val4 = 0
            $(".p6_wrap ul li").eq(val4).siblings().animate({
                opacity: 0
            })
            $(".p6_wrap ul li").eq(val4).animate({
                opacity: 1,
            }, 400)

        }
    })
    $(".p6_wrap .prev").on("click", function () {
        if (val4 == 0) {
            val4 = 2
            $(".p6_wrap ul li").eq(val4).siblings().animate({
                opacity: 0
            })
            $(".p6_wrap ul li").eq(val4).animate({
                opacity: 1,
            }, 400)

        } else {
            val4--
            $(".p6_wrap ul li").eq(val4).siblings().animate({
                opacity: 0
            })
            $(".p6_wrap ul li").eq(val4).animate({
                opacity: 1,
            }, 400)
        }
    })
    var time = setInterval(function () {
        $(".p6_wrap .next").click()
    }, 3000)
    // 第五个
    var val5 = 0
    $(".p10_wrap .next").on("click", function () {
        if (val5 < $(".p10_wrap ul li").length - 1) { //3
            val5++
            $(".p10_wrap ul li").eq(val5).animate({
                opacity: 1,
            }, 400)
        } else {
            val5 = 0
            $(".p10_wrap ul li").eq(val5).animate({
                opacity: 1,
            }, 400)
            $(".p10_wrap ul li").eq(val5).siblings().animate({
                opacity: 0
            })
        }
    })
    $(".p10_wrap .prev").on("click", function () {
        if (val5 == 0) {
            val5 = 2
            $(".p10_wrap ul li").eq(val5).animate({
                opacity: 1,
            }, 400)
            $(".p10_wrap ul li").eq(val5).siblings().animate({
                opacity: 0
            })
        } else {
            val5--
            $(".p10_wrap ul li").eq(val5).animate({
                opacity: 1,
            }, 400)
            $(".p10_wrap ul li").eq(val5).siblings().animate({
                opacity: 0
            })
        }
    })
    var time = setInterval(function () {
        $(".p10_wrap .next").click()
    }, 3000)
    // 第六个
    let val6 = 0
$(".p11_wrap .next").on("click", function () {
    if (val6 < $(".p11_wrap ul li").length - 1) { //3
        val6++
        $(".p11_wrap ul li").eq(val6).animate({
            opacity: 1,
        }, 400)
    } else {
        val6 = 0
        $(".p11_wrap ul li").eq(val6).animate({
            opacity: 1,
        }, 400)
        $(".p11_wrap ul li").eq(val6).siblings().animate({
            opacity: 0
        })
    }
})
$(".p11_wrap .prev").on("click", function () {
    if (val6 == 0) {
        val6 = 2
        $(".p11_wrap ul li").eq(val6).animate({
            opacity: 1,
        }, 400)
        $(".p11_wrap ul li").eq(val6).siblings().animate({
            opacity: 0
        })
    } else {
        val6--
        $(".p11_wrap ul li").eq(val6).animate({
            opacity: 1,
        }, 400)
        $(".p11_wrap ul li").eq(val6).siblings().animate({
            opacity: 0
        })
    }
})
var time = setInterval(function () {
    $(".p11_wrap .next").click()
}, 3000)
})