import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";
const style = StyleSheet.create({
  storyContainer: {
    marginRight: 18,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  name: {
    fontFamily: getFontFamily("Inter", "500"),
    fontSize: 14,
    color: "#022150",
    marginTop: 8,
    textAlign: "center",
  },
  userProfileImageContainer: {
    borderColor: "#F35BAC",
    borderWidth: 1,
    padding: 3,
    borderRadius: 60,
  },
});

export default style;
