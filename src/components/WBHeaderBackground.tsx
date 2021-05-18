import React from 'react';
import Stripes from './stripes';
import colors from '../themes/colors';
import {View, Dimensions} from 'react-native';
import WBCFCLogo from './WBLogo';
export type Props = {

}

const WBHeaderBackground: React.FC<Props> = ({

}) => {
    const windowWidth = Dimensions.get('window').width;
    return (
        <View style = {{flexDirection: 'row-reverse'}}>
            <Stripes 
            width={windowWidth} 
            numberOfStripes={3} 
            backgroundColour={colors.WEST_BRIDGFORD_BLUE} 
            stripeColour={colors.WEST_BRIDGFORD_BLACK} 
          />
        </View>
    )
}

export default WBHeaderBackground;