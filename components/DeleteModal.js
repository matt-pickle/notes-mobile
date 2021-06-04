import React from "react";
import {Modal, Text, View, TouchableOpacity} from "react-native";
import {Picker} from "@react-native-picker/picker";
import {Ionicons} from "@expo/vector-icons";

function DeleteModal(props) {
  const styles = props.styles;

  return (
    <Modal
      animationType="slide"
      visible={props.isDeleteModalVisible}
      transparent={true}
      onRequestClose={() => props.setIsDeleteModalVisible(false)}
    >
      <View style={styles.deleteModal}>
        <Text style={styles.deleteModalText}>Do you want to delete {"\n"}"{props.title}"?</Text>
        <View style={styles.modalButtonRow}>
          <TouchableOpacity
            onPress={() => props.handleDeleteNote(props.id)}
          >
            <Text style={styles.modalHeader}>YES</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.setIsDeleteModalVisible(false)}
          >
            <Text style={styles.modalHeader}>NO</Text>
          </TouchableOpacity>
        </View>        
      </View>
    </Modal>
  );
}

export default DeleteModal;
  
  