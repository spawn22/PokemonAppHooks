import React, { useReducer, useCallback } from "react";
import { useParams } from "react-router-dom";
import { Button, Row, Col, Card, Divider } from "antd";
import useFetchPokemonsDetails from "../hooks/useFetchPokemonsDetails";
import { getTypesStyle } from "../utils/getTypesStyle";
import { getTypeBorderColor } from "../utils/getTypeBorderColor";

const { Meta } = Card;

const initialState = {
  pokemon: null,
  isCaptured: false,
  loading: true,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        ...state,
        pokemon: action.payload,
        loading: false,
      };
    case "FETCH_ERROR":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case "CAPTURED":
      return {
        ...state,
        isCaptured: true,
      };

    default:
      return state;
  }
}

function Details() {
  const { id } = useParams();
  const [state, dispatch] = useReducer(reducer, initialState);
  const { pokemon, loading, error } = state;

  useFetchPokemonsDetails(id, dispatch);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <Button href="/">Back</Button>
      <Row justify="center" gutter={[16, 16]}>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card
            className="pokemon-card border-animation animated-border  "
            hoverable
            style={{
              width: 500,
              border: `10px solid ${getTypeBorderColor(
                pokemon.types[0].type.name
              )}`,
              animation: "border-pulse 2s infinite",
            }}
            cover={
              <img
                src={pokemon.sprites.other["official-artwork"].front_default}
                alt={pokemon.name}
              />
            }
          >
            <Meta
              title={
                pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
              }
              description={
                <span>
                  Types:{" "}
                  {pokemon.types.map((type) => (
                    <span
                      key={type.type.name}
                      className={`type-${type.type.name}`}
                      style={{
                        ...getTypesStyle(type.type.name),
                        marginRight: "5px",
                        fontSize: "1.1rem",
                        padding: "2px 5px",
                        borderRadius: "5px",
                      }}
                    >
                      {type.type.name}
                    </span>
                  ))}
                </span>
              }
            />
            <Divider />
            <p>
              <strong>Abilities:</strong>{" "}
              {pokemon.abilities.map((ability) => (
                <span key={ability.ability.name}>{ability.ability.name} </span>
              ))}
            </p>
            <p>
              <strong>Height:</strong> {pokemon.height}m
            </p>
            <p>
              <strong>Weight:</strong> {pokemon.weight}kg
            </p>
            <p>
              <strong>Stats:</strong>{" "}
              {pokemon.stats.map((stat) => (
                <span key={stat.stat.name}>
                  {stat.stat.name}: {stat.base_stat}
                  <br />
                </span>
              ))}
            </p>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Details;
