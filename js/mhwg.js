$(document).ready(function () {
    $('#fullpage').fullpage({

        // 滚动时间
        scrollingSpeed: 1500,
        // 页面加载时执行函数  第一屏
        afterRender: function () {
            $(".font-word").animate({
                width: 1010,
                height: 551,
                left: 0,
                top: 0,
            }, 800, function () {
                $(".sen0-ch").animate({
                    width: 529,
                }, 800)
            })
        },
        // 划回第一屏动画   
        afterLoad(anchorLink, index) {
            if (index == 1) {
                $(".font-word").animate({
                    width: 1010,
                    height: 551,
                    left: 0,
                    top: 0,
                }, 800, function () {
                    $(".sen0-ch").animate({
                        width: 529,
                    }, 800)
                })
            }
            // 划到第二屏
            if (index == 2) {
                // 定义变量存放动画时间
                var time = 500
                // 循环给每个添加动画
                for (var i = 0; i < 5; i++) {
                    // 后一个动画时间增加100毫秒
                    time += 100
                    $(".pi-list .pi-item:eq(" + i + ")").animate({
                        marginTop: 50,
                    }, time, function () {
                        $(".pi-item").animate({
                            marginTop: 0,
                        }, function () {
                            $(".p1-word").animate({
                                left: 0
                            }, function () {
                                $(".p1-tag").animate({
                                    top: 60
                                })
                            })
                        })
                    })
                }
            }
            if (index == 3) {
                $(".p2-img").animate({
                    top: 220,
                }, 1000)
                $(".p2-word").animate({
                    right: 1103
                }, 1000)
                $(".p2-man").animate({
                    right: 0
                }, 1000, function () {
                    $(".p2-tag").animate({
                        top: 220
                    }, 1000)
                    $(".p2-man img ").animate({
                        right: 10
                    }, 1000)
                })

            }
            if (index == 4) {
                $(".p3-img1").animate({
                    top: 162,
                }, 1000)
                $(".p3-img3").animate({
                    left: 1066,
                }, 1000)
                $(".p3-img2").animate({
                    top: 382,
                }, 1000)
                $(".p3-tag").animate({
                    left: 1049,
                }, 2000, function () {
                    $(".p3-tag span").animate({
                        opacity: 1,
                    })
                })
                $(".p3-word").animate({
                    top: 382,
                }, 2000, function () {
                    $(".p3-word p").animate({
                        opacity: 1
                    })
                })
                $(".p3-img0").animate({
                    left: 0,
                }, 2000)
            }
            if (index == 5) {
                $(".p4-word").animate({
                    top: 265
                }, 1000)
                $(".p4-img2").animate({
                    left: 1089
                }, 1000)
                $(".p4-img1").animate({
                    top: 344
                }, 1000)
                $(".p4-tag ").animate({
                    top: 265
                }, 2000, function () {
                    $(".p4-tag span").animate({
                        opacity: 1
                    }, 500)
                    $(".p4-word a").animate({
                        opacity: 1,
                    }, 500)
                })
                $(".p4-img3").animate({
                    left: 1505
                }, 2000)
            }
        }
    });

    $(".list ul li").hover(function () {
        $(this).find(".poplayer").show()
    }, function () {
        $(this).find(".poplayer").hide()
    })
    $(".thPark").hover(function () {
        $(this).find(".list").slideDown(500)
    }, function () {
        $(this).find(".list").slideUp(500)
    })
    // 第二屏动画
    $(".pi-item").hover(function () {
        $(this).find($(".it-back")).show()
    }, function () {
        $(".it-back").hide()
    })
});