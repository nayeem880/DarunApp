// basic react component and react-native gesture modueles imported
import 'react-native-gesture-handler';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
// navigation modules imported
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect,useMemo, useReducer,  useState } from 'react'
// stack and firebase modules
import Navigator from './routes/homestack'
import { firebase } from './firebase/config'
import SplashScreen from './screens/splashScreen'
// encoding and decoding
import {decode, encode} from 'base-64'
if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }
// importing the screens
import {AppIntro, Login, Signup,HomeScreen, Qr, Dashboard, Confirm, Payment,Form,Enlist,  Order, Otp, } from './screens/index';
import {primaryColor, secondaryColor, secondaryColorBg} from './assets/THEME/theme.js'
import  {AuthContext} from './components/context'
import { StyleSheet,TouchableOpacity, TouchableHighlight, Image, View, Text} from 'react-native';
import customBottom from "./styles/customBottom"
import {DrawerContent} from "./screens/drawerContent"



// creating the stack navigator object
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();



export default function App({ navigation }) {
  // declaring all the usestates here
  const [isLoading, setIsLoading] = useState(true)
  const [userToken, setUserToken] = useState(null)
  const [user, setUser] = useState(null)
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);




// App stack views **************************************************************
// ***********************************************************************************

function Root(){
  return (
    <Tab.Navigator initialRouteName="HomeScreen"
      backBehavior="initialRoute"
      labeled={false}
      activeColor={primaryColor}
      inactiveColor={secondaryColor}
      screenOptions={{
      headerShown: false
    }}
    tabBarOptions= {{
      showLabel: false,
      showIcon: true,
      tintColor: '#333',
      activeTintColor: '#aaa',
      style:{
        borderRadius: 10,
        margin:5,
        color: 'white',
        backgroundColor: secondaryColorBg,
      }
    }}
    keyboardHidesTabBar ={true}
    tabStyle ={styles.navBar}
    >

            <Tab.Screen name="HomeScreen" component={HomeScreen}
                    options={{  tabBarIcon: ({ color }) => (
                    <Image source={require("./assets/ICONS/homePink.png")} style={styles.tabBarIconStyle}/>),}} />

            <Tab.Screen name="Qr" component={Qr} options={{ tabBarIcon: ({ color }) => (
                    <Image source={require("./assets/ICONS/scann.png")} style={styles.tabBarIconStyle}/>),}} />

            <Tab.Screen name="Dashboard" component={Dashboard} options={{ tabBarIcon: ({ color }) => (
                    <Image source={require("./assets/ICONS/stat.png")} style={styles.tabBarIconStyle}/>),}} />
        </Tab.Navigator>
  );

}

function AppStackWithIntro(){
return (
  <Stack.Navigator screenOptions={{
                   headerShown: false }}>
    <Stack.Screen name="AppIntro" component={AppIntro} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Signup" component={Signup} />
    <Stack.Screen name="Otp" component={Otp} />
  </Stack.Navigator>
);
}

function AppStackWithoutIntro(){
return (
  <Stack.Navigator screenOptions={{
  headerShown: false
}}>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Signup" component={Signup} />
    <Stack.Screen name="Otp" component={Otp} />
  </Stack.Navigator>
);
}

function AdvertiseStack(){
return (
  <Stack.Navigator screenOptions={{
  headerShown: false
 }}>
    <Stack.Screen name="Form" component={Form} />
    <Stack.Screen name="Order" component={Order} />
    <Stack.Screen name="Payment" component={Payment} />
  </Stack.Navigator>
);
}




// App stack views **************************************************************
// ***********************************************************************************
// Ends here app stack views




const authContext = useMemo(()=> ({
    login: () => {
      setUserToken('fjgda');
      setIsLoading(false);
    },
    logOut: () => {
      setUserToken(null);
      setIsLoading(false);
    },
    signUp: () => {
      setUserToken('fjgda');
      setIsLoading(false);
    },
}
));
  
  
       useEffect(()=>{
        setTimeout(()=> {
          setIsLoading(false);
        }, 2000); 

          
        // onboarding functionality with the asyncstorage 
            AsyncStorage.getItem('newval').then(value=>{
              if(value==null){
                AsyncStorage.setItem('newval', true)
                setIsFirstLaunch(true)
              }
              else{
                setIsFirstLaunch(false)
                console.log("value of isfirstlaunch after set it to false, ", isFirstLaunch)
              }
            });

            // getting files from firebase
            const usersRef = firebase.firestore().collection('users');
                  firebase.auth().onAuthStateChanged(user => {
                      if (user) {
                          usersRef
                            .doc(user.uid)
                            .get()
                            .then((document) => {
                                const userData = document.data()
                                setLoading(false)
                                setUser(userData)
                              })
                              .catch((error) => {
                                  setLoading(false)
                                });
                            } 
                            else {setLoading(false)}  
                                  });
                  }, []);

  if (isLoading) {
            return <SplashScreen />; 
          }

  if (isFirstLaunch==null){
    return null
  }
  else if (isFirstLaunch==true)
  {
    return (
      <AuthContext.Provider value={authContext}>
        <SafeAreaProvider>
              <NavigationContainer>
                  <Drawer.Navigator drawerContent={props => <DrawerContent {...props} /> }  screenOptions={{
                            headerShown: false}}>
                          <>
                          <Stack.Screen name="AppStackWithIntro" component={AppStackWithIntro} />
                          <Stack.Screen name="Root" component={Root} />
                          <Stack.Screen name="Form" component={Form} />
                          <Stack.Screen name="Enlist" component={Enlist} />
                          </>
                  </Drawer.Navigator>
              </NavigationContainer>
        </SafeAreaProvider>
      </AuthContext.Provider>
    )
  }
  else {
    return(
      <AuthContext.Provider value={authContext}>
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown: false}}>
                    { user ? (
                       <>
                          <Stack.Screen name="Root" component={Root} />
                          <Stack.Screen name="Form" component={Form} />
                          <Stack.Screen name="Enlist" component={Enlist} />
                        </>
                        ):(
                          <Stack.Screen name="AppStackWithoutIntro" component={AppStackWithoutIntro} />
                          ) 
                          
                    }
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
      </AuthContext.Provider>
    ) 
  }
}



const styles = StyleSheet.create({
  tabBarIconStyle: {
    width: 20,
    height: 20,
    resizeMode:'contain',
  },
  navBar:{
    height: 20,
    borderRadius: 15,
    margin: 10,
    backgroundColor: 'red',

  },
      })




{/* 
{/* 
//   return (
//     <SafeAreaProvider>
//             <NavigationContainer>
//             { user ? (
//                     <Drawer.Navigator initialRouteName="ClientHome"> *
//                           <Drawer.Screen name="PersonalHome" component={PersonalHome} />
//                           <Drawer.Screen name="ClientHome" component={ClientHome} />
//                     </Drawer.Navigator>

//                   ):(

//           //         <Stack.Navigator screenOptions={{
//           //           headerShown: false
//           //         }}>
//           //                         <Tab.Screen name="Demo" component={Demo} />

//           //             {/* <Tab.Screen name="HomeScreen" component={HomeScreen} /> */}
//           //           {/* <Tab.Screen name="AppStackWithIntro" component={AppStackWithIntro} /> */}
//           //     //     </Stack.Navigator>
//           //         )


                  
//             </NavigationContainer>
//     </SafeAreaProvider>

//   );
// }
// //       <NavigationContainer>
// //             <Drawer.Navigator initialRouteName="Client">
// //         <Drawer.Screen name="Home" component={HomeScreen} />
// //         <Drawer.Screen name="Notifications" component={NotificationsScreen} />
// //       </Drawer.Navigator>
// //     </NavigationContainer>
// //   );

// //   { user ? ( */}
//                     <Tab.Navigator screenOptions={{
//                           headerShown: false}}>
//                         <Tab.Screen name="Sandbox" component={Sandbox} />
//                         {/* <Tab.Screen name="HomeScreen" component={HomeScreen} />
//                         <Tab.Screen name="Order" component={Order} />
//                         <Tab.Screen name="Payment" component={Payment} />
//                         <Tab.Screen name="Confirm" component={Confirm} />
//                         <Tab.Screen name="Dashboard" component={Dashboard} /> */}
//               </Tab.Navigator> 

            
        
//         ):(

//         <Stack.Navigator screenOptions={{
//           headerShown: false
//         }}>
//                         <Tab.Screen name="Demo" component={Demo} />

//             {/* <Tab.Screen name="HomeScreen" component={HomeScreen} /> */}
//           {/* <Tab.Screen name="AppStackWithIntro" component={AppStackWithIntro} /> */}
//     //     </Stack.Navigator>
//         )
//       }
//     </NavigationContainer>

//   );
// }



// function AppStackWithOutIntro(){
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Login" component={Login} />
//     </Stack.Navigator>
//   );
// }

// export default function App() {
//   useEffect(() => {
//     const usersRef = firebase.firestore().collection('users');
//     firebase.auth().onAuthStateChanged(user => {
//       if (user) {
//         usersRef
//           .doc(user.uid)
//           .get()
//           .then((document) => {
//             const userData = document.data()
//             setLoading(false)
//             setUser(userData)
//           })
//           .catch((error) => {
//             setLoading(false)
//           });
//       } else {
//         setLoading(false)
//       }
//     });
//   }, []);
  

//   function loadingFunction(loading){
//     if (loading) {	
//       return (	
//         <>
//         <View>
//         <Text>Loading YEEEEE %%%%%%%%%%%%%%</Text>
//         </View>
//         </>	
//       )	
//   }
//   }

//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{
//     headerShown: false
//   }}>
//         { user ? (
//           <>
//           <Stack.Screen name="Home">
//             {props => <Home {...props} extraData={user} />}
//           </Stack.Screen>
//            </>
//         ) : (  <>

//           { showIntro ? (
//              <>
//              <Stack.Screen name="AppIntro" component={AppIntro} />
//              <Stack.Screen name="Login" component={Login} />
//              <Stack.Screen name="Signup" component={Signup} />           
//              </>

//           ) : (                          

//             <>    
//                   <Stack.Screen name="Login" component={Login} />
//                   <Stack.Screen name="Signup" component={Signup} />
//                   <Stack.Screen name="Otp" component={Otp} />
//             </>
//           ) 
//         }
        
//           </>
//         ) 
//       }
//       </Stack.Navigator>
//     </NavigationContainer>

//   );
// }