

import { PokemonGrid, PokemonGridFav, PokemonsResponse, SimplePokemon } from '@/pokemons';
import { useAppSelector } from '@/store';
import { IoHeartOutline } from 'react-icons/io5';



export const metadata = {
 title: 'Favoritos',
 description: 'Lo que sea',
};



export default async function PokemonsPage() {
      
        // del store, vamos a buscar si el pokemon es favorito con el id
        // se utiliza el simbolo !! para convertirlo en boolean
  

  return (
    <div className='flex flex-col'>

      <span className='text-5xl my-2'>Pokemons favoritos <small className='text-blue-500'>Global state</small></span>
      < PokemonGridFav />
      {/* <NoFavorites /> */}
    </div>
  );
}

