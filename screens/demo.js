import React from 'react';
import { KeyboardAwareScrollView, } from 'react-native-keyboard-aware-scroll-view';
import {  StyleSheet, 

    Text,
    View,
    TextInput,
    Button,
    TextBase,
} from 'react-native';
import SelectPicker from 'react-native-form-select-picker'; // Import the package
import {splashScreenColor, primaryColor, secondaryColor} from '../assets/THEME/theme'
import {Picker} from '@react-native-community/picker';
import {  useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function Demo() {
    const [location, setLocation] = useState('');
    const [time, setTime] = useState('');
    const [minute, setMinute] = useState('');
    const [display, setDisplay] = useState('')


    // function showInvoice([location, time, minute, display])
    // {

    //     return(
            

    //     ) 
    // }

    return(
        <View style = {styles.container}>
            <KeyboardAwareScrollView
            style={styles.nestedContainer}
            keyboardShouldPersistTaps="always">
                
            <Text style = {styles.headingText}>
            বিজ্ঞাপন দিন 
            </Text>
            <Text style = {styles.subheadingText}>
            মাত্র কয়েক সেকেন্ডেই আপনার বিজ্ঞাপন দেখুন বসুন্ধরা যমুনা সহ ৬০ টির বেশি শপিং কমপ্লেক্স এর ডিজিটাল সাইনেজ ডিসপ্লে তে 
            </Text>
            <View style={styles.inputContainer}>


            <TextInput
                style={styles.textInputStyle}
                placeholder='আপনার বিজ্ঞাপনটি  আপলোড করুন '
                placeholderTextColor="#aaaaaa"
                // onChangeText={(text) => setEmail(text)}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                />

                <Picker
                        selectedValue={location}
                        style={styles.pickerContainer}
                        onValueChange={(itemValue) =>
                            setLocation(itemValue)
                        }>

                        <Picker.Item label="লোকেশন সিলেক্ট করুন" value="" style={styles.pickerItem} />
                        <Picker.Item label="যমুনা ফিউচার পার্ক" value="1" style={styles.pickerItem} />
                        <Picker.Item label="বসুন্ধরা শপিং কমপ্লেক্স" value="2" />
                        <Picker.Item label=" ইস্টার্ন প্লাজা" value="3" />
                </Picker>

                <Picker
                        selectedValue={time}
                        style={styles.pickerContainer}
                        onValueChange={(itemValue) =>
                            setTime(itemValue)
                        }>

                        <Picker.Item label="সময় নির্ধারণ করুন" value="" style={styles.pickerItem} />
                        <Picker.Item label="10-11" value="1" style={styles.pickerItem} />
                        <Picker.Item label="11-12" value="2" />
                        <Picker.Item label="12-01" value="3" />
                        <Picker.Item label="01-02" value="4" />
                        <Picker.Item label="02-03" value="5" />
                        <Picker.Item label="03-04" value="6" />
                        <Picker.Item label="04-05" value="7" />
                        <Picker.Item label="05-06" value="8" />
                        <Picker.Item label="06-07" value="9" />
                        <Picker.Item label="07-08" value="10" />
                </Picker>
                <Picker
                        selectedValue={minute}
                        style={styles.pickerContainer}
                        onValueChange={(itemValue) =>
                            setMinute(itemValue)
                        }>

                        <Picker.Item label="কত মিনিট বিজ্ঞাপন দিতে চান?" value="" style={styles.pickerItem} />
                        <Picker.Item label="10" value="1" style={styles.pickerItem} />
                        <Picker.Item label="15" value="2" />
                        <Picker.Item label="20" value="3" />
                        <Picker.Item label="25" value="4" />
                        <Picker.Item label="30" value="5" />
                        <Picker.Item label="35" value="6" />
                        <Picker.Item label="40" value="7" />
                        <Picker.Item label="45" value="8" />
                        <Picker.Item label="50" value="9" />
                        <Picker.Item label="55" value="10" />
                </Picker>
                <Picker
                        selectedValue={display}
                        style={styles.pickerContainer}
                        onValueChange={(itemValue) =>
                            setDisplay(itemValue)
                        }>

                        <Picker.Item label="কতগুলো ডিসপ্লে নিতে চান?" value="" style={styles.pickerItem} />
                        <Picker.Item label="1" value="1" style={styles.pickerItem} />
                        <Picker.Item label="2" value="2" />
                        <Picker.Item label="3" value="3" />
                        <Picker.Item label="4" value="4" />
                        <Picker.Item label="5" value="5" />
                        <Picker.Item label="6" value="6" />
                        <Picker.Item label="7" value="7" />
                        <Picker.Item label="8" value="8" />
                        <Picker.Item label="9" value="9" />
                        <Picker.Item label="10" value="10" />
                </Picker>

           
                <TextInput
                style={styles.textInputStyle}
                placeholder='প্রমো কোড (যদি থাকে)'
                placeholderTextColor="#aaaaaa"
                // onChangeText={(text) => setEmail(text)}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                />

                <TouchableOpacity style={styles.confirmBtn} >
                    <Text style={styles.btnText}>কন্ফার্ম</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAwareScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        padding: 5,
        display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'white',
      padding: 15,
      justifyContent: 'center',
      alignItems: 'center',

    },
    nestedContainer: {
       flex: 1,
       flexDirection: 'column',
       textAlign: 'center',
    //   
    },
    inputContainer: {
        flex:1,
       justifyContent:"center",
       flexDirection: 'column',
       textAlign: 'center',
       alignItems: 'center',
       margin: 5,
       padding: 5,
    },
  
    headingText:{
      fontSize: 18,
      color: primaryColor,
      padding: 5,
      color: 'blue'
    },
    
    subheadingText:{
        fontSize: 14,
        padding: 5,
        color: 'skyblue',
        textAlign: 'center'
      },

    textInputStyle:{
        fontSize: 12,
        padding: 5,
        color: 'skyblue',
        borderWidth: 0.1,
        borderColor: 'blue',
        borderRadius: 5,
        height: 30,
        width: '80%',
        margin: 5,
        shadowColor: 'red',
        shadowOpacity: 2,
        shadowRadius: 10,
      },

      pickerContainer:{
        flex:1,
        width: '80%',
        justifyContent:"center",
        flexDirection: 'column',
        textAlign: 'center',
        alignItems: 'center',
        margin: 5,
        padding: 5,
        shadowColor: 'gray',
        shadowOpacity: 2,
        shadowRadius: 5,
        borderWidth: 0.1,
        borderColor: 'gray',
        borderRadius: 5,
        color: "blue" ,
        
      },
      pickerItem:{
        height: 20,
        borderWidth: 0.1,
        borderColor: 'blue',
        borderRadius: 5,
        margin: 5,
        padding: 5,
        shadowColor: 'red',
        shadowOpacity: 2,
        shadowRadius: 10,
        color: 'red',
      },
      confirmBtn:{
          color: 'white',
          backgroundColor: 'green',
          height: 20,
          width: '100%',
          margin: 20,
          padding: 5,
      },
      btnText:{
        color: 'white',
    },
    }
);

