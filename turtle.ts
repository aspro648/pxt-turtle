enum Motor {
    //% block="left"
    Left = 8448,
    //% block="right"
    Right = 8192
}

enum MotorDirection {
    //% block="forward"
    Forward = 0,
    //% block="reverse"
    Reverse = 1
}

enum MotorPower {
    //%block="ON"
    On = 28673,
    //%block="OFF"
    Off = 28672
}

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
    }


	/**
	 * Sets the speed and direction of either the left motor or the right motor.
     * @param motor the motor to act on
     * @param direction forward or backward
     * @param speed percent of maximum speed, eg: 50
	 */

    //% blockId="motobit_setMotor" block="move %motor_number motor|motor %path|at %speed|%"
    //% speed.min=0 speed.max=100
    //% weight=80
    export function setMotorSpeed(motor: Motor, direction: MotorDirection, speed: number): void {
        let pwr = 0
        speed = Math.abs(speed)
        if (speed > 100) {
            speed = 100
        }

        if (direction == MotorDirection.Forward) {
            pwr = pins.map(speed, 0, 100, 0, 127)
            pwr = 128 + pwr
        }
        else {
            pwr = pins.map(speed, 0, 100, 127, 0)
        }

        pins.i2cWriteNumber(89, (motor + pwr), NumberFormat.Int16BE)
    }

	/**
	 * Turns the motors on or off.
	 */
    //% weight=90
    //% blockId="motobit_enable" block="turn motors %command"
    export function enable(command: MotorPower): void {
        pins.i2cWriteNumber(89, command, NumberFormat.Int16BE)
    }

	/**
	 * Changes the polarity of the selected motor.
	 * i.e. Forward -> Backward and Backward -> Forward
	 */
    //% blockId="motobit_invert" block="set %motor_number|motor invert to %invert"
    export function invert(motor: Motor, invert: boolean): void {
        const temp_number = invert ? 1 : 0;
        if (motor == Motor.Right) {
            pins.i2cWriteNumber(89, (4608 + temp_number), NumberFormat.Int16BE)
        }
        else {
            pins.i2cWriteNumber(89, (4864 + temp_number), NumberFormat.Int16BE)
        }
    }
} 