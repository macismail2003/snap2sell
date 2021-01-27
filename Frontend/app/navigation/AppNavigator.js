import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AccountNavigator from "./AccountNavigator";
import FeedNavigator from "./FeedNavigator";
import ListingEditScreen from "../screens/ListingEditScreen";
import NewListingButton from "./NewListingButton";
import MyListingScreen from "../screens/MyListingScreen";
import ActivityScreen from "../screens/ActivityScreen";
import routes from "./routes";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
      <Tab.Screen
        name="Explore"
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
            name="table-search"
            color={color} 
            size={size} />
          ),
        }}
      />    
      <Tab.Screen
       name="MyListing"
       component={MyListingScreen}
       options={{
         tabBarIcon: ({color, size}) => (
           <MaterialCommunityIcons
            name="home"
            color={color}
            size={size} />
         )
       }}
      />
      <Tab.Screen
        name="ListingEdit"
        component={ListingEditScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <NewListingButton
              onPress={() => navigation.navigate(routes.LISTING_EDIT)}
            />
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="plus-circle"
              color={color}
              size={size}
            />
          ),
        })}
      />

      <Tab.Screen
        name="Activity"
        component={ActivityScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
            name="bell"
            color={color} 
            size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
            name="account"
            color={color} 
            size={size} />
          ),
        }}
      />
  </Tab.Navigator>
);

export default AppNavigator;
