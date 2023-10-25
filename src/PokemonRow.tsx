import { Pokemon } from "./App"

type PokemonRowProps = {
  pokemon: Pokemon
}

export function PokemonRow( {pokemon}: PokemonRowProps ) {
  return (
    <>
      {console.log(pokemon)}
      <td> {pokemon.pokemon} </td>
      <td> {pokemon.type1} </td>
      <td> {pokemon.type2 ?? "none"} </td>
      <td> {pokemon.hp} </td>
      <td> {pokemon.atk} </td>
      <td> {pokemon.def} </td>
      <td> {pokemon.spa} </td>
      <td> {pokemon.spd} </td>
      <td> {pokemon.spe} </td>
    </>
  )
}
