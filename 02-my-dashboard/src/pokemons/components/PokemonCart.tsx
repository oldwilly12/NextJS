'use client'

import Link from 'next/link'
import Image from 'next/image'
import { SimplePokemon } from '../interfaces/simple-pokemons'
import { IoHeart, IoHeartOutline } from 'react-icons/io5'
import { useAppDispatch, useAppSelector } from '@/store'
import { toggleFavorite } from '@/store/pokemons/pokemons'

interface Props {
    pokemon: SimplePokemon
}

export const PokemonCart = ({ pokemon }: Props) => {

    const {id, name } = pokemon;
    // del store, vamos a buscar si el pokemon es favorito con el id
    // se utiliza el simbolo !! para convertirlo en boolean
    const isFavorite = useAppSelector(state => !!state.pokemons.favorites[id]);
    const dispatch = useAppDispatch();

    const onToggle = () => {
        dispatch(toggleFavorite(pokemon));
    }
   

    return (

        <div className="mx-auto right-0 mt-2 w-60">
            <div className="bg-white rounded overflow-hidden shadow-lg">
                <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b">
                    <Image
                        key={pokemon.id}
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                        width={100} height={100}
                        alt={pokemon.name}
                        priority= { false}  />
                    <p className="pt-2 text-lg font-semibold text-gray-50">{pokemon.name}</p>
                    <div className="mt-5">
                        <Link
                            href={`pokemons/${name}`}
                            className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
                        >
                            Saber mas
                        </Link>
                    </div>
                </div>
                <div className="border-b">
                    <div  
                    onClick={ onToggle }
                    className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer">
                        <div className="text-red-600">
                            {
                                isFavorite
                                    ? (<IoHeart />)
                                    : (<IoHeartOutline />)
                            }
                        </div>
                        <div className="pl-3">
                            <p className="text-sm font-medium text-gray-800 leading-none">
                                {
                                    isFavorite
                                        ? 'Es Favorito'
                                        : 'No es Favorito'
                                }
                            </p>
                            <p className="text-xs text-gray-500">Click para cambiar</p>
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>

    )
}
