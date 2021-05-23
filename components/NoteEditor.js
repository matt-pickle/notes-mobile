import React, {useState} from "react";
import {View, Text, TextInput} from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";

function NoteEditor(props) {
  const [body, setBody] = useState(props.displayedNote ? props.displayedNote.body : "");
  const [title, setTitle] = useState(props.displayedNote ? props.displayedNote.title : "New Note");
  const styles = props.styles;

  function handlePressDelete() {
    props.handleDeleteNote(props.displayedNote.id);
    props.handleCloseEditor();
  }

  return (
    <View style={styles.editorContainer}>
      <Text style={styles.dashText}>Title: </Text>
      <TextInput
        style={styles.titleInputBox}
        value={title}
        onChangeText={title => setTitle(title)}
      />
      <TextInput
        style={styles.bodyInputBox}
        value={body}
        onChangeText={body => setBody(body)}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={props.handleCloseEditor}
      >
        <Text style={styles.buttonText}>Close</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.handleSaveNote(title, body)}
      >
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={handlePressDelete}
      >
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}

export default NoteEditor;