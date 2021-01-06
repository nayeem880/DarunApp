import React, { useEffect, useState } from 'react'
import { StyleSheet,Model, TouchableOpacity,FlatList, Modal, Image, View, Text} from 'react-native';
import { SafeAreaView  } from 'react-native-safe-area-context';
import {primaryColor, primaryColorBg, secondaryColor, secondaryColorBg} from '../assets/THEME/theme'
// import SvgComponent from "../assets/SVG/darun"

export default function HomeScreen({route, navigation}){

      const [entityText, setEntityText] = useState('')
      const [entities, setEntities] = useState([])
      const [modalVisible, setModalVisible] = useState(false);

      // const [userLoggedOut, setUserLoggedOut] = useState(false);



      const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          image : require('../assets/images/offer2.jpg')
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          image : require('../assets/images/offer3.jpg')

        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          image : require('../assets/images/offer4.jpg')
        },
      ];

      const Item = ({ image }) => (
        <View style={styles.flItemView}>
            <Image style={styles.flItemViewImg} source={image} />
        </View>
      );
      

      const renderItem = ({ item }) => (
        <Item image={item.image}/>
      );
                return (
                    <SafeAreaView style={styles.container}>

                        <View style={styles.topContainer}> 
                            <View style={styles.menuBar}>
                                <TouchableOpacity onPress={()=>(
                                    navigation.toggleDrawer()
                                )}>
                                    <Image source = {require('../assets/images/menu1.png')}
                                                style={styles.menuImg} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.iconBar}> 
                                      {/* <SvgComponent/> */}
                                      <Image source = {require('../assets/ICONS/darunnn.png')}
                                                style={styles.logoIcon} />
                           </View>
                            <View style={styles.profileMenuBar}> 
                            <TouchableOpacity onPress={()=>(
                                setModalVisible(true)
                            )}>
                                    <Image source = { require("../assets/ICONS/profile.png")}
                                    style={styles.profileMenuImg} />
                            </TouchableOpacity>
                            </View>
                        </View>

               
                    <View style={styles.bottomContainer}>
                        <View style={styles.nestedBottomContainer}>
                          <Text style={styles.featureHeading}>অফার ডিসকাউন্ট</Text>
                             <View style={styles.nestedBottomContainerTop}>
                                <FlatList  horizontal
  pagingEnabled={false}
  showsHorizontalScrollIndicator={false} style={styles.nestedBottomContainerTopFlatlist}
                                 data={DATA}
                                        renderItem={renderItem}
                                        keyExtractor={item => item.id}
                                    />
                                    {/* <View style={styles.container4}>
                                        <Text>nestedBottom </Text>
                                        
                                    </View>                                 */}
                                </View>
                            <View style={styles.nestedBottomContainerMiddle}>
                                <Text style={styles.featureHeading}>আরো ফিচার </Text>

                                        <View style={styles.middleFlatlist}>
                                        <TouchableOpacity style={styles.featureItem}>
                                                <Image source={require("../assets/ICONS/sarcasm.png")} style={styles.featureImg} />
                                                <Text  style={styles.featureText}>মিম্স</Text>        
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.featureItem}>
                                                <Image source={require("../assets/ICONS/surprise.png")} style={styles.featureImg} />
                                                <Text  style={styles.featureText}>অফার</Text>        
                                        </TouchableOpacity>
        
                                        <TouchableOpacity style={styles.featureItem}>
                                                <Image source={require("../assets/ICONS/meetup.png")} style={styles.featureImg} />
                                                <Text  style={styles.featureText}>মিটআপ</Text>        
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.featureItem}>
                                                <Image source={require("../assets/ICONS/celebration.png")} style={styles.featureImg} />
                                                <Text  style={styles.featureText}>উৎযাপন </Text>        
                                        </TouchableOpacity>
                                        </View>                                
                                    </View>



                                <View style={styles.nestedBottomContainerBottom}>
                                    <Text style={styles.featureHeading}>বিজ্ঞাপন দিন </Text>
                                <View style={styles.nBCBottomView}>

                                    <TouchableOpacity style={styles.container1} onPress={()=>(
                                        navigation.navigate('Form')
                                    )}>
                                        <Image source={require("../assets/ICONS/container1.png")} style={styles.headingImg} />
                                        <Text style={styles.headingText}>হাই ডেফিনেশন এড   </Text>
                                        <Text style={styles.subheadingText}>১০+ শপিংমল, প্রিমিয়াম লোকেশনে সাইনেজ ডিসপ্লে মুহূর্তেই, সহজেই, অল্প খরচে</Text>
                                        <Text style={styles.headingText}> </Text>
                                    
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.container1} onPress={()=>(
                                        navigation.navigate('Enlist')
                                    )}>
                                        <Image source={require("../assets/ICONS/container2.png")} style={styles.headingImg} />
                                        <Text  style={styles.headingText}>ভাড়া দিন - আয় করুন  </Text>        
                                        <Text  style={styles.subheadingText}>নিজের ডিজিটাল ডিসপ্লেতে এড দিতে দিয়ে ঘন্টা প্রতি টাকা আয় করুন </Text>        
                                        <Text style={styles.headingText}>     </Text>
                                    </TouchableOpacity>
                                </View>
                                </View>
                            </View>
                        </View>




                        <Modal
                                animationType="slide"
                                transparent={true}
                                visible={modalVisible}
                                onRequestClose={() => {
                                Alert.alert("Modal has been closed.");
                                }}>

                                <View style={styles.modalContainer}>

                                    <View style={styles.hideContainer}>
                                            <TouchableOpacity
                                                    style={styles.hideBtn}
                                                    onPress={() => {
                                                        setModalVisible(!modalVisible);
                                                    }}
                                                    >
                                                    <Image style={styles.hideImgStyle} source={require("../assets/ICONS/cross.png")}/>
                                                </TouchableOpacity>


                                    </View>
                                    <View style={styles.nestedModalContainer}>
                                    
                                         <View style={styles.mContainerTop}>
                                         <View style={styles.profileImgView}>
                                             <Image style={styles.profileImg} source={require("../assets/ICONS/profile.png")}/>
                                        </View>

                                        <View style={styles.profileInfoView}>
                                             <Text style={styles.profileName}>
                                                 John Doe
                                             </Text>
                                             <Text style={styles.profileBio}>
                                                 I'm a Meme Lover and shopping craze person. Love to embrase new trends and fashion styles
                                             </Text>

                                         </View>

                                         </View>
                       
                                         <View style={styles.mContainerMiddle}>
                                              <View style={styles.middleContainer1}>
                                                <Image source={require("../assets/ICONS/sarcasm.png")} style={styles.profileContainerImage} />
                                                <Text  style={styles.profileContainerText}> ফ্রেন্ড </Text>        


                                              </View>
                                              <View style={styles.middleContainer1}>
                                              <Image source={require("../assets/ICONS/offer.png")} style={styles.profileContainerImage} />

                                                <Text  style={styles.profileContainerText}>  ফান্ড  </Text>        


                                              </View>
                                              <View style={styles.middleContainer1}>
                                              <Image source={require("../assets/ICONS/surprise.png")} style={styles.profileContainerImage} />

                                                <Text  style={styles.profileContainerText}> গিফট </Text>        


                                              </View>
                                              <View style={styles.middleContainer1}>
                                              <Image source={require("../assets/ICONS/meetup.png")} style={styles.profileContainerImage} />

                                                <Text  style={styles.profileContainerText}> রেটিং  </Text>        


                                              </View>
                                         </View>
                                         <View style={styles.mContainerEnd}>

                                         </View>

                                                <View style={styles.nestedModalContainer}>
                                                        <View style={styles.nestedModalContainer}>
            

                                          </View>
                                        </View>
                                     </View>
                                </View>
                        </Modal>
                    </SafeAreaView>
                );
      }


      const styles = StyleSheet.create({

        modalContainer:{
            flex:1,
            backgroundColor:'white',
            justifyContent: 'center',
            alignItems: 'center', 
            padding: 10,
            flexDirection:'column',
            color: secondaryColorBg,

        },

        hideContainer:{
            height: 40,
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center', 
            paddingRight:5,
            color: secondaryColorBg,


        },

        hideBtn:{
            width: '100%',
            width: 40,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: secondaryColorBg,
            borderRadius:15,
            padding:5,
            color: secondaryColorBg,
            overlayColor: secondaryColor
        },
        
        hideImgStyle:{
            width: 20,
            height: 20,
            resizeMode:'contain',
            color: secondaryColorBg,
        },


        nestedModalContainer:{
            flex:1,
            borderRadius: 15,
            flexDirection:'column',
            backgroundColor:secondaryColorBg,
            width: '100%',
            padding: 10,
            margin: 10,
            justifyContent: 'flex-start',
            alignItems: 'center',
            overflow: 'hidden',
        },

        mContainerTop:{
            borderRadius: 15,
            width: '100%',
            margin: 10,

            justifyContent: 'flex-start',
            alignItems: 'center',
        },

        profileImgView:{
            width: 110,
            height: 110,
            borderRadius: 15,
            borderColor: primaryColor,
            borderWidth: 2,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            overflow: 'hidden',


        },
        profileImg:{
            width: 80,
            height: 80,

        },
        profileInfoView:{
            width: '100%',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            margin: 5,

        },

        profileName:{
            width: '100%',
            fontSize: 22,
            fontWeight: 'bold',
            color: primaryColor,
            textAlign: 'center',
        
        },

        profileBio:{
            width: '100%',
            padding: 5,
            textAlign: 'center',
            color: secondaryColor,

        },



        mContainerMiddle:{
            width: '100%',
            height: 70,
            marginBottom: 5,
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            borderRadius: 15,
        },

        middleContainer1:{
            backgroundColor:'white',
            width: "24%",
            height: 70,
            padding: 10,
            overflow: 'hidden',
            borderRadius: 15,
            


        },

       

        profileContainerImage:{
            resizeMode: 'contain',
            width:"100%",
            height:"50%",
            padding: 5,

        },

        profileContainerText:{
            fontSize: 14,
            color: primaryColor,
            padding:5,

        },

        mContainerEnd:{
            flex:1,
            width: '100%',
            height: '100%',
            marginTop:5,

            justifyContent: 'flex-start',
            alignItems: 'center',
            flexDirection: 'column',
            borderRadius: 15,
        },

        container: {
            flex:1,
            justifyContent: 'center',
            alignItems:"center",
            backgroundColor: "white",            
            flexDirection: 'column',
            margin:"1%",
            padding:"1%",
        },

        topContainer: { 
            flex:1,
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: 15,
            width: '100%',
            flexDirection: 'row',
            padding:5, 
            marginLeft:5, 
            marginRight:5, 

        },

         menuBar:{
            padding: 3,
            borderRadius: 15,
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 2,
            shadowRadius: 10,
            justifyContent:'center',
            alignItems: 'center',
            width: 40,
            height:40,
            backgroundColor: secondaryColorBg,
            resizeMode: 'center',
            marginRight:5,
        },


        menuImg:{
            width: 20,
            height:20,
            padding:10,
            resizeMode: 'contain',
        },

        iconBar:{
            flex:1,
            padding: 3,
            borderRadius: 15,
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 2,
            shadowRadius: 10,
            justifyContent:'center',
            alignItems: 'center',
            width: 40,
            height:40,
            backgroundColor: secondaryColorBg,
            resizeMode: 'center',
        },


        logoIcon:{
            width: 100,
            height:100,
            resizeMode: 'contain',
            fontFamily: "Roboto",
            color: '#010A43',
            fontWeight: 'bold',
        },

      

    profileMenuBar:{
        padding: 3,
            borderRadius: 15,
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 2,
            shadowRadius: 10,
            justifyContent:'center',
            alignItems: 'center',
            width: 40,
            height:40,
            backgroundColor: secondaryColorBg,
            resizeMode: 'center',
            marginLeft:5,

    },

        profileMenuImg:{
            width: 30,
            height:30,
            borderRadius: 15,
            color: '#010A43',
            resizeMode: 'contain',

        },    
        



        
        // bottom or main container
        bottomContainer: {
            flex:10,
            justifyContent: 'center',
            backgroundColor: "white",
            borderRadius: 15,
            width: '100%',
            flexDirection: 'column',
            padding:5,

            shadowColor: 'lightgray',
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 5,
            shadowRadius: 10,
        },
            

        nestedBottomContainer: {
            flex:10,
            justifyContent: 'space-between',
            backgroundColor: "white",
            borderRadius: 15,
            flexDirection: 'row',
            flexDirection: 'column',
            shadowColor: 'lightgray',
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 5,
            shadowRadius: 10,
        },


        
        nestedBottomContainerTop: {
            flex:2,
            borderRadius: 15,
            width: "100%",
            height: '100%',
            overflow: 'hidden',
            backgroundColor: secondaryColorBg,

        },


        
        flItemView:{
            borderRadius: 15,
            width: 200,
            height: '90%',
            margin:5,
            justifyContent:'center',
            alignItems: 'center'
           
        },

        flItemViewImg:{
            width: '100%',
            height: '100%',
            color: primaryColor,
            borderRadius: 15,
        },



        container1:{
            flex :1,
            height: 160,
            backgroundColor: "white",
            borderRadius: 15,
            flexDirection: 'column',
            padding:5,
            margin:5,
            backgroundColor: secondaryColorBg,
            shadowColor: '#F9F8F8',
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 5,
            shadowRadius: 10,
        },
        

        headingImg:{
            width: '100%',
            height: '50%',
            borderRadius: 10,
            resizeMode: 'contain',

        },

        headingText:{
            fontSize:14,
            color: '#010A43',
            paddingLeft : "2%",

        },

        subheadingText:{
            fontSize:11,
            color: primaryColorBg,
            paddingTop: "2%",
            paddingLeft : "2%",
        },

   
        nestedBottomContainerMiddle: {
            flex:2,
            flexDirection: 'column',
            width:'100%',
            height:'100%', 
            
         },

         featureHeading:{
            fontSize:14,
            color: '#010A43',
            paddingLeft : 10,
            marginTop:5,
            fontWeight: "500",
        },

        middleFlatlist:{
            backgroundColor: "white",
            borderRadius: 15,
            justifyContent:'space-between',
            flexDirection: 'row',  
            alignItems: 'center',

        },

       

        featureItem:{
            width: '24%',
            padding:"1%",
            justifyContent:'center',
            alignItems: 'center',
            borderRadius: 15,
            paddingTop: 15,
            flexDirection: 'column',
            backgroundColor: secondaryColorBg,
            
           
            
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
            color: primaryColor,
            padding:5,
            margin: 5,
            alignItems: 'center',
        },
        






        nestedBottomContainerBottom: {
            flex: 4,
            justifyContent: 'center',
            alignItems:'flex-start',
            borderRadius: 15,
            flexDirection: 'column', 
            marginTop:15,
 
        },
        nBCBottomView:{
            flexDirection: 'row', 

        },

        middle: {
            backgroundColor: "white",
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
            backgroundColor: "white",
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
           backgroundColor: "white",
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