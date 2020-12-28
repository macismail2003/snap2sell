import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

function AppText({ children }) {
    return <Text style={styles.text} >{children}</Text>
}



const styles = StyleSheet.create({
    text: {
        fontWeight: "500",
        color: "#fff",
        ...Platform.select({
            ios: {
                fontFamily: "Avenir",
                fontSize: 22
            },
            android: {
                fontFamily: "Roboto",
                fontSize: 24
            }
        })
    }
})

export default AppText;