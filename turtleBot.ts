/**
 * Functions to operate the turtle
 */
//% color=#0b9630 icon="\f188" block="Turtle" groups=['Calibration', 'Control', 'Other']
namespace turtleBot {
    let patterns = [[1, 0, 1, 0], [0, 1, 1, 0], [0, 1, 0, 1], [1, 0, 0, 1]]
    let pattern: number[] = []
    let steps = 0
    let wheel_dia = 0
    wheel_dia = 52
    let wheel_base = 74
    let PEN_UP = 90
    let PEN_DOWN = 10
    let rotation = 0
    let degree = 0
    let distance = 0
    let steps_rev = 512 //  512 for 64x gearbox, 128 for 16x gearbox

    led.enable(false)
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P7, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P6, 0)
    pins.digitalWritePin(DigitalPin.P9, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P10, 0)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P4, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)

    //% block="wheel_diameter%wheel_dia(mm)|wheel_base%wheelbase(mm)|PEN_UP%PEN_UP|PEN_DOWN%PEN_DOWN"
    //% wb.defl=75 wd.defl=52 pu.defl=90 pd.defl=10 blockId="turtle_calibration" group='Calibration'
    export function set_calibration(wd: number, wb: number, pu: number, pd: number) {
        wheel_dia = wd
        wheel_base = wb
        PEN_UP = pu
        PEN_DOWN = pd
    }

    //% block="pen_up"
    //% group='Control'
    export function pen_up() {
        servos.P2.setAngle(PEN_UP)
    }

    //% block="pen_down"
    //% group='Control'
    export function pen_down() {
        servos.P2.setAngle(PEN_DOWN)
    }

    /**
     *  Distance to move the turtle forwards in millimeters.
     */
    //% block="forward %distance (mm)" blockId="turtle_forward"
    //% distance.min=0 distance.max=1000 distance.defl=100 group='Control'
    export function forward(distance: number) {
        // 25 * 512 / (52 * 3.1412)
        steps = Math.round(distance * steps_rev / (wheel_dia * Math.PI))
        serial.writeValue("distance", distance)
        serial.writeValue("forward steps", steps)
        serial.writeValue("steps_rev", steps_rev)
        serial.writeValue("wheel_dia", wheel_dia)
        serial.writeValue("Math.PI", Math.PI)
        serial.writeValue("calc", distance * steps_rev / (wheel_dia * Math.PI))
        for (let i = 0; i < steps; i++) {
            pattern = [1, 0, 1, 0]
            pins.digitalWritePin(DigitalPin.P0, pattern[3])
            pins.digitalWritePin(DigitalPin.P7, pattern[2])
            pins.digitalWritePin(DigitalPin.P1, pattern[1])
            pins.digitalWritePin(DigitalPin.P6, pattern[0])
            pins.digitalWritePin(DigitalPin.P9, pattern[3])
            pins.digitalWritePin(DigitalPin.P13, pattern[2])
            pins.digitalWritePin(DigitalPin.P10, pattern[1])
            pins.digitalWritePin(DigitalPin.P8, pattern[0])
            basic.pause(2)
            pattern = [0, 1, 1, 0]
            pins.digitalWritePin(DigitalPin.P0, pattern[3])
            pins.digitalWritePin(DigitalPin.P7, pattern[2])
            pins.digitalWritePin(DigitalPin.P1, pattern[1])
            pins.digitalWritePin(DigitalPin.P6, pattern[0])
            pins.digitalWritePin(DigitalPin.P9, pattern[3])
            pins.digitalWritePin(DigitalPin.P13, pattern[2])
            pins.digitalWritePin(DigitalPin.P10, pattern[1])
            pins.digitalWritePin(DigitalPin.P8, pattern[0])
            basic.pause(2)
            pattern = [0, 1, 0, 1]
            pins.digitalWritePin(DigitalPin.P0, pattern[3])
            pins.digitalWritePin(DigitalPin.P7, pattern[2])
            pins.digitalWritePin(DigitalPin.P1, pattern[1])
            pins.digitalWritePin(DigitalPin.P6, pattern[0])
            pins.digitalWritePin(DigitalPin.P9, pattern[3])
            pins.digitalWritePin(DigitalPin.P13, pattern[2])
            pins.digitalWritePin(DigitalPin.P10, pattern[1])
            pins.digitalWritePin(DigitalPin.P8, pattern[0])
            basic.pause(2)
            pattern = [1, 0, 0, 1]
            pins.digitalWritePin(DigitalPin.P0, pattern[3])
            pins.digitalWritePin(DigitalPin.P7, pattern[2])
            pins.digitalWritePin(DigitalPin.P1, pattern[1])
            pins.digitalWritePin(DigitalPin.P6, pattern[0])
            pins.digitalWritePin(DigitalPin.P9, pattern[3])
            pins.digitalWritePin(DigitalPin.P13, pattern[2])
            pins.digitalWritePin(DigitalPin.P10, pattern[1])
            pins.digitalWritePin(DigitalPin.P8, pattern[0])
            basic.pause(2)
        }
        pattern = [0, 0, 0, 0]
        pins.digitalWritePin(DigitalPin.P0, pattern[0])
        pins.digitalWritePin(DigitalPin.P7, pattern[1])
        pins.digitalWritePin(DigitalPin.P1, pattern[2])
        pins.digitalWritePin(DigitalPin.P6, pattern[3])
        pins.digitalWritePin(DigitalPin.P9, pattern[0])
        pins.digitalWritePin(DigitalPin.P13, pattern[1])
        pins.digitalWritePin(DigitalPin.P10, pattern[2])
        pins.digitalWritePin(DigitalPin.P8, pattern[3])
    }

    /**
     *  Distance to move the turtle backwards in millimeters.
     */
    //% block="backward %distance (mm)" blockId="turtle_backward"
    //% distance.min=0 distance.max=1000 distance.defl=100 group='Control'
    export function backward(distance: number) {
        steps = Math.round(distance * steps_rev / (wheel_dia * Math.PI))
        for (let i = 0; i < steps; i++) {
            pattern = [1, 0, 1, 0]
            pins.digitalWritePin(DigitalPin.P0, pattern[0])
            pins.digitalWritePin(DigitalPin.P7, pattern[1])
            pins.digitalWritePin(DigitalPin.P1, pattern[2])
            pins.digitalWritePin(DigitalPin.P6, pattern[3])
            pins.digitalWritePin(DigitalPin.P9, pattern[0])
            pins.digitalWritePin(DigitalPin.P13, pattern[1])
            pins.digitalWritePin(DigitalPin.P10, pattern[2])
            pins.digitalWritePin(DigitalPin.P8, pattern[3])
            basic.pause(2)
            pattern = [0, 1, 1, 0]
            pins.digitalWritePin(DigitalPin.P0, pattern[0])
            pins.digitalWritePin(DigitalPin.P7, pattern[1])
            pins.digitalWritePin(DigitalPin.P1, pattern[2])
            pins.digitalWritePin(DigitalPin.P6, pattern[3])
            pins.digitalWritePin(DigitalPin.P9, pattern[0])
            pins.digitalWritePin(DigitalPin.P13, pattern[1])
            pins.digitalWritePin(DigitalPin.P10, pattern[2])
            pins.digitalWritePin(DigitalPin.P8, pattern[3])
            basic.pause(2)
            pattern = [0, 1, 0, 1]
            pins.digitalWritePin(DigitalPin.P0, pattern[0])
            pins.digitalWritePin(DigitalPin.P7, pattern[1])
            pins.digitalWritePin(DigitalPin.P1, pattern[2])
            pins.digitalWritePin(DigitalPin.P6, pattern[3])
            pins.digitalWritePin(DigitalPin.P9, pattern[0])
            pins.digitalWritePin(DigitalPin.P13, pattern[1])
            pins.digitalWritePin(DigitalPin.P10, pattern[2])
            pins.digitalWritePin(DigitalPin.P8, pattern[3])
            basic.pause(2)
            pattern = [1, 0, 0, 1]
            pins.digitalWritePin(DigitalPin.P0, pattern[0])
            pins.digitalWritePin(DigitalPin.P7, pattern[1])
            pins.digitalWritePin(DigitalPin.P1, pattern[2])
            pins.digitalWritePin(DigitalPin.P6, pattern[3])
            pins.digitalWritePin(DigitalPin.P9, pattern[0])
            pins.digitalWritePin(DigitalPin.P13, pattern[1])
            pins.digitalWritePin(DigitalPin.P10, pattern[2])
            pins.digitalWritePin(DigitalPin.P8, pattern[3])
            basic.pause(2)
        }
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P7, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P6, 0)
        pins.digitalWritePin(DigitalPin.P9, 0)
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P10, 0)
        pins.digitalWritePin(DigitalPin.P8, 0)
    }

    /**
     *  Distance to move the turtle backwards in millimeters.
     */
    //% block="right %distance (degree)" blockId="turtle_right"
    //% degrees.min=0 degrees.max=360 degrees.defl=90 group='Control'
    export function right(degrees: number) {
        rotation = degrees / 360.0
        distance = wheel_base * Math.PI * rotation
        steps = Math.round(distance * steps_rev / (wheel_dia * Math.PI))
        for (let i = 0; i < steps; i++) {
            pattern = [1, 0, 1, 0]
            pins.digitalWritePin(DigitalPin.P0, pattern[0])
            pins.digitalWritePin(DigitalPin.P7, pattern[1])
            pins.digitalWritePin(DigitalPin.P1, pattern[2])
            pins.digitalWritePin(DigitalPin.P6, pattern[3])
            pins.digitalWritePin(DigitalPin.P9, pattern[3])
            pins.digitalWritePin(DigitalPin.P13, pattern[2])
            pins.digitalWritePin(DigitalPin.P10, pattern[1])
            pins.digitalWritePin(DigitalPin.P8, pattern[0])
            basic.pause(2)
            pattern = [0, 1, 1, 0]
            pins.digitalWritePin(DigitalPin.P0, pattern[0])
            pins.digitalWritePin(DigitalPin.P7, pattern[1])
            pins.digitalWritePin(DigitalPin.P1, pattern[2])
            pins.digitalWritePin(DigitalPin.P6, pattern[3])
            pins.digitalWritePin(DigitalPin.P9, pattern[3])
            pins.digitalWritePin(DigitalPin.P13, pattern[2])
            pins.digitalWritePin(DigitalPin.P10, pattern[1])
            pins.digitalWritePin(DigitalPin.P8, pattern[0])
            basic.pause(2)
            pattern = [0, 1, 0, 1]
            pins.digitalWritePin(DigitalPin.P0, pattern[0])
            pins.digitalWritePin(DigitalPin.P7, pattern[1])
            pins.digitalWritePin(DigitalPin.P1, pattern[2])
            pins.digitalWritePin(DigitalPin.P6, pattern[3])
            pins.digitalWritePin(DigitalPin.P9, pattern[3])
            pins.digitalWritePin(DigitalPin.P13, pattern[2])
            pins.digitalWritePin(DigitalPin.P10, pattern[1])
            pins.digitalWritePin(DigitalPin.P8, pattern[0])
            basic.pause(2)
            pattern = [1, 0, 0, 1]
            pins.digitalWritePin(DigitalPin.P0, pattern[0])
            pins.digitalWritePin(DigitalPin.P7, pattern[1])
            pins.digitalWritePin(DigitalPin.P1, pattern[2])
            pins.digitalWritePin(DigitalPin.P6, pattern[3])
            pins.digitalWritePin(DigitalPin.P9, pattern[3])
            pins.digitalWritePin(DigitalPin.P13, pattern[2])
            pins.digitalWritePin(DigitalPin.P10, pattern[1])
            pins.digitalWritePin(DigitalPin.P8, pattern[0])
            basic.pause(2)
        }
    }

} 