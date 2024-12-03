import React from 'react'
import { SimplePokemon } from '../interfaces/simple-pokemons'
import { PokemonCart } from './PokemonCart';

interface Props {
    pokemons: SimplePokemon[];
}

export const PokemonGrid = ({pokemons}: Props) => {
  return (
    <div  className='flex flex-wrap gap-10 items-center justify-center'>
      {pokemons.map(pokemon => (   
        <PokemonCart key={pokemon.id} pokemon={pokemon} />

      ))}

    </div>
  )
}
