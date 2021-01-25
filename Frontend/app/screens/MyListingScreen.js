import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from "../components/AppText";
import constants from "expo-constants"


function MyListing(props) {
    return (
        <View style={styles.container}>
            <Text>MyListing</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        top: constants.statusBarHeight,
        alignItems: 'center'
    }
})

export default MyListing;