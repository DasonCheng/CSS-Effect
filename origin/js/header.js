/**
 * Created by Origin on 6/22/16.
 */
$(function () {
    var list_index = $("header .nav-list ul li.active").index();
    var origin_index = list_index;

    $("header .nav-list ul li").hover(function () {
        list_index = $(this).index();

        $("header .nav-list ul li").removeClass("active");
        $(this).addClass("active");

        $("header .nav-info ul li").eq(list_index).addClass("active").siblings().removeClass("active");
    }, function () {
        $("header .nav-list ul li").removeClass("active");
        $("header .nav-list ul li").eq(origin_index).addClass("active");
        $("header .nav-info ul li").eq(origin_index).addClass("active").siblings().removeClass("active");
    });


    $("header .nav-info").hover(function () {
        $("header .nav-list ul li").removeClass("active");
        $("header .nav-list ul li").eq(list_index).addClass("active");
        $("header .nav-info ul li").eq(list_index).addClass("active").siblings().removeClass("active");

    }, function () {
        $("header .nav-list ul li").removeClass("active");
        $("header .nav-list ul li").eq(origin_index).addClass("active");
        $("header .nav-info ul li").eq(origin_index).addClass("active").siblings().removeClass("active");
        list_index=origin_index;
    })
});