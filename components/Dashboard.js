import React, {useEffect, useState} from "react";
import {View, Text} from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";
import * as firebase from "firebase";
import {logOut} from "../api/firebase-methods";
import NotesList from "./NotesList";
import NoteEditor from "./NoteEditor";

function Dashboard({navigation}) {
  const currentUserUID = firebase.auth().currentUser.uid;
  const userRef = firebase.firestore().collection("users").doc(currentUserUID);
  const [name, setName] = useState("");
  const [theme, setTheme] = useState("light");
  const [notes, setNotes] = useState(null);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [displayedNote, setDisplayedNote] = useState(null);

  useEffect(() => {
    async function getUserInfo() {
      let doc = await userRef.get();
      if (!doc.exists) {
        navigation.navigate("Welcome");
      } else {
        let dataObj = doc.data();
        setName(dataObj.name);
        setTheme(dataObj.theme);
        const parsedNotes = dataObj.notes.map(item => {
          return JSON.parse(item);
        });
        const sortedNotes = parsedNotes.sort((a, b) => {
          return a.lastUpdated < b.lastUpdated;
        });
        setNotes(sortedNotes);
      }
    }
    getUserInfo();
  }, []);

  function toggleTheme() {
    if (theme === "light") {
      userRef.update({
        theme: "dark"
      });
      setTheme("dark");
    } else {
      userRef.update({
        theme: "light"
      });
      setTheme("light");
    } 
  }

  function handleOpenEditor(id) {
    const noteToDisplay = notes.find(item => {
      return item.id === id;
    });
    setDisplayedNote(noteToDisplay);
    setIsEditorOpen(true);
  }

  function handleCloseEditor() {
    setIsEditorOpen(false);
  }

  function handleLogOut() {
    logOut();
    navigation.replace("Welcome");
  }
  
  const notesList = <NotesList 
    notes={notes}
    handleOpenEditor={handleOpenEditor}
    />;

  const noteEditor = <NoteEditor
    displayedNote={displayedNote}
    handleCloseEditor={handleCloseEditor}
    />;

  return (
    <View>
      <Text>Dashboard</Text>
      <Text>Hi, {name}!</Text>
      <Text>{theme} theme</Text>
      <TouchableOpacity onPress={toggleTheme}>
        <Text>Change Theme</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLogOut}>
        <Text>Log Out</Text>
      </TouchableOpacity>
      {
        notes && !isEditorOpen ?
        notesList : 
        notes && isEditorOpen ?
        noteEditor :
        null
      }
      
    </View>
  );

}



export default Dashboard;