input.onButtonPressed(Button.A, function () {
    Rover.move_milli(eVector.Forward, 60, 1000)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
	
})
input.onButtonPressed(Button.B, function () {
    Rover.steer(eDirection.Left, 20)
})
radio.onReceivedValue(function (name, value) {
    if (name == "X") {
        uhel = value
    }
    if (name == "Y") {
        rychlost = value
    }
})
let rychlost = 0
let uhel = 0
radio.setGroup(90)
Rover.zeroServos(eServoGroup.All)
basic.showLeds(`
    # . . . #
    # # . # #
    # . # . #
    # . . . #
    # . . . #
    `)
basic.forever(function () {
    Rover.setServo(Rover.getServoNumber(eServos.Mast), uhel)
    Rover.setServo(Rover.getServoNumber(eServos.FL), uhel)
    Rover.setServo(Rover.getServoNumber(eServos.RL), uhel)
    Rover.setServo(Rover.getServoNumber(eServos.RR), uhel)
    Rover.setServo(Rover.getServoNumber(eServos.FR), uhel)
})
basic.forever(function () {
    if (rychlost > 0) {
        Rover.move(eVector.Forward, rychlost)
    } else {
        Rover.move(eVector.Reverse, rychlost * -1)
    }
})
