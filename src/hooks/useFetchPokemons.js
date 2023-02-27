import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchPokemons = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=100')
      .then((response) => {
        const results = response.data.results;
        const pokemonPromises = results.map((result, index) => {
          return axios.get(result.url).then(pokemonResponse => {
            const pokemonData = pokemonResponse.data;
            return {
              id: pokemonData.id,
              name: pokemonData.name,
              image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
              types: pokemonData.types.map(typeObj => typeObj.type.name),
            };
          });
        });
        Promise.all(pokemonPromises).then(pokemonList => {
          setPokemons(pokemonList);
          setLoading(false);
        });
      })
      .catch((error) => {
        console.log(error);
        setError('Error fetching pokemons');
        setLoading(false);
      });
  }, []);

  return { loading, error, pokemons };
};

export default useFetchPokemons;