import React, {useState} from "react";
import {View, Text, TextInput, Alert, Image} from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";
import { Ionicons } from '@expo/vector-icons';
import {changeEmail} from "../api/firebase-methods";
import styles from "../styles/login-styles";

function ChangeEmailScreen(props) {
  const [oldEmail, setOldEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newEmail, setNewEmail] = useState("");

  function handleSubmit() {
    if (!oldEmail) {
      Alert.alert("Old Email is required");
    } else if (!password) {
      Alert.alert("Password is required");
    } else if (!newEmail) {
      Alert.alert("New Email is required");
    } else {
      changeEmail(oldEmail, password, newEmail);
      props.setScreen("LoginScreen");
    }
  }

  return (
    <View style={styles.loginScreen}>
      <Image
        style={styles.logo}
        source={require("../assets/logo.png")}
      />
      <TextInput
        style={styles.inputBox}
        placeholderTextColor="rgb(120,120,130)"
        placeholder="Old Email"
        maxLength={50}
        value={oldEmail}
        onChangeText={text => setOldEmail(text)}
      />
      <TextInput
        style={styles.inputBox}
        placeholderTextColor="rgb(120,120,130)"
        placeholder="Password"
        maxLength={20}
        value={password}
        onChangeText={password => setPassword(password)}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.inputBox}
        placeholderTextColor="rgb(120,120,130)"
        placeholder="New Email"
        maxLength={50}
        value={newEmail}
        onChangeText={text => setNewEmail(text)}
      />
      <TouchableOpacity onPress={handleSubmit}>
        <Text style={styles.loginButton}>SUBMIT</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.setScreen("ResetScreen")}>
        <Text style={styles.smallLink}>Forgot password?</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => props.setScreen("Dashboard")}>
        <Ionicons
          name="arrow-back"
          style={styles.backArrow}
        />
        <Text style={styles.boldText}>GO BACK</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ChangeEmailScreen;