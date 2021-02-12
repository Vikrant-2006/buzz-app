import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Fb from './screens/fb';
import  Insta from './screens/insta' 

import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

export default class App extends React.Component() {
  render(){
  return (
    <AppContainer/>
  );
  }
}
const TabNavigator= createBottomTabNavigator({
  Transaction:{screen:Fb},
  Search:{screen:Insta}
})
const AppContainer=createAppContainer(TabNavigator)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
