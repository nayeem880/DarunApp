import React, { useState, useEffect } from 'react'
import { Image, Text,ActivityIndicator,  TextInput, Alert, TouchableOpacity,StyleSheet, View, ViewBase } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { firebase } from '../firebase/config';
import  {AuthContext} from '../components/context'
import { primaryColor, primaryColorBg, secondaryColor, secondaryColorBg } from '../assets/THEME/theme';
import {  SafeAreaView } from 'react-native-safe-area-context';
import { roundToNearestPixel } from 'react-native/Libraries/Utilities/PixelRatio';





export default function Login({navigation}) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [animationLoading, setAnimationLoading] = useState(false)

  const onFooterLinkPress = () => {
      navigation.navigate('Signup')
  }

  const onOtpLinkPress = () => {
      navigation.navigate('Otp')
  }



  const {login} = React.useContext(AuthContext)
  
  const loginHandle = (email, password) => {
      login(email, password)
  
  }
  


//   const onLoginPress = () => {
//       try{ 
//                     setAnimationLoading(true)    
//                     firebase
//                     .auth()
//                     .signInWithEmailAndPassword(email, password)
//                     .then((response) => {
//                         console.log(response)    
//                         const uid = response.user.uid
//                         navigation.navigate("Login")
                
//                     })
//                     .catch(error => {
//                         Alert.alert(error.message)    
//                         setAnimationLoading(false)
//                     })
//     }
//     catch(e){
//         Alert.alert("There is a problem with your internet connection. Please check the connection")    
//         setAnimationLoading(false)
//     }           
// }











    return (
        
         <SafeAreaView style={styles.container}>
            <KeyboardAwareScrollView style={styles.nestedcontainer}
            keyboardShouldPersistTaps="never">
                <Image
                    style={styles.logo}
                    source={require('../assets/ICONS/login.png')}
                />
            <TextInput
                style={styles.input}
                placeholder='E-mail'
                placeholderTextColor={primaryColorBg}
                onChangeText={(text) => setEmail(text)}
                value={email}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholderTextColor={primaryColorBg}
                secureTextEntry
                placeholder='Password'
                onChangeText={(text) => setPassword(text)}
                value={password}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
           
            {animationLoading?(
                 <>
                <View style={styles.activityIndicator}>
                        <ActivityIndicator/>
               </View>
               </>
            ):(
                <>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {loginHandle(email, password)}}>
                <Text style={styles.buttonTitle}>Log in</Text>
            </TouchableOpacity>
            </>

            )
        }
            
            <View style={styles.footerView}>
                <Text style={styles.footerText}>Don't have an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Sign up</Text></Text>
            </View>

            <View style={styles.footerView}>
                <Text style={styles.footerText}>Or Forgot Password?<Text onPress={onOtpLinkPress} style={styles.footerLink}>Recover Password</Text></Text>
            </View>
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
    },
    activityIndicator:{
        justifyContent: 'center',
        alignItems: 'center',
    },
})
