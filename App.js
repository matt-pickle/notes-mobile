import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import * as firebase from "firebase";
import apiKeys from "./config/keys";
import Welcome from "./components/Welcome";
// import SignUp from "./components/SignUp";
// import SignIn from "./components/SignIn";
// import Loading from "./components/Loading";
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
        {/* <Stack.Screen name={'Loading'} component={Loading} options={{ headerShown: false }}/> */}
        <Stack.Screen name='Welcome' component={Welcome} options={{ headerShown: false }}/>
        {/* <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: false }}/>
        <Stack.Screen name='SignIn' component={SignIn} options={{ headerShown: false }}/>
        <Stack.Screen name={'Dashboard'} component={Dashboard} options={{ headerShown: false }} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
