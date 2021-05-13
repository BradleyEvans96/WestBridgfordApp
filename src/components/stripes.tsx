import React from 'react';
import Svg, { Rect } from 'react-native-svg';


function stripe_start_position(position:number,strip_width:number){
    const calc = 0 + (position * strip_width)
    return String(calc)
  };
  
function stripes(object_width:string, object_height:string, numOfStripes: number, stripe_colour:string, background_colour:string) {
    const stripes_width = 100/numOfStripes;
    return(<Svg height= {object_height} width= {object_width} viewBox="0 0 100 100">
          <Rect width="100%" height="100%" fill={background_colour} opacity="1" />
          <Rect width={stripes_width} height="100%" fill= {stripe_colour} opacity="1" x = {stripe_start_position(1,stripes_width)}/>
          <Rect width={stripes_width} height="100%" fill= {stripe_colour} opacity="1" x = {stripe_start_position(3,stripes_width)}/>
          <Rect width={stripes_width} height="100%" fill= {stripe_colour} opacity="1" x = {stripe_start_position(5,stripes_width)}/>
    </Svg>)
  };

export default stripes;