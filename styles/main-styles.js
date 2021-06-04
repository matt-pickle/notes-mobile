import {StyleSheet, Dimensions, StatusBar} from 'react-native';

function createStyleSheet(theme) {
  let mainColor = "rgb(10,20,40)";
  let buttonColor = "rgb(200,200,210)";
  let dashTextColor = "rgb(200,200,210)";
  let buttonTextColor = "rgb(10,20,40)";
  let lightFont = "Ubuntu_400Regular";
  let boldFont = "Ubuntu_700Bold";
  const windowHeight = Dimensions.get("window").height - StatusBar.currentHeight;

  switch (theme) {
    case "dark":
      mainColor = "rgb(10,20,40)";
      buttonColor = "rgb(200,200,210)";
      dashTextColor = "rgb(200,200,210)";
      buttonTextColor = "rgb(10,20,40)";
      break;
    case "light":
      mainColor = "rgb(200,200,200)";
      buttonColor = "white";
      dashTextColor = "black";
      buttonTextColor = "black";
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
      color: buttonTextColor,
      fontFamily: lightFont
    },

    //DASHBOARD

    dashContainer: {
      flexDirection: "column",
      backgroundColor: mainColor,
      width: "100%",
      height: windowHeight,
      padding: 15
    },

    dashTopRowContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 15
    },

    dashHeader: {
      color: dashTextColor,
      fontFamily: boldFont,
      fontSize: 24
    },
    
    dashText: {
      color: dashTextColor,
      fontFamily: lightFont,
      fontSize: 18
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
      fontSize: 24,
      fontFamily: boldFont
    },

    modalText: {
      color: buttonTextColor,
      fontSize: 18,
      fontFamily: lightFont
    },

    modalTopRowContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 20
    },

    themeSwitchContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 20
    },

    themePicker: {
      color: buttonTextColor,
      width: 100,
      height: 25
    },

    sortBySwitchContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 20
    },

    sortByPicker: {
      color: buttonTextColor,
      width: 200,
      height: 25
    },

    //DELETE MODAL

    deleteModal: {
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

    deleteModalText: {
      textAlign: "center",
      color: buttonTextColor,
      fontSize: 18,
      fontFamily: lightFont,
      marginBottom: 15
    },

    modalButtonRow: {
      flexDirection: "row",
      justifyContent: "space-evenly"
    },
    
    //NOTES LIST
    
    listContainer: {
      flexGrow: 1,
      width: "100%",
      alignSelf: "center"
    },

    list: {
      flexGrow: 1,
      maxHeight: windowHeight - 135,
      marginBottom: 10
    },

    createNoteButton: {
      alignSelf: "center",
      backgroundColor: buttonColor,
      width: 50,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 100
    },

    createNoteButtonText: {
      color: buttonTextColor,
      fontSize: 50,
      lineHeight: 60
    },

    //LIST ITEM

    listItemContainer: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: buttonColor,
      height: 35,
      paddingHorizontal: 10,
      marginBottom: 10,
      marginHorizontal: 5,
      elevation: 5
    },

    listItemTitleButton: {
      flexGrow: 1,
      justifyContent: "center",
      height: "100%"
    },

    listItemText: {
      color: buttonTextColor,
      fontFamily: lightFont,
      fontSize: 18
    },  

    listItemDeleteButton: {
      justifyContent: "center",
      height: "100%"
    },

    listItemIcon: {
      color: buttonTextColor,
      fontFamily: lightFont,
      fontSize: 24
    },

    //NOTES EDITOR

    editorContainer: {
      flex: 1,
      backgroundColor: mainColor
    },

    titleInputBox: {
      backgroundColor: buttonColor,
      color: buttonTextColor,
      fontFamily: lightFont,
      fontSize: 20,
      paddingHorizontal: 10,
      marginTop: 5,
      marginBottom: 15
    },

    bodyInputBox: {
      flex: 1,
      backgroundColor: buttonColor,
      color: buttonTextColor,
      fontFamily: lightFont,
      fontSize: 18,
      padding: 10,
      marginBottom: 15
    },

    buttonRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingBottom: 20
    },

    saveBtnContainer: {
      flexDirection: "row"
    }
  });
}



export {createStyleSheet};