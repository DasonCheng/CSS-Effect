import '../lib/bower_components/semantic/src/semantic.less'
import '../lib/bower_components/semantic/dist/semantic.min'
$(function () {
    $("header #sidebar").click(function () {
        $('.ui.sidebar').sidebar('toggle');
    });
});