import React, {useState} from "react";
import {View, Text, TextInput, Alert} from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";
import {logIn} from "../api/firebase-methods";

function SignIn({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit() {
    if (!email) {
      Alert.alert("Email is required");
    } else if (!password) {
      Alert.alert("Password is required");
    } else {
      logIn(email, password);
      setEmail("");
      setPassword("");
      navigation.navigate("Loading");
    }
  }

  return (
    <View>
      <Text>Sign in to your account:</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={email => setEmail(email)}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={password => setPassword(password)}
        secureTextEntry={true}
      />
      <TouchableOpacity onPress={handleSubmit}>
        <Text>Sign In</Text>
      </TouchableOpacity>

      <Text>Don't have an account?</Text>
      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <Text>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SignIn;