import React, {useEffect, useState} from "react";
import {View, Text} from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";
import * as firebase from "firebase";
import {logOut, saveNotes} from "../api/firebase-methods";
import NotesList from "./NotesList";
import NoteEditor from "./NoteEditor";
import {createStyleSheet} from "../styles.js";

function Dashboard({navigation}) {
  const currentUserUID = firebase.auth().currentUser.uid;
  const userRef = firebase.firestore().collection("users").doc(currentUserUID);
  const [name, setName] = useState("");
  const [theme, setTheme] = useState("light");
  const [sortBy, setSortBy] = useState("modified-desc");
  const [notes, setNotes] = useState(null);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [displayedNote, setDisplayedNote] = useState(null);
  const styles = createStyleSheet(theme);

  useEffect(() => {
    async function getUserInfo() {
      let doc = await userRef.get();
      if (!doc.exists) {
        navigation.navigate("Welcome");
      } else {
        let dataObj = doc.data();
        setName(dataObj.name);
        setTheme(dataObj.theme);
        setSortBy(dataObj.sortBy);
        setNotes(dataObj.notes);
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

  function handleChangeSortBy(newSortBy) {
    setSortBy(newSortBy)
    userRef.update({
      sortBy: newSortBy
    });
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
    setDisplayedNote(null);
  }

  function handleSaveNote(title, body) {
    let updatedNotesArr = [];
    let id = null;
    const timestamp = Date.now();

    if (displayedNote) {
      updatedNotesArr = notes.filter(item => {
        return item.id !== displayedNote.id; 
      });
      id = displayedNote.id;
    } else {
      updatedNotesArr = notes;
      id = timestamp;
    }
    
    updatedNotesArr.push({
      id: id,
      title: title,
      body: body,
      lastUpdated: timestamp
    });
    setNotes(updatedNotesArr);
    saveNotes(userRef, updatedNotesArr);
  }

  function handleDeleteNote(id) {
    let updatedNotesArr = notes.filter(item => {
      return item.id !== id;
    });
    setNotes(updatedNotesArr);
    saveNotes(userRef, updatedNotesArr);
  }

  function handleLogOut() {
    logOut();
    navigation.replace("Welcome");
  }
  
  const notesList = <NotesList 
    notes={notes}
    sortBy={sortBy}
    styles={styles}
    handleChangeSortBy={handleChangeSortBy}
    handleOpenEditor={handleOpenEditor}
    handleDeleteNote={handleDeleteNote}
  />;

  const noteEditor = <NoteEditor
    displayedNote={displayedNote}
    styles={styles}
    handleCloseEditor={handleCloseEditor}
    handleSaveNote={handleSaveNote}
    handleDeleteNote={handleDeleteNote}
  />;

  return (
    <View style={styles.dashContainer}>
      <Text style={styles.dashText}>Dashboard</Text>
      <Text style={styles.dashText}>Hi, {name}!</Text>
      <Text style={styles.dashText}>{theme} theme</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={toggleTheme}
      >
        <Text style={styles.buttonText}>Change Theme</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={handleLogOut}
      >
        <Text style={styles.buttonText}>Log Out</Text>
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