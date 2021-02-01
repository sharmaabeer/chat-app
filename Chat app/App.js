import { StatusBar } from 'expo-status-bar';

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator,createAppContainer} from 'react-navigation';

import Home from './components/home';
import Chat from './components/chat';

const MainNavigator = createStackNavigator({
 Home:Home,
Chat:Chat
})

class Navigator extends React.Component {
  render(){
return (
  <MainNavigator/>
);
}
}

const AppContainer=createAppContainer(MainNavigator);
export default AppContainer;


