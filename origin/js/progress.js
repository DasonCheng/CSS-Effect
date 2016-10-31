import '../lib/bower_components/nprogress/nprogress.css'
import NProgress from '../lib/bower_components/nprogress/nprogress'
NProgress.start();
NProgress.set(0.4);
document.onreadystatechange = subSomething;
function subSomething() {
    if (document.readyState === 'complete') {
        NProgress.done();
        $(".fade").removeClass("out");
    } else {
        NProgress.inc()
    }
}
$("body .pusher").css({
    minHeight: $(window).height() + 'px'
});
$(window).resize(function () {
    $("body .pusher").css({
        minHeight: $(window).height() + 'px'
    })
});
