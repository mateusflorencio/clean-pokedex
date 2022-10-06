import { Pokemon } from '@/data/models'
import { UrlPokemon } from '@/domain/models'
import { atom } from 'recoil'

export const stateInitalPage = atom({
  key: 'stateInitalPage',
  default: {
    result: [] as UrlPokemon[],
    offset: '0',
    limit: '20',
    pokemons: [] as Pokemon[],
    count: 0,
    next: '',
    previous: ''
  }
})
