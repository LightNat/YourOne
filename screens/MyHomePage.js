import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import Discover from '../screens/Tabs/Discover.js'
import Preachings from './Tabs/Preachings.js';
import Home from './Tabs/Home.js';
import BibleBook from './Tabs/Bible.js';
import HamburgerMenu from './Tabs/Menu.js';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName='Home'>
      <Tab.Screen 
      name="Discover" 
      component={Discover} 
      options={{
          headerLeft: () => (
            false
          ),
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" color={color} size={30} />
          ),
          tabBarActiveTintColor: 'rgb(107, 65, 152)'
      }}
      />
      <Tab.Screen 
      name="Preachings" 
      component={Preachings} 
      options={{
        headerLeft: () => (
          false
        ),
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ color, size }) => (
          <FontAwesome5 name="leaf" color={color} size={26} />
        ),
        tabBarActiveTintColor: 'rgb(107, 65, 152)'
      }}
      />
      <Tab.Screen 
      name="Home" 
      component={Home} 
      options={{
        headerLeft: () => (
          false
        ),
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home-sharp" color={color} size={40} />
        ),
        tabBarActiveTintColor: 'rgb(107, 65, 152)'
      }}
      />
      <Tab.Screen 
      name="BibleBook" 
      component={BibleBook} 
      options={{
        headerLeft: () => (
          false
        ),
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ color, size }) => (
          <FontAwesome5 name="bible" color={color} size={size} />
        ),
        tabBarActiveTintColor: 'rgb(107, 65, 152)'
      }}
      />
      <Tab.Screen 
      name="HamburgerMenu" 
      component={HamburgerMenu} 
      options={{
        headerLeft: () => (
          false
        ),
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="menu" color={color} size={36} />
        ),
        tabBarActiveTintColor: 'rgb(107, 65, 152)'
      }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs