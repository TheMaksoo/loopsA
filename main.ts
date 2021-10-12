basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        led.plot(0, 2)
        basic.pause(100)
        led.unplot(0, 2)
        basic.pause(100)
    }
})
basic.forever(function () {
    while (input.buttonIsPressed(Button.B)) {
        led.plot(4, 2)
        basic.pause(500)
        led.unplot(4, 2)
        basic.pause(500)
    }
})
