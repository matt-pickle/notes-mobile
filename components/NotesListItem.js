import React from "react";
import {View, Text} from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";

function NotesListItem(props) {
  return (
    <View>
      <TouchableOpacity onPress={() => props.handleOpenEditor(props.id)}>
        <Text>{props.title}</Text>
        <Text>Last Updated: {props.lastUpdated}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.handleDeleteNote(props.id)}>
        <Text>Delete</Text>
      </TouchableOpacity>
    </View>
    
  );
}

export default NotesListItem;