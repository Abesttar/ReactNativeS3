// src/screens/SplashScreen.tsx

import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../app"; 

type SplashScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Splash"
>;

const SplashScreen = () => {
  const navigation = useNavigation<SplashScreenNavigationProp>();

  return (
    <ImageBackground
      source={require("../assets/images/splash-bg.jpg")} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Your Next Adventure{"\n"}Starts Here</Text>
          <Text style={styles.subtitle}>
            Hidup terlalu singkat untuk diam di satu tempat. 
            Temukan kota, pantai, atau gunung favoritmu berikutnya,let’s get moving!
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.replace("MainTabs")}
          >
            <Text style={styles.buttonText}>Let's Go</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.25)", 
    justifyContent: "flex-end",
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingBottom: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "white",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "rgba(255,255,255,0.85)",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#00C896",
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    width: 160,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
