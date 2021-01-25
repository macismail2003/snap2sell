import React from "react";
import { NavigationContainer } from "@react-navigation/native";
// import WelcomeScreen from "./app/screens/WelcomeScreen";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import OfflineNotice from "./app/components/OfflineNotice";

export default function App() {
  return (
    <>
    <OfflineNotice />
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
    </>
  );
}
