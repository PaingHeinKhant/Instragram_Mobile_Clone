import { StyleSheet } from "react-native";
import { getFontFamily } from "../../../assets/fonts/helper";
const style = StyleSheet.create({
  header: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  messageIcon: {
    padding: 14,
    borderRadius: 100,
    backgroundColor: "#F9FAFB",
  },
  userIcon:{
    padding: 14,
    borderRadius: 100,
    backgroundColor: "#F9FAFB",
    marginLeft:10,
  },
  messageNumberContainer: {
    backgroundColor: "#F35BAC",
    justifyContent: "center",
    flexDirection: "row",
    width: 10,
    height: 10,
    borderRadius: 10,
    position: "absolute",
    right: 10,
    top: 12,
  },
  messageNumber: {
    color: "#ffff",
    fontSize: 6,
    fontFamily: getFontFamily("Inter", "600"),
  },
  userStoryContainer: {
    marginTop: 20,
    paddingBottom :20,
  },
  headerbtnContainer:{
    flexDirection:'row',
  }
});

export default style;
