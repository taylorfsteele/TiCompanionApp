import 'react-native-gesture-handler';
import React from 'react';
import { View, StyleSheet, Text, StatusBar, Button } from 'react-native';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import MainNavigation from './src/MainNavigation';

declare const global: { HermesInternal: null | {} };

const App = () => {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
