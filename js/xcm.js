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
            var oTop = $(document).scrollTop() - 950
            $(".rmenu").stop().animate({
                top: oTop,
            }, 1000)


        } else {
            $(".return-top").fadeOut(500),
                $(".rmenu").stop().animate({
                    top: 0,
                }, 1000)
        }
    })
    // 点击返回顶部
    $(".return-top").on("click", function () {
        $("html,body").animate({
            scrollTop: 0,
        })
    })
})