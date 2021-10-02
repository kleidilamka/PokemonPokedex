/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeStackScreen from './src/routes/homeStack';
import {SafeAreaView, StatusBar} from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
      <HomeStackScreen />
    </NavigationContainer>
  );
};

export default App;
