import React from 'react';
import { Image, View, StyleSheet} from 'react-native';
import AppText from "../AppText";

import Constants from "expo-constants";
import colors from "../../config/colors";

function ProfileTop({source,userid}) {
    return (
        <View style={styles.profileTop}>
            <Image style={styles.image} source= {source}/>
            <AppText>{userid}</AppText>
        </View>
    );
}

const styles = StyleSheet.create({
    profileTop: {
        width: "97%",
        height: 200,
        alignItems: "center",
        paddingTop: Constants.statusBarHeight,
        borderRadius:10,
        marginBottom: 30,
    },
    image:{
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 5
    },
    AppText: {
        color : colors.light,
    }
})

export default ProfileTop;