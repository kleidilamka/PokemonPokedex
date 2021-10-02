import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: () => {
            return (
              <View style={styles.container}>
                <Text style={styles.text}>Pokedex</Text>
                <MCIcon
                  name="pokeball"
                  size={25}
                  color={'#fff'}
                  style={{marginRight: 15}}
                />
              </View>
            );
          },
          headerStyle: {
            backgroundColor: '#DD5E56',
          },
          headerTintColor: 'white',
        }}
      />
      <HomeStack.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          title: 'Pokemon Details',
          headerShown: true,
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#DD5E56',
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
