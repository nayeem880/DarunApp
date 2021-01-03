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



export default function Order({navigation}) {
    return(
        <View style = {styles.container}>
            <Text style = {styles.bigText}>
            Order Confirmation And Invoice Page
            </Text>
            <Button
        title="Payment"
        onPress={() => navigation.navigate('Payment')}
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

