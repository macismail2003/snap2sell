import React from "react";
import { Button, Text } from 'react-native';
import Screen from "./app/components/Screen";
import  AuthNavigator from './app/navigation/AuthNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'
// const samu = ({navigation}) => (
//   <Screen>
//     <Text>samu</Text>
//     <Button
//       title="Ismail"
//       onPress={() => navigation.navigate("ismail")} />
//   </Screen>
// );

// const ismail = () => (
//   <Screen>
//     <Text>ismail</Text>
//   </Screen>
// );

// const Stack = createStackNavigator();
// const StackNavigator = () => (
//   <Stack.Navigator initialRouteName="samu">
//     <Stack.Screen
//      name = "samu"
//      component={samu}
//        />
//     <Stack.Screen name = "ismail" component={ismail}/>
//   </Stack.Navigator>
// )

// const Tab = createBottomTabNavigator();
// const TabNavigator = () => (
//   <Tab.Navigator
//   tabBarOptions={{
//     activeBackgroundColor: "tomato",
//     activeTintColor: "white",
//     inactiveBackgroundColor: "white",
//     inactiveTintColor: "black"    
//   }}>
//     <Tab.Screen name = "eli" component={ismail}/>
//     <Tab.Screen name = "moosa" component={StackNavigator}/>
//   </Tab.Navigator>
// )

export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}