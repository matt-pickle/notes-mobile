import * as firebase from "firebase";
import "firebase/firestore";
import {Alert} from "react-native";

export async function registration(name, email, password) {
  const lowerCaseEmail = email.toLowerCase();
  try {
    await firebase.auth().createUserWithEmailAndPassword(lowerCaseEmail, password)
    .then(userCredential => {
      if (userCredential) {
        const user = userCredential.user;
        user.sendEmailVerification();
        firebase.firestore().collection("users").doc(user.uid).set({
          email: user.email,
          name: name,
          theme: "dark",
          notes: []
        });
        Alert.alert(
          "Success!",
          "An automated message with a verification link has been sent to your email. " +
          "Please use it to enable your Simple Notes account by verifying your email address."
        );
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

export async function resetPassword(email) {
  try {
    await firebase.auth().sendPasswordResetEmail(email);
    Alert.alert(
      "Password Reset",
      "An automated message with a password reset link has been sent to your email."
    );
  } catch(err) {
    Alert.alert("Error!", err.message);
  }
}
