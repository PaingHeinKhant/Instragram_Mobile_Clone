import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import Title from "./components/Title/Title";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import globalStyle from "./assets/styles/globalStyle";
import UserStory from "./components/UserStory/UserStory";

const App = () => {
  const userStories = [
    {
      firstName: "joseph",
      id: 1,
      profileImage: require("./assets/images/one.jpg"),
    },
    {
      firstName: "Angel",
      id: 2,
      profileImage: require("./assets/images/two.jpg"),
    },
    {
      firstName: "White",
      id: 3,
      profileImage: require("./assets/images/one.jpg"),
    },
    {
      firstName: "Oliver",
      id: 4,
      profileImage: require("./assets/images/two.jpg"),
    },
    {
      firstName: "Nata",
      id: 5,
      profileImage: require("./assets/images/one.jpg"),
    },
    {
      firstName: "Nicolas",
      id: 6,
      profileImage: require("./assets/images/one.jpg"),
    },
    {
      firstName: "Nino",
      id: 7,
      profileImage: require("./assets/images/two.jpg"),
    },
    {
      firstName: "nana",
      id: 8,
      profileImage: require("./assets/images/one.jpg"),
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={globalStyle.header}>
        <Title title={`Let's Explore`} />
        <TouchableOpacity style={globalStyle.messageIcon}>
          <FontAwesomeIcon size={20} icon={faEnvelope} color={"#898DA3"} />
          <View style={globalStyle.messageNumberContainer}>
            <Text style={globalStyle.messageNumber}>2</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={globalStyle.userStoryContainer}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={userStories}
          renderItem={({ item }) => (
            <UserStory
              firstName={item.firstName}
              profileImage={item.profileImage}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
