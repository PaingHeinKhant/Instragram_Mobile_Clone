import { View, Text ,Image } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import style from "./Style";
import propTypes from "prop-types";
import UserProfileImage from "../UserProfileImage/UserProfileImage";
import { faBook, faEllipsis, faRetweet } from "@fortawesome/free-solid-svg-icons";
import { faHeart,faComment, faPaperPlane, faBookmark} from "@fortawesome/free-regular-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons/faShare";
import { faBookBookmark } from "@fortawesome/free-solid-svg-icons/faBookBookmark";

const UserPost = (props) => {
  return (
    <View style={style.userPostContainer}>
        <View style={style.user}>
            <View style={style.userContainer}>
                <UserProfileImage profileImage={props.profileImage} imageDimension={40} />
                <View style={style.userTextContainer}>
                    <Text style={style.username}>{props.firstName}</Text>
                    <Text style={style.location}>{props.location}</Text>
                </View>
            </View>
            <FontAwesomeIcon size={24} icon={faEllipsis} color={"#898DA3"} />
        </View>
        <View>
        <Image
          source={props.image}
          style={style.image}
          resizeMode="cover" 
        />
        </View>
        <View style={style.footerContainer}>
            <View style={style.reactionContainer}>
                <View style={style.reactionIconContainer}>
                    <View style={style.reactionChildContainer}>
                        <FontAwesomeIcon size={20} icon={faHeart} />
                        <Text style={style.reactionText}>{props.likes}</Text>
                    </View>
                    <View style={style.reactionChildContainer}>
                        <FontAwesomeIcon size={20} icon={faComment} />
                        <Text style={style.reactionText}>{props.comment}</Text>
                    </View>
                    <View style={style.reactionChildContainer}>
                        <FontAwesomeIcon size={20} icon={faPaperPlane} />
                        <Text style={style.reactionText}>{props.share}</Text>
                    </View>
                </View>
                <FontAwesomeIcon size={20} icon={faBookmark} />
            </View>
            <Text style={style.caption}>{props.caption}</Text>
            <Text style={style.viewComment}>View all comments .. </Text>
            <Text style={style.uploadedTime}>{props.uploadedTime}</Text>
        </View>
    </View>
  );
};

UserPost.prototype = {
  firstName: propTypes.string.isRequired,
  location: propTypes.string,
  image:propTypes.object.isRequired,
  profileImage:propTypes.object.isRequired,
  likes:propTypes.number.isRequired,
  comment:propTypes.number.isRequired,
  bookmarks:propTypes.number.isRequired,
  caption:propTypes.string,
  uploadedTime:propTypes.string.isRequired,
  share:propTypes.number.isRequired

};

export default UserPost;
