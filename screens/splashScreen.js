// import SplashScreen from "react-native-splash-screen"
import SvgComponent from "../assets/SVG/darun"
import React from 'react';
import {  StyleSheet, 
    Text,
    View,
    Image,
    Button,
} from 'react-native';
import {splashScreenColor, primaryColor, secondaryColor, secondaryColorBg} from '../assets/THEME/theme.js'


export default function SplashScreen({navigation}) {
    return(
        <View style = {styles.container}>
          <Image style={styles.logoStyle} source={require('../assets/ICONS/darunn.png')}/>
            {/* <Text style = {styles.splashTextPrimary}>
            দারুন অ্যাপ
            </Text> */}
            <Text style = {styles.splashTextSecondary}>
            A BRAND INFLUENCER APP
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: secondaryColorBg,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 5,
      height: "100%",
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
    },


    logoStyle:{
      width: 80,
      height: 80,
      resizeMode: 'contain',
    },

    splashTextPrimary:{
      fontSize: 20,
      color: primaryColor,
      marginTop: 10,
      },

    splashTextSecondary:{
      fontSize: 14,
      color: secondaryColor,
      marginTop: 2,
      },
    }
);

