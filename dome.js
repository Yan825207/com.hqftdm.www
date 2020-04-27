let val1 = 0
$(".p4_wrap .next").on("click", function () {
    if (val1 < $(".p4_wrap ul li").length - 1) { //3
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
var time = setInterval1(function () {
    $(".p4_wrap .next").click()
}, 3000)