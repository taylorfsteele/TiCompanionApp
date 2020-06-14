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

const RootStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function DrawerScreens() {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="TabScreens" component={TabScreens} />
    </Drawer.Navigator>
  );
}

function TabScreens() {
  return (
    <Tab.Navigator initialRouteName="Faq">
      <Tab.Screen name="Faq" component={FaqScreen} />
      <Tab.Screen name="Game" component={GameScreen} />
    </Tab.Navigator>
  );
}

const MainNavigation = () => {
  return (
    <RootStack.Navigator
      initialRouteName="Tabs"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <RootStack.Screen
        name="Drawer"
        component={DrawerScreens}
        options={{ headerShown: false }}
      />
      <RootStack.Screen name="Profile" component={ProfileScreen} />
      <RootStack.Screen name="Settings" component={SettingsScreen} />
    </RootStack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default MainNavigation;

//screenOptions={{cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}}
