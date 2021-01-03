import React from "react";
import { Animated, Easing, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

AnimatedIcon = Animated.createAnimatedComponent(Icon);

export default function RootComponent() {
      const [isLoading, setisLoading] = true
      const [isAnimating, setisAnimating] = true
      const iconSize = Animated.Value(60)

    const startAnimation = () => {
        Animated.timing(iconSize, {
            toValue: 1500,
            duration: 1000,
            easing: Easing.back(0.8)
          }).start(() => setisAnimating(false));
    }

    const componentDidMount=()=> {
          let x = setTimeout(() => {
          let isLoading = !isLoading;
          let isAnimating = !isAnimating;
          setisAnimating(isAnimating);
          setisLoading(isLoading);
          startAnimation();
          clearTimeout(x);
        }, 2000);
      }


      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text>Darun APP :)</Text>
        </View>
      );

      if (this.state.isLoading || this.state.isAnimating) {
          return (
              <Animated.View
              style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#1b95e0"
                }}>
          <AnimatedIcon
            name={"logo-twitter"}
            style={{
                alignSelf: "center",
                fontSize: this.state.iconSize
            }}
            color={"#fff"}
            />
        </Animated.View>
          );
    }
}