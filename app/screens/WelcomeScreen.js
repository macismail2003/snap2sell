import React from 'react';
import { 
    ImageBackground,
    StyleSheet,
    View,
    Text, 
    Image, 
    Platform, 
    flex,
    TouchableOpacity
 } from 'react-native';
import AppText from "../components/AppText";
import { Entypo } from '@expo/vector-icons';

function WelcomeScreen(props) {
    return (
        <ImageBackground
         style={styles.background}
         source={require("../assets/background1.jpg")}>

             <TouchableOpacity style={styles.Login}>
                 <Text style={styles.LoginTxt}>Log in</Text>
             </TouchableOpacity>

             <View style={styles.logoContainer}>
                <Image style={styles.logo } source={require("../assets/logo.png")}></Image>
                <Text>A platform to sell new or used things</Text>
             </View>

             <TouchableOpacity style={styles.signup}>
                 <AppText>Signup for an account</AppText>
             </TouchableOpacity>

             <TouchableOpacity style={styles.fb}>
                  <Entypo style={{padding: 10}} name="facebook" size={24} color="white" /><AppText> Continue with facebook</AppText>
             </TouchableOpacity>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    Login: {
        width: "22%",
        height:40,
        backgroundColor: "transparent",
        position: "absolute",
        alignContent: "center",
        justifyContent: "center",
        top: 60,
        right: 23,
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#b2beb5",
        borderRadius: 7
    },
    LoginTxt:{
        fontWeight: "700",
        fontSize: 20,
        fontFamily: Platform.OS === "ios" ? "Avenir" : "Roboto"
    },
    signup: {
        width: "85%",
        height:50,
        backgroundColor: "#28b278",
        position: "absolute",
        alignContent: "center",
        justifyContent: "center",
        bottom : 190,
        alignItems: "center",
        borderRadius: 7,
        shadowColor: "grey",
        shadowOffset: {width: 0, height:5},
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 20
    },
    fb: {
        width: "85%",
        height:50,
        backgroundColor: "#3b5998",
        position: "absolute",
        alignContent: "center",
        justifyContent: "center",
        bottom : 120,
        alignItems: "center",
        borderRadius: 7,
        shadowColor: "grey",
        shadowOffset: {width: 0, height:5},
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 20,
        flexDirection: "row",
    },
    logo: {
        width:130,
        height:130,
    },
    logoContainer: {
        position:'absolute',
        top: 190,
        alignItems: "center",
    },
})

export default WelcomeScreen;