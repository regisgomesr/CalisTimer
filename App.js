import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
import EMOMScreen from './src/screens/EMOMScreen';

import { createStackNavigator, createAppContainer } from 'react-navigation'


const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  EMOM: EMOMScreen
}, { initialRouteName: 'Home' })

export default createAppContainer(AppNavigator)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontFamily: 'Ubuntu-Regular'
  }
});

