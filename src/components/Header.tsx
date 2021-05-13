import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Stripes from './Stripes';
import Colours from '../themes/colors'
import { Dimensions } from 'react-native';

export type Props = {
  name: string
}

const Header: React.FC<Props> = ({ name }) => {
  const windowWidth = Dimensions.get('window').width;

  return (
    <View style={styles.header}>
        <Stripes 
          width={windowWidth} 
          height={64} 
          numberOfStripes={3} 
          backgroundColour={Colours.WEST_BRIDGFORD_BLUE} 
          stripeColour={Colours.WEST_BRIDGFORD_BLACK} 
        />
        <View style={styles.textWrapper}>
          <Text style={styles.headerText}>{name}</Text>
        </View>
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textWrapper: {
    position: 'absolute', 
    top: 0, 
    left: 0, 
    right: 0, 
    bottom: 0, 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    letterSpacing: 1,
    color: 'white'
  }
})