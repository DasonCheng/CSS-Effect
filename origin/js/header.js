/**
 * Created by Origin on 6/22/16.
 */
$(function () {
    var list_index = $("header .nav-list ul li.active").index();
    var origin_index = list_index;
    var nav_list_array = $("header .nav-list ul li");
    var nav_info_array = $("header .nav-info ul li");

    nav_list_array.hover(function () {
        list_index = $(this).index();

        nav_list_array.removeClass("active");
        $(this).addClass("active");

        nav_info_array.eq(list_index).addClass("active").stop().animate({opacity: 1}, 300).siblings().removeClass("active");
    }, function () {
        nav_list_array.removeClass("active");
        nav_list_array.eq(origin_index).addClass("active");
        nav_info_array.animate({opacity: 0}, 0);
        nav_info_array.eq(origin_index).addClass("active").stop().animate({opacity: 1}, 300).siblings().removeClass("active");
    });


    $("header .nav-info").hover(function () {
        nav_list_array.removeClass("active");
        nav_list_array.eq(list_index).addClass("active");
        nav_info_array.eq(list_index).addClass("active").stop().animate({opacity: 1}, 0).siblings().removeClass("active");

    }, function () {
        nav_list_array.removeClass("active");
        nav_list_array.eq(origin_index).addClass("active");
        nav_info_array.eq(origin_index).addClass("active").siblings().removeClass("active");
        list_index = origin_index;
    });
    //min-header
    $(".nav-min .min-menu-btn span a").click(function () {
        $(".min-menu-content").addClass("active");
    });
    $(".min-menu-content .shade-box").click(function () {
        $(".min-menu-content").removeClass("active");
    });
    $(document).on('touchmove', '.shade-box', function () {
        event.preventDefault();
    });
});