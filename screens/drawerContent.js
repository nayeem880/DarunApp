import React, {useState} from 'react'
import { SafeAreaView,  } from 'react-native-safe-area-context';
import {primaryColor, primaryColorBg, secondaryColor, secondaryColorBg} from '../assets/THEME/theme'

import {Modal,StyleSheet, Image, View, Text} from 'react-native'
// import SvgComponent from "../assets/SVG/darun"
import {
    DrawerContentScrollView,
    DrawerItem,
} from '@react-navigation/drawer'
import { TouchableOpacity } from 'react-native-gesture-handler';
import  {AuthContext} from '../components/context'




export function DrawerContent(){
    const [animationLoading, setAnimationLoading] = useState(false)

    const {logOut} = React.useContext(AuthContext)

    // function pressedLogOut({navigation}) {
    //     setAnimationLoading(true)
    //     firebase.auth().signOut().then(function() {
    //         navigation.navigate('AppWithoutIntro')
    //         }).catch(function(error) {
    //             console.log("Error occured during logout")
    //             setAnimationLoading(false)
    //     });
    // }


    return(
        <SafeAreaView style={styles.container}>
                <View style={styles.nestedcontainer}>
                            <Text style={styles.topcontainerText} >
                                Switch Account
                            </Text>
                    <View style={styles.topcontainer}>
                        <TouchableOpacity style={styles.nestedtopcontainer}>
                                <Image source={require("../assets/ICONS/profile.png")} style={styles.logoutImg} />
                            <Text style={styles.logoutText} >
                                    Personal Account
                                </Text>
                        </TouchableOpacity>
                        
                    </View>
                    <Text style={styles.topcontainerText} >
                                Business
                            </Text>
                    <View style={styles.middlecontainer}>
                   

                            <View style={styles.nestedtopcontainer}>
                                <Image source={require("../assets/ICONS/localshop.png")} style={styles.logoutImg} />
                            <Text style={styles.logoutText} >
                                    Shop
                                </Text>
                        </View>
                        <View style={styles.nestedtopcontainer}>
                                <Image source={require("../assets/ICONS/delivery.png")} style={styles.logoutImg} />
                            <Text style={styles.logoutText} >
                                    Delivery 
                                </Text>
                        </View>

                    <View style={styles.nestedtopcontainer}>
                                <Image source={require("../assets/ICONS/report.png")} style={styles.logoutImg} />
                            <Text style={styles.logoutText} >
                                    Reports And Return
                                </Text>
                        </View>
                        <View style={styles.nestedtopcontainer}>
                                <Image source={require("../assets/ICONS/creditcard.png")} style={styles.logoutImg} />
                            <Text style={styles.logoutText} >
                                    Credits And Insights
                                </Text>
                        </View>
                        <View style={styles.nestedtopcontainer}>
                                <Image source={require("../assets/ICONS/financial.png")} style={styles.logoutImg} />
                            <Text style={styles.logoutText} >
                                    Financial Statements
                                </Text>
                    </View>
                        <View style={styles.nestedtopcontainer}>
                                <Image source={require("../assets/ICONS/promo.png")} style={styles.logoutImg} />
                            <Text style={styles.logoutText} >
                                    Promo Offers
                                </Text>
                    </View>
                        <View style={styles.nestedtopcontainer}>
                                <Image source={require("../assets/ICONS/focus.png")} style={styles.logoutImg} />
                            <Text style={styles.logoutText} >
                                    Advertisement Packages
                                </Text>
                    </View>
                    </View>
                    <View style={styles.bottomcontainer}>
                           <Text style={styles.topcontainerText} >
                                Switch Account
                            </Text>

                            { animationLoading?(
                                        <>
                                        <View style={styles.nestedbottomcontainer}>
                                                <Image source={require("../assets/ICONS/back.png")} style={styles.logoutImg} />
                                                <Text style={styles.logoutText}>Logging You Out...</Text>
                                        </View>
                                    </>
                                    ):(

                                    <>
                                    <TouchableOpacity onPress={logOut} style={styles.nestedbottomcontainer}>
                                                <Image source={require("../assets/ICONS/back.png")} style={styles.logoutImg} />
                                                <Text style={styles.logoutText}>Log Out...</Text>
                                        </TouchableOpacity>
                                    </>
                                    )
                                } 
                    
                    </View>
                </View>
        </SafeAreaView>


    )
}
        
  
const styles = StyleSheet.create({
    container:{
        flex:1,
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },

    nestedcontainer:{
        backgroundColor: 'white',
        flex:10,
        width: '100%',
        padding: 10,
        
    },

    topcontainer:{
        flex:1,
        borderRadius:5,
        backgroundColor: secondaryColorBg,
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingLeft: 5,
        // marginTop:5,
        marginBottom:5,
    },

    
    topcontainerText:{
        color: primaryColor,
        fontSize: 14,
        margin: 5,
        textAlign: 'left',
    },
    
    nestedtopcontainer:{
        flex:1,
        width:"90%",
        borderRadius:5,
        backgroundColor: secondaryColorBg,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 5,
        // marginTop:5,
        marginBottom:5,

    },

    middlecontainer:{
        flex: 5,
        borderRadius:5,
        backgroundColor: secondaryColorBg,
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingLeft:5,
        marginTop:5,
        marginBottom:5,

    },
    bottomcontainer:{
        flex:1,
        borderRadius:5,
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',

        marginTop:5,
        marginBottom:5,
    },

    nestedbottomcontainer:{
        flex:1,
        width:"100%",
        height:40,
        borderRadius:5,
        backgroundColor: secondaryColorBg,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 10,
        // marginTop:5,
        marginBottom:5,
    },

 
    logoutImg:{
        width: 20,
        height: 20,
        margin: 5,
    },

    logoutText:{
        fontSize:14,
        margin: 5,
        textAlign: 'center',

    },
})