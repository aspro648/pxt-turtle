#include "pxt.h"
#include <cstdint>
#include <math.h>

using namespace pxt;

uint16_t steps_rev = 512
float wheel_dia = 72


namespace turtle {
    /*
    * Calculates the number of stepper steps for a given distance in mm.
    */
    //%
    uint16_t calc_steps(int16_t distance) {
	  float steps = distance * steps_rev / (wheel_dia * 3.1412);
	  return int(steps);  
    }

}

