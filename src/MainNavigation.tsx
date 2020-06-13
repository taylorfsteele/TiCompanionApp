import React from 'react';
import { StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from './Screens/ProfileScreen';
import SettingsScreen from './Screens/SettingsScreen';
import FaqScreen from './Screens/FaqScreen';
import GameScreen from './Screens/GameScreen';
import DrawerContent from './Screens/DrawerContent';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function TabScreens() {
  return (
    <Tab.Navigator initialRouteName="Faq">
      <Tab.Screen name="Faq" component={FaqScreen} />
      <Tab.Screen name="Game" component={GameScreen} />
    </Tab.Navigator>
  );
}

function HomeScreen() {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="TabScreens" component={TabScreens} />
    </Drawer.Navigator>
  );
}

const MainNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      mode="modal"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default MainNavigation;
