import React from "react";
import {View, Text} from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";


function Welcome({navigation}) {
  return (
    <View>
      <Text>Welcome Screen</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text>Sign Up</Text>
      </TouchableOpacity>
      <Text>Already have an account?</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("SignIn")}
      >
        <Text>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Welcome;