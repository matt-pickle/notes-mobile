import React, {useEffect, useState} from "react";
import {View, Text, Modal, TouchableOpacity} from "react-native";
import {Picker} from "@react-native-picker/picker";
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
      <View style={styles.dashTopRowContainer}>
        <Text style={styles.dashText}>{name}'s Notes</Text>
        <TouchableOpacity
          onPress={() => setIsSettingsVisible(true)}
        >
          <Text style={styles.dashText}>Settings</Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        visible={isSettingsVisible}
        transparent={true}
        onRequestClose={() => setIsSettingsVisible(false)}
      >
        <View style={styles.settingsModal}>
          <View style={styles.modalTopRowContainer}>
          <Text style={styles.modalHeader}>Settings</Text>
            <TouchableOpacity
              onPress={() => setIsSettingsVisible(false)}
            >
              <Text style={styles.modalHeader}>X</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.themeSwitchContainer}>
            <Text style={styles.modalText}>Theme: </Text>
            <Picker
              style={styles.themePicker}
              mode="dropdown"
              selectedValue={theme}
              onValueChange={value => handleChangeTheme(value)}
            >
              <Picker.Item
                label="Light"
                value="light"
              />
              <Picker.Item
                label="Dark"
                value="dark"
              />
            </Picker>
          </View>
          <View style={styles.sortBySwitchContainer}>
            <Text style={styles.modalText}>Sort By: </Text>
            <Picker
              style={styles.sortByPicker}
              mode="dropdown"
              selectedValue={sortBy}
              onValueChange={value => handleChangeSortBy(value)}
            >
              <Picker.Item
                label="Last modified (descending)"
                value="modified-desc"
              />
              <Picker.Item
                label="Last modified (ascending)"
                value="modified-asc"
              />
              <Picker.Item
                label="Date created (descending)"
                value="created-desc"
              />
              <Picker.Item
                label="Date created (ascending)"
                value="created-asc"
              />
              <Picker.Item
                label="Alphabetical"
                value="alph"
              />
              <Picker.Item
                label="Reverse alphabetical"
                value="alph-reverse"
              />
            </Picker>
          </View>
          <TouchableOpacity
            onPress={handleLogOut}
          >
            <Text style={styles.modalText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </Modal>
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