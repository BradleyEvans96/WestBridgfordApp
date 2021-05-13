import React from 'react';
import Svg, { Rect } from 'react-native-svg';
import { View, StyleSheet } from 'react-native';

export type Props = {
  width: number
  height: number
  numberOfStripes: number
  stripeColour: string
  backgroundColour: string
}

const Stripes: React.FC<Props> = ({  
  width,
  height,
  numberOfStripes,
  stripeColour,
  backgroundColour
}) => {

  const totalStripes = (numberOfStripes * 2) + 1

  const stripeWidth = width / totalStripes;

  return (
    <View>
      <Svg height= { height } width= { width }>
        <Rect width="100%" height={ height } fill={ backgroundColour } opacity="1" />
        <Rect width={stripeWidth} height={height} fill= {stripeColour} opacity="1" x = { getStripeStartPosition(1, stripeWidth) }/>
        <Rect width={stripeWidth} height={height} fill= {stripeColour} opacity="1" x = { getStripeStartPosition(3, stripeWidth) }/>
        <Rect width={stripeWidth} height={height} fill= {stripeColour} opacity="1" x = { getStripeStartPosition(5, stripeWidth) }/>
      </Svg>
    </View>
  )
}


function getStripeStartPosition(position: number, stripeWidth: number): number {
    return 0 + (position * stripeWidth)
};
  
export default Stripes;