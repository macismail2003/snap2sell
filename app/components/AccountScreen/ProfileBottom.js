import React from 'react';
import {View ,StyleSheet } from 'react-native';
import Icon from "../Icon";
import AppText from "../AppText";
import { TouchableOpacity } from 'react-native-gesture-handler';


function ProfileBottom({name, backgroundColor, Title, onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
        <View style = {styles.ProfileBottom}>
            <Icon name={name} backgroundColor={backgroundColor} />
            <AppText style={styles.AppText} >{Title}</AppText>
        </View>
        </TouchableOpacity>
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