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


    // 轮播图插件  ········
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        effect: 'fade',
        speed: 1000,
        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        autoplay: {
            delay: 3000,
            stopOnLastSlide: true,
            disableOnInteraction: true,
        },

    })
    // ········
    // 鼠标移入弹出简介
    $(".tab a").hover(function () {
        var index = $(this).index()
        if (index == 3) {
            $(this).find("div").stop().animate({
                left: 226,
            }, 1000)
        } else {
            aleft = $(this).width() - $(this).find("img").width() + 16;
            $(this).find("div").stop().animate({
                left: 0,
            }, 1000)
        }

    }, function () {
        // 鼠标移出 先通过index判断那个a触发事件然后执行对应动画
        var index = $(this).index()
        if (index == 0) {
            $(this).find("div").stop().animate({
                left: aleft,
            }, 1000)
        } else if (index == 1) {
            $(this).find("div").stop().animate({
                left: -226,
            }, 1000)
        } else if (index == 2) {
            $(this).find("div").stop().animate({
                left: 453,
            }, 1000)
        } else if (index == 3) {
            $(this).find("div").stop().animate({
                left: 453,
            }, 1000)
        } else if (index == 4) {
            $(this).find("div").stop().animate({
                left: -226,
            }, 1000)
        }
    })
})