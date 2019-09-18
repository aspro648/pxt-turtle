/**
 * Functions to operate the turtle
 */
//% color=#0b9630 icon="\f188" block="Turtle" groups=['Control', 'Parameters', 'Other']
namespace turtleBot {
    let patterns = [[1, 0, 1, 0], [0, 1, 1, 0], [0, 1, 0, 1], [1, 0, 0, 1]]
    let pattern: number[] = []
    let steps = 0
    let wheel_dia = 52
    let wheel_base = 74
    let PEN_UP = 90
    let PEN_DOWN = 10
    let rotation = 0
    let degree = 0
    let distance = 0
    let steps_rev = 512 //  512 for 64x gearbox, 128 for 16x gearbox
    let x = 0
    let y = 0
    let heading = 0  // starts to the right (east) (same as Python)

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


    /**
     *  Distance to move the turtle forwards in millimeters.
     */
    //% block="forward %distance (mm)" blockId="turtle_forward"
    //% distance.min=0 distance.max=1000 distance.defl=100 group='Control'
    export function forward(distance: number) {
        // 25 * 512 / (52 * 3.1412)
        steps = Math.round(distance * steps_rev / (wheel_dia * Math.PI))
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

        x = x + distance * Math.cos(heading * Math.PI / 180)  // must convert to radians
        y = y + distance * Math.sin(heading * Math.PI / 180)
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
        x = x + distance * Math.cos((heading - 180) * Math.PI / 180)  // must convert to radians
        y = y + distance * Math.sin((heading - 180) * Math.PI / 180)
    }


    /**
     *  Distance to move the turtle backwards in millimeters.
     */
    //% block="right %distance (degrees)" blockId="turtle_right"
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
        heading = heading - degrees
        while (heading < 0) {
            heading = heading + 360
        }
        serial.writeValue("heading", heading)
    }


    /**
     *  Turn turtle to the left.
     */
    //% block="left %distance (degrees)" blockId="turtle_left"
    //% degrees.min=0 degrees.max=360 degrees.defl=90 group='Control'
    export function left(degrees: number) {
        rotation = degrees / 360.0
        distance = wheel_base * Math.PI * rotation
        steps = Math.round(distance * steps_rev / (wheel_dia * Math.PI))
        for (let i = 0; i < steps; i++) {
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
        }
        heading = heading + degrees
        while (heading > 360) {
            heading = heading - 360
        }
        serial.writeValue("heading", heading)
    }


    /**
     *  Move servo to raise pen.
     */
    //% block="pen_up()" blockId="pen_up"
    //% group='Control'
    export function pen_up() {
        servos.P2.setAngle(PEN_UP)
    }


    /**
     *  Move servo to lower pen.
     */
    //% block="pen_down()" blockId="pen_down"
    //% group='Control'
    export function pen_down() {
        servos.P2.setAngle(PEN_DOWN)
    }


    /**
     *  Print turtle x,y position to serial console,
     *  and return array [x, y].
     */
    //% block="position()" blockId="position"
    //% group='Control'
    export function position(): number[] {
        serial.writeValue("heading=", heading)
        serial.writeValue("x=", x)
        serial.writeValue("y=", y)
        return [x, y]
    }


    /**
     *  Move to x,y position on coordinate grid.
     *         90
     *     180  +   0
     *         270
     */
    //% block="goto(%gx, %gy)" blockId="goto"
    //% group='Control'
    export function goto(gx: number, gy: number) {
        serial.writeValue("heading", heading)
        let bearing = getBearing(gx, gy)
        serial.writeValue("bearning", bearing)
        let dist = calc_distance([x, y], [gx, gy])
        let relBearing = bearing - heading
        if (relBearing < 0) {
            relBearing = 360 - Math.abs(relBearing)
        }
        serial.writeValue("relBearing", relBearing)
        if (relBearing <= 90) {
            serial.writeValue("1 left", relBearing)
            serial.writeValue("forward", dist)
            left(relBearing)
            forward(dist)
        }
        else if (relBearing <= 180) {
            serial.writeValue("2 right", 180 - relBearing)
            serial.writeValue("backward", dist)
            right(180 - relBearing)
            backward(dist)
        }
        else if (relBearing <= 270) {
            serial.writeValue("3 left", relBearing - 180)
            serial.writeValue("backward", dist)
            left(relBearing - 180)
            backward(dist)
        }
        else {
            serial.writeValue("4 right", 360 - relBearing)
            serial.writeValue("forward", dist)
            right(360 - relBearing)
            forward(dist)
        }
    }


    function calc_distance(pointA: number[], pointB: number[]) {
        return Math.abs((pointB[0] - pointA[0]) ** 2 + (pointB[1] - pointA[1]) ** 2) ** 0.5
    }


    function getBearing(gx: number, gy: number) {
        let angle = Math.atan2(gy - y, gx - x) * 180 / Math.PI;  // convert to degrees
        serial.writeValue("angle", angle)
        let bearing = (angle + 360) % 360
        return bearing
    }

    /**
     *  Update these value for your turtle's calibration.
     */
    //% block="wheel_diameter%wheel_dia(mm) wheel_base%wheelbase(mm) PEN_UP%PEN_UP(degrees) PEN_DOWN%PEN_DOWN(degrees)"
    //% wb.defl=75 wd.defl=52 pu.defl=90 pd.defl=10 blockId="set_parameters" group='Parameters'
    export function set_parameters(wd: number, wb: number, pu: number, pd: number) {
        wheel_dia = wd
        wheel_base = wb
        PEN_UP = pu
        PEN_DOWN = pd
    }
} 