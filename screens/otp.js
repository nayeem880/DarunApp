import React, { useEffect, useState } from 'react'
import { Text, View, Image, TextInput, StyleSheet,TouchableOpacity } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { primaryColor, secondaryColor, secondaryColorBg, primaryColorBg } from '../assets/THEME/theme';


export default function Otp({navigation}) {
      const [otp, setOtp] = useState('')
      const [resetPs, setResetPs] = useState(false)


const onFooterLinkPress = () => {
      navigation.navigate('Signup')
  }

const onLoginPress = () => {
      navigation.navigate('Login')
  }

const onOtpSubmit = () => {
    setResetPs(true)
}

const onPsResetRequest = () => {
    console.log("password reset request sent")
}

    return (

        <SafeAreaView style={styles.container}>
            <KeyboardAwareScrollView
            style={styles.nestedcontainer}
            keyboardShouldPersistTaps="never">
        { (!resetPs) ? (
            <>
            <Image
                style={styles.logo}
                source={require('../assets/ICONS/recover.png')}
            />
            <TextInput
                style={styles.input}
                placeholder='Enter OPT'
                placeholderTextColor={primaryColorBg}
                onChangeText={(otp) => setOtp(otp)}
                otpVal={otp}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            
            <TouchableOpacity
                style={styles.button}
                onPress={onOtpSubmit}>
                <Text style={styles.buttonTitle}>Submit OTP</Text>
            </TouchableOpacity>
            <View style={styles.footerView}>
                <Text style={styles.footerText}>Don't have an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Sign up</Text></Text>
            </View>

            <View style={styles.footerView}>
                <Text style={styles.footerText}>Already have an account and remember the credentials?<Text onPress={onLoginPress} style={styles.footerLink}>Login instead</Text></Text>
            </View>
            </>

        ): (  

             <> 

             <Image
                style={styles.logo}
                source={require('../assets/ICONS/celebration.png')}
            />     
            <TextInput
                style={styles.input}
                placeholder='Enter New Password'
                placeholderTextColor={primaryColorBg}
                onChangeText={(otp) => setOtp(otp)}
                otpVal={otp}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />

            <TextInput
                style={styles.input}
                placeholder='Confirm Password'
                placeholderTextColor={primaryColorBg}
                onChangeText={(otp) => setOtp(otp)}
                otpVal={otp}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            
            <TouchableOpacity
                style={styles.button}
                onPress={onPsResetRequest}>
                <Text style={styles.buttonTitle}>Reset Password</Text>
            </TouchableOpacity>
            <View style={styles.footerView}>
                <Text style={styles.footerText}>Don't have an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Sign up</Text></Text>
            </View>

            <View style={styles.footerView}>
                <Text style={styles.footerText}>Already have an account and remember the credentials?<Text onPress={onLoginPress} style={styles.footerLink}>Login instead</Text></Text>
            </View>
         </>
        )
      }
        </KeyboardAwareScrollView>
        </SafeAreaView>
         
    )
}




const styles = StyleSheet.create({
    container: {
        flex: 11,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: secondaryColorBg,
        flexDirection: 'column'

    },
    nestedcontainer: {
        flex: 1,
        width: '100%',
        marginTop: 20,
        marginBottom: 20,
        margin : 20,
        padding: 30,
        borderRadius: 15,
        
    },
    logo: {
        width: '100%',
        height: 120,
        marginTop:10,
        resizeMode: 'contain',
        marginBottom: 10,
    },
    input: {
        height: 50,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginBottom: 10,
        paddingLeft: 15,
    },
    button: {
        backgroundColor: primaryColor,
        color: "white",
        // marginLeft: 30,
        // marginRight: 30,
        marginTop: 20,
        height: 50,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonTitle: {
        color: 'white',
        fontSize: 14,
        fontWeight: "bold"
    },
    footerView: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    footerText: {
        fontSize: 14,
        color: primaryColor,
    },
    footerLink: {
        color: secondaryColor,
        fontWeight: "bold",
        fontSize: 14,
        paddingLeft:5,
    }
})

