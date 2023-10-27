import { Pokemon } from "./App"
import { PokemonRow } from "./PokemonRow"

type PokemonTableProps = {
  pokemon: Pokemon[]
}

const columns = [
  {
    key: "pokemon",
    label: "Pokemon",
  },
  {
    key: "type1",
    label: "Type 1",
  },
  {
    key: "type2",
    label: "Type 2",
  },
  {
    key: "hp",
    label: "HP",
  },
  {
    key: "atk",
    label: "Atk",
  },
  {
    key: "def",
    label: "Def",
  },
  {
    key: "spa",
    label: "SpA",
  },
  {
    key: "spd",
    label: "SpD",
  },
  {
    key: "spe",
    label: "Spe",
  },
]

export function PokemonTable( {pokemon}: PokemonTableProps ) {
  return (
    <>
      <table className="border-collapse w-9/12 mx-auto my-auto rounded-xl overflow-hidden"> 
        <thead>
          <tr className="bg-black text-white">
            {columns.map(c => {
              return(
                <th className="text-center p-2" key={c.key}>
                  {c.label}
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {pokemon.map(p => {
            return(
              <PokemonRow key={p.pokemon} pokemon={p} />
            )
          })}
        </tbody>
      </table>
    </>
  )
}
