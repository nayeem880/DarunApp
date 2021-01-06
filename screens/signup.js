import React, { useState } from 'react'
import { Image, Text, TextInput, Alert, TouchableOpacity,StyleSheet, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { firebase } from '../firebase/config'
import  {AuthContext} from '../components/context'
import { primaryColor, primaryColorBg, secondaryColor, secondaryColorBg } from '../assets/THEME/theme';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


export default function Signup({navigation}) {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const onFooterLinkPress = () => {
        navigation.navigate('Login')
    } 

    const onRegisterPress = () => {
        if (password !== confirmPassword) {
            Alert.alert("Passwords don't match.")
            return
        }
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                const data = {
                    id: uid,
                    email,
                    fullName,
                };
                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .set(data)
                    .then(() => {
                        navigation.navigate('Login' ) 
                        // {user: data}
                    })
                    .catch((error) => {
                       Alert.alert(error.message)
                    });
            })
            .catch((error) => {
                Alert.alert(error.message)
        });
    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAwareScrollView
                style={styles.nestedcontainer}
                keyboardShouldPersistTaps="always">
                <Image
                    style={styles.logo}
                    source={require('../assets/ICONS/createAccount.png')}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Full Name'
                    placeholderTextColor={primaryColorBg}
                    onChangeText={(text) => setFullName(text)}
                    value={fullName}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
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
                <TextInput
                    style={styles.input}
                    placeholderTextColor={primaryColorBg}
                    secureTextEntry
                    placeholder='Confirm Password'
                    onChangeText={(text) => setConfirmPassword(text)}
                    value={confirmPassword}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onRegisterPress()}>
                    <Text style={styles.buttonTitle}>Create account</Text>
                </TouchableOpacity>
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Already got an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Log in</Text></Text>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: secondaryColorBg,
        flexDirection: 'column',
        
        justifyContent: 'center',
        alignItems: 'center',

    },
    nestedcontainer: {
        flex: 1,
        width: '100%',
        marginBottom: 20,
        borderRadius: 15,
        
    },
    logo: {
        width: '100%',
        height: 120,
        marginTop:20,
        paddingTop:20,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    input: {
        height: 50,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 15
    },
    button: {
        backgroundColor: primaryColor,
        marginLeft: 30,
        marginRight: 30,
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
        marginTop: 10
    },
    footerText: {
        fontSize: 14,
        color: primaryColor,
    },
    footerLink: {
        color: secondaryColor,
        fontWeight: "bold",
        fontSize: 14,
    }
})