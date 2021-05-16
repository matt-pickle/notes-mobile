import React from "react";
import {ScrollView, Text, View} from "react-native";
import NotesListItem from "./NotesListItem";

function NotesList(props) {
  const notesListItems = props.notes.map(item => {
    const noteObj = JSON.parse(item);
    return (
      <NotesListItem
        key={noteObj.id}
        title={noteObj.title}
        lastUpdated={noteObj.lastUpdated}
      />
    );
  });  

  return (
    <ScrollView>
      <Text>Notes List</Text>
      {notesListItems}
    </ScrollView>
  );
}

export default NotesList;