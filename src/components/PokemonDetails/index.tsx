import React from 'react';
import {ScrollView, Text, View, StyleSheet, FlatList} from 'react-native';
import {PokemonFull} from '../../interfaces/pokemonInterfaces';
import {FadeInImage} from '../FadeInImage';

interface Props {
  pokemon: PokemonFull;
}
export default function PokemonDetails({pokemon}: Props) {
  return (
    <ScrollView>
      {/* Tipos */}
      <View style={styles.container}>
        <Text style={styles.title}>Tipo:</Text>
        <View style={styles.typesRow}>
          {pokemon.types.map(({type}, index) => (
            <Text key={index} style={styles.regularText}>
              {type.name}
            </Text>
          ))}
        </View>
      </View>

      {/* Peso */}
      <View style={styles.container}>
        <Text style={styles.title}>Peso:</Text>
        <View style={styles.typesRow}>
          <Text style={styles.regularText}>{pokemon.weight}kg</Text>
        </View>
      </View>

      {/* Habilidades */}
      <View style={styles.container}>
        <Text style={styles.title}>Habilidades:</Text>
        <View style={styles.typesRow}>
          {pokemon.abilities.map(({ability}, index) => (
            <Text key={index} style={styles.regularText}>
              {ability.name}
            </Text>
          ))}
        </View>
      </View>

      {/* Sprites */}
      <View style={styles.container}>
        <Text style={styles.title}>Sprites:</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <FadeInImage
            uri={pokemon.sprites.front_default}
            style={styles.basicSprite}
          />

          <FadeInImage
            uri={pokemon.sprites.back_default}
            style={styles.basicSprite}
          />

          <FadeInImage
            uri={pokemon.sprites.front_shiny}
            style={styles.basicSprite}
          />

          <FadeInImage
            uri={pokemon.sprites.back_shiny}
            style={styles.basicSprite}
          />
        </ScrollView>
      </View>

      {/* Movimientos */}
      <View style={styles.container}>
        <Text style={styles.title}>Movimientos:</Text>
        <View style={[styles.typesRow, styles.flexWrap]}>
          {pokemon.moves.map(({move}, index) => (
            <Text key={index} style={[styles.regularText]}>
              {move.name}.
            </Text>
          ))}
        </View>
      </View>

      {/* Stats */}
      <View style={styles.container}>
        <Text style={styles.title}>Stats:</Text>
        <View>
          {pokemon.stats.map((stat, index) => (
            <View key={stat.stat.name + Math.random()} style={styles.typesRow}>
              <Text style={[styles.regularText]}>{stat.stat.name}</Text>
              <Text style={[styles.boldText]}>{stat.base_stat}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  regularText: {
    fontSize: 17,
    marginRight: 5,
  },
  typesRow: {
    flexDirection: 'row',
  },
  basicSprite: {
    height: 80,
    width: 80,
  },
  flexWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  boldText: {
    fontWeight: 'bold',
  },
});
