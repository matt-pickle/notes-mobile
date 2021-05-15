import React, {useEffect} from "react";
import {ActivityIndicator, View} from "react-native";
import * as firebase from "firebase";

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
    <View>
      <ActivityIndicator size="large" />
    </View>
  )
}

export default Loading;