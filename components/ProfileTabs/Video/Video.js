import React from "react";
import { View, FlatList, StyleSheet, Dimensions } from "react-native";
import { Video } from "expo-av";
import style from "./style";

const ProfileTabVideo = () => {
  const userVideos = [
    { id: 1, video: require("../../../assets/videos/video1.mp4") },
    { id: 2, video: require("../../../assets/videos/video2.mp4") },
    { id: 3, video: require("../../../assets/videos/video3.mp4") },
  ];

  return (
    <View style={style.container}>
      <FlatList
        data={userVideos}
        renderItem={({ item }) => (
          <View style={style.videoContainer}>
            <Video
              source={item.video}
              style={style.video}
              resizeMode="cover"
              shouldPlay={false}
              useNativeControls
            />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
      />
    </View>
  );
};

export default ProfileTabVideo;
