input.onButtonPressed(Button.A, function () {
    Logging = !(Logging)
    if (Logging) {
        basic.showIcon(IconNames.Target)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.spring), SoundExpressionPlayMode.UntilDone)
    } else {
        basic.clearScreen()
    }
})
let Logging = false
Logging = false
loops.everyInterval(60000, function () {
    if (Logging) {
        datalogger.log(datalogger.createCV("Temp", input.temperature()))
        datalogger.log(datalogger.createCV("Light", input.lightLevel()))
    }
})
basic.forever(function () {
	
})
