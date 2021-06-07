import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Text hello</Text>
      <Text style={styles.text2}>Text hello</Text>
      <Text style={styles.text2}>Text hello</Text>
      <Text style={styles.text3}>Text hello</Text>
      <Text style={styles.text3}>Text hello</Text>
      <Text>Hello</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: "#ffffff",
    fontSize : 19
    
  },
  text2: {
    color: "#ffffff",
    fontSize : 19
    
  },
  text3: {
    color: "#ffffff",
    fontSize : 19
    
  }
});
