import React, {useEffect, useState} from "react";
import {View, Text, TouchableOpacity, KeyboardAvoidingView, Alert} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import * as firebase from "firebase";
import {logOut, saveNotes} from "../api/firebase-methods";
import {AdMobInterstitial} from "expo-ads-admob";
import SettingsModal from "./SettingsModal";
import DeleteModal from "./DeleteModal";
import NotesList from "./NotesList";
import NoteEditor from "./NoteEditor";
import {createStyleSheet} from "../styles/main-styles.js";

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
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [noteToDelete, setNoteToDelete] = useState({});
  const styles = createStyleSheet(theme);

  useEffect(() => {
    async function getUserInfo() {
      try {
        let doc = await userRef.get();
        if (!doc.exists) {
          navigation.navigate("LoginScreen");
        } else {
          let dataObj = doc.data();
          setName(dataObj.name);
          setTheme(dataObj.theme);
          setSortBy(dataObj.sortBy);
          setNotes(dataObj.notes);
        }
      } catch(err) {
        Alert.alert("Error!", err.message);
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

  function handleChangeEmail() {
    navigation.navigate("ChangeEmailScreen");
  }

  function handleChangePassword() {
    navigation.navigate("ChangePasswordScreen");
  }

  async function handleOpenEditor(id) {
    const noteToDisplay = notes.find(item => {
      return item.id === id;
    });
    setDisplayedNote(noteToDisplay);
    setIsEditorOpen(true);
    await AdMobInterstitial.setAdUnitID("ca-app-pub-3940256099942544/1033173712"); //Test ID
    await AdMobInterstitial.requestAdAsync({servePersonalizedAds: true});
  }

  async function handleSaveAndClose(title, body) {
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

    if (await AdMobInterstitial.getIsReadyAsync()) {
      await AdMobInterstitial.showAdAsync();
    }
    
    setIsEditorOpen(false);
    setDisplayedNote(null);
  }

  function handleOpenDeleteModal(note) {
    setNoteToDelete(note);
    setIsDeleteModalVisible(true);
  }

  function handleDeleteNote(id) {
    let updatedNotesArr = notes.filter(item => {
      return item.id !== id;
    });
    setNotes(updatedNotesArr);
    saveNotes(userRef, updatedNotesArr);
    setIsEditorOpen(false);
    setDisplayedNote(null);
    setIsDeleteModalVisible(false);
  }

  function handleLogOut() {
    logOut();
    navigation.replace("LoginScreen");
  }
  
  const notesList = <NotesList 
    notes={notes}
    sortBy={sortBy}
    styles={styles}
    handleOpenEditor={handleOpenEditor}
    handleOpenDeleteModal={handleOpenDeleteModal}
  />;

  const noteEditor = <NoteEditor
    displayedNote={displayedNote}
    styles={styles}
    handleSaveAndClose={handleSaveAndClose}
    handleOpenDeleteModal={handleOpenDeleteModal}
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
      <SettingsModal
        styles={styles}
        isSettingsVisible={isSettingsVisible}
        setIsSettingsVisible={setIsSettingsVisible}
        theme={theme}
        handleChangeTheme={handleChangeTheme}
        sortBy={sortBy}
        handleChangeSortBy={handleChangeSortBy}
        handleChangeEmail={handleChangeEmail}
        handleChangePassword={handleChangePassword}
        handleLogOut={handleLogOut}
      />
      <DeleteModal
        styles={styles}
        isDeleteModalVisible={isDeleteModalVisible}
        setIsDeleteModalVisible={setIsDeleteModalVisible}
        id={noteToDelete.id}
        title={noteToDelete.title}
        handleDeleteNote={handleDeleteNote}
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