import * as firebase from "firebase";
import "firebase/firestore";
import {Alert} from "react-native";

export function registration(name, email, password) {
  try {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      if (userCredential) {
        const user = userCredential.user;
        user.sendEmailVerification();
        firebase.firestore().collection("users").doc(user.uid).set({
          email: user.email,
          name: name,
          theme: "light",
          notes: []
        });
      }
    });
  } catch(err) {
    Alert.alert("Error!", err.message);
  }
}

export async function logIn(email, password) {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
  } catch(err) {
    Alert.alert("Error!", err.message);
  }
}

export async function logOut() {
  try {
    await firebase.auth().signOut();
  } catch(err) {
    Alert.alert("Error!", err.message);
  }
}
