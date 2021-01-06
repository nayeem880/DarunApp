import React, {  useState } from 'react';
import {primaryColor, primaryColorBg, secondaryColor, secondaryColorBg} from '../assets/THEME/theme'
import { SafeAreaView } from 'react-native-safe-area-context';
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
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function Advertisement({navigation}){
    return(
        <SafeAreaView style = {styles.container}>
            <View style = {styles.nestedcontainer}>
                <View style = {styles.container}>



                </View>
            </View>
        </SafeAreaView>

    )
}


const styles = StyleSheet.create({
    container :{

        flex:1,
        backgroundColor: 'white',
        width: "100%",
    },

    nestedcontainer:{



    },












})