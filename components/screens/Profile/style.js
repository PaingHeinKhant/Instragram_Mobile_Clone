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
    fontFamily: getFontFamily("Inter", "900"),
    fontSize: 14,
  },
  textPost: {
    fontFamily: getFontFamily("Inter", "400"),
    fontSize: 12,
  },
  quats: {
    fontFamily: getFontFamily("Inter", "400"),
    fontSize: 13,
  },
  buttonContainer: {
    marginVertical: 20,
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  profileButtonContainer: {
    backgroundColor: "transparent", // Transparent background
    paddingVertical: 10, // Vertical padding
    paddingHorizontal: 20, // Horizontal padding
    borderRadius: 5, // Rounded corners
    marginBottom: 10, // Space between buttons
  },
  profileButtonText: {
    color: "#007BFF", // Text color
    fontSize: 16, // Font size
    textAlign: "center", // Center the text
  },
});

export default style;
