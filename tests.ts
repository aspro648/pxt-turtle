// tests go here; this will not be compiled when this package is used as a library
input.onButtonPressed(Button.A, () => {
    turtle.invert(Motor.Left, false)
    turtle.invert(Motor.Left, false)
    turtle.setMotorSpeed(Motor.Left, MotorDirection.Forward, 80)
    turtle.setMotorSpeed(Motor.Right, MotorDirection.Forward, 80)
    turtle.enable(MotorPower.On)
})
input.onButtonPressed(Button.B, () => {
    turtle.invert(Motor.Left, false)
    turtle.invert(Motor.Left, false)
    turtle.setMotorSpeed(Motor.Left, MotorDirection.Reverse, 20)
    turtle.setMotorSpeed(Motor.Right, MotorDirection.Reverse, 20)
    turtle.enable(MotorPower.On)
})
input.onButtonPressed(Button.AB, () => {
    turtle.enable(MotorPower.Off)
})
