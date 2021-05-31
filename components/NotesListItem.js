import React from "react";
import {Text} from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";
import { Ionicons } from '@expo/vector-icons';

function NotesListItem(props) {
  const styles = props.styles;
  return (
    <TouchableOpacity 
      style={styles.listItem}
      onPress={() => props.handleOpenEditor(props.id)}
    >
      <Text style={styles.listItemText}>{props.title}</Text>
      <TouchableOpacity
        onPress={() => props.handleDeleteNote(props.id)}
      >
        <Ionicons
          name="trash-outline"
          style={styles.listItemIcon}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

export default NotesListItem;