import React, { useState, useEffect } from "react";
import { Select } from "antd";

const { Option } = Select;

function Filter({ pokemons, setFilteredPokemons }) {
  const [selectedType, setSelectedType] = useState("");

  const handleSelectType = (value) => {
    setSelectedType(value);
  };

  useEffect(() => {
    if (selectedType === "all") {
      setFilteredPokemons(pokemons);
    } else {
      const filtered = pokemons.filter((pokemon) =>
        pokemon.types.includes(selectedType)
      );
      setFilteredPokemons(filtered);
    }
  }, [selectedType, pokemons, setFilteredPokemons]);

  const types = [
    "all",
    "normal",
    "fighting",
    "flying",
    "poison",
    "ground",
    "rock",
    "bug",
    "ghost",
    "steel",
    "fire",
    "water",
    "grass",
    "electric",
    "psychic",
    "ice",
    "dragon",
    "dark",
    "fairy",
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        marginBottom: "10px",
      }}
    >
      <Select
        defaultValue="all"
        style={{ width: 120 }}
        onChange={handleSelectType}
      >
        {types.map((type) => (
          <Option key={type} value={type}>
            {type}
          </Option>
        ))}
      </Select>
    </div>
  );
}

export default Filter;
