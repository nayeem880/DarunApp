import SplashScreen from "react-native-splash-screen"
import SvgComponent from "../assets/SVG/darun"
import React from 'react';
import {  StyleSheet, 
    Text,
    View,
    Button,
} from 'react-native';
import {splashScreenColor, primaryColor, secondaryColor} from '../assets/THEME/theme.js'


export default function Dashboard({navigation}) {
    return(
        <View style = {styles.container}>
            <Text style = {styles.splashTextPrimary}>
            দারুন
            </Text>
            <Text style = {styles.splashTextSecondary}>
             অ্যাপ
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: splashScreenColor,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 5,
      height: "100%",
      width: '100%',
      display: 'flex',
      flexDirection: 'row'

    },
  
    splashTextPrimary:{
      fontSize: 18,
      color: primaryColor,
      },
  
    splashTextSecondary:{
      fontSize: 18,
      color: secondaryColor,
      },
    }
);

