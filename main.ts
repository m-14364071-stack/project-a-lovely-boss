basic.forever(function () {
    basic.showLeds(`
        # # # # .
        # . . # .
        # # # # .
        # . . # .
        # # # # .
        `)
    while (true) {
        led.unplot(1, 4)
    }
    music.changeTempoBy(24)
    music.setVolume(127)
})
