import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import Title from "../../../components/Title/Title";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import style from "./style";
import UserStory from "../../../components/UserStory/UserStory";
import UserPost from "../../../components/UserPost/UserPost";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "react-native-gesture-handler";
import globalStyle from "../../../assets/styles/globalStyle";

const Home = ({ navigation }) => {
  const userStories = [
    {
      firstName: "joseph",
      id: 1,
      profileImage: require("../../../assets/images/one.jpg"),
    },
    {
      firstName: "Angel",
      id: 2,
      profileImage: require("../../../assets/images/two.jpg"),
    },
    {
      firstName: "White",
      id: 3,
      profileImage: require("../../../assets/images/one.jpg"),
    },
    {
      firstName: "Oliver",
      id: 4,
      profileImage: require("../../../assets/images/two.jpg"),
    },
    {
      firstName: "Nata",
      id: 5,
      profileImage: require("../../../assets/images/one.jpg"),
    },
    {
      firstName: "Nicolas",
      id: 6,
      profileImage: require("../../../assets/images/one.jpg"),
    },
    {
      firstName: "Nino",
      id: 7,
      profileImage: require("../../../assets/images/two.jpg"),
    },
    {
      firstName: "nana",
      id: 8,
      profileImage: require("../../../assets/images/one.jpg"),
    },
  ];

  const userPosts = [
    {
      firstName: "David",
      id: 1,
      location: "Yangon, MM",
      profileImage: require("../../../assets/images/one.jpg"),
      image: require("../../../assets/images/images.png"),
      caption: "Embracing the journey, one step at a time. 🌟",
      uploadedTime: "30 min ago",
      likes: 5000,
      comment: 400,
      bookmark: 78,
      share: 40,
    },
    {
      firstName: "Emma",
      id: 2,
      location: "Paris, FR",
      profileImage: require("../../../assets/images/two.jpg"),
      image: require("../../../assets/images/image2.jpeg"),
      caption: "Lost in the magic of Paris. ✨",
      uploadedTime: "2 hours ago",
      likes: 3200,
      comment: 150,
      bookmark: 120,
      share: 20,
    },
    {
      firstName: "Liam",
      id: 3,
      location: "New York, USA",
      profileImage: require("../../../assets/images/one.jpg"),
      image: require("../../../assets/images/image3.jpeg"),
      caption: "Exploring the city that never sleeps. 🗽",
      uploadedTime: "5 hours ago",
      likes: 4500,
      comment: 200,
      bookmark: 90,
      share: 30,
    },
    {
      firstName: "Sophia",
      id: 4,
      location: "Tokyo, JP",
      profileImage: require("../../../assets/images/one.jpg"),
      image: require("../../../assets/images/image4.jpeg"),
      caption: "A day in the land of the rising sun. 🌸",
      uploadedTime: "1 day ago",
      likes: 6000,
      comment: 250,
      bookmark: 150,
      share: 40,
    },
    {
      firstName: "Noah",
      id: 5,
      location: "Sydney, AU",
      profileImage: require("../../../assets/images/one.jpg"),
      image: require("../../../assets/images/image5.jpeg"),
      caption: "Sunshine and surf. ☀️🏄‍♂️",
      uploadedTime: "3 days ago",
      likes: 5500,
      comment: 300,
      bookmark: 130,
      share: 50,
    },
    {
      firstName: "Olivia",
      id: 6,
      location: "London, UK",
      profileImage: require("../../../assets/images/one.jpg"),
      image: require("../../../assets/images/image6.jpeg"),
      caption: "Afternoon tea and iconic views. ☕🇬🇧",
      uploadedTime: "4 days ago",
      likes: 4200,
      comment: 180,
      bookmark: 110,
      share: 25,
    },
  ];

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <View style={style.header}>
        <Title title={`Let's Explore`} />
        <View style={style.headerbtnContainer}>
          <TouchableOpacity style={style.messageIcon}>
            <FontAwesomeIcon size={20} icon={faEnvelope} color={"#898DA3"} />
            <View style={style.messageNumberContainer}>
              <Text style={style.messageNumber}>2</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.userIcon}
            onPress={() => navigation.navigate("Profile")}
          >
            <FontAwesomeIcon size={20} icon={faUser} color={"#898DA3"} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={style.userStoryContainer}>
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
      <View>
        <FlatList
          data={userPosts}
          renderItem={({ item }) => (
            <UserPost
              firstName={item.firstName}
              image={item.image}
              profileImage={item.profileImage}
              location={item.location}
              likes={item.likes}
              comment={item.comment}
              bookmarks={item.bookmark}
              caption={item.caption}
              uploadedTime={item.uploadedTime}
              share={item.share}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
