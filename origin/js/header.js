/**
 * Created by Origin on 6/22/16.
 */
$(function () {
    var list_index = $("header .nav-list ul li.active").index();
    var origin_index = list_index;
    var info_height = $("header .nav-info ul li").eq(origin_index).height();
    // 鼠标滑入对应的分栏对应的分栏显示,
    $("header .nav-list ul li").hover(function () {
        list_index = $(this).index();
        info_height = $("header .nav-info ul li").eq(list_index).height();

        $("header .nav-list ul li").removeClass("active");
        $(this).addClass("active");

        $("header .nav-info ul li").eq(list_index).addClass("active").siblings().removeClass("active");
        $("header .nav-info").addClass("active").css({height: info_height});
    }, function () {
        $("header .nav-list ul li").removeClass("active");
        $("header .nav-list ul li").eq(origin_index).addClass("active");

        $("header .nav-info").removeClass("active").css({height: 0});
    });

    // 鼠标滑入隐藏信息块信息继续显示,滑出后隐藏
    $("header .nav-info").hover(function () {
        $("header .nav-list ul li").removeClass("active");
        $("header .nav-list ul li").eq(list_index).addClass("active");

        $(this).addClass("active").css({height: info_height});
    }, function () {
        $("header .nav-list ul li").removeClass("active");
        $("header .nav-list ul li").eq(origin_index).addClass("active");

        $(this).removeClass("active").css({height: 0});
    })
});