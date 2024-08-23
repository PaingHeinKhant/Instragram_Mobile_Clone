import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../components/screens/Home/Home";
import Profile from "../components/screens/Profile/Profile";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faInfoCircle,
  faHome,
  faSearch,
  faSquarePlus,
  faCircleUser,
  faClapperboard,
} from "@fortawesome/free-solid-svg-icons";
import Search from "../components/screens/Search/Search";
import Reels from "../components/screens/Reels/Reels";
import AddPost from "../components/screens/AddPost/AddPost";

const MainNavigation = () => {
  const BottomTab = createBottomTabNavigator();

  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let icon;

          switch (route.name) {
            case "Home":
              icon = faHome;
              break;
            case "Search":
              icon = faSearch;
              break;
            case "Add":
              icon = faSquarePlus;
              break;
            case "Reels":
              icon = faClapperboard;
              break;
            case "profile":
              icon = faCircleUser;
              break;
            default:
              icon = faInfoCircle;
          }

          return <FontAwesomeIcon icon={icon} size={25} color={color} />;
        },
        header: () => null,
        headerShown: false,
        tabBarLabel: () => null,
      })}
    >
      <BottomTab.Screen name="Home" component={Home} />
      <BottomTab.Screen name="Search" component={Search} />
      <BottomTab.Screen name="Add" component={AddPost} />
      <BottomTab.Screen name="Reels" component={Reels} />
      <BottomTab.Screen name="profile" component={Profile} />
    </BottomTab.Navigator>
  );
};

export default MainNavigation;
