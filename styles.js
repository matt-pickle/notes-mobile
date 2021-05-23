import {StyleSheet} from 'react-native';



function createStyleSheet(theme) {
  let mainColor = "rgb(10,20,40)";
  let accentColor = "white";
  let dashTextColor = "black"
  let textColor = "black"

  switch (theme) {
    case "dark":
      mainColor = "rgb(10,20,40)";
      accentColor = "white";
      dashTextColor = "white"
      textColor = "black"
      break;
    case "light":
      mainColor = "rgb(200,200,200)";
      accentColor = "white";
      dashTextColor = "black"
      textColor = "black"
      break;
  }

  return StyleSheet.create({

    //BUTTONS
    
    button: {
      backgroundColor: accentColor,
    },

    buttonText: {
      color: textColor
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
      backgroundColor: mainColor,
      color: dashTextColor
    },

    listButtonText: {
      color: dashTextColor
    },

    listItem: {
      backgroundColor: accentColor
    },

    listItemText: {
      color: textColor
    },

    //NOTES EDITOR

    editorContainer: {
      backgroundColor: mainColor
    },

    titleInputBox: {
      backgroundColor: accentColor,
      color: textColor
    },

    bodyInputBox: {
      backgroundColor: accentColor,
      color: textColor
    }
  });
}



export {createStyleSheet};