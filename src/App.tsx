import { useState, useEffect } from "react"
import axios from "axios"
import { PokemonTable } from "./PokemonTable"

export type Pokemon = {
  pokemon: string
  type1: string
  type2?: string
  hp: number
  atk: number
  def: number
  spa: number
  spd: number
  spe: number
}

function App() {
  const pokemonStart: number = 1
  const pokemonEnd: number = 9
  const [pokemon, setPokemon] = useState<Pokemon[]>([])

  useEffect(() => {
    const getPokemon = async () => {
      const promises = []

      for (let i = pokemonStart; i <= pokemonEnd; i++) {
        const promise = axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
        promises.push(promise)
      }

      try {
        const responses = await Promise.all(promises)
        const pokemonList: Pokemon[] = []

        responses.forEach((response) => {
          const data = response.data

          const pokemonInfo: Pokemon = {
            pokemon: data.name,
            type1: data.types[0].type.name,
            type2: data.types[1] ? data.types[1].type.name : undefined,
            hp: data.stats[0].base_stat,
            atk: data.stats[1].base_stat,
            def: data.stats[2].base_stat,
            spa: data.stats[3].base_stat,
            spd: data.stats[4].base_stat,
            spe: data.stats[5].base_stat,
          }

          pokemonList.push(pokemonInfo)
        })

        setPokemon(pokemonList)
      } catch (error) {
        console.log("Error fetching Pokemon data", error)
      }
    }

    getPokemon()
  }, [])

  return (
    <>
      <div className = "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-screen flex flex-col items-center justify-center">
        <h1 className = "text-center text-gray-800 font-sans text-6xl p-4"> Pokedex </h1>
        <PokemonTable pokemon = {pokemon}/>
      </div>
    </>
  )
}

export default App
