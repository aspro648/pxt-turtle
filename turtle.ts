/**
 * Functions to operate the turtle
 */
//% color=#0b9630 icon="\f188" block="turtle"
namespace turtle {
    let patterns = [[1, 0, 1, 0], [0, 1, 1, 0], [0, 1, 0, 1], [1, 0, 0, 1]]
    let pattern: number[] = []
    let steps = 0
    let wheel_dia = 0
    wheel_dia = 52
    let wheel_base = 74
    let PEN_UP = 150
    let PEN_DOWN = 60

    //% block="set wheel_diameter=%wheel_dia (mm)"
    //% val.defl=52 blockId="turtle_set_dia"
    export function set_wheel_dia(val: number) {
        wheel_dia = val
    }

    //% block="set wheel_base=%wheel_base (mm)"
    //% val.defl=74 blockId="turtle_set_base"
    export function set_wheel_base(val: number) {
        wheel_base = val
    }


    /**
     *  Distance to move the turtle backwards in millimeters.
     */
    //% block="backwards %distance (mm)" blockId="turtle_backwards"
    //% distance.min=0 distance.defl=100
    export function backwards(distance: number) {
        servos.P2.setAngle(PEN_DOWN)
        steps = Math.round(distance * 512 / (wheel_dia * 3.1412))
        for (let i = 0; i < steps; i++) {
            for (let j = 0; j <= 4; j++) {
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
        servos.P2.setAngle(PEN_UP)

    }

} 