import { Pokemon } from "./App"
import { PokemonRow } from "./PokemonRow"
import { useState } from "react"

type PokemonTableProps = {
  pokemon: Pokemon[]
}

type SortConfig = {
  key: string | null;
  direction: "ascending" | "descending"
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
  const [sortConfig, setSortConfig] = useState<SortConfig>({ key: null, direction: "ascending" })

  const handleSort = (key: string) => {
    let direction: "ascending" | "descending" = "ascending"

    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending"
    }
    setSortConfig({ key, direction })
  }

  const sorted = [...pokemon].sort((a, b) => {
    if (!sortConfig.key) return 0

    const x = a[sortConfig.key as keyof Pokemon]
    const y = b[sortConfig.key as keyof Pokemon]

    if (x === "none" && y !== "none") return 1
    if (x !== "none" && y === "none") return -1  

    if (x < y) return sortConfig.direction === "ascending" ? -1 : 1
    if (x > y) return sortConfig.direction === "ascending" ? 1 : -1

    return 0
  })

  return (
    <>
      <table className="border-collapse w-9/12 mx-auto my-2 rounded-xl overflow-hidden"> 
        <thead>
          <tr className="bg-black text-white">
            {columns.map(c => {
              return(
                <th className="text-center p-2" key={c.key} onClick={() => handleSort(c.key)}>
                  {c.label}
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {sorted.map(p => {
            return(
              <PokemonRow key={p.pokemon} pokemon={p} />
            )
          })}
        </tbody>
      </table>
    </>
  )
}