input.onButtonPressed(Button.A, function () {
    Logging = !(Logging)
    if (Logging) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.hello), SoundExpressionPlayMode.UntilDone)
    } else {
        basic.clearScreen()
    }
})
let Logging = false
Logging = false
loops.everyInterval(600000, function () {
    if (Logging) {
        datalogger.log(datalogger.createCV("Temp", input.temperature()))
        datalogger.log(datalogger.createCV("Light", input.lightLevel()))
    }
})
basic.forever(function () {
	
})
