import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignInPh from './components/SignInPh'
import Navigator from './drawer'

export default function App() {
  return (
    <Navigator></Navigator>
    // <SignInPh></SignInPh>
    // <View>
    //   <Text>hi</Text>
    // </View>
  );
}