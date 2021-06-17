import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Dimensions,
  View,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {FadeInImage} from '../../components/FadeInImage';
import {RootStackParamList} from '../../navigators/StackPokemon';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {usePokemon} from '../../hooks/usePokemon';
import PokemonDetails from '../../components/PokemonDetails';

const {height: windowHeight, width: windowWidth} = Dimensions.get('window');

interface Props extends StackScreenProps<RootStackParamList, 'PokemonScreen'> {}
export default function PokemonScreen({route, navigation}: Props) {
  const {simplePokemon, color} = route.params;
  const {top} = useSafeAreaInsets();
  const {isLoading, pokemon} = usePokemon(simplePokemon.id);
  return (
    <SafeAreaView style={styles.container}>
      <View style={{...styles.hero, backgroundColor: color}}>
        <TouchableOpacity
          style={{...styles.buttonContainer, top: top + 10}}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-back-outline" size={30} color="black" />
        </TouchableOpacity>
        <View style={styles.containerPokemon}>
          <Text style={styles.pokemonName}>
            {simplePokemon.name + '\n#'}
            {simplePokemon.id}
          </Text>
          <Image
            source={require('../../assets/pokebola-blanca.png')}
            style={styles.pokeball}
          />
          <FadeInImage
            uri={simplePokemon.picture}
            style={styles.pokemonImage}
          />
        </View>
      </View>

      {/* Detalles y Loading */}
      <View style={styles.pokemonInfo}>
        {isLoading ? (
          <ActivityIndicator size="large" color={color} />
        ) : (
          <PokemonDetails pokemon={pokemon} />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 0,
    paddingBottom: 0,
  },
  hero: {
    height: windowHeight * 0.5,
    zIndex: 999,
    borderBottomLeftRadius: 1000,
    borderBottomRightRadius: 1000,
  },
  buttonContainer: {
    padding: 4,
    backgroundColor: 'white',
    position: 'absolute',
    left: 10,
    borderRadius: 100,
  },
  containerPokemon: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pokemonName: {
    fontSize: 40,
    textAlign: 'center',
    color: 'white',
  },
  pokeball: {
    width: windowWidth * 0.55,
    height: windowWidth * 0.55,
    opacity: 0.7,
    bottom: -10,
  },

  pokemonImage: {
    width: windowWidth * 0.5,
    height: windowWidth * 0.5,
    position: 'absolute',
    bottom: -10,
  },
  pokemonInfo: {
    flex: 1,
    paddingTop: 20,
  },
});
