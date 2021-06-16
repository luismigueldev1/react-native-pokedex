import {useEffect} from 'react';
import {useState} from 'react';
import {pokemonApi} from '../api/pokemonApi';
import {PokemonFull} from '../interfaces/pokemonInterfaces';

export const usePokemon = (id: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState<PokemonFull>({} as PokemonFull);

  const getPokemon = async () => {
    const response = await pokemonApi.get<PokemonFull>(
      `https://pokeapi.co/api/v2/pokemon/${id}`,
    );
    setPokemon(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return {
    isLoading,
    pokemon,
  };
};
