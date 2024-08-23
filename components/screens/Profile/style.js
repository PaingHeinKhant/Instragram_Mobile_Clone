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
  plusIcon: {
    padding: 14,
    borderRadius: 100,
    backgroundColor: "#F9FAFB",
  },
  barIcon: {
    padding: 14,
    borderRadius: 100,
    backgroundColor: "#F9FAFB",
    marginLeft: 10,
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
  userContainer: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  headerbtnContainer: {
    flexDirection: "row",
  },
  profileContainer: {
    paddingHorizontal: 10,
  },
  name: {
    marginVertical: 13,
    fontFamily: getFontFamily("Inter", "600"),
    fontSize: 16,
  },
  numberPostContainerContainer: {
    flexDirection: "row",
    marginVertical: 10,
  },
  numberPostContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 15,
  },
  numberPost: {
    fontFamily: getFontFamily("Inter", "600"),
    fontSize: 17,
  },
  textPost: {
    fontFamily: getFontFamily("Inter", "400"),
    fontSize: 12,
  },
  quotes: {
    fontFamily: getFontFamily("Inter", "400"),
    fontSize: 13,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },
  profileButtonContainer: {
    backgroundColor: "#f0f0f0",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 9,
    marginRight: 10,
  },
  profileButtonText: {
    color: "#000",
    fontSize: 16,
    fontFamily: getFontFamily("Inter", "600"),
    textAlign: "center",
  },
});

export default style;
