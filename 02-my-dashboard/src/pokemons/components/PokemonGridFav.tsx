'use client'

import { useState } from 'react';
import { PokemonGrid } from './PokemonGrid';
import { useAppSelector } from '@/store';
import { IoHeartOutline } from 'react-icons/io5';

export const PokemonGridFav = () => {

  const pokemonsFav = useAppSelector(state => Object.values(state.pokemons));
  //El use state le da el valor inicial que seria el pokemonsFav pero aun con cambio no se afectara
  const [pokemons, setPokemons] = useState(pokemonsFav);

  // const keys = Object.values(pokemonsFav).map(key => {
  //   return key
  // })
  

  return (
    //<PokemonGrid pokemons={ pokemonsFav } />
    // <PokemonGrid pokemons={ pokemons } />

    <>
    {
      pokemons.length === 0
      ? (<NoFavorites />)
      : (<PokemonGrid pokemons={ pokemons } />)
    }
    </>

  )
}

export const NoFavorites = () => {
  return (
    <div className='flex flex-col h-[50vh] justify-center items-center'>
      <IoHeartOutline size={100} className='text-red-500'/>
      <span>No hay favoritos</span>
    </div>
  )
}