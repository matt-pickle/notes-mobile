import React, {useEffect, useState} from "react";
import {View, Text, Alert} from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";
import * as firebase from "firebase";
import {logOut} from "../api/firebase-methods";

function Dashboard({navigation}) {
  const currentUserUID = firebase.auth().currentUser.uid;
  const userRef = firebase.firestore().collection("users").doc(currentUserUID);
  const [name, setName] = useState("");
  const [theme, setTheme] = useState("light");
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function getUserInfo() {
      let doc = await userRef.get();
      if (!doc.exists) {
        navigation.navigate("Welcome");
      } else {
        let dataObj = doc.data();
        setName(dataObj.name);
        setTheme(dataObj.theme);
        setNotes(dataObj.notes);
      }
    }
    getUserInfo();
  }, []);

  function toggleTheme() {
    if (theme === "light") {
      userRef.update({
        theme: "dark"
      });
      setTheme("dark");
    } else {
      userRef.update({
        theme: "light"
      });
      setTheme("light");
    } 
  }

  function handleLogOut() {
    logOut();
    navigation.replace("Welcome");
  }
  
  return (
    <View>
      <Text>Dashboard</Text>
      <Text>Hi, {name}!</Text>
      <Text>{theme} theme</Text>
      <TouchableOpacity onPress={toggleTheme}>
        <Text>Change Theme</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLogOut}>
        <Text>Log Out</Text>
      </TouchableOpacity>
    </View>
  );

}



export default Dashboard;