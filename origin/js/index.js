/**
 * Created by Origin on 6/16/16.
 */
$(function () {
    if ($(window).width() > 980) {
        resizeHeight();
    }
    $(window).resize(function () {
        if ($(window).width() > 980) {
            resizeHeight();
        }
    });
    function resizeHeight() {
        var product_height_l = $("section .product-info.bg-l .product-content").height();
        $("section .product-info.bg-l .product-img").height(product_height_l);

        var product_height_r = $("section .product-info.bg-r .product-content").height();
        $("section .product-info.bg-r .product-img").height(product_height_r);
    }

    $("#yhet-01").parallax();
    $("#yhet-02").parallax();
});