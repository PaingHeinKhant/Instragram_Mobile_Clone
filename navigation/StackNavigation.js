import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "./Route";
import { View, Text } from "react-native";
import Home from "../components/screens/Home/Home";
import Profile from "../components/screens/Profile/Profile";
const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{ header: () => null, headerShown: false }}
      initialRouteName={Routes.Profile}
    >
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen name={Routes.Profile} component={Profile} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
