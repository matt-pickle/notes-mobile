import React, {useEffect} from "react";
import {View, Image, ActivityIndicator} from "react-native";
import * as firebase from "firebase";
import styles from "../styles/login-styles";

function LoadingScreen({navigation}) {
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user && user.emailVerified) {
        navigation.replace("Dashboard");
      } else {
        navigation.replace("LoginScreen");
      }
    });
  });

  return (
    <View style={styles.loginScreen}>
      <Image
        style={styles.logo}
        source={require("../assets/logo.png")}
      />
      <ActivityIndicator 
        style={styles.activityIndicator}
        size="large"
        color="rgb(200,200,210)"
      />
    </View>
  )
}

export default LoadingScreen;