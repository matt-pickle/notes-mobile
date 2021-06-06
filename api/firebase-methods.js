import * as firebase from "firebase";
import "firebase/firestore";
import {Alert} from "react-native";

export function registration(name, email, password) {
  const lowerCaseEmail = email.toLowerCase();
  try {
    firebase.auth().createUserWithEmailAndPassword(lowerCaseEmail, password)
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
  const lowerCaseEmail = email.toLowerCase();
  try {
    await firebase.auth().signInWithEmailAndPassword(lowerCaseEmail, password);
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

export async function saveNotes(userRef, updatedNotesArr) {
  try {
    await userRef.update({notes: updatedNotesArr});
  } catch(err) {
    Alert.alert("Error!", err.message);
  }
}
