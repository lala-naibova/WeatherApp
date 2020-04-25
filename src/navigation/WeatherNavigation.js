import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../screens/Home'
import Search from '../screens/Search'

const BottomTab = createBottomTabNavigator()

const getTabIcon =(label, iconName)=>{
   return {
        tabBarLabel: label,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name={iconName} color={color} size={size} />
        ),
      }
}

const WeatherNavigation = () => {
    return (
        <NavigationContainer>
            <BottomTab.Navigator
                tabBarOptions={{
                    activeTintColor: '#6200ee',
                }}>
                <BottomTab.Screen 
                initialParams={ {city:'sheki'} }
                name='home' 
                component={ Home }
                options={ getTabIcon('Home','home') }/>
                <BottomTab.Screen 
                name='search' 
                component={ Search }
                options={ getTabIcon('Search','cloud-search') }/>
            </BottomTab.Navigator>
        </NavigationContainer>
    );
}

export default WeatherNavigation;
