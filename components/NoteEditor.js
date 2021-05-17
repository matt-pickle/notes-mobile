import React, {useState} from "react";
import {View, Text, TextInput} from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";

function NoteEditor(props) {
  const [body, setBody] = useState(props.displayedNote ? props.displayedNote.body : "");
  const [title, setTitle] = useState(props.displayedNote ? props.displayedNote.title : "New Note");

  return (
    <View>
      <TextInput
        value={title}
        onChangeText={title => setTitle(title)}
      />
      <TextInput
        value={body}
        onChangeText={body => setBody(body)}
      />
      <TouchableOpacity onPress={props.handleCloseEditor}>
        <Text>Close</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.handleSaveNote(title, body)}>
        <Text>Save</Text>
      </TouchableOpacity>
    </View>
  );
}

export default NoteEditor;