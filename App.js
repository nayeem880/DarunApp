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

























initialLoginState = {
  isLoading: true,
  userEmail: null,
  userId: null, 

}

const loginReducer = (prevState, action) => {
  switch(action.type){
    case "RETRIEVE_UID":
      return {
        ...prevState,
        userId : action.uid,
        isLoading: false,
      };
    case "LOGIN":
      return {
        ...prevState,
        userEmail : action.email,
        userId : action.uid,
        isLoading: false,
      };
    case "LOGOUT":
      return {
        ...prevState,
        userEmail : null,
        userId : null,
        isLoading: false,
      };
    case "SIGNUP":
      return {
        ...prevState,
        userEmail : action.email,
        userId : action.uid,
        isLoading: false,
      };
  }
}


const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);



const authContext = useMemo(()=> ({
    login: (email, password) => {
      // setUserID('fjgda');
      // setIsLoading(false);
      let uid;
      firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(async(response) => {
        uid = response.user.uid
          // console.log(response)
          try{
            await AsyncStorage.setItem('uid', uid)
           }
           catch(e){
             console.log(e)
           }
      })
      .catch(error => {
          Alert.alert(error.message)
      })

      dispatch({type: "LOGIN", userEmail: email, userId: uid})
  
    },

    logOut: async() => {
      firebase.
      auth().
      signOut().
      then(function() {
        
                }) 
      .catch(function(error) {
              console.log("Error occured during logout")
            });

      try{
        await AsyncStorage.removeItem('uid');
        }
      catch(e){
        console.log(e)
      }
    
      
      dispatch({type: "LOGOUT"})
    },

    signUp: () => {
      // setUserID('fjgda');
      // setIsLoading(false);
    },
}
));
  
       useEffect(()=>{
        setTimeout(async()=> {
          let uid;
          try {
            uid = await AsyncStorage.getItem('uid');
          } catch(e) {
            console.log(e);
          }
          dispatch({type: "RETRIEVE_UID", userId: uid})
        }, 1000); 
 
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

                  }, []);

  if (loginState.isLoading) {
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
                           { loginState.userId !==null ? (
                       <>
                          <Stack.Screen name="Root" component={Root} />
                          <Stack.Screen name="Form" component={Form} />
                          <Stack.Screen name="Enlist" component={Enlist} />
                        </>
                        ):(
                          <Stack.Screen name="AppStackWithIntro" component={AppStackWithIntro} />
                          ) 
                    }
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
                    { loginState.userId !== null ? (
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



