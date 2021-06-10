import { useState } from "react";

import CardPokemon from "../components/CardPokemon";
import ErrorMessage from "../components/ErrorMessage";
import ModalInfo from "../components/ModalInfo";
import SearchBar from "../components/SearchBar";
import Spinner from "../components/Spinner";

import * as S from "./styles";

export default function Home({ pokemons }) {
  const [filtered, setFiltered] = useState<string[]>(pokemons);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleSearch = async (value) => {
    setIsLoading(true);
    const filtered = pokemons.filter((pokemon) => {
      return pokemon.name.includes(value);
    });

    setFiltered(filtered);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <S.HomeContainer>
      <button onClick={handleOpenModal}>Abre</button>
      {isModalOpen && (
        <ModalInfo modalIsOpen={isModalOpen} closeModal={handleCloseModal} />
      )}
      <SearchBar onSearch={handleSearch} />
      {isLoading ? <Spinner /> : <CardPokemon pokemons={filtered} />}
      {!isLoading && filtered.length === 0 && <ErrorMessage />}
    </S.HomeContainer>
  );
}

export const getStaticProps = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon");
  const data = await response.json();
  const { results } = data;

  let pokemons = [];

  for (let pokeInfo of results) {
    let response: any = await fetch(pokeInfo.url);
    response = await response.json();

    let { sprites, types } = response;

    pokemons.push({ ...pokeInfo, sprites, types });
  }

  return {
    props: {
      pokemons,
    },
  };
};
