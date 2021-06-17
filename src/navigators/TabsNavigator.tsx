import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {StackPokemon} from './StackPokemon';
import {StackSearch} from './StackSearch';

const Tab = createBottomTabNavigator();

export function TabsNavigator() {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      tabBarOptions={{
        activeTintColor: '#5856D6',
        style: {
          borderTopColor: 'white',
          elevation: 0,
          borderWidth: 0,
        },
        labelStyle: {
          fontSize: 12,
        },
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={StackPokemon}
        options={{
          tabBarLabel: 'Listado',
          tabBarIcon: ({color}) => (
            <Icon name="list-outline" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={StackSearch}
        options={{
          tabBarLabel: 'Buscar',
          tabBarIcon: ({color}) => (
            <Icon name="search-outline" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
