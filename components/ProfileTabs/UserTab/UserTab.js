import { View, Text, ScrollView, Image, FlatList } from "react-native";
import React from "react";
import globalStyle from "../../../assets/styles/globalStyle";
import style from "./style";
const UserTab = () => {
  const userImages = [
    {
      id: 1,
      image: require("../../../assets/images/profileImg1.jpg"),
    },
    {
      id: 2,
      image: require("../../../assets/images/profileImg2.jpg"),
    },
    {
      id: 3,
      image: require("../../../assets/images/profileImg3.jpg"),
    },
    {
      id: 4,
      image: require("../../../assets/images/profileImg4.jpg"),
    },
    {
      id: 5,
      image: require("../../../assets/images/profileImg5.jpg"),
    },
    {
      id: 6,
      image: require("../../../assets/images/profileImg6.jpg"),
    },
  ];

  return (
    <ScrollView style={globalStyle.backgroundWhite}>
      <View>
        <FlatList
          data={userImages}
          renderItem={({ item }) => (
            <View style={{ flex: 1, margin: 1 }}>
              <Image
                key={item.id}
                source={item.image}
                style={style.image}
                resizeMode="cover"
              />
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
          numColumns={3}
        />
      </View>
    </ScrollView>
  );
};

export default UserTab;
