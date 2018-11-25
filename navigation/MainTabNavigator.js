import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import ChargersScreen from '../screens/ChargersScreen';
import RecommendScreen from '../screens/RecommendScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { Entypo } from '@expo/vector-icons';
import Colors from '../constants/Colors';


const HomeStack = createStackNavigator({
  Home: ChargersScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Charge',
  tabBarIcon: ({ focused }) => (
    <Entypo
    name={"power-plug"}
    size={26}
    style={{ marginBottom: -3 }}
    color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  ),
  tabBarOptions: {
    style: {
       backgroundColor: '#000',
    }
  }
};

const LinksStack = createStackNavigator({
  Links: RecommendScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-star${focused ? '' : '-outline'}` : 'md-star'}
    />
  ),
  tabBarOptions: {
    style: {
       backgroundColor: '#000',
    }
  }
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
  tabBarOptions: {
    style: {
       backgroundColor: '#000',
    }
  }
};

export default createBottomTabNavigator({
  LinksStack,
  HomeStack,
  SettingsStack,
});
