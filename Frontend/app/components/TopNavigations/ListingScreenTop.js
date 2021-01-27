import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

function ListingScreenTop(props) {
    return (
        <View style={styles.container}>
            <Text>ListingScreenTop</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        height: "7%",
        justifyContent: "center",
    }
})

export default ListingScreenTop;