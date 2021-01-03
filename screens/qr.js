import React from 'react';
import {  StyleSheet, 
    Text, 
    TextInput,
    View,
    Image,
    Alert,
    Button,
    ScrollView,
    SafeAreaView,
} from 'react-native';

export default function Qr({navigation}) {
    return(
        <View style = {styles.container}>
            <Text style = {styles.bigText}>
QR Page for qr code scan
        </Text>
            <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Dashbaord')}
      />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 5,
      height: "100%",
      width: '100%',
    },
  
    bigText:{
      fontSize: 30,
      color: '#ff1493',
      },
    }
);

