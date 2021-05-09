import React from "react";
import {ImageBackground, View, Text, StatusBar} from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";

function Welcome({navigation}) {
  return (
    <View>
      <StatusBar></StatusBar>
      <Text>Welcome Screen</Text>
      <TouchableOpacity
        onPress={() => navigation.nagivate("SignUp")}
      >
        <Text>Sign Up</Text>
      </TouchableOpacity>
      <Text>Already have an account?</Text>
      <TouchableOpacity
        onPress={() => navigation.nagivate("SignIn")}
      >
        <Text>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Welcome;