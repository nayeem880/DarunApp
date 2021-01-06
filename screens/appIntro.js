import { primaryColor, primaryColorBg, secondaryColor, secondaryColorBg } from '../assets/THEME/theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useEffect,useMemo, useReducer,  useState } from 'react'


// import all the components we are going to use
import {
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
      title: 'Showcase Your Brand Through Digital Signage Displays',
      text: 'Darun App helps you to feel darun',
      image: require('../assets/ICONS/signage.png'),
      backgroundColor: secondaryColorBg,

    },
    
  {
    key: 'two',
    title: "Darun App helps you to feel darun",
    text: 'Darun App helps you to feel darun',
    image: require('../assets/ICONS/shop.png'),
    backgroundColor: secondaryColorBg,

  },
 
  {
    key: 'three',
    title: "Pay Only For What You've Used for",
    text: 'Darun app helps your brand to reflect and thrive through digital displays',
    backgroundColor: secondaryColorBg,
    image: require('../assets/ICONS/pOffer.png'),
    },
    {
      key: 'four',
      title: 'Enlist Your Display For Rent',
      text: 'Provide rent of your display and earn hourly',
      backgroundColor: secondaryColorBg,
      image: require('../assets/ICONS/influencer.png'),
    },
    {
      key: 'Five',
      title: 'Enlist Your Display For Rent',
      text: 'Provide rent of your display and earn hourly',
      backgroundColor: secondaryColorBg,
      image: require('../assets/ICONS/walk.png'),
    },
];



export default function AppIntro({navigation}) {
  
  const onDone = () => {
    navigation.navigate("Login")

  };
  const onSkip = () => {
    navigation.navigate("Login")
  };

  const RenderItem = ({item}) => {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'center',
          paddingBottom: 5,
          flexDirection:"column",
        }}>
          <View style={styles.nestedcontainer}>
            <Image
              style={styles.introImageStyle}
              source={item.image} />
            <Text style={styles.introTitleStyle}>
              {item.title}
            </Text>
            <Text style={styles.introTextStyle}>
              {item.text}
            </Text>
          </View>
      </SafeAreaView>
     
    );
  };
  
  return(
<>
     
        <AppIntroSlider 
          activeDotStyle={{width:30, backgroundColor:'black'}}
          data={slides}
          renderItem={RenderItem}
          onDone={onDone}
          showSkipButton={false}
          onSkip={onSkip}/>
    </>
    );
  };


  
const styles = StyleSheet.create({
  nestedcontainer: {
    height:200,
    backgroundColor: secondaryColorBg,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paragraphStyle: {
    textAlign: 'center',
    fontSize: 16,
  },
  introImageStyle: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom:20,
  },
  introTextStyle: {
    fontSize: 12,
    color: secondaryColor,
    textAlign: 'center',
  },
  introTitleStyle: {
    fontSize: 14,
    color: primaryColor,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});