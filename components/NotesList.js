import React from "react";
import {View, ScrollView, Text} from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";
import {Picker} from "@react-native-picker/picker";
import NotesListItem from "./NotesListItem";

function NotesList(props) {
  const styles = props.styles;
  let sortedNotes = [];

  switch (props.sortBy) {
    case "modified-desc":
      sortedNotes = props.notes.sort((a, b) => {
        return a.lastUpdated < b.lastUpdated;
      });
      break;
    case "modified-asc":
      sortedNotes = props.notes.sort((a, b) => {
        return a.lastUpdated > b.lastUpdated;
      });
      break;
    case "created-desc":
      sortedNotes = props.notes.sort((a, b) => {
        return a.id < b.id;
      });
      break;
    case "created-asc":
      sortedNotes = props.notes.sort((a, b) => {
        return a.id > b.id;
      });
      break;
    case "alph":
      sortedNotes = props.notes.sort((a, b) => {
        return a.title[0] > b.title[0];
      });
      break;
    case "alph-reverse":
      sortedNotes = props.notes.sort((a, b) => {
        return a.title[0] < b.title[0];
      });
      break;
  }

  const notesListItems = sortedNotes.map(item => {
    return (
      <NotesListItem
        key={item.id}
        id={item.id}
        title={item.title}
        lastUpdated={item.lastUpdated}
        styles={styles}
        handleOpenEditor={props.handleOpenEditor}
        handleDeleteNote={props.handleDeleteNote}
      />
    );
  });  

  return (
    <View style={styles.listContainer}>
      <View style={styles.listButtonsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={props.handleOpenEditor}
        >
          <Text style={styles.buttonText}>Create New Note</Text>
        </TouchableOpacity>
        <Text style={styles.dashText}>Sort By: </Text>
        <Picker
          style={styles.picker}
          selectedValue={props.sortBy}
          onValueChange={value => props.handleChangeSortBy(value)}
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
      <ScrollView>
        {notesListItems}
      </ScrollView>
    </View>
    
  );
}

export default NotesList;