import { View, Text } from "react-native";
import React from "react";
import style from "./Style";
import propTypes from "prop-types";
import UserProfileImage from "../UserProfileImage/UserProfileImage";
const UserStory = (props) => {
  return (
    <View style={style.storyContainer}>
      <UserProfileImage profileImage={props.profileImage} imageDimension={65} />
      <Text style={style.name}>{props.firstName}</Text>
    </View>
  );
};

UserStory.prototype = {
  firstName: propTypes.string.isRequired,
  profileImage: propTypes.object.isRequired,
};

export default UserStory;

