'use client'

import type { FC } from 'react'
import React from 'react'
import styled from 'styled-components'
import { FiChevronDown, FiFilter, FiTool } from 'react-icons/fi'

const SearchFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

const SearchTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
  margin: 0;
`

const StyledSelectContainer = styled.div`
  position: relative;
  width: 150px;

  @media (max-width: 768px) {
    width: 100%;
  }
`

const StyledSelect = styled.select`
  width: 100%;
  padding: 8px 32px 8px 40px;
  border-radius: 8px;
  background-color: #2c2c2c;
  color: #ffffff;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  border: none;
  outline: none;
  appearance: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #3a3a3a;
  }

  option {
    background-color: #2c2c2c;
    color: #ffffff;
  }
`

const DropdownIcon = styled(FiChevronDown)`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: #888888;
`

const SearchForm = styled.div`
  display: flex;
  gap: 15px;
  padding: 15px 0;
  border-radius: 8px;
  align-items: center;
  flex-wrap: wrap;

  input,
  button {
    height: 36px;
    padding: 0 12px;
    font-size: 14px;
    border: none;
    border-radius: 8px;
    background-color: #3a3a3a;
    color: #ffffff;
    font-family: 'Poppins', sans-serif;
    outline: none;
    transition: background-color 0.3s;
  }

  input::placeholder {
    color: #888888;
  }

  input:focus,
  select:focus {
    background-color: #555555;
  }

  button {
    background-color: #7289da;
    cursor: pointer;
    &:hover {
      background-color: #5b6da6;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    width: 100%;

    input,
    button,
    ${StyledSelectContainer} {
      width: 100%;
    }
  }
`

const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
  margin-top: 10px;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

const Card = styled.div<{ bgColor?: string }>`
  position: relative;
  padding: 16px;
  border-radius: 8px;
  color: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  background-color: ${(props) => props.bgColor || '#333333'};
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 600px) {
    padding: 12px;
  }
`

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 1;
`

const PokemonImageContainer = styled.div<{ shapeColor: string }>`
  position: absolute;
  top: -10px;
  right: -10px;
  width: 130px;
  height: 130px;
  background-color: ${(props) => props.shapeColor || '#444444'};
  border-bottom-left-radius: 60px;
  border-top-left-radius: 60px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`

const PokemonImage = styled.img`
  width: 110px;
  height: 110px;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 90px;
    height: 90px;
  }
`

const PokemonName = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
`

const TypeBadge = styled.span`
  display: inline-block;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
  color: #ffffff;
  background-color: ${(props) => props.color || '#666666'};
  margin-top: 4px;
  width: fit-content;
`

const Dashboard: FC = () => {
  const pokemonData = [
    {
      id: 1,
      name: 'Bulbasaur',
      type: 'Grass',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      bgColor: '#78C850',
      shapeColor: '#98D850',
      typeColor: '#4CAF50',
    },
    {
      id: 2,
      name: 'Charmander',
      type: 'Fire',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
      bgColor: '#F08030',
      shapeColor: '#FFA346',
      typeColor: '#FF7043',
    },
    {
      id: 3,
      name: 'Squirtle',
      type: 'Water',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
      bgColor: '#6890F0',
      shapeColor: '#8AA8F5',
      typeColor: '#42A5F5',
    },
    {
      id: 4,
      name: 'Pikachu',
      type: 'Electric',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
      bgColor: '#F8D030',
      shapeColor: '#FFEA70',
      typeColor: '#FFD700',
    },
    {
      id: 5,
      name: 'Jigglypuff',
      type: 'Fairy',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png',
      bgColor: '#F4BDC9',
      shapeColor: '#F7CAD0',
      typeColor: '#FFB6C1',
    },
  ]

  return (
    <>
      <SearchFormContainer>
        <SearchTitle>Find Your Pokemon</SearchTitle>
        <SearchForm>
          <input type="text" placeholder="Search your pokemon" />
          <StyledSelectContainer>
            <FiFilter
              style={{
                position: 'absolute',
                left: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#9bb1c8',
              }}
            />
            <StyledSelect>
              <option value="">Type</option>
              <option value="fire">Fire</option>
              <option value="water">Water</option>
              <option value="grass">Grass</option>
              <option value="electric">Electric</option>
            </StyledSelect>
            <DropdownIcon size={16} />
          </StyledSelectContainer>
          <StyledSelectContainer>
            <FiTool
              style={{
                position: 'absolute',
                left: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#9bb1c8',
              }}
            />
            <StyledSelect>
              <option value="">Ability</option>
              <option value="overgrow">Overgrow</option>
              <option value="blaze">Blaze</option>
              <option value="torrent">Torrent</option>
            </StyledSelect>
            <DropdownIcon size={16} />
          </StyledSelectContainer>
          <button>Search</button>
        </SearchForm>
      </SearchFormContainer>
      <CardList>
        {pokemonData.map((pokemon) => (
          <Card key={pokemon.id} bgColor={pokemon.bgColor}>
            <CardInfo>
              <TypeBadge color={pokemon.typeColor}>{pokemon.type}</TypeBadge>
              <PokemonName>{pokemon.name}</PokemonName>
            </CardInfo>
            <PokemonImageContainer shapeColor={pokemon.shapeColor}>
              <PokemonImage src={pokemon.image} alt={pokemon.name} />
            </PokemonImageContainer>
          </Card>
        ))}
      </CardList>
    </>
  )
}

export default Dashboard
