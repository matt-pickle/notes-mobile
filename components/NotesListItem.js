import React from "react";
import {View, Text, TouchableOpacity} from "react-native";
import { Ionicons } from '@expo/vector-icons';

function NotesListItem(props) {
  const styles = props.styles;
  return (
    <View style={styles.listItemContainer}>
      <TouchableOpacity 
        style={styles.listItemTitleButton}
        onPress={() => props.handleOpenEditor(props.note.id)}
      >
        <Text style={styles.listItemText}>{props.note.title}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.listItemDeleteButton}
        onPress={() => props.handleOpenDeleteModal(props.note)}
      >
        <Ionicons
          name="trash-outline"
          style={styles.listItemIcon}
        />
      </TouchableOpacity>
    </View>
  );
}

export default NotesListItem;