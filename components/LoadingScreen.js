import React, {useEffect} from "react";
import {View, Image, ActivityIndicator, Alert} from "react-native";
import * as firebase from "firebase";
import styles from "../styles/login-styles";

function LoadingScreen(props) {
  useEffect(() => {
    const user = firebase.auth().currentUser;
    if (user && user.emailVerified) {
      const currentUserUID = firebase.auth().currentUser.uid;
      firebase.firestore().collection("users").doc(currentUserUID).get()
      .then(doc => {
        const userObj = doc.data();
        props.setUserObj(userObj);
      })
      .then(() => props.setScreen("Dashboard"));          
    } else if (user && !user.emailVerified) {
      user.sendEmailVerification();
      Alert.alert(
        "Unverified Email Address",
        "A new automated message with a verification link has been sent to your email. " +
        "Please use it to enable your Simple Notes account by verifying your email address."
      );
      props.setScreen("LoginScreen");
    } else {
      props.setScreen("LoginScreen");
    }
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