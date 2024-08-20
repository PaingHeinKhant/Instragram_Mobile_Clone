import { View, Text, Image } from "react-native";
import React from "react";
import propTypes from "prop-types";
import style from "./style";
const UserProfileImage = (props) => {
  return (
    <View
      style={[
        style.userProfileImageContainer,
        { borderRadius: props.imageDimension },
      ]}
    >
      <Image
        source={props.profileImage}
        style={{
          width: props.imageDimension,
          height: props.imageDimension,
          borderRadius: props.imageDimension,
        }}
      />
    </View>
  );
};

UserProfileImage.prototype = {
  profileImage: propTypes.object.isRequired,
  imageDimension: propTypes.number.isRequired,
};
export default UserProfileImage;
