import React from "react";
import {View, Text} from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";

function NoteEditor(props) {
  return (
    <View>
      <Text>{props.displayedNote.title}</Text>
      <Text>{props.displayedNote.body}</Text>
      <TouchableOpacity onPress={props.handleCloseEditor}>
        <Text>Close</Text>
      </TouchableOpacity>
    </View>
  );
}

export default NoteEditor;