import React, {useEffect} from "react";
import {View, Image, ActivityIndicator, Alert} from "react-native";
import * as firebase from "firebase";
import styles from "../styles/login-styles";

function LoadingScreen(props) {
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        props.setCurrentUserUID(user.uid);
        firebase.firestore().collection("users").doc(user.uid).get()
        .then(doc => {
          const userObj = doc.data();
          props.setUserObj(userObj);
        })
        .then(() => props.setScreen("Dashboard"))
        .catch(err => {
          Alert.alert("Error!", err.message);
        });          
      } else {
        props.setUserObj(null);
        props.setScreen("LoginScreen");
      }
    });
    return () => unsubscribe();
  }, []);

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