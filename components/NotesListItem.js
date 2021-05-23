import React from "react";
import {View, Text} from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";

function NotesListItem(props) {
  const styles = props.styles;
  return (
    <TouchableOpacity 
      style={styles.listItem}
      onPress={() => props.handleOpenEditor(props.id)}
    >
      <Text style={styles.listItemText}>{props.title}</Text>
      <TouchableOpacity
        style={styles.listItemDeleteButton}
        onPress={() => props.handleDeleteNote(props.id)}
      >
        <Text style={styles.listItemText}>Delete</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

export default NotesListItem;