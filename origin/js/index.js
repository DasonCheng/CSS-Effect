/**
 * Created by Origin on 6/16/16.
 */
$(function () {
    $('#input_text').typeIt({
        speed: 50,
        autoStart: false
    })
        .tiType('Wll')
        .tiPause(500)
        .tiDelete(2)
        .tiType('ell, ')
        .tiPause(1000)
        .tiType('I guess I\'m typing..')
        .tiBreak()
        .tiPause(750)
        .tiType(' but I don\'t really know what to say')
        .tiSettings({speed: 700})
        .tiType('...')
        .tiPause(750)
        .tiSettings({speed: 50})
        .tiDelete()
        .tiType('OK ,  <strong>HELLO WORLD !</strong>');
    $('#test1').typeIt({
        speed: 150,
        autoStart: false
    })
        .tiType('你好,')
        .tiPause(900)
        .tiDelete(3)
        .tiType('早上好, ')
        .tiPause(1000)
        .tiType('今天天气不错啊!')
        .tiBreak()
        .tiPause(750)
        .tiType('但是临时有事不能出去玩了')
        .tiSettings({speed: 700})
        .tiType('...')
        .tiPause(750)
        .tiSettings({speed: 150})
        .tiDelete()
        .tiType('好吧,  <strong>其实那件事也挺有趣的!</strong>');
})