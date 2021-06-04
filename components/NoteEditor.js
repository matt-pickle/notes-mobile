import React, {useState, useEffect} from "react";
import {View, Text, TextInput, BackHandler} from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";
import { Ionicons } from '@expo/vector-icons';

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
        maxLength={25}
        value={title}
        onChangeText={title => setTitle(title)}
      />
      <TextInput
        style={styles.bodyInputBox}
        multiline={true}
        textAlignVertical="top"
        value={body}
        onChangeText={body => setBody(body)}
      />
      <View style={styles.buttonRow}>
        <TouchableOpacity
          onPress={() => props.handleSaveAndClose(title, body)}
          style={styles.saveBtnContainer}
        >
          <Ionicons
            name="arrow-back"
            style={styles.dashHeader}
          />
          <Text style={styles.dashText}>Save & Close</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.handleOpenDeleteModal(props.displayedNote)}
        >
          <Ionicons
            name="trash-outline"
            style={styles.dashHeader}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default NoteEditor;