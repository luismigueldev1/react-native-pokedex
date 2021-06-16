import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import PokemonCard from '../../components/PokemonCard';
import {usePokemonPaginated} from '../../hooks/usePokemonPaginated';
import {theme} from '../../theme/appTheme';

export default function HomeScreen() {
  const {simplePokemonList, getPokemons} = usePokemonPaginated();

  return (
    <SafeAreaView>
      <Image
        source={require('../../assets/pokebola.png')}
        style={styles.pokeballBG}
      />

      <FlatList
        data={simplePokemonList}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.flatList}
        renderItem={({item}) => <PokemonCard pokemon={item} />}
        //Header
        ListHeaderComponent={() => (
          <View style={theme.globalMargin}>
            <Text style={styles.title}>Pokedex</Text>
          </View>
        )}
        //Infinite Scroll
        onEndReached={getPokemons}
        onEndReachedThreshold={0.4}
        //Bottom ActivityIndicator
        ListFooterComponent={<ActivityIndicator size="large" color="black" />}
      />

      <View />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  pokeballBG: {
    position: 'absolute',
    top: -100,
    right: -100,
    width: 300,
    height: 300,
    opacity: 0.2,
  },
  title: {
    paddingVertical: 20,
    fontSize: 35,
    fontWeight: 'bold',
  },
  flatList: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
