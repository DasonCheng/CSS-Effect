// import '../lib/semantic/dist/semantic.css'
// import '../lib/semantic/dist/semantic.min'
$(function () {
    $("header #sidebar").click(function () {
        $('.ui.sidebar').sidebar('toggle');
    });
});