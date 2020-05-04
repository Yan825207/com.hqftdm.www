$(function () {
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
    $(".fp-tableCell").css({
        height: "110",
    })
    $(".m1img1").animate({
        left: -442,
        opacity: 1
    }, 1000)

    // 第二屏动画
    $(document).scroll(function () {
        console.log($(document).scrollTop);

        if ($(document).scrollTop() >= 886) {
            console.log(111);
            $(".m2img1").animate({
                right: -580,
                opacity: 1
            }, 1000)
        }
    })

    // 轮播       
    var mySwiper = new Swiper('.swiper-container', {
        speed: 1000,
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        slidesPerView: 4,
        slidesPerGroup: 1,
        spaceBetween: 0,
        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })
    // tab切换
    $(".main5 .m4hover").hover(function () {
        $(this).addClass("m4hover_ing")
        for (var i = 0; i < $(".main5 div").length; i++) {
            console.log($);

        }
    }, function () {
        $(this).removeClass("m4hover_ing")
    })
})