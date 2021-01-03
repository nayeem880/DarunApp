import React, { useEffect, useState } from 'react'
import { Text, View, Image, TextInput,TouchableOpacity } from 'react-native'
import styles from '../styles/loginstyle';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


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

        <View style={styles.container}>
            <KeyboardAwareScrollView
            style={{ flex: 1, width: '100%' }}
            keyboardShouldPersistTaps="always">
        { (!resetPs) ? (

            <>
            <Image
                style={styles.logo}
                source={require('../assets/otp.png')}
            />
            <TextInput
                style={styles.input}
                placeholder='Enter OPT'
                placeholderTextColor="#aaaaaa"
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
                source={require('../assets/ps.png')}
            />     
            <TextInput
                style={styles.input}
                placeholder='Enter New Password'
                placeholderTextColor="#aaaaaa"
                onChangeText={(otp) => setOtp(otp)}
                otpVal={otp}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />

            <TextInput
                style={styles.input}
                placeholder='Confirm Password'
                placeholderTextColor="#aaaaaa"
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
        </View>
         
    )
}
