import React from "react";
import {Modal, Text, View, TouchableOpacity} from "react-native";
import {Picker} from "@react-native-picker/picker";
import {Ionicons} from "@expo/vector-icons";

function SettingsModal(props) {
  const styles = props.styles;

  return (
    <Modal
      animationType="slide"
      visible={props.isSettingsVisible}
      transparent={true}
      onRequestClose={() => props.setIsSettingsVisible(false)}
    >
      <View style={styles.settingsModal}>
        <View style={styles.modalTopRowContainer}>
        <Text style={styles.modalHeader}>Settings</Text>
          <TouchableOpacity
            onPress={() => props.setIsSettingsVisible(false)}
          >
            <Ionicons
              name="close-sharp"
              style={styles.modalHeader}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.themeSwitchContainer}>
          <Text style={styles.modalText}>Theme: </Text>
          <Picker
            style={styles.themePicker}
            mode="dropdown"
            selectedValue={props.theme}
            onValueChange={value => props.handleChangeTheme(value)}
          >
            <Picker.Item
              label="Light"
              value="light"
            />
            <Picker.Item
              label="Dark"
              value="dark"
            />
          </Picker>
        </View>
        <View style={styles.sortBySwitchContainer}>
          <Text style={styles.modalText}>Sort By: </Text>
          <Picker
            style={styles.sortByPicker}
            mode="dropdown"
            selectedValue={props.sortBy}
            onValueChange={value => props.handleChangeSortBy(value)}
          >
            <Picker.Item
              label="Last modified (descending)"
              value="modified-desc"
            />
            <Picker.Item
              label="Last modified (ascending)"
              value="modified-asc"
            />
            <Picker.Item
              label="Date created (descending)"
              value="created-desc"
            />
            <Picker.Item
              label="Date created (ascending)"
              value="created-asc"
            />
            <Picker.Item
              label="Alphabetical"
              value="alph"
            />
            <Picker.Item
              label="Reverse alphabetical"
              value="alph-reverse"
            />
          </Picker>
        </View>
        <TouchableOpacity
          onPress={props.handleLogOut}
        >
          <Text style={styles.modalText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

export default SettingsModal;
  
  