input.onButtonPressed(Button.A, function () {
    Running = 1
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(Degree)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showNumber(Score)
})
let Degree = 0
let Running = 0
let Score = 0
Score = 0
Running = 0
music.setVolume(255)
let Time = 0
basic.forever(function () {
    if (Running == 1) {
        Degree = input.rotation(Rotation.Pitch)
        if (Degree > 85 || Degree <= 0) {
            Time += 1
            if (Time > 5) {
                music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
                Score += 1
            }
        } else {
            Time = 0
        }
    }
})
