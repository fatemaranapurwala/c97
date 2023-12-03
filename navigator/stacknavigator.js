import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Bottom Tab Navigator from "./bottom tab navigator";
import PostScreen from "../screens 1/postscreen";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Tab"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Tab" component={TabNavigator} />
      <Stack.Screen name="postscreen" component={postscreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;