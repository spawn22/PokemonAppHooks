import React, { useState, useEffect, useMemo, useContext } from "react";
import { Row, Card, Col, Input, Empty, Button } from "antd";
import { Link } from "react-router-dom";
import useFetchPokemons from "../hooks/useFetchPokemons.js";
import Pagination from "./Pagination.jsx";
import Filter from "./Filter.jsx";
const { Meta } = Card;

function Pokemon() {
  const { loading, error, pokemons } = useFetchPokemons();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPokemons, setFilteredPokemons] = useState(pokemons);
  const [currentPage, setCurrentPage] = useState(1);
  const [isSearching, setIsSearching] = useState(false);
  



  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

 

  useEffect(() => {
    setIsSearching(true);
    const filtered = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPokemons(filtered);
    setCurrentPage(1);
    setIsSearching(false);
  }, [searchTerm, pokemons]);

  const PAGE_SIZE = 12;

  const totalPages = useMemo(() => {
    return Math.ceil(pokemons.length / PAGE_SIZE);
  }, [pokemons]);

  const updatePage = (newPage) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    if (!isSearching) {
      const PAGE_SIZE = 12;
      const start = (currentPage - 1) * PAGE_SIZE;
      const end = start + PAGE_SIZE;
      const visiblePokemons = pokemons.slice(start, end);
      setFilteredPokemons(visiblePokemons);
    }
  }, [currentPage, pokemons, PAGE_SIZE, isSearching]);

  

 

  return (
    <div>
      <Filter pokemons={pokemons} setFilteredPokemons={setFilteredPokemons} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Input
          placeholder="Search Pokemons"
          value={searchTerm}
          onChange={handleSearch}
          style={{ width: "50em", marginBottom: "50px" }}
        />
      </div>
     
      {error && <p>{error}</p>}
      {!loading && !error && (
        <Row gutter={[16, 16]}>
          {filteredPokemons.length > 0 ? (
            filteredPokemons.map((pokemon) => (
              <Col key={pokemon.id} xs={24} sm={12} md={8} lg={6}>
                <Link to={`/pokemon/${pokemon.id}`}>
                  <Card
                    hoverable
                    style={{ width: 350 }}
                    cover={<img src={pokemon.image} alt={pokemon.name} />}
                  >
                    <Meta
                      title={ pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                      description={`Types: ${pokemon.types.join(", ")}`}
                    />
                  </Card>
                </Link>
              </Col>
            ))
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "1vh",
                marginLeft: "50rem",
                marginBottom: "10rem",
                marginTop: "10rem",
              }}
            >
              <Empty
                image={Empty.PRESENTED_IMAGE_SIMPLE}
                description={
                  <span style={{ color: "red", fontSize: "24px" }}>
                    No Pokemon found
                  </span>
                }
              />
            </div>
          )}
        </Row>
      )}
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
      >
        {!searchTerm && pokemons.length > PAGE_SIZE && (
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            updatePage={setCurrentPage}
          />
        )}
      </div>
    </div>
  );
}

export default Pokemon;
