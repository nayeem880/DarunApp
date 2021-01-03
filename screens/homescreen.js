import React, { useEffect, useState } from 'react'
import { StyleSheet,TouchableOpacity, TouchableHighlight, Image, View, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// import SvgComponent from "../assets/SVG/darun"

export default function HomeScreen({route, navigation}){

      const [entityText, setEntityText] = useState('')
      const [entities, setEntities] = useState([])
      // const [userLoggedOut, setUserLoggedOut] = useState(false);

  
                return (
                    <SafeAreaView style={styles.container}>
                        <View style={styles.topContainer}> 
                            <View style={styles.menuBar}>
                                <TouchableOpacity onPress={openDrawer=()=>(navigation.openDrawer())} >
                                    <Image source = {require('../assets/images/menu1.png')}
                                                style={styles.menuImg} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.iconBar}> 
                                      {/* <SvgComponent/> */}
                                      <Image source = {require('../assets/ICONS/darun1.png')}
                                                style={styles.logoIcon} />
                           </View>
                            <View style={styles.profileMenuBar}> 
                                    <Image source = { require("../assets/images/avatar2.png")}
                                    style={styles.profileMenuImg} />
                            </View>
                        </View>

               
                        <View style={styles.bottomContainer}>
                            <View style={styles.nestedBottomContainerMiddle}>
                                        <View style={styles.middleFlatlist}>
                                        <TouchableOpacity style={styles.featureItem}>
                                                <Image source={require("../assets/images/winner.png")} style={styles.featureImg} />
                                                <Text  style={styles.featureText}>মিম্স</Text>        
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.featureItem}>
                                                <Image source={require("../assets/images/offer.png")} style={styles.featureImg} />
                                                <Text  style={styles.featureText}>অফার</Text>        
                                        </TouchableOpacity>
        
                                        <TouchableOpacity style={styles.featureItem}>
                                                <Image source={require("../assets/images/discount.png")} style={styles.featureImg} />
                                                <Text  style={styles.featureText}>মিটআপ</Text>        
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.featureItem}>
                                                <Image source={require("../assets/images/bingo.png")} style={styles.featureImg} />
                                                <Text  style={styles.featureText}>উৎযাপন </Text>        
                                        </TouchableOpacity>
                                        </View>                                
                                    </View>


                            {/* <View style={styles.nestedBottomContainer}> */}
                                <View style={styles.nestedBottomContainerTop}>
                                    <TouchableOpacity style={styles.container1}>
                                        <Image source={require("../assets/images/intro2.png")} style={styles.headingImg} />
                                        <Text style={styles.headingText}>বিজ্ঞাপন দিন </Text>
                                        <Text style={styles.subheadingText}>১০টির বেশি শপিং মল এবং প্রিমিয়াম লোকেশনে ডিজিটাল সাইনেজ ডিসপ্লেতে আপনার ব্রান্ডের বিজ্ঞাপন দিন মুহূর্তেই, সহজেই এবং অল্প খরচে</Text>
                                        <Text style={styles.headingText}>ক্লিক করুন  </Text>
                                    
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.container2}>
                                        <Image source={require("../assets/images/intro1.png")} style={styles.headingImg} />
                                        <Text  style={styles.headingText}>ভাড়া দিন এবং আয় করুন  </Text>        
                                        <Text  style={styles.subheadingText}>নিজের ডিজিটাল ডিসপ্লেতে এড দিতে দিয়ে ঘন্টা প্রতি টাকা আয় করুন।  এখনই আপনার রেজিস্ট্রেশন করুন   </Text>        
                                        <Text style={styles.headingText}>আরো জানুন </Text>
                                    </TouchableOpacity>
                                
                                </View>
                                


                                <View style={styles.nestedBottomContainerBottom}>
                                    <View style={styles.container3}>
                                        <Text>hello nestedBottom </Text>
                                        
                                    </View>
                                    <View style={styles.container4}>
                                        <Text>nestedBottom </Text>
                                        
                                    </View>                                
                                </View>                                 
                        </View>
                    </SafeAreaView>
                );
      }


      const styles = StyleSheet.create({
        container: {
            flex:1,
            justifyContent: 'center',
            alignItems:"center",
            backgroundColor: "#F4F4FF",            
            flexDirection: 'column',
            margin:"1%",
            padding:"1%",
        },

        topContainer: { 
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: "white",
            borderRadius: 15,
            width: '100%',
            flexDirection: 'row',
            margin:3,
            padding:3, 
        },

         menuBar:{
            padding: 3,
            borderRadius: 50,
            shadowColor: 'lightgray',
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 2,
            backgroundColor: '#F4F4FF',
            shadowRadius: 10,
            justifyContent:'center',
            alignItems: 'center',
            width: 40,
            height:40,
            resizeMode: 'center',
        },


        menuImg:{
            width: 30,
            height:30,
            borderRadius: 50,
            resizeMode: 'contain',
        },

        iconBar:{
            flex: 1,
            justifyContent:'center',
            alignItems:"center", 
            marginLeft: 5,
            marginRight: 5,
            padding: 10,
            borderRadius: 50,
            shadowColor: 'lightgray',
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 2,
            backgroundColor: '#F4F4FF',
            shadowRadius: 10,

        },

        logoIcon:{
            width: 20,
            height:20,
            resizeMode: 'contain',
            fontFamily: "Roboto",
            color: '#010A43',
            fontWeight: 'bold',
        },

      

    profileMenuBar:{
        justifyContent:'center',
        alignItems:"center", 
        padding: 3,
        borderRadius: 50,

        shadowColor: 'lightgray',
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 2,
            backgroundColor: '#F4F4FF',
            shadowRadius: 10,
        backgroundColor: '#F4F4FF',
        width: 40,
        height: 40,
        resizeMode: 'contain'
    },

        profileMenuImg:{
            width: 30,
            height:30,
            borderRadius: 50,
            color: '#010A43',
            resizeMode: 'contain',

        },    
        
        
        // bottom or main container
        bottomContainer: {
            flex:5,
            justifyContent: 'center',
            backgroundColor: "white",
            borderRadius: 15,
            width: '100%',
            flexDirection: 'column',
            padding:"1%",
            margin:5,

            shadowColor: 'lightgray',
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 5,
            shadowRadius: 10,
            
        },
            

        nestedBottomContainer: {
            flex:1,
            justifyContent: 'space-between',
            backgroundColor: "white",
            borderRadius: 15,
            flexDirection: 'row',
            // padding:"1%",
            // margin:"1%",

            // width: '100%',

            flexDirection: 'column',
            shadowColor: 'lightgray',
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 5,
            shadowRadius: 10,
                    
        },
        
        nestedBottomContainerTop: {
            flex:2,
            justifyContent: 'space-between',
            borderRadius: 15,
            flexDirection: 'row',
        },

        container1:{
            flex:1,
            backgroundColor: '#F4F4FF',
            borderRadius: 15,
            flexDirection: 'column',
            padding:"2%",
            margin: 5,
            shadowColor: '#F9F8F8',
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 5,
            shadowRadius: 10,

        },
        

        headingImg:{
            padding: 20,
            width: '100%',
            height: '40%',
            borderRadius: 10,
            resizeMode: 'contain',



        },

        headingText:{
            fontSize:14,
            color: '#010A43',
            paddingTop: "2%",
            paddingLeft : "2%",

        },

        subheadingText:{
            fontSize:11,
            color: 'gray',
            paddingTop: "2%",
            paddingLeft : "2%",


        },

        container2:{
            flex:1,
            backgroundColor: '#F4F4FF',
            borderRadius: 15,
            flexDirection: 'column',
            padding:"2%",
            margin: 5,
            shadowColor: '#F9F8F8',
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 5,
            shadowRadius: 10,

        },

        nestedBottomContainerMiddle: {
            flex:0.7,
                  
         },
        
        middleFlatlist:{
            backgroundColor: '#F4F4FF',
            padding: 5,
            borderRadius: 15,
            height: "100%",
            justifyContent:'space-between',
            flexDirection: 'row',  
        },

        featureItem:{
            backgroundColor: 'white',
            width: '24%',
            padding:"1%",
            justifyContent:'center',
            alignItems: 'center',
            borderRadius: 10,
            
        },
        
        featureImg:{
            width: "100%",
            height: "30%",
            marginTop:"2%",
            padding:"2%",
            resizeMode: 'contain',

        },

        featureText:{
            fontSize: 11,
            color: '#010A43',
            padding:5,
            margin: 5,
            alignItems: 'center',

        },
        















        nestedBottomContainerBottom: {
            flex:1,
            justifyContent: 'space-between',
            borderRadius: 15,
            flexDirection: 'row',   
        },

        middle: {
            backgroundColor: 'orange',
            borderRadius: 15,
            flexDirection: 'row',
            padding:5,
            margin: 5,
            
            shadowColor: '#F9F8F8',
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 5,
            shadowRadius: 10,
            
        },
        

       
        
        container3:{
            flex: 1,
            backgroundColor: '#F4F4FF',
            borderRadius: 15,
            flexDirection: 'row',
            padding:'2%',
            margin:"2%",
            shadowColor: '#F9F8F8',
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 5,
            shadowRadius: 10,

        },
        container4:{
           flex: 1,
            backgroundColor: '#F4F4FF',
            borderRadius: 15,
            flexDirection: 'row',
            padding:'2%',
            margin:"2%",
            shadowColor: '#F9F8F8',
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 5,
            shadowRadius: 10,

        },
        
        
    })




  

    //   const onLogoutPress = () => {
    //     firebase.auth().signOut().then(function() {
    //             console.log("Signed out successfully")
    //             navigation.navigate('protected')
    //         }).catch(function(error) {
    //             console.log("Error occured during firebase logout")
    //     });
    // }


//       <TouchableOpacity
//       style={styles.button}
//       onPress={onLogoutPress}>
//       <Text style={styles.buttonTitle}>Log Out</Text>
      
//       {/* {route.params.user.email} */}
// </TouchableOpacity>