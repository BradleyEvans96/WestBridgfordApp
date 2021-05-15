import React from 'react'
import { StyleSheet, Text, View, Dimensions} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Stripes from './stripes';
import colors from '../themes/colors';
import Icon from 'react-native-vector-icons/Ionicons';


const Stack = createStackNavigator();

export type Props = {
    name: string
    screenComponent: React.FC
    navigation:any
  }

const StackScreen: React.FC<Props> = ({name, screenComponent, navigation}) => {
    const windowWidth = Dimensions.get('window').width;
    return (
        <Stack.Navigator screenOptions={{headerBackground: () => <Stripes 
            width={windowWidth} 
            numberOfStripes={3} 
            backgroundColour={colors.WEST_BRIDGFORD_BLUE} 
            stripeColour={colors.WEST_BRIDGFORD_BLACK} 
          />}}>
        <Stack.Screen name = {name} component = {screenComponent} options = {{
          headerLeft: () => (
            <Icon.Button name = "ios-menu" size = {40} backgroundColor = "transparent" onPress = {() => navigation.openDrawer()}/>
          )
        }} />
        </Stack.Navigator>
    )
  };

// export type Props = {
//   name: string
// }

// const Header: React.FC<Props> = ({ name }) => {
//   const windowWidth = Dimensions.get('window').width;

//   return (
//     <View style={styles.header}>
//         <Stripes 
//           width={windowWidth} 

//           numberOfStripes={3} 
//           backgroundColour={Colours.WEST_BRIDGFORD_BLUE} 
//           stripeColour={Colours.WEST_BRIDGFORD_BLACK} 
//         />
//         <View style={styles.textWrapper}>
//           <Text style={styles.headerText}>{name}</Text>
//         </View>
//     </View>
//   )
// }

export default StackScreen;

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