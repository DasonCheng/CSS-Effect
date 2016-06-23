/**
 * Created by Origin on 6/23/16.
 */
$(function () {
    var list_banner = $(".slide-banner ul li").length;
    var timer_banner = null,
        index_banner = 0;

    function banner_move(active_index) {
        if (active_index > list_banner - 1) {
            index_banner = 0;
        } else if (active_index < 0) {
            index_banner = list_banner - 1;
        } else {
            index_banner = active_index;
        }
        $(".slide-banner ol li").eq(index_banner).addClass("active").siblings().removeClass("active");
        $(".slide-banner ul li").eq(index_banner).addClass("active").siblings().removeClass("active");
    }

    timer_banner = setInterval(function () {
        index_banner++;
        banner_move(index_banner);
    }, 6000)
    $(".slide-banner").mouseenter(function () {
        clearInterval(timer_banner);
    }).mouseleave(function () {
        timer_banner = setInterval(function () {
            index_banner++;
            banner_move(index_banner);
        }, 6000)
    })
    $(".slide-banner span.control-left").click(function () {
        index_banner--;
        banner_move(index_banner);
    })
    $(".slide-banner span.control-right").click(function () {
        index_banner++;
        banner_move(index_banner);
    })
    $(".slide-banner ol li").click(function () {
        index_banner = $(this).index();
        banner_move(index_banner);
    })
    $(".slide-new ul.sort>li a").click(function () {
        var newSort = $(this).parent().index();
        $(this).parent().addClass("active").siblings().removeClass("active");
        $("ul.news-list-content li").eq(newSort).addClass("active").siblings().removeClass("active");
    });
})
