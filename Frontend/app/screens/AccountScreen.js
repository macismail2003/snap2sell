import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import ListItemSeparatorComponent from "../components/lists/ListItemSeparator";
import colors from "../config/colors";
import ProfileTop from "../components/AccountScreen/ProfileTop";
import ProfileBottom from "../components/AccountScreen/ProfileBottom";


const menuItems = [
  {
    title: "My Network",
    backgroundColor: "violet",
    name: "transit-connection",
    // TargetScreen: "NetworkScreen"
  },
  {
    title: "My Payment Method",
    backgroundColor: "lightgreen",
    name: "credit-card-outline",
    // TargetScreen: "PaymentScreen"    
  },
  {
    title: "Address and collection point",
    backgroundColor: "red",
    name: "map-marker",
    // TargetScreen: "Address"
  },
  {
    title: "Settings",
    backgroundColor: "dodgerblue",
    name: "cog",
    // TargetScreen: "Settings"
  },
  {
    title: "LogOut",
    backgroundColor: "orange",
    name: "logout",
    // targetScreen: routes.AUTH,
  },
];

function AccountScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.ProfileTop}>
        
        <ProfileTop userid="@ibrahim"  source={require("../assets/mis.jpg")}/>

      </View>

      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparatorComponent}
          renderItem={({ item }) => (
            <ProfileBottom
             onPress={() => navigation.navigate(item.targetScreen)}
             Title={item.title}
             name={item.name}
             backgroundColor= {item.backgroundColor}             
             />
          )}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.white,
  },
  container: {
    marginVertical: 20,
    paddingTop: 30
  },
  ProfileTop: {
    alignItems: "center",
  }
});

export default AccountScreen;