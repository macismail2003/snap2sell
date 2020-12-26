import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Alert,
  SafeAreaView,
  Button,
} from 'react-native';

export default function App() {
  console.log("hey");
  return (
    <SafeAreaView style={styles.container}>
      <Button title="Hello" onPress={() => console.log("hey")} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
