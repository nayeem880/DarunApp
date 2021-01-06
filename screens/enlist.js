import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {primaryColor, primaryColorBg, secondaryColor, secondaryColorBg} from '../assets/THEME/theme'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Root from '../app'
import {  StyleSheet, 

    Text,
    View,
    Image,
    TextInput,
    Button,
    TextBase,
} from 'react-native';
import SelectPicker from 'react-native-form-select-picker'; // Import the package
import {Picker} from '@react-native-community/picker';
import {  useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import HomeScreen from './homescreen';


export default function Enlist({navigation}) {
    const [location, setLocation] = useState('');
    const [time, setTime] = useState('');
    const [minute, setMinute] = useState('');
    const [display, setDisplay] = useState('')


    // function showInvoice([location, time, minute, display])
    // {

    //     return(
            

    //     ) 
    // }

    const goBack = () => {
      navigation.goBack()
      // navigation.navigate('Root')
  }

    return(
        <SafeAreaProvider> 
        <View style = {styles.container}>
            <View style = {styles.nestedContainer}>
            <View style = {styles.nestedTopContainer}>

            <TouchableOpacity style={styles.goBackBtn}  onPress={goBack}>
               <Image style={styles.goBackBtn}  source={require("../assets/ICONS/back.png")} />
                    </TouchableOpacity>
           
                </View>
                <View style = {styles.nestedBottomContainer}>

            <Text style = {styles.headingText}>
            এনালিস্ট ডিসপ্লে 
            </Text>
            <Text style = {styles.subheadingText}>
            মাত্র কয়েক সেকেন্ডেই আপনার বিজ্ঞাপন দেখুন বসুন্ধরা যমুনা সহ ৬০ টির বেশি শপিং কমপ্লেক্স এর ডিজিটাল সাইনেজ ডিসপ্লে তে 
            </Text>
            <KeyboardAwareScrollView
            style={styles.scrollView}
            keyboardShouldPersistTaps="never">

            <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInputStyle}
                placeholder="বিজ্ঞাপনটি  আপলোড করুন"
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
                    <Text style={styles.btnText}>কনফার্ম</Text>
                    </TouchableOpacity>
             </View>
              </KeyboardAwareScrollView>
              </View>
    </View>


               
        </View>
        </SafeAreaProvider>
    );
}


const styles = StyleSheet.create({
    container: {
    flex:1,
    flexDirection: 'column',
      backgroundColor: "white",
      padding: 10,
    },

    nestedContainer: {
       flex: 1,
       width:'100%',
       flexDirection: 'column',
       justifyContent:"center",
       alignItems:"center",
       textAlign:'center',
       borderRadius: 15,
       paddingTop:10,
       textAlign: 'center',
    },

    nestedTopContainer: {
       flex: 1,
       width:'100%',
       flexDirection: 'row',
       justifyContent:"flex-start",
       alignItems:'center',
       borderRadius: 15,
       paddingLeft:5,
       marginTop: 10,
    },
    
    goBackBtn:{
        height: 40,
        width: 40,
        borderRadius: 5,

        // backgroundColor: 'red',

      },
      
      goBackBtnImg:{
        height: 40,
        width: 40,
        borderRadius: 5,
        alignItems: 'center',


      },

    nestedBottomContainer: {
       flex: 10,
       width:'100%',
       flexDirection: 'column',
       justifyContent:"center",
       alignItems:"center",
       textAlign:'center',
       backgroundColor: secondaryColorBg,
       borderRadius: 15,
       marginTop: "5%",
       paddingTop: 10,
       paddingLeft:5,
       paddingRight: 5,
       paddingBottom: 10,
    },


    scrollView:{
        flex:1,
        width:"100%",
        textAlign:'center',
        flexDirection:'column',
    },



    inputContainer: {
        flex:1,
        width:'100%',
       justifyContent:"center",
       flexDirection: 'column',
       textAlign: 'center',
       alignItems: 'center',
       paddingTop: 5,
    },
  
    headingText:{
      fontSize: 22,
      color: primaryColor,
      padding: 5,
      textAlign:'center',
    },
    
    subheadingText:{
        fontSize: 12,
        padding: 5,
        color: primaryColorBg,
        textAlign: 'center'
      },

    textInputStyle:{
        fontSize: 16,
        padding: 5,
        color: primaryColor,
        borderRadius: 5,
        height: 30,
        width: '80%',
        margin: 5,
        // shadowColor: primaryColorBg,
        // shadowOpacity: 2,
        // shadowRadius: 10,
        backgroundColor: 'white',
      },

      pickerContainer:{
        flex:1,
        width: '80%',
        height:30,
        justifyContent:"center",
        flexDirection: 'column',
        textAlign: 'center',
        alignItems: 'center',
        margin: 5,
        padding: 5,
        // shadowColor: secondaryColor,
        // shadowOpacity: 2,
        // shadowRadius: 5,
        // borderWidth: 0.1,
        borderRadius: 10,
        borderColor: 'white',
        color: primaryColorBg,
        fontSize:12,
        backgroundColor:'white',
        
      },
      pickerItem:{
        height: 20,
        borderWidth: 0.1,
        borderColor: 'blue',
        borderRadius: 5,
        margin: 5,
        padding: 5,
        shadowOpacity: 2,
        shadowRadius: 10,
        color: 'red',
      },
      confirmBtn:{
          fontSize: 16,
          color: 'white',
          justifyContent:'center',
          backgroundColor: primaryColor,
          height: 50,
          width: 150,
          marginTop: 20,
          padding: 10,
          borderRadius: 5,

      },





      
    

      btnText:{
        color: 'white',
        textAlign:'center',
        fontSize: 12,
    },
    }
);

