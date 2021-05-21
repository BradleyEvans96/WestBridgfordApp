import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    Platform,
    TextInput,
    StatusBar
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../themes/colors';

const LoginStack = createStackNavigator();

const LoginStackScreen: React.FC = () => (
    <LoginStack.Navigator headerMode="none">
        <LoginStack.Screen name="LoginScreen" component={LoginScreen} />
    </LoginStack.Navigator>
);

const LoginScreen: React.FC = () => {
    const [data, setData] = React.useState({
        email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        validCredentials: true
    });
    const textInputChange = (val: string) => {
        if (val.length !== 0) {
            setData({
                ...data,
                email: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                email: val,
                check_textInputChange: false
            });
        }
    };

    const handlePasswordChange = (val: string) => {
        setData({
            ...data,
            password: val
        });
    };

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    };

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#009387" barStyle="light-content" />
            <View style={styles.header}>
                {/* require seems to be fround upon. We should find a better way to do this */}
                <Animatable.Image
                    animation="zoomIn"
                    duration={1500}
                    height={logoSize}
                    width={logoSize}
                    // eslint-disable-next-line global-require
                    source={require('../assets/WBCFCLogo.png')}
                />
            </View>
            <Animatable.View style={styles.footer} animation="fadeInUpBig">
                <Text style={styles.textFooter}> Email </Text>
                <View style={styles.action}>
                    <FontAwesome name="user-o" color="#05375a" size={20} />
                    <TextInput
                        placeholder="Your Email"
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(value) => textInputChange(value)}
                    />
                    {data.check_textInputChange ? (
                        <Animatable.View animation="bounceIn">
                            <Feather
                                name="check-circle"
                                color="green"
                                size={20}
                            />
                        </Animatable.View>
                    ) : null}
                </View>
                <Text style={styles.textFooter}> Password </Text>
                <View style={styles.action}>
                    <Feather name="lock" color="#05375a" size={20} />
                    <TextInput
                        placeholder="Your Password"
                        secureTextEntry={data.secureTextEntry}
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(value) => handlePasswordChange(value)}
                    />
                    <TouchableOpacity onPress={updateSecureTextEntry}>
                        {data.secureTextEntry ? (
                            <Feather name="eye-off" color="grey" size={20} />
                        ) : (
                            <Feather name="eye" color="grey" size={20} />
                        )}
                    </TouchableOpacity>
                </View>
                {!data.validCredentials ? (
                    <Animatable.View animation="fadeInLeft" duration={500}>
                        <Text style={styles.errorMsg}>
                            {' '}
                            Incorrect Username or Password
                        </Text>
                    </Animatable.View>
                ) : null}

                <View style={styles.button}>
                    <TouchableOpacity style={styles.signIn} onPress={() => {}}>
                        <LinearGradient
                            colors={[
                                colors.WEST_BRIDGFORD_BLUE_LIGHT,
                                colors.WEST_BRIDGFORD_BLUE
                            ]}
                            style={styles.signIn}
                        >
                            <Text style={styles.textSign}>Sign In</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
};

export default LoginStackScreen;

const { height } = Dimensions.get('screen');
const logoSize = height * 0.2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.WEST_BRIDGFORD_BLUE
    },
    header: {
        flex: 1,
        marginTop: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 2,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    textHeader: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    textFooter: {
        color: '#05375a',
        fontSize: 18,
        marginTop: 35
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a'
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
    }
});