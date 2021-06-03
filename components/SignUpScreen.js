import React, {useState} from "react";
import {View, Text, TextInput, Alert} from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";
import {registration} from "../api/firebase-methods";

function SignUp({navigation}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit() {
    if (!name) {
      Alert.alert("Name is required");
    } else if (!email) {
      Alert.alert("Email is required");
    } else if (!password) {
      Alert.alert("Password is required");
    } else {
      await registration(name, email, password);
      setName("");
      setEmail("");
      setPassword("");
      navigation.navigate("LoadingScreen");
    }
  }

  return (
    <View>
      <Text>Sign Up Screen</Text>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={name => setName(name)}
      />
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
        <Text>Sign Up</Text>
      </TouchableOpacity>

      <Text>Already have an account?</Text>
      <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
        <Text>Log In</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SignUp;