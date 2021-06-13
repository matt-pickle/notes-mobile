import React, {useState} from "react";
import {View, Text, TextInput, Alert, Image} from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";
import * as firebase from "firebase";
import {logIn, logOut, getUserObj} from "../api/firebase-methods";
import styles from "../styles/login-styles";

function LoginScreen(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  logOut();

  function handleSubmit() {
    if (!email) {
      Alert.alert("Email is required");
    } else if (!password) {
      Alert.alert("Password is required");
    } else {
      logIn(email, password);
      props.setUserObj(getUserObj());
      setEmail("");
      setPassword("");
      firebase.auth().onAuthStateChanged(user => {
        if (user && user.emailVerified) {
          props.setScreen("Dashboard");
        } else if (user && !user.emailVerified) {
          user.sendEmailVerification();
          Alert.alert(
            "Unverified Email Address",
            "A new automated message with a verification link has been sent to your email. " +
            "Please use it to enable your Simple Notes account by verifying your email address."
          );
        }
      });
    }
  }

  return (
    <View style={styles.loginScreen}>
      <Image
        style={styles.logo}
        source={require("../assets/logo.png")}
      />
      <Text style={styles.lightText}>Log in to your account:</Text>
      <TextInput
        style={styles.inputBox}
        placeholderTextColor="rgb(120,120,130)"
        placeholder="Email"
        maxLength={50}
        value={email}
        onChangeText={email => setEmail(email)}
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
      <TouchableOpacity onPress={handleSubmit}>
        <Text style={styles.loginButton}>LOG IN</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.setScreen("ResetScreen")}>
        <Text style={styles.smallLink}>Forgot password?</Text>
      </TouchableOpacity>
      <Text style={styles.lightText}>Don't have an account?</Text>
      <TouchableOpacity onPress={() => props.setScreen("SignUpScreen")}>
        <Text style={styles.boldText}>SIGN UP</Text>
      </TouchableOpacity>
    </View>
  );
}

export default LoginScreen;