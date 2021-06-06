import React from 'react';
import {StatusBar, LogBox} from "react-native";
import AppLoading from "expo-app-loading";
import {useFonts, Ubuntu_700Bold, Ubuntu_400Regular} from "@expo-google-fonts/ubuntu";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import * as firebase from "firebase";
import apiKeys from "./config/keys";
import SignUpScreen from "./components/SignUpScreen";
import LoginScreen from "./components/LoginScreen";
import ResetScreen from "./components/ResetScreen";
import ChangeEmailScreen from "./components/ChangeEmailScreen";
import LoadingScreen from "./components/LoadingScreen";
import Dashboard from "./components/Dashboard";

const Stack = createStackNavigator();

export default function App() {
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

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <StatusBar></StatusBar>
        <Stack.Navigator>
          <Stack.Screen name={'LoadingScreen'} component={LoadingScreen} options={{ headerShown: false }}/>
          <Stack.Screen name='LoginScreen' component={LoginScreen} options={{ headerShown: false }}/>
          <Stack.Screen name='ResetScreen' component={ResetScreen} options={{ headerShown: false }}/>
          <Stack.Screen name='ChangeEmailScreen' component={ChangeEmailScreen} options={{ headerShown: false }}/>
          <Stack.Screen name='SignUpScreen' component={SignUpScreen} options={{ headerShown: false }}/>
          <Stack.Screen name={'Dashboard'} component={Dashboard} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
