import { Pokemon } from '@/data/models'
import { atom } from 'recoil'

export const listPokemonState = atom({
  key: 'listPokemonState',
  default: {
    pokemons: [] as Pokemon[]
  }
})