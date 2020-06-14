import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  createDrawerNavigator,
  DrawerItemList,
  DrawerItem,
  DrawerContentScrollView,
} from '@react-navigation/drawer';

const DrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Profile"
        onPress={() => props.navigation.navigate('Profile')}
      />
      <DrawerItem
        label="Settings"
        onPress={() => props.navigation.navigate('Settings')}
      />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({});

export default DrawerContent;
