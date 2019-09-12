#include "pxt.h"
#include <cstdint>
#include <math.h>

using namespace pxt;

int steps_rev = 512;
float wheel_dia = 72;
int steps_rev=512;      //   512 for 64x gearbox, 128 for 16x gearbox
int delay_time=4;       //   time between steps in ms
int R_stepper_pins[] = {0, 7, 1, 6}; 
int L_stepper_pins[] = {8, 10, 13, 9};      //org->pink->blue->yel

int fwd_mask[][4] =  {{1, 0, 1, 0},
                      {0, 1, 1, 0},
                      {0, 1, 0, 1},
                      {1, 0, 0, 1}};



namespace turtle {
    /*
    * Calculates the number of stepper steps for a given distance in mm.
    */
    //%
    int calc_steps(int distance) {
	  float steps = distance * steps_rev / (wheel_dia * 3.1412);
	  return int(steps);  
    }

    void forward(float distance){
    int steps = step(distance);
    for(int step=0; step<steps; step++){
        for(int mask=0; mask<4; mask++){
        for(int pin=0; pin<4; pin++){
            digitalWrite(L_stepper_pins[pin], fwd_mask[mask][pin]);
            //digitalWrite(R_stepper_pins[pin], rev_mask[mask][pin]);
        }
        delay(delay_time);
        } 
    }
}


}

