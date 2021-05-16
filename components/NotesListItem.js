import React from "react";
import {View, Text} from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";

function NotesListItem(props) {
  return (
    <TouchableOpacity onPress={() => props.handleOpenEditor(props.id)}>
      <Text>{props.title}</Text>
      <Text>Last Updated: {props.lastUpdated}</Text>
    </TouchableOpacity>
  );
}

export default NotesListItem;