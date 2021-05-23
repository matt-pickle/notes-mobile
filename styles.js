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
      width: 50
    },

    buttonText: {
      color: buttonTextColor
    },

    //DASHBOARD

    dashContainer: {
      flexDirection: "column",
      backgroundColor: mainColor,
      width: "100%",
      height: "100%",
      padding: 15
    },

    topRowContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 15
    },
    
    dashText: {
      color: dashTextColor
    },

    themeSwitchContainer: {
      flexDirection: "row",
      backgroundColor: "red"
    },

    themePicker: {
      backgroundColor: buttonColor,
      color: buttonTextColor,
      width: 60,
      height: 25
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

    sortBySwitchContainer: {
      flexDirection: "row",
      marginBottom: 10
    },

    sortByPicker: {
      backgroundColor: buttonColor,
      color: buttonTextColor,
      width: 215,
      height: 25
    },

    //LIST ITEM

    listItem: {
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: buttonColor,
      height: 30,
      padding: 5,
      marginBottom: 5
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