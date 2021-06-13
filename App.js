import React, {useState} from 'react';
import {View, StatusBar, LogBox} from "react-native";
import AppLoading from "expo-app-loading";
import {useFonts, Ubuntu_700Bold, Ubuntu_400Regular} from "@expo-google-fonts/ubuntu";
import * as firebase from "firebase";
import apiKeys from "./config/keys";
import LoadingScreen from "./components/LoadingScreen";
import SignUpScreen from "./components/SignUpScreen";
import LoginScreen from "./components/LoginScreen";
import ResetScreen from "./components/ResetScreen";
import ChangeEmailScreen from "./components/ChangeEmailScreen";
import ChangePasswordScreen from "./components/ChangePasswordScreen";
import Dashboard from "./components/Dashboard";

export default function App() {
  const [userObj, setUserObj] = useState(null);
  const [screen, setScreen] = useState("LoadingScreen");

  //Disable warning message
  LogBox.ignoreLogs(["Setting a timer"]);

  if (!firebase.apps.length) {
    console.log('Connected with Firebase')
    firebase.initializeApp(apiKeys.firebaseConfig);
  }

  let [fontsLoaded] = useFonts({
    Ubuntu_400Regular,
    Ubuntu_700Bold
  });

  let displayedScreen = null;
  switch (screen) {
    case "LoadingScreen":
      displayedScreen = <LoadingScreen setScreen={setScreen} setUserObj={setUserObj} />
      break;
    case "Dashboard":
      displayedScreen = <Dashboard setScreen={setScreen} userObj={userObj} />
      break;
    case "LoginScreen":
      displayedScreen = <LoginScreen setScreen={setScreen} setUserObj={setUserObj} />
      break;
    case "SignUpScreen":
      displayedScreen = <SignUpScreen setScreen={setScreen} />
      break;
    case "ResetScreen":
      displayedScreen = <ResetScreen setScreen={setScreen} />
      break;
    case "ChangeEmailScreen":
      displayedScreen = <ChangeEmailScreen setScreen={setScreen} />
      break;
    case "ChangePasswordScreen":
      displayedScreen = <ChangePasswordScreen setScreen={setScreen} />
      break;
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View>
        <StatusBar></StatusBar>
        {displayedScreen}
      </View>
    );
  }
}
