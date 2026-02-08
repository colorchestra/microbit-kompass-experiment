/**
 * Scroll:bit optional!
 */
input.onButtonPressed(Button.A, function () {
    music.setBuiltInSpeakerEnabled(true)
})
input.onButtonPressed(Button.B, function () {
    music.setBuiltInSpeakerEnabled(false)
})
let last_log = 0
let position = 0
let komp = 0
let zeit = 0
serial.redirectToUSB()
basic.forever(function () {
    zeit = zeit + 1
    komp = input.compassHeading()
    position = Math.round(komp / 30)
    scrollbit.scrollText("" + convertToText(position) + "+" + convertToText(komp), 67, 50)
    if (zeit > last_log + 100) {
        last_log = zeit
        serial.writeLine("Compass:" + input.compassHeading() + "Position:" + position)
    }
    if (position == 1) {
        music.play(music.stringPlayable("C - C - C - C - ", 260), music.PlaybackMode.InBackground)
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    }
    if (position == 2) {
        music.play(music.stringPlayable("D - D - D - D - ", 300), music.PlaybackMode.InBackground)
        basic.showLeds(`
            . . . . .
            # . . . .
            . # # # .
            . . . . #
            . . . . .
            `)
    }
    if (position == 3) {
        music.play(music.stringPlayable("E - E - E - E - ", 340), music.PlaybackMode.InBackground)
        basic.showLeds(`
            . . . . .
            # # . . .
            . . # . .
            . . . # #
            . . . . .
            `)
    }
    if (position == 4) {
        music.play(music.stringPlayable("G - G - G - G - ", 380), music.PlaybackMode.InBackground)
        basic.showLeds(`
            # . . . .
            . # . . .
            . . # . .
            . . . # .
            . . . . #
            `)
    }
    if (position == 5) {
        music.play(music.stringPlayable("A - A - A - A - ", 420), music.PlaybackMode.InBackground)
        basic.showLeds(`
            . # . . .
            . # . . .
            . . # . .
            . . . # .
            . . . # .
            `)
    }
    if (position == 6) {
        music.play(music.stringPlayable("B - B - B - B - ", 450), music.PlaybackMode.InBackground)
        basic.showLeds(`
            . # . . .
            . . # . .
            . . # . .
            . . # . .
            . . . # .
            `)
    }
    if (position == 7) {
        music.play(music.stringPlayable("C5 - C5 - C5 - C5 - ", 480), music.PlaybackMode.InBackground)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    }
    if (position == 8) {
        music.play(music.stringPlayable("B - B - B - B - ", 450), music.PlaybackMode.InBackground)
        basic.showLeds(`
            . . . # .
            . . # . .
            . . # . .
            . . # . .
            . # . . .
            `)
    }
    if (position == 9) {
        music.play(music.stringPlayable("A - A - A - A - ", 420), music.PlaybackMode.InBackground)
        basic.showLeds(`
            . . . # .
            . . . # .
            . . # . .
            . # . . .
            . # . . .
            `)
    }
    if (position == 10) {
        music.play(music.stringPlayable("G - G - G - G - ", 380), music.PlaybackMode.InBackground)
        basic.showLeds(`
            . . . . #
            . . . # .
            . . # . .
            . # . . .
            # . . . .
            `)
    }
    if (position == 11) {
        music.play(music.stringPlayable("E - E - E - E - ", 340), music.PlaybackMode.InBackground)
        basic.showLeds(`
            . . . . .
            . . . # #
            . . # . .
            # # . . .
            . . . . .
            `)
    }
    if (position == 12) {
        music.play(music.stringPlayable("D - D - D - D - ", 300), music.PlaybackMode.InBackground)
        basic.showLeds(`
            . . . . .
            . . . . #
            . # # # .
            # . . . .
            . . . . .
            `)
    }
    if (position > 12) {
        position = 1
    }
    if (position < 1) {
        position = 12
    }
})
