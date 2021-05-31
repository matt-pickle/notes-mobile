import React, {useState, useEffect} from "react";
import {View, Text, TextInput, BackHandler} from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";

function NoteEditor(props) {
  const [body, setBody] = useState(props.displayedNote ? props.displayedNote.body : "");
  const [title, setTitle] = useState(props.displayedNote ? props.displayedNote.title : "New Note");
  const styles = props.styles;

  //Make Android "Back" button save and close editor
  useEffect(() => {
    function backAction() {
      props.handleSaveAndClose(title, body);
      return true;
    }

    const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);

    return () => backHandler.remove();
  });

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
        onPress={() => props.handleSaveAndClose(title, body)}
      >
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.handleDeleteNote(props.displayedNote.id)}
      >
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}

export default NoteEditor;