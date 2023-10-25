import { Pokemon } from "./App"
import { PokemonRow } from "./PokemonRow"
import "./PokemonTable.css"

type PokemonTableProps = {
  pokemon: Pokemon[]
}

export function PokemonTable( {pokemon}: PokemonTableProps ) {
  return (
    <>
      <table> 
        <thead>
          <tr>
            <th>Pokemon</th>
            <th>Type 1</th>
            <th>Type 2</th>
            <th>HP</th>
            <th>Atk</th>
            <th>Def</th>
            <th>SpA</th>
            <th>SpD</th>
            <th>Spe</th>
          </tr>
        </thead>
        <tbody>
          {pokemon.map(p => {
            return(
              <tr key = {p.pokemon}>
                <PokemonRow pokemon = {p} />
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}
