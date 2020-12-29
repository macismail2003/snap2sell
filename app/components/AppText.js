import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

function AppText({ children, color, style }) {
    return <Text style={[styles.text, {color: color}, style ]} >{children}</Text>
}



const styles = StyleSheet.create({
    text: {
        fontWeight: "500",
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