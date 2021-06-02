import React, {useEffect, useState} from "react";
import {View, Text, TouchableOpacity, KeyboardAvoidingView} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import * as firebase from "firebase";
import {logOut, saveNotes} from "../api/firebase-methods";
import Settings from "./Settings";
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
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);
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

  function handleChangeTheme() {
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

  function handleSaveAndClose(title, body) {
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
    setIsEditorOpen(false);
    setDisplayedNote(null);
  }

  function handleDeleteNote(id) {
    let updatedNotesArr = notes.filter(item => {
      return item.id !== id;
    });
    setNotes(updatedNotesArr);
    saveNotes(userRef, updatedNotesArr);
    setIsEditorOpen(false);
    setDisplayedNote(null);
  }

  function handleLogOut() {
    logOut();
    navigation.replace("Welcome");
  }
  
  const notesList = <NotesList 
    notes={notes}
    sortBy={sortBy}
    styles={styles}
    handleOpenEditor={handleOpenEditor}
    handleDeleteNote={handleDeleteNote}
  />;

  const noteEditor = <NoteEditor
    displayedNote={displayedNote}
    styles={styles}
    handleSaveAndClose={handleSaveAndClose}
    handleDeleteNote={handleDeleteNote}
  />;

  return (
    <KeyboardAvoidingView style={styles.dashContainer} behavior="height">
      <View style={styles.dashTopRowContainer}>
        <Text style={styles.dashHeader}>{name}'s Notes</Text>
        <TouchableOpacity
          onPress={() => setIsSettingsVisible(true)}
        >
          <Ionicons
            name="settings-sharp"
            style={styles.dashHeader}
          />
        </TouchableOpacity>
      </View>
      <Settings
        styles={styles}
        isSettingsVisible={isSettingsVisible}
        setIsSettingsVisible={setIsSettingsVisible}
        theme={theme}
        handleChangeTheme={handleChangeTheme}
        sortBy={sortBy}
        handleChangeSortBy={handleChangeSortBy}
        handleLogOut={handleLogOut}
      />
      {
        notes && !isEditorOpen ?
        notesList : 
        notes && isEditorOpen ?
        noteEditor :
        null
      }
    </KeyboardAvoidingView>
  );

}

export default Dashboard;