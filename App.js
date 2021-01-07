import React from "react";
//import AccountScreen from "./app/screens/AccountScreen";
//import MessagesScreen from "./app/screens/MessagesScreen";
//import LoginScreen from "./app/screens/LoginScreen";
//import WelcomeScreen from "./app/screens/WelcomeScreen";
//import ListingEditScreen from "./app/screens/ListingEditScreen";
import { Text } from 'react-native';
import Screen from "./app/components/Screen";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'


const samu = () => (
  <Screen>
    <Text>samu</Text>
  </Screen>
);

const ismail = () => (
  <Screen>
    <Text>ismail</Text>
  </Screen>
);

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator initialRouteName="ismail">
    <Stack.Screen name = "samu" component={samu}/>
    <Stack.Screen name = "ismail" component={ismail}/>
  </Stack.Navigator>
)


export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}