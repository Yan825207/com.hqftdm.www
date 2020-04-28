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