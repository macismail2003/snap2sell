import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../screens/AccountScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import AuthNavigator from "./AuthNavigator";
const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator >
    <Stack.Screen name="Account" component={AccountScreen} options={{ headerShown: false }}/>
    <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }}/>
    <Stack.Screen name="Auth" component={AuthNavigator} options={{ headerShown: false }}/>
  </Stack.Navigator>
);

export default AccountNavigator;
