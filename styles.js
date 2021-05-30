import {StyleSheet} from 'react-native';



function createStyleSheet(theme) {
  let mainColor = "rgb(10,20,40)";
  let buttonColor = "rgb(200,200,210)";
  let dashTextColor = "rgb(200,200,210)"
  let buttonTextColor = "rgb(10,20,40)"

  switch (theme) {
    case "dark":
      mainColor = "rgb(10,20,40)";
      buttonColor = "rgb(200,200,210)";
      dashTextColor = "rgb(200,200,210)"
      buttonTextColor = "rgb(10,20,40)"
      break;
    case "light":
      mainColor = "rgb(200,200,200)";
      buttonColor = "white";
      dashTextColor = "black"
      buttonTextColor = "black"
      break;
  }

  return StyleSheet.create({

    //BUTTONS
    
    button: {
      backgroundColor: buttonColor,
      width: 50,
      elevation: 10
    },

    buttonText: {
      color: buttonTextColor
    },

    //SETTINGS MODAL

    settingsModal: {
      alignSelf: "center",
      flexDirection: "column",
      backgroundColor: buttonColor,
      width: "80%",
      paddingTop: 10,
      paddingHorizontal: 15,
      paddingBottom: 15,
      marginTop: 50,
      elevation: 10
    },

    modalHeader: {
      color: buttonTextColor,
      fontSize: 24
    },

    modalText: {
      color: buttonTextColor,
      fontSize: 16
    },

    modalTopRowContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 15
    },

    themeSwitchContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 15
    },

    themePicker: {
      color: buttonTextColor,
      width: 100,
      height: 25
    },

    sortBySwitchContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 15
    },

    sortByPicker: {
      color: buttonTextColor,
      width: 230,
      height: 25
    },

    //DASHBOARD

    dashContainer: {
      flexDirection: "column",
      backgroundColor: mainColor,
      width: "100%",
      height: "100%",
      padding: 15
    },

    dashTopRowContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 15
    },
    
    dashText: {
      color: dashTextColor
    },
    
    //NOTES LIST
    
    listContainer: {
      width: "100%",
      alignSelf: "center"
    },

    createNoteButton: {
      alignSelf: "center",
      backgroundColor: buttonColor,
      width: 40,
      height: 40,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 100,
      marginBottom: 15
    },

    createNoteButtonText: {
      color: buttonTextColor,
      fontSize: 50,
      lineHeight: 60
    },

    //LIST ITEM

    listItem: {
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: buttonColor,
      height: 30,
      padding: 5,
      marginBottom: 5,
      marginHorizontal: 5,
      elevation: 5
    },

    listItemText: {
      color: buttonTextColor,
    },

    listItemDeleteButton: {
    },  

    //NOTES EDITOR

    editorContainer: {
      backgroundColor: mainColor
    },

    titleInputBox: {
      backgroundColor: buttonColor,
      color: buttonTextColor
    },

    bodyInputBox: {
      backgroundColor: buttonColor,
      color: buttonTextColor
    }
  });
}



export {createStyleSheet};