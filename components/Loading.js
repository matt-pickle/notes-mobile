import React, {useEffect} from "react";
import {ActivityIndicator, View} from "react-native";
import * as firebase from "firebase";
import styles from "../styles/login-styles";

function Loading({navigation}) {
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user && user.emailVerified) {
        navigation.replace("Dashboard");
      } else {
        navigation.replace("Welcome");
      }
    });
  });

  return (
    <View style={styles.loadingScreen}>
      <ActivityIndicator size="large" />
    </View>
  )
}

export default Loading;