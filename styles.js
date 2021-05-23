import {StyleSheet} from 'react-native';



function createStyleSheet(theme) {
  let mainColor = "rgb(10,20,40)";
  let buttonColor = "white";
  let dashTextColor = "white"
  let buttonTextColor = "black"

  switch (theme) {
    case "dark":
      mainColor = "rgb(10,20,40)";
      buttonColor = "white";
      dashTextColor = "white"
      buttonTextColor = "black"
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
    },

    buttonText: {
      color: buttonTextColor
    },

    //DASHBOARD

    dashContainer: {
      backgroundColor: mainColor,
      width: "100%",
      height: "100%"
    },
    
    dashText: {
      color: dashTextColor
    },
    
    //NOTES LIST
    
    listContainer: {
      width: "90%",
      alignSelf: "center"
    },

    listButton: {
      backgroundColor: buttonColor,
      color: buttonTextColor
    },

    listItem: {
      backgroundColor: buttonColor
    },

    listItemText: {
      color: buttonTextColor
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