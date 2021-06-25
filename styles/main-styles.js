import {StyleSheet, Dimensions, StatusBar} from 'react-native';

function createStyleSheet(theme) {
  let darkColor = "rgb(0,30,80)";
  let lightColor = "rgb(200,200,210)";
  let lightFont = "Ubuntu_400Regular";
  let boldFont = "Ubuntu_700Bold";
  const windowHeight = Dimensions.get("window").height - StatusBar.currentHeight;

  switch (theme) {
    case "red":
      darkColor = "rgb(80,0,0)";
      lightColor = "rgb(210,200,200)";
      break;
    case "orange":
      darkColor = "rgb(130,60,0)";
      lightColor = "rgb(210,205,200)";
      break;
    case "yellow":
      darkColor = "rgb(150,140,0)";
      lightColor = "rgb(205,205,200)";
      break;
    case "green":
      darkColor = "rgb(0,80,0)";
      lightColor = "rgb(200,210,200)";
      break;
    case "blue":
      darkColor = "rgb(0,30,80)";
      lightColor = "rgb(200,200,210)";
      break;
    case "purple":
      darkColor = "rgb(70,0,80)";
      lightColor = "rgb(207,200,210)";
      break;
    case "gray":
      darkColor = "rgb(80,80,80)";
      lightColor = "rgb(200,200,210)";
      break;
  }

  return StyleSheet.create({

    //DASHBOARD

    dashContainer: {
      flexDirection: "column",
      backgroundColor: darkColor,
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
      color: lightColor,
      fontFamily: boldFont,
      fontSize: 24
    },
    
    dashText: {
      color: lightColor,
      fontFamily: lightFont,
      fontSize: 18
    },

    //SETTINGS MODAL

    settingsModal: {
      alignSelf: "center",
      flexDirection: "column",
      backgroundColor: lightColor,
      width: "80%",
      paddingTop: 10,
      paddingHorizontal: 15,
      paddingBottom: 15,
      marginTop: 50,
      elevation: 10
    },

    modalHeader: {
      color: "black",
      fontSize: 24,
      fontFamily: boldFont
    },

    modalText: {
      color: "black",
      fontSize: 18,
      fontFamily: lightFont
    },

    modalTopRowContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 25
    },

    themeSwitchContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 25
    },

    themePicker: {
      color: "black",
      width: 115,
      height: 25
    },

    sortBySwitchContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 25
    },

    sortByPicker: {
      color: "black",
      width: 200,
      height: 25
    },

    changeNameContainer: {
      flexDirection: "column",
    },

    changeNameInput: {
      fontSize: 18,
      width: 100,
      marginVertical: 5
    },

    settingsButton: {
      color: "black",
      fontSize: 18,
      fontFamily: boldFont,
      marginBottom: 25
    },

    logOutButton: {
      color: "black",
      fontSize: 18,
      fontFamily: boldFont,
      marginBottom: 15
    },

    //DELETE MODAL

    deleteModal: {
      alignSelf: "center",
      flexDirection: "column",
      backgroundColor: lightColor,
      width: "80%",
      paddingTop: 10,
      paddingHorizontal: 15,
      paddingBottom: 15,
      marginTop: 50,
      elevation: 10
    },

    deleteModalText: {
      textAlign: "center",
      color: "black",
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
      backgroundColor: lightColor,
      width: 50,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 100
    },

    createNoteButtonText: {
      color: "black",
      fontSize: 50,
      lineHeight: 60
    },

    //LIST ITEM

    listItemContainer: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: lightColor,
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
      color: "black",
      fontFamily: lightFont,
      fontSize: 18
    },  

    listItemDeleteButton: {
      justifyContent: "center",
      height: "100%"
    },

    listItemIcon: {
      color: "black",
      fontFamily: lightFont,
      fontSize: 24
    },

    //NOTES EDITOR

    editorContainer: {
      flex: 1,
      backgroundColor: darkColor
    },

    titleInputBox: {
      backgroundColor: lightColor,
      color: "black",
      fontFamily: lightFont,
      fontSize: 20,
      paddingHorizontal: 10,
      marginTop: 5,
      marginBottom: 15
    },

    bodyInputBox: {
      flex: 1,
      backgroundColor: lightColor,
      color: "black",
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
      flexDirection: "row",
      alignItems: "center"
    },

    saveButton: {
      color: lightColor,
      fontFamily: boldFont,
      fontSize: 18
    }
  });
}



export {createStyleSheet};