import {StyleSheet} from "react-native";

const mainColor = "rgb(10,20,40)";
const accentColor = "rgb(200,200,210)";
let lightFont = "Ubuntu_400Regular";
let boldFont = "Ubuntu_700Bold";

const styles = StyleSheet.create({

loadingScreen: {
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: mainColor,
  width: "100%",
  height: "100%"
},

//LOGIN SCREEN

loginScreen: {
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: mainColor,
  width: "100%",
  height: "100%"
},

logo: {
  resizeMode: "contain",
  width: 150,
  height: 75,
  marginTop: 15,
  marginBottom: 30
},

lightText: {
  color: accentColor,
  fontFamily: lightFont,
  fontSize: 18,
  marginBottom: 15
},

boldText: {
  color: accentColor,
  fontFamily: boldFont,
  fontSize: 20,
  marginBottom: 30
},

inputBox: {
  textAlign: "center",
  width: 300,
  fontSize: 18,
  color: accentColor,
  marginBottom: 20
}

});

export default styles;