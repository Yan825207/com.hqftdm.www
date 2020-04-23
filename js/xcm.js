$(function () {
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
})