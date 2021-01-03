import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";

function AppButton({ title, onPress, style, fontcolor}) {
  return (
    <View style={styles.AppButton}>
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
    >
      <AppText style= {{color: fontcolor}}>{title}</AppText>
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    position: "absolute",
    width: "96%",
    marginVertical: 10,
    shadowColor: "grey",
    shadowOffset: {width: 0, height:5},
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 20
  },
  AppButton : {
    alignItems: "center",
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;
