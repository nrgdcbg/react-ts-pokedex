import { Pokemon } from "./App"

type PokemonRowProps = {
  pokemon: Pokemon
}

export function PokemonRow( {pokemon}: PokemonRowProps ) {
  return (
    <>
      <tr className = "odd:bg-zinc-200 even:bg-white">
        {Object.keys(pokemon).map(key => {
          return(
            <td className = "border-2 border-solid border-zinc-300 text-center p-2" key = {`${pokemon.pokemon}-${key}`}> {pokemon[key as keyof Pokemon] ?? "none"} </td>
          )
        })}
      </tr>
    </>
  )
}
