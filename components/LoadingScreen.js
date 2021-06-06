import React, {useEffect} from "react";
import {ActivityIndicator, View, Alert} from "react-native";
import * as firebase from "firebase";
import styles from "../styles/login-styles";

function Loading({navigation}) {
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user && user.emailVerified) {
        navigation.replace("Dashboard");
      } else if (user && !user.emailVerified) {
        user.sendEmailVerification();
        Alert.alert(
          "Unverified Email Address",
          "A new automated message with a verification link has been sent to your email. " +
          "Please use it to enable your Simple Notes account by verifying your email address."
        );
        navigation.replace("LoginScreen");
      } else {
        navigation.replace("LoginScreen");
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