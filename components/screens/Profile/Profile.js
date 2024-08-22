import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import style from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faBars,
  faEnvelope,
  faPlus,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import globalStyle from "../../../assets/styles/globalStyle";
import Title from "../../Title/Title";
const Profile = ({ navigation }) => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <View style={style.profileContainer}>
        <View style={style.header}>
          <Title title={`paingheinkhant_`} />
          <View style={style.headerbtnContainer}>
            <TouchableOpacity style={style.plusIcon}>
              <FontAwesomeIcon
                size={23}
                icon={faPlusCircle}
                color={"#898DA3"}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={style.barIcon}
              onPress={() => navigation.navigate("Profile")}
            >
              <FontAwesomeIcon size={23} icon={faBars} color={"#898DA3"} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={style.userContainer}>
          <View>
            <Image
              source={require("../../../assets/images/one.jpg")}
              style={{
                width: 120,
                height: 120,
                borderRadius: 120,
              }}
            />
          </View>
          <View style={style.numberPostContainerContainer}>
            <View style={style.numberPostContainer}>
              <Text style={style.numberPost}>20</Text>
              <Text style={style.textPost}>posts</Text>
            </View>
            <View style={style.numberPostContainer}>
              <Text style={style.numberPost}>3K</Text>
              <Text style={style.textPost}>Follower</Text>
            </View>
            <View style={style.numberPostContainer}>
              <Text style={style.numberPost}>1K</Text>
              <Text style={style.textPost}>Following</Text>
            </View>
          </View>
        </View>
        <Text style={style.name}>Paing Hein Khant</Text>
        <Text style={style.quats}>
          If I am not building something,I would be thinking of building
          something .
        </Text>
        <View style={style.buttonContainer}>
          <TouchableOpacity style={style.profileButtonContainer}>
            <Text style={style.profileButtonText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.profileButtonContainer}>
            <Text style={style.profileButtonText}>Share Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
