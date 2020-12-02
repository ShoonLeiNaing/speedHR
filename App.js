import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignInPh from './components/SignInPh'
import Navigator from './drawer'
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      
      <Navigator></Navigator>
    </NavigationContainer>
    
    // <SignInPh></SignInPh>
    // <View>
    //   <Text>hi</Text>
    // </View>
  );
}