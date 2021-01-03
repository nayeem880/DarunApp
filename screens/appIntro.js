import React, { useState } from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';


// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,

} from 'react-native';



const slides = [
  
  {
      key: 'one',
      title: 'Welcome to Darun App',
      text: 'Darun App helps you to feel darun',
      image: require('../assets/images/avatar.png'),
      backgroundColor: '#a5e4d0',

    },
 
 
  {
    key: 'two',
    title: 'Digital Marketing in Physical Signage Displays',
    text: 'Darun app helps your brand to reflect and thrive through digital displays',
    backgroundColor: '#FFC5C5',
    image: require('../assets/images/delivery.png'),
    },
    {
      key: 'three',
      title: 'Enlist Your Display For Rent',
      text: 'Provide rent of your display and earn hourly',
      backgroundColor: '#00FFB2',
      image: require('../assets/images/avatar2.png'),
    },
];



export default function AppIntro({navigation}) {
  const [showRealApp, setShowRealApp] = useState(false);

  
  const onDone = () => {
    navigation.navigate("Login")

  };
  const onSkip = () => {
    navigation.navigate("Login")
  };


  const RenderItem = ({item}) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 100,
        }}>
        <Text style={styles.introTitleStyle}>
          {item.title}
        </Text>
        <Image
          style={styles.introImageStyle}
          source={item.image} />
        <Text style={styles.introTextStyle}>
          {item.text}
        </Text>
      </View>
    );
  };
  

  return(
<>
     
    
        <AppIntroSlider 
          activeDotStyle={{width:40, backgroundColor:'black'}}
          data={slides}
          renderItem={RenderItem}
          onDone={onDone}
          showSkipButton={true}
          onSkip={onSkip}/>
    </>
    );
  };


  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  titleStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paragraphStyle: {
    padding: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  introImageStyle: {
    width: 200,
    height: 200,
  },
  introTextStyle: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    paddingVertical: 30,
  },
  introTitleStyle: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: 'bold',
  },
});






// const Skip=({...props})=>(
//   <Button title="Skip"
//   color="#black"
//   />
// )

// const Next=({...props})=>(
//   <Button title="Next"
//   color="#black"
//   {...props}
//   />
// )

// const Done=({...props})=>(
//   <TouchableOpacity style={{marginHorizontal:8}}
//   {...props}>
//       <Text style={{fontSize: 16}}>Done</Text>
//   </TouchableOpacity>
// )


// const Dots=({selected})=> {
//   let bgColor = selected? 'rgba(0,0,0,0.8)': 'rgba(0,0,0,0.3)';
//   return (
//     <View style={{
//       width:5,
//       height:5,
//       marginHorizontalL:3,
//       bgColor}} >

//     </View>
//   )
// }

