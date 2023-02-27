import { useState, useEffect } from "react";
import axios from "axios";

function useFetchPokemonsDetails(id, dispatch) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${id}`
        );
        dispatch({
          type: "FETCH_SUCCESS",
          payload: response.data,
        });
        setLoading(false);
      } catch (error) {
        dispatch({
          type: "FETCH_ERROR",
          payload: error.message,
        });
        setLoading(false);
      }
    };

    fetchPokemonDetails();
  }, [id, dispatch]);

  return { loading, error, pokemonDetails };
}

export default useFetchPokemonsDetails;