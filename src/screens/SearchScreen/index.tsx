import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  FlatList,
  Keyboard,
  TouchableWithoutFeedback,
  Text,
  ScrollView,
} from 'react-native';
import PokemonCard from '../../components/PokemonCard';
import SearchInput from '../../components/SearchInput';
import {usePokemonSearch} from '../../hooks/usePokemonSearch';
import Loader from '../../components/Loader';
import {SimplePokemon} from '../../interfaces/pokemonInterfaces';
import {useEffect} from 'react';

export default function SearchScreen() {
  const {isFetching, simplePokemonList} = usePokemonSearch();
  const [term, setTerm] = useState('');
  const [pokemonFiltered, setPokemonFiltered] = useState<SimplePokemon[]>([]);

  useEffect(() => {
    if (term.length === 0) {
      return setPokemonFiltered([]);
    }

    if (isNaN(Number(term))) {
      setPokemonFiltered(
        simplePokemonList.filter(pokemon =>
          pokemon.name.toLowerCase().includes(term.toLowerCase()),
        ),
      );
    } else {
      const pokemonById = simplePokemonList.find(
        pokemon => pokemon.id === term,
      );
      setPokemonFiltered(pokemonById ? [pokemonById] : []);
    }
  }, [term]);

  if (isFetching) {
    return <Loader />;
  }
  return (
    <SafeAreaView>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <View style={styles.container}>
              <SearchInput onDebounce={value => setTerm(value)} />
            </View>

            <FlatList
              data={pokemonFiltered}
              keyExtractor={item => item.id}
              numColumns={2}
              contentContainerStyle={styles.flatList}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => <PokemonCard pokemon={item} />}
              //Header
              ListHeaderComponent={() => (
                <View>
                  <Text style={styles.title}>{term}</Text>
                </View>
              )}
              //Infinite Scroll
              //onEndReached={() => {}}
              //onEndReachedThreshold={0.4}
              //Bottom ActivityIndicator
              //ListFooterComponent={<ActivityIndicator size="large" color="black" />}
            />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    marginBottom: 50,
  },
  title: {
    paddingBottom: 10,
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'left',
  },

  flatList: {
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
