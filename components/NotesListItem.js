import React from "react";
import {View, Text} from "react-native";

function NotesListItem(props) {
  return (
    <View>
      <Text>{props.title}</Text>
      <Text>Last Updated: {props.lastUpdated}</Text>
    </View>
  );
}

export default NotesListItem;