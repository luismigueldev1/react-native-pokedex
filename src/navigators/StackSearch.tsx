import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SimplePokemon} from '../interfaces/pokemonInterfaces';
import PokemonScreen from '../screens/Pokemon';
import SearchScreen from '../screens/SearchScreen';

export type RootStackParamList = {
  SearchScreen: undefined;
  PokemonScreen: {
    simplePokemon: SimplePokemon;
    color: string;
  };
};

const Stack = createStackNavigator();

export function StackSearch() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="PokemonScreen" component={PokemonScreen} />
    </Stack.Navigator>
  );
}
