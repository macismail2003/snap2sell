import React from "react";
//import AccountScreen from "./app/screens/AccountScreen";
//import MessagesScreen from "./app/screens/MessagesScreen";
//import LoginScreen from "./app/screens/LoginScreen";
//import WelcomeScreen from "./app/screens/WelcomeScreen";
//import ListingEditScreen from "./app/screens/ListingEditScreen";
import { Button, Text } from 'react-native';
import Screen from "./app/components/Screen";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'

//import { MaterialCommunityIcons } from " @expo/vector-icons";

const samu = ({navigation}) => (
  <Screen>
    <Text>samu</Text>
    <Button
      title="Ismail"
      onPress={() => navigation.navigate("ismail")} />
  </Screen>
);

const ismail = () => (
  <Screen>
    <Text>ismail</Text>
  </Screen>
);

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator initialRouteName="samu">
    <Stack.Screen
     name = "samu"
     component={samu}
    //  options={{
    //    tabBarIcon: () => <MaterialCommunityIcons name="home"/>}}
       />
    <Stack.Screen name = "ismail" component={ismail}/>
  </Stack.Navigator>
)

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
  tabBarOptions={{
    activeBackgroundColor: "tomato",
    activeTintColor: "white",
    inactiveBackgroundColor: "white",
    inactiveTintColor: "black"    
  }}>
    <Tab.Screen name = "eli" component={ismail}/>
    <Tab.Screen name = "moosa" component={StackNavigator}/>
  </Tab.Navigator>
)

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}