import React from 'react';
import { ImageBackground, StyleSheet, View, Text, Image } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground
         style={styles.background}
         source={require("../assets/background.jpg")}>
             <View style={styles.signup}><Text>Signup</Text></View>
             <View style={styles.logoContainer}>
                <Image style={styles.logo } source={require("../assets/logo.png")}></Image>
                <Text>A platform to sell new or used things</Text>
             </View>
             <View style={styles.signin}><Text>signin</Text></View>
             <View style={styles.fb}><Text>facebook</Text></View>
         </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    signup: {
        width: "30%",
        height:50,
        backgroundColor: "transparent",
        position: "absolute",
        alignContent: "center",
        justifyContent: "center",
        top: 60,
        right: 20,
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#b2beb5",
        borderRadius: 7
    },
    signin: {
        width: "100%",
        height:70,
        backgroundColor: "#fff",
    },
    fb: {
        width: "100%",
        height:70,
        backgroundColor: "#fff",
    },
    logo: {
        width:130,
        height:130,
    },
    logoContainer: {
        position:'absolute',
        top: 190,
        alignItems: "center"
    },
})

export default WelcomeScreen;