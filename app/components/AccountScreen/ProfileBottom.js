import React from 'react';
import {View ,StyleSheet } from 'react-native';
import Icon from "../Icon";
import AppText from "../AppText";


function ProfileBottom({name, backgroundColor, Title}) {
    return (
        <View style = {styles.ProfileBottom}>
            <Icon name={name} backgroundColor={backgroundColor} />
            <AppText style={styles.AppText} >{Title}</AppText>
        </View>
    );
}

const styles = StyleSheet.create({
    ProfileBottom: {
        flexDirection: "row",
        padding: 15,
        alignItems: "center"
    },
    AppText: {
        paddingLeft: 10 
    }
})

export default ProfileBottom;