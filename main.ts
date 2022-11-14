input.onButtonPressed(Button.A, function () {
    if (input.compassHeading() == 0) {
        basic.showString("N")
    } else if (input.compassHeading() == 90) {
        basic.showString("E")
    } else if (input.compassHeading() == 180) {
        basic.showString("S")
    } else if (input.compassHeading() == 270) {
        basic.showString("W")
    } else {
    	
    }
})
basic.forever(function () {
    if (input.compassHeading() <= 45 || input.compassHeading() >= 316) {
        basic.showString("N")
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    } else if (input.compassHeading() >= 46 && input.compassHeading() <= 135) {
        basic.showString("E")
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 3250, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    } else if (input.compassHeading() >= 136 && input.compassHeading() <= 225) {
        basic.showString("S")
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 1333, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    } else if (input.compassHeading() >= 226 && input.compassHeading() <= 315) {
        basic.showString("W")
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 1, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    }
})
