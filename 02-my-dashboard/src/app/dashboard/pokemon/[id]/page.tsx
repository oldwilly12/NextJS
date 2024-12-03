
interface Props {
    params: {id: string},
}

const getPokemon = async(id: string) => {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`,{
        cache: 'force-cache' // TODO: cambiar a futuro
    }).then(res => res.json());

    console.log(pokemon);
}

export default function PokemonPage({ params }: Props) {

    const pokemon = getPokemon(params.id);

  return (
    <div>
      <h1>Pokemon {params.id}</h1>
    </div>
  );
}