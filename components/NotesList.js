import React from "react";
import {ScrollView, Text} from "react-native";
import NotesListItem from "./NotesListItem";

function NotesList(props) {
  const notesListItems = props.notes.map(item => {
    return (
      <NotesListItem
        key={item.id}
        id={item.id}
        title={item.title}
        lastUpdated={item.lastUpdated}
        handleOpenEditor={props.handleOpenEditor}
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