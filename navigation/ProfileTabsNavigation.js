import { View, Text } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faInfoCircle,
  faGrip,
  faVideo,
  faUserTag,
} from "@fortawesome/free-solid-svg-icons";
import ProfileTabPhoto from "../components/ProfileTabs/Photo/Photo";
import ProfileTabVideo from "../components/ProfileTabs/Video/Video";
import UserTab from "../components/ProfileTabs/UserTab/UserTab";

export const ProfileTabsNavigation = () => {
  const ProfileTabs = createMaterialTopTabNavigator();
  return (
    <ProfileTabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let icon;

          switch (route.name) {
            case "Tab1":
              icon = faGrip;
              break;
            case "Tab2":
              icon = faVideo;
              break;
            case "Tab3":
              icon = faUserTag;
              break;
            default:
              icon = faInfoCircle;
          }

          return <FontAwesomeIcon icon={icon} size={20} color={color} />;
        },
        tabBarLabel: () => null,
      })}
    >
      <ProfileTabs.Screen name="Tab1" component={ProfileTabPhoto} />
      <ProfileTabs.Screen name="Tab2" component={ProfileTabVideo} />
      <ProfileTabs.Screen name="Tab3" component={UserTab} />
    </ProfileTabs.Navigator>
  );
};
