import React, {useEffect} from "react";
import {View, Image, ActivityIndicator} from "react-native";
import * as firebase from "firebase";
import {getUserObj} from "../api/firebase-methods.js";
import styles from "../styles/login-styles";

function LoadingScreen(props) {
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user && user.emailVerified) {
        props.setUserObj(getUserObj());
        props.setScreen("Dashboard");
      } else {
        props.setScreen("LoginScreen");
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