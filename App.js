// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./navigation/MainNavigation";
import StackNavigation from "./navigation/StackNavigation";
import "react-native-gesture-handler";

const App = () => {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
};

export default App;
