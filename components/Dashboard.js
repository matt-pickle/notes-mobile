import React, {useEffect, useState} from "react";
import {View, Text, Alert} from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";
import * as firebase from "firebase";
import {logOut} from "../api/firebase-methods";

function Dashboard({navigation}) {
  let currentUserUID = firebase.auth().currentUser.uid;
  const [name, setName] = useState("");

  useEffect(() => {
    async function getUserInfo() {
      let doc = await firebase.firestore().collection("users").doc(currentUserUID).get();
      if (!doc.exists) {
        Alert.alert("No user data found.");
      } else {
        let dataObj = doc.data();
        setName(dataObj.name);
      }
    }
    getUserInfo();
  });

  function handlePress() {
    logOut();
    navigation.replace("Welcome");
  }
  
  return (
    <View>
      <Text>Dashboard</Text>
      <Text>Hi, {name}!</Text>
      <TouchableOpacity onPress={handlePress}>
        <Text>Log Out</Text>
      </TouchableOpacity>
    </View>
  );

}



export default Dashboard;