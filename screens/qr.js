import React from 'react';
import {  StyleSheet, 
    Text, 
    View,
    Image,
    Button,
    
} from 'react-native';
import { primaryColor, secondaryColor, secondaryColorBg, primaryColorBg } from '../assets/THEME/theme';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Qr({navigation}) {
    return(
        <SafeAreaView style = {styles.container}>
            <Image
          style={styles.introImageStyle}
          source={require('../assets/ICONS/scann.png')} />
            <Text style = {styles.paragraphStyle}>
                 QR Page for qr code scan
            </Text>
        </SafeAreaView>
    );
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: secondaryColorBg,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  paragraphStyle: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    color: primaryColor,
  },
  introImageStyle: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom:10,
  },
})