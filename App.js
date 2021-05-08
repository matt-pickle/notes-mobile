import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import * as firebase from "firebase";
import apiKeys from "./config/keys";
import WelcomeScreen from "./components/WelcomeScreen";
// import SignUp from "./components/SignUp";
// import SignIn from "./components/SignIn";
// import LoadingScreen from "./components/LoadingScreen";
// import Dashboard from "./components/Dashboard";
import styles from "./styles.js";

const Stack = createStackNavigator();

export default function App() {
  if (!firebase.apps.length) {
    console.log('Connected with Firebase')
    firebase.initializeApp(apiKeys.firebaseConfig);
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name={'Loading'} component={LoadingScreen} options={{ headerShown: false }}/> */}
        <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} options={{ headerShown: false }}/>
        {/* <Stack.Screen name='Sign Up' component={SignUp} options={{ headerShown: false }}/>
        <Stack.Screen name='Sign In' component={SignIn} options={{ headerShown: false }}/>
        <Stack.Screen name={'Dashboard'} component={Dashboard} options={{ headerShown: false }} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
