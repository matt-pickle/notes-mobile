import React from "react";
import {View, Text} from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";

function NotesListItem(props) {
  const styles = props.styles;
  return (
    <View style={styles.listItem}>
      <TouchableOpacity onPress={() => props.handleOpenEditor(props.id)}>
        <Text style={styles.listItemText}>{props.title}</Text>
        <Text style={styles.listItemText}>Last Updated: {props.lastUpdated}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.handleDeleteNote(props.id)}>
        <Text style={styles.listItemText}>Delete</Text>
      </TouchableOpacity>
    </View>
    
  );
}

export default NotesListItem;