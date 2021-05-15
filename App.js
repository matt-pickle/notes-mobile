import React from 'react';
import {StatusBar, LogBox} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import * as firebase from "firebase";
import apiKeys from "./config/keys";
import Welcome from "./components/Welcome";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Loading from "./components/Loading";
import Dashboard from "./components/Dashboard";
import styles from "./styles.js";

const Stack = createStackNavigator();

export default function App() {
  //Disable warning message
  LogBox.ignoreLogs(["Setting a timer"]);

  if (!firebase.apps.length) {
    console.log('Connected with Firebase')
    firebase.initializeApp(apiKeys.firebaseConfig);
  }

  return (
    <NavigationContainer>
      <StatusBar></StatusBar>
      <Stack.Navigator>
        <Stack.Screen name={'Loading'} component={Loading} options={{ headerShown: false }}/>
        <Stack.Screen name='Welcome' component={Welcome} options={{ headerShown: false }}/>
        <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: false }}/>
        <Stack.Screen name='SignIn' component={SignIn} options={{ headerShown: false }}/>
        <Stack.Screen name={'Dashboard'} component={Dashboard} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
