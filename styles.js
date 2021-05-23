import {StyleSheet} from 'react-native';



function createStyleSheet(theme) {
  let backgroundColor = "rgb(10,20,40)";
  let dashTextColor = "white";
  let dashButtonColor = "white";
  let dashButtonTextColor = "rgb(10,20,40)";

  switch (theme) {
    case "dark":
      backgroundColor = "rgb(10,20,40)";
      dashTextColor = "white";
      dashButtonColor = "white";
      dashButtonTextColor = "rgb(10,20,40)";
      break;
    case "light":
      backgroundColor = "rgb(200,200,200)";
      dashTextColor = "black";
      dashButtonColor = "black";
      dashButtonTextColor = "rgb(200,200,200)";
      break;
  }

  return StyleSheet.create({

    //DASHBOARD
    dashBackground: {
      backgroundColor: backgroundColor,
      width: "100%",
      height: "100%"
    },
    
    dashText: {
      color: dashTextColor
    },
    
    dashButton: {
      backgroundColor: dashButtonColor,
    },

    dashButtonText: {
      color: dashButtonTextColor
    }
  });
}



export {createStyleSheet};