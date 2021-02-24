import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>I guess I live here now</Text>
      <StatusBar style="auto" />

      <div id="image"></div>

    </View>
  );
}
var img;
function setup() {
  createCanvas(800,600);
    img=loadImage('meme.jpg');
}
function draw() {
    Image(img,0,0);
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
